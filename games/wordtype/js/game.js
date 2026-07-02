/**
 * Game Module - Main Game Controller
 * 
 * This is the central orchestrator that initializes all modules,
 * handles game flow, scoring, combos, hearts, boss fights,
 * level progression, and coordinates between UI, Audio, Storage,
 * LevelManager, and BossManager.
 */
class Game {
  constructor() {
    /** Game identifier for per-game storage */
    this.GAME_ID = 'wordtype';

    this.ui = new UIManager();
    this.audio = new AudioManager();
    this.levelManager = new LevelManager();
    this.bossManager = new BossManager();

    this.hearts = 5;
    this.maxHearts = 5;
    this.xp = 0;
    this.currentLevel = 1;
    this.combo = 0;
    this.questionNumber = 0;
    this.totalQuestionsInLevel = 0;
    this.streak = 0;
    this.isPlaying = false;
    this.isBossFight = false;
    this.isAnswering = false;

    this.xpPerCorrect = 10;
    this.xpPerWrong = -5;
    this.comboBonus5 = 5;
    this.comboBonus10 = 15;
    this.comboBonus20 = 30;
    this.bossDefeatXp = 100;
    this.nextLevelXp = 200;

    this.dataLoaded = false;
  }

  // PWA Haptic Feedback - provides vibration on supported devices
  _haptic(type = 'light') {
    if ('vibrate' in navigator) {
      switch (type) {
        case 'light': navigator.vibrate(10); break;   // Button press
        case 'medium': navigator.vibrate(25); break;  // Correct answer
        case 'heavy': navigator.vibrate(50); break;   // Wrong answer / boss hit
        case 'success': navigator.vibrate([20, 50, 20]); break; // Victory
        case 'error': navigator.vibrate([50, 30, 50]); break;  // Game over
      }
    }
  }

  async init() {
    try {
      // Start analytics session
      Analytics.startSession();
      Analytics.trackEvent('page_view', { page: 'wordtype_game' });

      // Load saved Sheets URL from localStorage
      const savedUrl = localStorage.getItem('gameenglish_sheets_url');
      if (savedUrl) {
        Analytics.SHEETS_WEB_APP_URL = savedUrl;
      }

      document.querySelector('.btn-primary').textContent = 'Loading...';
      await Promise.all([
        this.levelManager.loadAllLevels(),
        this.bossManager.loadBossData()
      ]);
      this.dataLoaded = true;

      const stats = Storage.load(this.GAME_ID);
      this.xp = stats.xp;
      this.currentLevel = stats.currentLevel;
      this.streak = stats.currentStreak || 0;

      this.ui.updateMenu(stats);
      this.ui.renderStats(stats);
      this.ui.renderLevels(this.levelManager, stats);

      const playBtn = document.getElementById('btn-play');
      if (playBtn) playBtn.textContent = '▶ PLAY';

      this._setupEventListeners();

      const resumeAudio = () => {
        this.audio.init();
        this.audio.resume();
        document.removeEventListener('click', resumeAudio);
        document.removeEventListener('touchstart', resumeAudio);
      };
      document.addEventListener('click', resumeAudio);
      document.addEventListener('touchstart', resumeAudio);

      // Log progress when page is closed/refreshed
      window.addEventListener('beforeunload', () => {
        Analytics.logCurrentProgress(this.GAME_ID);
      });

      console.log('Game initialized successfully');
    } catch (e) {
      console.error('Failed to initialize game:', e);
      document.querySelector('.btn-primary').textContent = '⚠️ Error Loading';
    }
  }

