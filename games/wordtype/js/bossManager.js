/**
 * BossManager Module
 * Manages boss fight data and logic.
 * 
 * Data loading strategy:
 * 1. Try fetch() from /data/boss.json (works with local server / GitHub Pages)
 * 2. If fetch fails (file:// protocol), fall back to embedded FallbackData
 */
class BossManager {
  constructor() {
    /** @type {Array} All boss questions */
    this.bossData = [];
    /** @type {Object|null} Current boss question */
    this.currentQuestion = null;
    /** @type {number} Boss HP */
    this.bossHP = 100;
    /** @type {number} Maximum boss HP */
    this.maxBossHP = 100;
    /** @type {number} Damage dealt per correct answer (varies by difficulty) */
    this.damagePerHit = 10;
    /** @type {number} Questions between boss fights */
    this.questionsBetweenBosses = 20;
    /** @type {Array} Questions already used (to avoid repeats until reshuffle) */
    this.usedQuestions = [];
    /** @type {string} Current difficulty */
    this.currentDifficulty = 'easy';

    /** Difficulty-based boss settings: easy=10dmg, medium=5dmg, hard=4dmg */
    this.difficultySettings = {
      easy:   { damagePerHit: 10, maxBossHP: 100 },
      medium: { damagePerHit: 5,  maxBossHP: 100 },
      hard:   { damagePerHit: 4,  maxBossHP: 100 }
    };
  }

  /**
   * Load boss data - try JSON file first, fallback to embedded data.
   * Uses XMLHttpRequest for file:// protocol support.
   * @returns {Promise<void>}
   */
  async loadBossData() {
    try {
      this.bossData = await this._fetchJSON('../data/boss.json');
      this.usedQuestions = [];
      console.log('Boss data loaded from JSON file');
    } catch (e) {
      console.warn('Could not load boss JSON, using fallback data:', e.message);
      if (!window.FallbackData || !window.FallbackData.boss) {
        throw new Error('No boss FallbackData available.');
      }
      this.bossData = [...window.FallbackData.boss];
      this.usedQuestions = [];
      console.log('Boss data loaded from fallback');
    }
  }

  /**
   * Fetch and parse a JSON file using XMLHttpRequest.
   * Works with both file:// and http/https protocols.
   * @param {string} url - Path to JSON file
   * @returns {Promise<Array>}
   */
  async _fetchJSON(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.overrideMimeType('application/json');
      xhr.open('GET', url, true);
      xhr.onload = () => {
        if (xhr.status === 0 || xhr.status === 200) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch (e) {
            reject(new Error('Invalid JSON in ' + url + ': ' + e.message));
          }
        } else {
          reject(new Error(`HTTP ${xhr.status}: ${url}`));
        }
      };
      xhr.onerror = () => reject(new Error('Network error loading: ' + url));
      xhr.send();
    });
  }

  /**
   * Check if the current question count triggers a boss fight.
   * @param {number} questionNumber - The total questions answered so far
   * @returns {boolean} Whether a boss fight should start
   */
  shouldTriggerBoss(questionNumber) {
    return questionNumber > 0 && questionNumber % this.questionsBetweenBosses === 0;
  }

  /**
   * Select a random boss question (avoiding recent repeats).
   * @returns {Object} The selected boss question
   */
  selectQuestion() {
    // Filter out used questions; if all used, reset
    let available = this.bossData.filter(q => !this.usedQuestions.includes(q.id));
    if (available.length === 0) {
      this.usedQuestions = [];
      available = [...this.bossData];
    }

    const index = Math.floor(Math.random() * available.length);
    this.currentQuestion = available[index];
    this.usedQuestions.push(this.currentQuestion.id);
    return this.currentQuestion;
  }

  /**
   * Set the difficulty for the boss fight.
   * Adjusts damage per hit and max HP based on difficulty.
   * @param {string} difficulty - 'easy', 'medium', or 'hard'
   */
  setDifficulty(difficulty) {
    this.currentDifficulty = difficulty;
    const settings = this.difficultySettings[difficulty] || this.difficultySettings.easy;
    this.damagePerHit = settings.damagePerHit;
    this.maxBossHP = settings.maxBossHP;
  }

  /**
   * Reset boss HP to full (uses current difficulty settings).
   */
  resetHP() {
    const settings = this.difficultySettings[this.currentDifficulty] || this.difficultySettings.easy;
    this.damagePerHit = settings.damagePerHit;
    this.maxBossHP = settings.maxBossHP;
    this.bossHP = this.maxBossHP;
  }

  /**
   * Check if the player's answer is correct.
   * @param {string} answer - The selected answer
   * @returns {boolean} Whether the answer is correct
   */
  checkAnswer(answer) {
    return answer === this.currentQuestion.answer;
  }

  /**
   * Apply damage to the boss.
   */
  hurtBoss() {
    this.bossHP = Math.max(0, this.bossHP - this.damagePerHit);
  }

  /**
   * Check if the boss is defeated.
   * @returns {boolean} Whether boss HP is 0 or below
   */
  isBossDefeated() {
    return this.bossHP <= 0;
  }

  /**
   * Get boss HP percentage for the HP bar.
   * @returns {number} Percentage (0-100)
   */
  getHPPercent() {
    return Math.round((this.bossHP / this.maxBossHP) * 100);
  }

  /**
   * Get the number of hits required to defeat the boss.
   * @returns {number}
   */
  getHitsRequired() {
    return Math.ceil(this.maxBossHP / this.damagePerHit);
  }
}