/**
 * UI Module
 * Handles all DOM manipulation, screen transitions, and UI updates.
 * Decoupled from game logic — only manages the presentation layer.
 */
class UIManager {
  constructor() {
    // Cache DOM references for performance
    this._cacheElements();
    // Track which screen is currently active
    this.activeScreen = 'screen-menu';
  }

  /**
   * Cache all frequently accessed DOM elements.
   * Called once during construction.
   */
  _cacheElements() {
    // Screen containers
    this.screens = {
      menu: document.getElementById('screen-menu'),
      levels: document.getElementById('screen-levels'),
      stats: document.getElementById('screen-stats'),
      game: document.getElementById('screen-game'),
      boss: document.getElementById('screen-boss'),
      bossVictory: document.getElementById('screen-boss-victory'),
      levelComplete: document.getElementById('screen-level-complete'),
      gameover: document.getElementById('screen-gameover'),
      users: document.getElementById('screen-users')
    };

    // Menu elements
    this.menuXp = document.getElementById('menu-xp');
    this.menuLevel = document.getElementById('menu-level');
    this.menuCombo = document.getElementById('menu-combo');

    // Level progress dots
    this.levelDots = document.querySelectorAll('.level-dot');

    // Game elements
    this.heartsDisplay = document.getElementById('hearts-display');
    this.xpBarFill = document.getElementById('xp-bar-fill');
    this.xpText = document.getElementById('xp-text');
    this.gameLevelBadge = document.getElementById('game-level-badge');
    this.comboCount = document.getElementById('combo-count');
    this.questionNum = document.getElementById('question-num');
    this.questionTotal = document.getElementById('question-total');
    this.wordText = document.getElementById('word-text');
    this.wordHint = document.getElementById('word-hint');
    this.wordMeaning = document.getElementById('word-meaning');
    this.btnSpeak = document.getElementById('btn-speak');
    this.wordCard = document.getElementById('word-card');
    this.answerButtons = document.querySelectorAll('.btn-type');

    // Feedback overlay
    this.feedbackOverlay = document.getElementById('feedback-overlay');
    this.feedbackIcon = document.getElementById('feedback-icon');
    this.feedbackText = document.getElementById('feedback-text');
    this.feedbackDetail = document.getElementById('feedback-detail');

    // Combo popup
    this.comboPopup = document.getElementById('combo-popup');
    this.comboPopupText = document.getElementById('combo-popup-text');

    // Boss elements
    this.bossSentence = document.getElementById('boss-sentence');
    this.bossFamily = document.getElementById('boss-family');
    this.bossOptions = document.getElementById('boss-options');
    this.bossHpFill = document.getElementById('boss-hp-fill');
    this.bossHpText = document.getElementById('boss-hp-text');
    this.bossName = document.getElementById('boss-name');
    this.bossExplanation = document.getElementById('boss-explanation');
    this.explanationText = document.getElementById('explanation-text');
    this.bossHearts = document.getElementById('boss-hearts');
    this.bossDamageAnim = document.getElementById('boss-damage-animation');
    this.damageNumber = document.getElementById('damage-number');

    // Level complete elements
    this.levelCompleteTitle = document.getElementById('level-complete-title');
    this.levelCompleteSubtitle = document.getElementById('level-complete-subtitle');
    this.levelCompleteStats = document.getElementById('level-complete-stats');
    this.levelCompleteNext = document.getElementById('level-complete-next');

    // Game over elements
    this.gameoverStats = document.getElementById('gameover-stats');

    // Levels list
    this.levelsList = document.getElementById('levels-list');

    // Stats content
    this.statsContent = document.getElementById('stats-content');
  }

  // ==========================================================
  // SCREEN MANAGEMENT
  // ==========================================================