  _setupEventListeners() {
    document.getElementById('btn-play').addEventListener('click', () => { this._haptic('light'); this._startLevel(this.currentLevel); });
    document.getElementById('btn-levels').addEventListener('click', () => this._showLevelsScreen());
    document.getElementById('btn-stats').addEventListener('click', () => this._showStatsScreen());
    document.getElementById('btn-levels-back').addEventListener('click', () => this._showMenu());
    document.getElementById('btn-stats-back').addEventListener('click', () => this._showMenu());
    document.getElementById('btn-reset-stats').addEventListener('click', () => this._resetStats());

    this.ui.answerButtons.forEach(btn => {
      btn.addEventListener('click', (e) => { this._haptic('light'); this._handleAnswer(e.currentTarget.dataset.type); });
    });

    document.addEventListener('ui:bossAnswer', (e) => { this._haptic('light'); this._handleBossAnswer(e.detail.answer); });
    document.addEventListener('ui:playLevel', (e) => this._startLevel(e.detail.level));

    document.getElementById('btn-next-level').addEventListener('click', () => this._goToNextLevel());
    document.getElementById('btn-continue-same-level').addEventListener('click', () => this._startLevel(this.currentLevel));
    document.getElementById('btn-back-to-menu').addEventListener('click', () => this._showMenu());
    document.getElementById('btn-continue-after-boss').addEventListener('click', () => this._continueAfterBoss());
    document.getElementById('btn-retry').addEventListener('click', () => this._startLevel(this.currentLevel));
    document.getElementById('btn-gameover-menu').addEventListener('click', () => this._showMenu());

    document.getElementById('btn-users').addEventListener('click', () => this._showUserScreen());
    document.getElementById('btn-users-back').addEventListener('click', () => this._showMenu());
    document.getElementById('btn-user-menu').addEventListener('click', () => this._showUserScreen());
    document.getElementById('btn-create-user').addEventListener('click', () => this._createUser());

    // Back to Hub
    document.getElementById('btn-back-to-hub').addEventListener('click', () => {
      Analytics.logCurrentProgress(this.GAME_ID);
      window.location.href = '../../index.html';
    });

    // Difficulty selector
    document.querySelectorAll('.btn-difficulty').forEach(btn => {
      btn.addEventListener('click', () => {
        this.audio.playClick();
        this._setDifficulty(btn.dataset.difficulty);
      });
    });

    // Speak button (pronunciation)
    document.getElementById('btn-speak').addEventListener('click', () => {
      if (this._currentWord && this._currentWord.word) {
        this.audio.speakWord(this._currentWord.word);
      }
    });
  }

  _showMenu() {
    this.isPlaying = false;
    // Save current game state before returning to menu
    const stats = Storage.load(this.GAME_ID);
    if (this.xp > 0 || stats.xp > 0) {
      stats.xp = this.xp;
      stats.currentStreak = this.streak;
      if (this.streak > stats.maxStreak) {
        stats.maxStreak = this.streak;
      }
      Storage.save(stats, this.GAME_ID);
    }
    const updatedStats = Storage.load(this.GAME_ID);
    this.ui.updateMenu(updatedStats);
    this.ui.showScreen('menu');

    // Log progress when exiting to menu
    Analytics.logCurrentProgress(this.GAME_ID);
  }

  _showLevelsScreen() {
    const stats = Storage.load(this.GAME_ID);
    this.ui.renderLevels(this.levelManager, stats);
    this.ui.showScreen('levels');
  }

  _showStatsScreen() {
    const stats = Storage.load(this.GAME_ID);
    this.ui.renderStats(stats);
    this.ui.showScreen('stats');
  }

  _resetStats() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      Storage.reset(this.GAME_ID);
      const stats = Storage.load(this.GAME_ID);
      this.xp = stats.xp;
      this.currentLevel = stats.currentLevel;
      this.streak = 0;
      this.combo = 0;
      this.hearts = 5;
      this.ui.updateMenu(stats);
      this.ui.renderStats(stats);
    }
  }

  _startLevel(level) {
    if (!this.dataLoaded) return;
    if (!Storage.isLevelUnlocked(level, this.GAME_ID)) {
      alert('This level is not unlocked yet!');
      return;
    }

    this.isPlaying = true;
    this.isBossFight = false;
    this.isAnswering = false;
    this.currentLevel = level;
    this.questionNumber = 0;
    this.combo = 0;
    this.hearts = this.maxHearts;
    this.totalQuestionsInLevel = this.levelManager.getQuestionCount();

    this.levelManager.setLevel(level, true);

    // Sync difficulty to bossManager
    this.bossManager.setDifficulty(this.levelManager.currentDifficulty);

    // Track game start
    Analytics.trackEvent('game_start', {
      game_id: this.GAME_ID,
      level: level,
      difficulty: this.levelManager.currentDifficulty
    });

    this.ui.showScreen('game');
    this.ui.updateHearts(this.hearts);
    this.ui.updateLevelBadge(level);
    this.ui.updateCombo(0);
    this.ui.updateQuestionCounter(0, this.totalQuestionsInLevel);
    this._updateXpUI();
    this.ui.resetAnswerButtons();

    this._nextQuestion();
  }

  _nextQuestion() {
    if (!this.isPlaying) return;

    this.questionNumber++;
    if (this.questionNumber > this.totalQuestionsInLevel) {
      // All regular questions done — start the boss fight as the final challenge
      this._startBossFight();
      return;
    }

    const word = this.levelManager.getNextWord();
    if (!word) {
      // No more words — start the boss fight
      this._startBossFight();
      return;
    }

    this.ui.displayWord(word);
    this.ui.updateQuestionCounter(this.questionNumber, this.totalQuestionsInLevel);
    this.ui.resetAnswerButtons();
    this.isAnswering = false;
    this._currentWord = word;
  }

  async _handleAnswer(selectedType) {
    if (this.isAnswering || !this.isPlaying || !this._currentWord) return;
    this.isAnswering = true;
    this.ui.disableAnswerButtons();

    const correctType = this._currentWord.type;
    const isCorrect = selectedType === correctType;

    this.ui.showAnswerFeedback(selectedType, correctType);

    const stats = Storage.load(this.GAME_ID);
    stats.totalQuestions++;

    if (isCorrect) {
      await this._handleCorrectAnswer(stats);
    } else {
      await this._handleWrongAnswer(stats);
    }

    // Calculate accuracy directly on the current stats object
    const totalQ = stats.totalQuestions || 1;
    stats.accuracy = Math.round((stats.totalCorrect / totalQ) * 100);
    Storage.save(stats, this.GAME_ID);

    this.ui.updateHearts(this.hearts);
    this._updateXpUI();

    if (this.hearts <= 0) {
      this.isPlaying = false;
      Storage.updateHighestCombo(this.GAME_ID);
      stats.highestCombo = Math.max(stats.highestCombo, stats.currentStreak);
      Storage.save(Storage.load(this.GAME_ID), this.GAME_ID);
      this.audio.playGameOver();
      this.ui.showGameOver(Storage.load(this.GAME_ID));
      return;
    }

    // Feedback waits for OK button click, then proceed
    this._nextQuestion();
  }

  async _handleCorrectAnswer(stats) {
    this.audio.playCorrect();

    this.xp += this.xpPerCorrect;
    stats.xp = this.xp;
    this.streak++;
    stats.currentStreak = this.streak;
    stats.totalCorrect++;
    stats.wordsLearned++;
    this.combo = this.streak;

    // Update max streak in storage immediately
    if (this.streak > stats.maxStreak) {
      stats.maxStreak = this.streak;
    }

    let bonusXp = 0;
    if (this.streak === 5) {
      bonusXp = this.comboBonus5;
      this.audio.playCombo(5);
      this.ui.showComboPopup(5, bonusXp);
    } else if (this.streak === 10) {
      bonusXp = this.comboBonus10;
      this.audio.playCombo(10);
      this.ui.showComboPopup(10, bonusXp);
    } else if (this.streak === 20) {
      bonusXp = this.comboBonus20;
      this.audio.playCombo(20);
      this.ui.showComboPopup(20, bonusXp);
    }

    if (bonusXp > 0) {
      this.xp += bonusXp;
      stats.xp = this.xp;
    }

    const detail = `+${this.xpPerCorrect} XP${bonusXp > 0 ? ` (Combo +${bonusXp})` : ''}`;
    await this.ui.showFeedback(true, detail, this._currentWord);
    this.ui.showXpGain(this.xpPerCorrect + bonusXp);

    if (this.streak > stats.highestCombo) {
      stats.highestCombo = this.streak;
    }
    this.ui.updateCombo(this.combo);
  }

  async _handleWrongAnswer(stats) {
    this.audio.playWrong();

    this.xp = Math.max(0, this.xp + this.xpPerWrong);
    stats.xp = this.xp;
    this.streak = 0;
    this.combo = 0;
    stats.currentStreak = 0;
    this.hearts = Math.max(0, this.hearts - 1);
    this.audio.playHeartLoss();

    await this.ui.showFeedback(false, `Correct: ${this._currentWord.type}`, this._currentWord);

    this.ui.updateCombo(0);
  }

  async _startBossFight() {
    this.isBossFight = true;
    this.isAnswering = false;

    // Sync difficulty and reset boss HP
    this.bossManager.setDifficulty(this.levelManager.currentDifficulty);
    this.bossManager.resetHP();

    // Player gets 5 fresh hearts for the boss fight
    this.hearts = this.maxHearts;
    this.ui.showBossHearts(this.hearts);

    const question = this.bossManager.selectQuestion();
    this.ui.setBossCorrectAnswer(question.answer);
    this.ui.setupBossUI(question, this.bossManager.bossHP, this.bossManager.maxBossHP);
    this.ui.updateBossHP(this.bossManager.bossHP, this.bossManager.maxBossHP);
    this.ui.showScreen('boss');
  }

  async _handleBossAnswer(answer) {
    if (this.isAnswering || !this.isBossFight) return;
    this.isAnswering = true;

    const isCorrect = this.bossManager.checkAnswer(answer);
    this.ui.markBossOption(answer, isCorrect);

    if (isCorrect) {
      this.bossManager.hurtBoss();
      this.ui.updateBossHP(this.bossManager.bossHP, this.bossManager.maxBossHP);
      this.ui.showBossDamage(this.bossManager.damagePerHit);
      this.audio.playBossHit();

      this.xp += this.xpPerCorrect;
      const stats = Storage.load(this.GAME_ID);
      stats.xp = this.xp;
      stats.totalQuestions++;
      stats.totalCorrect++;
      const totalQ = stats.totalQuestions || 1;
      stats.accuracy = Math.round((stats.totalCorrect / totalQ) * 100);
      Storage.save(stats, this.GAME_ID);
      this._updateXpUI();

      await this.ui.showBossExplanation(this.bossManager.currentQuestion.explanation);

      if (this.bossManager.isBossDefeated()) {
        this._defeatBoss();
      } else {
        this.isAnswering = false;
        this.audio.playCorrect();
        const nextQuestion = this.bossManager.selectQuestion();
        this.ui.setBossCorrectAnswer(nextQuestion.answer);
        this.ui.setupBossUI(nextQuestion, this.bossManager.bossHP, this.bossManager.maxBossHP);
        this.ui.showBossHearts(this.hearts);
      }
    } else {
      this.hearts = Math.max(0, this.hearts - 1);
      this.audio.playHeartLoss();
      this.audio.playWrong();
      this.ui.showBossHearts(this.hearts);
      await this.ui.showBossExplanation(this.bossManager.currentQuestion.explanation);

      this.xp = Math.max(0, this.xp + this.xpPerWrong);
      const stats = Storage.load(this.GAME_ID);
      stats.xp = this.xp;
      stats.totalQuestions++;
      const totalQ = stats.totalQuestions || 1;
      stats.accuracy = Math.round((stats.totalCorrect / totalQ) * 100);
      Storage.save(stats, this.GAME_ID);
      this._updateXpUI();

      if (this.hearts <= 0) {
        this.isPlaying = false;
        this.isBossFight = false;
        Storage.updateHighestCombo(this.GAME_ID);
        this.ui.showGameOver(Storage.load(this.GAME_ID));
        return;
      }

      this.isAnswering = false;
      const nextQuestion = this.bossManager.selectQuestion();
      this.ui.setBossCorrectAnswer(nextQuestion.answer);
      this.ui.setupBossUI(nextQuestion, this.bossManager.bossHP, this.bossManager.maxBossHP);
      this.ui.showBossHearts(this.hearts);
    }
  }

  async _defeatBoss() {
    this.isBossFight = false;
    this.audio.playVictory();
    this.xp += this.bossDefeatXp;

    if (this.hearts < this.maxHearts) this.hearts++;

    const stats = Storage.load(this.GAME_ID);
    stats.xp = this.xp;
    stats.bossesDefeated++;
    Storage.save(stats, this.GAME_ID);
    this._updateXpUI();
    this.ui.showScreen('bossVictory');

    // Track boss defeated
    Analytics.trackEvent('boss_defeated', {
      game_id: this.GAME_ID,
      level: this.currentLevel,
      difficulty: this.levelManager.currentDifficulty,
      total_xp: this.xp
    });
  }

  _continueAfterBoss() {
    // After boss victory, complete the level (boss was the final challenge)
    this._completeLevel();
  }

  _completeLevel() {
    this.isPlaying = false;
    this.audio.playLevelUp();

    const stats = Storage.load(this.GAME_ID);
    const level = this.currentLevel;

    // Save XP and word count before completing level
    stats.xp = this.xp;
    Storage.save(stats, this.GAME_ID);

    Storage.completeLevel(level, this.GAME_ID);

    const canUnlock = this.levelManager.canUnlockNextLevel(level, stats);
    if (canUnlock && level < 3) {
      Storage.unlockLevel(level + 1, this.GAME_ID);
      if (level >= stats.currentLevel) {
        stats.currentLevel = level + 1;
        Storage.updateField('currentLevel', level + 1, this.GAME_ID);
      }
    }

    const updatedStats = Storage.load(this.GAME_ID);
    this.ui.showLevelComplete(level, updatedStats, canUnlock);

    // Track level complete
    Analytics.trackEvent('level_complete', {
      game_id: this.GAME_ID,
      level: level,
      difficulty: this.levelManager.currentDifficulty,
      total_xp: this.xp,
      accuracy: stats.accuracy,
      next_unlocked: canUnlock ? 1 : 0
    });

    // Log to Google Sheets & daily stats
    const playTime = Analytics.endSession();
    Analytics.logToSheet({
      gameId: this.GAME_ID,
      xp: this.xp,
      playTime: playTime,
      level: level,
      accuracy: stats.accuracy || 0,
      bossDefeated: stats.bossesDefeated > 0,
      totalQuestions: stats.totalQuestions || 0,
      totalCorrect: stats.totalCorrect || 0
    });
    Analytics.updateDailyStats(this.xp);
  }

  _goToNextLevel() {
    const nextLevel = this.currentLevel + 1;
    if (nextLevel <= 3 && Storage.isLevelUnlocked(nextLevel, this.GAME_ID)) {
      this._startLevel(nextLevel);
    } else {
      this._showMenu();
    }
  }

  _setDifficulty(difficulty) {
    this.levelManager.setDifficulty(difficulty);
    // Sync difficulty to bossManager so boss damage matches
    this.bossManager.setDifficulty(difficulty);
    if (this.isPlaying) {
      this.totalQuestionsInLevel = this.levelManager.getQuestionCount();
      this.ui.updateQuestionCounter(this.questionNumber, this.totalQuestionsInLevel);
    }
    document.querySelectorAll('.btn-difficulty').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
    });
  }

  _updateXpUI() {
    this.ui.updateXp(this.xp, this.nextLevelXp);
  }

  _delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ==================== USER MANAGEMENT ====================

  _showUserScreen() {
    this._renderUserList();
    this.ui.showScreen('users');
  }

  _renderUserList() {
    const users = UserManager.getUsers();
    const currentUser = UserManager.getCurrentUser();
    const list = document.getElementById('users-list');
    list.innerHTML = '';

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      if (user.username === currentUser) card.classList.add('active-user');

      const oldUser = UserManager.getCurrentUser();
      UserManager.setCurrentUser(user.username);
      const stats = Storage.load(this.GAME_ID);
      UserManager.setCurrentUser(oldUser);

      card.innerHTML = `
        <div class="user-card-avatar">👤</div>
        <div class="user-card-info">
          <div class="user-card-name">${user.displayName}</div>
          <div class="user-card-username">@${user.username}</div>
          <div class="user-card-stats">⭐ ${stats.xp} XP | Level ${stats.currentLevel}</div>
        </div>
        <button class="btn-delete-user" data-username="${user.username}">🗑️</button>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-delete-user')) return;
        if (user.username !== currentUser) this._switchUser(user.username);
      });

      const deleteBtn = card.querySelector('.btn-delete-user');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this._deleteUser(user.username);
      });

      list.appendChild(card);
    });

    document.getElementById('user-name').textContent = UserManager.getDisplayName(currentUser);
  }

  _switchUser(username) {
    UserManager.setCurrentUser(username);
    document.getElementById('user-name').textContent = UserManager.getDisplayName(username);
    this.xp = 0;

    const stats = Storage.load(this.GAME_ID);
    this.xp = stats.xp;
    this.currentLevel = stats.currentLevel;
    this.streak = stats.currentStreak || 0;

    this.ui.updateMenu(stats);
    this.ui.renderStats(stats);
    this.ui.renderLevels(this.levelManager, stats);
    this._renderUserList();
    this.ui.showScreen('menu');
  }

  _deleteUser(username) {
    const users = UserManager.getUsers();
    if (users.length <= 1) {
      alert('Cannot delete the last user!');
      return;
    }
    if (!confirm(`Delete user "${username}"? All progress will be lost.`)) return;

    const isCurrentUser = username === UserManager.getCurrentUser();
    UserManager.deleteUser(username);

    if (isCurrentUser) {
      const remaining = UserManager.getUsers();
      this._switchUser(remaining[0].username);
    } else {
      this._renderUserList();
    }
  }

  _createUser() {
    const usernameInput = document.getElementById('input-username');
    const displayNameInput = document.getElementById('input-displayname');
    const username = usernameInput.value.trim().toLowerCase();
    const displayName = displayNameInput.value.trim() || username;

    if (!username) { alert('Please enter a username.'); return; }
    if (!UserManager.isValidUsername(username)) {
      alert('Username must be 2-20 characters. Only letters, numbers, underscores, and spaces allowed.');
      return;
    }

    if (!UserManager.createUser(username, displayName)) {
      alert(`User "${username}" already exists!`);
      return;
    }

    usernameInput.value = '';
    displayNameInput.value = '';
    this._switchUser(username);
  }

  // ==================== STATIC ENTRY POINT ====================

  static async start() {
    if (document.readyState === 'loading') {
      await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
    }
    const game = new Game();
    await game.init();
    window.__game = game;
    return game;
  }
}

Game.start().catch(e => console.error('Game failed to start:', e));