  /**
   * Switch to a specific screen by ID.
   * @param {string} screenId - The ID of the screen to show
   */
  showScreen(screenId) {
    // Hide all screens
    Object.values(this.screens).forEach(screen => {
      if (screen) screen.classList.remove('active');
    });

    // Show the target screen
    const target = this.screens[screenId] || document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      this.activeScreen = screenId;
    }
  }

  // ==========================================================
  // MENU UPDATES
  // ==========================================================

  /**
   * Update the main menu with current stats.
   * @param {Object} stats - Statistics from Storage
   */
  updateMenu(stats) {
    this.menuXp.textContent = stats.xp;
    this.menuLevel.textContent = stats.currentLevel;
    this.menuCombo.textContent = stats.highestCombo;

    // Update level progress dots
    this.levelDots.forEach(dot => {
      const level = parseInt(dot.dataset.level);
      dot.className = 'level-dot';
      if (stats.unlockedLevels[level]) {
        if (stats.completedLevels[level]) {
          dot.classList.add('completed');
          dot.textContent = '✓';
        } else if (level === stats.currentLevel) {
          dot.classList.add('active');
          dot.textContent = level;
        } else {
          dot.classList.add('unlocked');
          dot.textContent = level;
        }
      } else {
        dot.classList.add('locked');
        dot.textContent = '🔒';
      }
    });
  }

  // ==========================================================
  // LEVELS LIST
  // ==========================================================

  /**
   * Render the levels list screen.
   * @param {Object} levelManager - LevelManager instance
   * @param {Object} stats - Current stats
   */
  renderLevels(levelManager, stats) {
    this.levelsList.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
      const info = levelManager.getLevelInfo(i);
      const card = document.createElement('div');
      card.className = 'level-card';

      const isUnlocked = stats.unlockedLevels[i] === 1;
      const isCompleted = stats.completedLevels[i] === 1;

      if (!isUnlocked) {
        card.classList.add('level-card-locked');
      } else if (isCompleted) {
        card.classList.add('level-card-completed');
      }

      const numBadge = document.createElement('div');
      numBadge.className = `level-card-number ${isUnlocked ? (isCompleted ? 'completed' : 'available') : 'locked'}`;
      numBadge.textContent = isUnlocked ? (isCompleted ? '✓' : i) : '🔒';

      const infoDiv = document.createElement('div');
      infoDiv.className = 'level-card-info';
      infoDiv.innerHTML = `
        <h3>Level ${i}: ${info.name}</h3>
        <p>${info.description}</p>
        ${!isUnlocked ? `<p style="color:var(--color-danger);margin-top:4px;">🔒 ${levelManager.getUnlockRequirements(i)}</p>` : ''}
      `;

      const status = document.createElement('div');
      status.className = 'level-card-status';
      status.textContent = isCompleted ? '✅' : (isUnlocked ? '▶' : '🔒');

      card.appendChild(numBadge);
      card.appendChild(infoDiv);
      card.appendChild(status);

      if (isUnlocked) {
        card.addEventListener('click', () => {
          this.showScreen('screen-game');
          // Dispatch a custom event that game.js listens to
          document.dispatchEvent(new CustomEvent('ui:playLevel', { detail: { level: i } }));
        });
      }

      this.levelsList.appendChild(card);
    }
  }

  // ==========================================================
  // GAMEPLAY UPDATES
  // ==========================================================

  /**
   * Update the hearts display.
   * @param {number} hearts - Current heart count
   * @param {number} maxHearts - Maximum heart count
   */
  updateHearts(hearts, maxHearts = 5) {
    this.heartsDisplay.innerHTML = '';
    for (let i = 0; i < maxHearts; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = i < hearts ? '❤️' : '🤍';
      if (i >= hearts) heart.classList.add('lost');
      this.heartsDisplay.appendChild(heart);
    }
  }

  /**
   * Update the XP bar and text.
   * @param {number} xp - Current XP
   * @param {number} maxXp - XP needed for next level
   */
  updateXp(xp, maxXp) {
    const percent = Math.min(100, Math.round((xp / maxXp) * 100));
    this.xpBarFill.style.width = `${percent}%`;
    this.xpText.textContent = `${xp} XP`;
  }

  /**
   * Flash the XP bar for level up feedback.
   */
  flashXpBar() {
    this.xpBarFill.classList.add('level-up-flash');
    setTimeout(() => {
      this.xpBarFill.classList.remove('level-up-flash');
    }, 500);
  }

  /**
   * Update the level badge.
   * @param {number} level - Current level number
   */
  updateLevelBadge(level) {
    this.gameLevelBadge.textContent = `Level ${level}`;
  }

  /**
   * Update combo display.
   * @param {number} combo - Current combo count
   */
  updateCombo(combo) {
    this.comboCount.textContent = combo;
  }

  /**
   * Update question counter.
   * @param {number} current - Current question number (1-based)
   * @param {number} total - Total questions for this level
   */
  updateQuestionCounter(current, total) {
    this.questionNum.textContent = current;
    this.questionTotal.textContent = total;
  }

  /**
   * Display a new word in the word card.
   * @param {Object} wordData - The word object { word, vnMeaning, hint }
   */
  displayWord(wordData) {
    // Trigger card animation by removing and re-adding the element
    this.wordCard.style.animation = 'none';
    void this.wordCard.offsetHeight; // Force reflow
    this.wordCard.style.animation = '';

    this.wordText.textContent = wordData.word;
    this.wordMeaning.textContent = wordData.vnMeaning || '';
    // Hint is only shown in feedback/results, not during the question
    this.wordHint.style.display = 'none';
  }

  /**
   * Reset all answer buttons to their default state.
   */
  resetAnswerButtons() {
    this.answerButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'wrong');
    });
  }

  /**
   * Disable all answer buttons.
   */
  disableAnswerButtons() {
    this.answerButtons.forEach(btn => {
      btn.disabled = true;
    });
  }

  /**
   * Show immediate feedback on the answer buttons.
   * @param {string} selectedType - The type the player selected
   * @param {string} correctType - The correct word type
   */
  showAnswerFeedback(selectedType, correctType) {
    this.answerButtons.forEach(btn => {
      const btnType = btn.dataset.type;
      if (btnType === correctType) {
        btn.classList.add('correct');
      } else if (btnType === selectedType) {
        btn.classList.add('wrong');
      }
    });
  }

  // ==========================================================
  // FEEDBACK OVERLAY
  // ==========================================================

  /**
   * Wait for the OK button on the feedback overlay.
   * @returns {Promise<void>} Resolves when OK is clicked
   */
  _waitForFeedbackOk() {
    const okBtn = document.getElementById('btn-feedback-ok');
    if (!okBtn) return Promise.resolve();
    return new Promise(resolve => {
      const handler = () => {
        okBtn.removeEventListener('click', handler);
        resolve();
      };
      okBtn.addEventListener('click', handler);
    });
  }

  /**
   * Show a feedback popup (correct/wrong).
   * Displays hint and family info from the word data.
   * Waits for the player to press OK before resolving.
   * @param {boolean} isCorrect - Whether the answer was correct
   * @param {string} detail - Additional info (e.g., "+10 XP")
   * @param {Object} [wordData] - The word object with hint & confusionWords
   * @returns {Promise<void>} Resolves when OK is clicked
   */
  showFeedback(isCorrect, detail, wordData) {
    return new Promise(resolve => {
      this.feedbackIcon.textContent = isCorrect ? '✔️' : '❌';
      this.feedbackText.textContent = isCorrect ? 'Correct!' : 'Wrong!';
      this.feedbackText.style.color = isCorrect ? 'var(--color-success)' : 'var(--color-danger)';
      this.feedbackDetail.textContent = detail;

      // Show hint and family info
      const hintRow = document.getElementById('feedback-hint-row');
      const familyRow = document.getElementById('feedback-family-row');
      const hintEl = document.getElementById('feedback-hint');
      const familyEl = document.getElementById('feedback-family');

      if (wordData) {
        // Display hint
        if (wordData.hint) {
          hintRow.style.display = 'flex';
          hintEl.textContent = wordData.hint;
        } else {
          hintRow.style.display = 'none';
        }

        // Display confusion words as "Family:"
        if (wordData.confusionWords && wordData.confusionWords.length > 0) {
          familyRow.style.display = 'flex';
          familyEl.textContent = wordData.confusionWords.join(', ');
        } else {
          familyRow.style.display = 'none';
        }
      } else {
        hintRow.style.display = 'none';
        familyRow.style.display = 'none';
      }

      this.feedbackOverlay.style.pointerEvents = 'auto';
      this.feedbackOverlay.style.display = 'flex';

      // Wait for OK button click, then resolve
      this._waitForFeedbackOk().then(() => {
        this.feedbackOverlay.style.display = 'none';
        this.feedbackOverlay.style.pointerEvents = 'none';
        resolve();
      });
    });
  }

  /**
   * Hide feedback overlay programmatically.
   */
  hideFeedback() {
    this.feedbackOverlay.style.display = 'none';
    this.feedbackOverlay.style.pointerEvents = 'none';
  }

  // ==========================================================
  // COMBO POPUP
  // ==========================================================

  /**
   * Show a combo milestone popup.
   * @param {number} combo - The combo count reached
   * @param {number} bonusXp - Bonus XP awarded
   */
  showComboPopup(combo, bonusXp) {
    let message = '🔥 GREAT!';
    if (combo >= 20) message = '💥 PERFECT!';
    else if (combo >= 10) message = '⚡ AWESOME!';
    else if (combo >= 5) message = '🔥 GREAT!';

    this.comboPopupText.textContent = `${message} +${bonusXp} XP`;
    this.comboPopup.style.display = 'block';

    // Restart animation
    this.comboPopup.style.animation = 'none';
    void this.comboPopup.offsetHeight;
    this.comboPopup.style.animation = '';

    setTimeout(() => {
      this.comboPopup.style.display = 'none';
    }, 1000);
  }

  // ==========================================================
  // XP GAIN FLOATING TEXT
  // ==========================================================

  /**
   * Show floating XP text that rises and fades.
   * @param {number} xp - Amount of XP gained
   * @param {number} x - X position (optional, centers by default)
   * @param {number} y - Y position (optional)
   */
  showXpGain(xp, x, y) {
    const el = document.createElement('div');
    el.className = 'xp-gain-animation';
    el.textContent = `+${xp} XP`;
    el.style.color = 'var(--color-accent)';
    el.style.left = x ? `${x}px` : '50%';
    el.style.top = y ? `${y}px` : '50%';
    el.style.transform = x ? '' : 'translateX(-50%)';
    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1000);
  }

  // ==========================================================
  // BOSS UI
  // ==========================================================

  /**
   * Setup the boss fight screen with question data.
   * Does NOT reset the HP bar — that is preserved across questions in a boss fight.
   * @param {Object} question - The boss question object
   * @param {number} currentHp - Current boss HP (to preserve across questions)
   * @param {number} maxHp - Maximum boss HP
   */
  setupBossUI(question, currentHp, maxHp) {
    this.bossSentence.textContent = question.sentence;
    this.bossFamily.textContent = `Family: ${question.family}`;
    this.bossName.textContent = `${question.family} Boss`;
    this.bossExplanation.style.display = 'none';

    // Preserve the current HP — do NOT reset to 100%
    this.updateBossHP(currentHp, maxHp);

    // Render options
    this.bossOptions.innerHTML = '';
    const shuffled = this._shuffleArray([...question.options]);
    shuffled.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'boss-option-btn';
      btn.textContent = option;
      btn.dataset.answer = option;
      btn.addEventListener('click', () => {
        // Dispatch event for game.js to handle
        document.dispatchEvent(new CustomEvent('ui:bossAnswer', {
          detail: { answer: option }
        }));
      });
      this.bossOptions.appendChild(btn);
    });
  }

  /**
   * Update boss HP bar.
   * @param {number} hp - Current HP
   * @param {number} maxHp - Maximum HP
   */
  updateBossHP(hp, maxHp) {
    const percent = Math.round((hp / maxHp) * 100);
    this.bossHpFill.style.width = `${percent}%`;
    this.bossHpText.textContent = `HP: ${hp}/${maxHp}`;
  }

  /**
   * Show boss damage animation.
   * @param {number} [damage] - The damage amount to display (optional, defaults to 25)
   */
  showBossDamage(damage) {
    this.damageNumber.textContent = `-${damage || 25}`;
    this.bossDamageAnim.style.display = 'block';
    this.bossDamageAnim.style.animation = 'none';
    void this.bossDamageAnim.offsetHeight;
    this.bossDamageAnim.style.animation = '';
    setTimeout(() => {
      this.bossDamageAnim.style.display = 'none';
    }, 800);
  }

  /**
   * Show the explanation after answering a boss question.
   * @param {string} explanation - The explanation text
   * @returns {Promise<void>} Resolves when OK is clicked
   */
  showBossExplanation(explanation) {
    return new Promise(resolve => {
      this.explanationText.textContent = explanation;
      this.bossExplanation.style.display = 'block';

      const okBtn = document.getElementById('btn-boss-ok');
      if (!okBtn) { resolve(); return; }

      // Remove any previous handler to prevent duplicates
      const newBtn = okBtn.cloneNode(true);
      okBtn.parentNode.replaceChild(newBtn, okBtn);

      newBtn.addEventListener('click', () => {
        this.bossExplanation.style.display = 'none';
        resolve();
      });
    });
  }

  /**
   * Mark a boss option button as correct or wrong.
   * @param {string} answer - The answer text
   * @param {boolean} isCorrect - Whether this is the correct answer
   */
  markBossOption(answer, isCorrect) {
    const btns = this.bossOptions.querySelectorAll('.boss-option-btn');
    btns.forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.answer === answer && isCorrect) {
        btn.classList.add('correct');
      } else if (btn.dataset.answer === answer && !isCorrect) {
        btn.classList.add('wrong');
      } else if (btn.dataset.answer === this._getCorrectAnswer()) {
        // Highlight the correct answer if player chose wrong
        btn.classList.add('correct');
      }
    });
  }

  /**
   * Get the correct answer text (used internally for boss).
   * @returns {string}
   */
  _getCorrectAnswer() {
    // This will be set externally by game.js
    return this._bossCorrectAnswer || '';
  }

  /**
   * Set the correct answer for boss highlighting.
   * @param {string} answer
   */
  setBossCorrectAnswer(answer) {
    this._bossCorrectAnswer = answer;
  }

  /**
   * Show boss fight player hearts (shows all 5 with filled/empty).
   * @param {number} hearts - Current heart count
   * @param {number} maxHearts - Maximum hearts (default 5)
   */
  showBossHearts(hearts, maxHearts = 5) {
    this.bossHearts.innerHTML = '';
    for (let i = 0; i < maxHearts; i++) {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = i < hearts ? '❤️' : '🤍';
      if (i >= hearts) heart.classList.add('lost');
      this.bossHearts.appendChild(heart);
    }
  }

  // ==========================================================
  // LEVEL COMPLETE
  // ==========================================================

  /**
   * Show level complete screen.
   * @param {number} level - The level just completed
   * @param {Object} stats - Current statistics
   * @param {boolean} nextUnlocked - Whether the next level was unlocked
   */
  showLevelComplete(level, stats, nextUnlocked) {
    this.levelCompleteTitle.textContent = `Level ${level} Complete!`;
    this.levelCompleteSubtitle.textContent = 'You\'ve mastered this challenge!';

    this.levelCompleteStats.innerHTML = `
      <div class="level-stat-row">
        <span>Score</span>
        <span>${stats.xp} XP</span>
      </div>
      <div class="level-stat-row">
        <span>Accuracy</span>
        <span>${stats.accuracy}%</span>
      </div>
      <div class="level-stat-row">
        <span>Best Combo</span>
        <span>${stats.highestCombo}</span>
      </div>
      <div class="level-stat-row">
        <span>Words Learned</span>
        <span>${stats.wordsLearned}</span>
      </div>
    `;

    if (nextUnlocked && level < 3) {
      this.levelCompleteNext.style.display = 'block';
      this.levelCompleteNext.querySelector('.unlock-text').textContent =
        `✨ Level ${level + 1} Unlocked! ✨`;
    } else {
      this.levelCompleteNext.style.display = 'none';
    }

    this.showScreen('levelComplete');
  }

  // ==========================================================
  // GAME OVER
  // ==========================================================

  /**
   * Show game over screen with stats.
   * @param {Object} stats - Current statistics
   */
  showGameOver(stats) {
    this.gameoverStats.innerHTML = `
      <div class="stat-row">
        <span>Total XP</span>
        <span>${stats.xp}</span>
      </div>
      <div class="stat-row">
        <span>Accuracy</span>
        <span>${stats.accuracy}%</span>
      </div>
      <div class="stat-row">
        <span>Best Combo</span>
        <span>${stats.highestCombo}</span>
      </div>
      <div class="stat-row">
        <span>Words Learned</span>
        <span>${stats.wordsLearned}</span>
      </div>
      <div class="stat-row">
        <span>Bosses Defeated</span>
        <span>${stats.bossesDefeated}</span>
      </div>
    `;
    this.showScreen('gameover');
  }

  // ==========================================================
  // STATISTICS SCREEN
  // ==========================================================

  /**
   * Render the statistics screen.
   * @param {Object} stats - Statistics from Storage
   */
  renderStats(stats) {
    this.statsContent.innerHTML = `
      <div class="stat-card">
        <h3>Experience</h3>
        <div class="stat-value">${stats.xp} XP</div>
      </div>
      <div class="stat-card">
        <h3>Current Level</h3>
        <div class="stat-value">Level ${stats.currentLevel}</div>
      </div>
      <div class="stat-card">
        <h3>Accuracy</h3>
        <div class="stat-value">${stats.accuracy}%</div>
      </div>
      <div class="stat-card">
        <h3>Highest Combo</h3>
        <div class="stat-value">${stats.highestCombo}</div>
      </div>
      <div class="stat-card">
        <h3>Words Learned</h3>
        <div class="stat-value">${stats.wordsLearned}</div>
      </div>
      <div class="stat-card">
        <h3>Bosses Defeated</h3>
        <div class="stat-value">${stats.bossesDefeated}</div>
      </div>
      <div class="stat-card">
        <h3>Total Questions</h3>
        <div class="stat-value">${stats.totalQuestions}</div>
      </div>
      <div class="stat-card">
        <h3>Correct Answers</h3>
        <div class="stat-value">${stats.totalCorrect}</div>
      </div>
    `;
  }

  // ==========================================================
  // UTILITY
  // ==========================================================

  /**
   * Shuffle array (Fisher-Yates).
   * @param {Array} array
   * @returns {Array}
   */
  _shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}