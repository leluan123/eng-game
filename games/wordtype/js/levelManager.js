/**
 * LevelManager Module
 * Handles loading, filtering, and managing level data.
 * 
 * Features:
 * - Smart random algorithm: tracks used word IDs and avoids repeats
 * - When pool is exhausted, reshuffles and resets
 * - Difficulty selection: Easy (30), Medium (50), Hard (80) questions
 * 
 * Data loading strategy:
 * 1. Try fetch() from /data/level*.json files (works with local server / GitHub Pages)
 * 2. If fetch fails (file:// protocol), fall back to embedded FallbackData
 */
class LevelManager {
  constructor() {
    /** @type {Object} All loaded level data */
    this.levels = {};
    /** @type {Array} Current level's word pool */
    this.currentPool = [];
    /** @type {Object} Track used word IDs to prevent repeats */
    this.usedWordIds = {};
    /** @type {number} Current level number being played */
    this.currentLevel = 0;
    /** @type {Object} Question count by difficulty */
    this.questionsPerLevel = {
      easy: 30,
      medium: 50,
      hard: 80
    };
    /** @type {string} Current difficulty setting */
    this.currentDifficulty = 'easy';

    /** @type {number} Maximum streak for level 1 unlock */
    this.level1MaxStreak = 20;
    /** @type {number} Level 1 accuracy requirement */
    this.level1AccuracyReq = 80;
    /** @type {number} Level 2 accuracy requirement */
    this.level2AccuracyReq = 85;
    /** @type {number} Level 3 accuracy requirement */
    this.level3AccuracyReq = 90;
  }

  /**
   * Load all level data - try JSON files first, fallback to embedded data.
   * @returns {Promise<void>}
   */
  async loadAllLevels() {
    try {
      const [level1, level2, level3] = await Promise.all([
        this._fetchJSON('../data/level1.json'),
        this._fetchJSON('../data/level2.json'),
        this._fetchJSON('../data/level3.json')
      ]);
      this.levels = { 1: level1, 2: level2, 3: level3 };
      console.log('Level data loaded from JSON files');
    } catch (e) {
      console.warn('Could not load JSON files, using fallback data:', e.message);
      if (!window.FallbackData) {
        throw new Error('No FallbackData available. Ensure data.js is loaded.');
      }
      this.levels = {
        1: window.FallbackData.level1 || [],
        2: window.FallbackData.level2 || [],
        3: window.FallbackData.level3 || []
      };
      console.log('Level data loaded from fallback');
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
        // file:// returns status 0 on success, http:// returns 200
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
   * Set the difficulty for question count.
   * @param {string} difficulty - 'easy', 'medium', or 'hard'
   */
  setDifficulty(difficulty) {
    if (this.questionsPerLevel[difficulty] !== undefined) {
      this.currentDifficulty = difficulty;
    }
  }

  /**
   * Get the question count for current difficulty.
   * @returns {number}
   */
  getQuestionCount() {
    return this.questionsPerLevel[this.currentDifficulty] || 30;
  }

  /**
   * Set the current level and prepare the word pool.
   * Words are filtered by their `level` field in the data.
   * Resets the used-words tracker for fresh gameplay.
   * @param {number} level - Level number (1-3)
   * @param {boolean} shuffle - Whether to shuffle the pool
   */
  setLevel(level, shuffle = true) {
    this.currentLevel = level;
    this.usedWordIds = {}; // Reset tracker for new level

    // Get all words for this level from the loaded data
    const allWords = this.levels[level] || [];

    // Filter words that belong to this specific level
    const pool = allWords.filter(word => word.level === level);

    // If no words match the level field, use all words as fallback
    const finalPool = pool.length > 0 ? pool : allWords;

    // Shuffle the pool for randomness using Fisher-Yates
    if (shuffle) {
      this.currentPool = this._shuffleArray([...finalPool]);
    } else {
      this.currentPool = [...finalPool];
    }
  }

  /**
   * Get the next unused word from the current level pool.
   * - Skips words that have already been used (by ID)
   * - When all words are exhausted, reshuffles and resets tracker
   * This ensures every word gets shown before any repeats, regardless of pool size.
   * @returns {Object|null} The next word object, or null if pool is empty
   */
  getNextWord() {
    // Find the first unused word in the pool
    let word = null;
    let index = -1;

    for (let i = 0; i < this.currentPool.length; i++) {
      const w = this.currentPool[i];
      if (!w) continue;
      // Use id as tracker key; if no id, use word+type as fallback
      const key = w.id || `${w.word}_${w.type}`;
      if (!this.usedWordIds[key]) {
        word = w;
        index = i;
        break;
      }
    }

    // If all words have been used, reshuffle and reset
    if (!word) {
      this.usedWordIds = {};
      this._shuffleArrayInPlace(this.currentPool);
      if (this.currentPool.length > 0) {
        word = this.currentPool[0];
        index = 0;
      }
    }

    // Mark word as used and remove from pool
    if (word) {
      const key = word.id || `${word.word}_${word.type}`;
      this.usedWordIds[key] = true;
      this.currentPool.splice(index, 1);
    }

    return word || null;
  }

  /**
   * Shuffle an array using Fisher-Yates (returns new array).
   * @param {Array} array - The array to shuffle
   * @returns {Array} A new shuffled array
   */
  _shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /**
   * Shuffle array in-place using Fisher-Yates.
   * @param {Array} array - The array to shuffle in place
   */
  _shuffleArrayInPlace(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  /**
   * Check if the player can advance to the next level based on stats.
   * @param {number} currentLevel - The level just completed
   * @param {Object} stats - Current stats from Storage
   * @returns {boolean} Whether the next level is unlocked
   */
  canUnlockNextLevel(currentLevel, stats) {
    if (currentLevel === 1) {
      return stats.accuracy >= this.level1AccuracyReq && stats.maxStreak >= this.level1MaxStreak;
    } else if (currentLevel === 2) {
      return stats.accuracy >= this.level2AccuracyReq;
    }
    return false;
  }

  /**
   * Get level name/description.
   * @param {number} level - Level number
   * @returns {Object} { name, description }
   */
  getLevelInfo(level) {
    const info = {
      1: { name: 'Suffix Recognition', description: 'Recognize word types by their suffixes' },
      2: { name: 'No Suffix Challenge', description: 'Identify words without obvious suffixes' },
      3: { name: 'Word Families', description: 'Master words from the same family' }
    };
    return info[level] || { name: 'Unknown', description: '' };
  }

  /**
   * Get unlock requirements as a readable string.
   * @param {number} level - The locked level
   * @returns {string} Description of requirements
   */
  getUnlockRequirements(level) {
    if (level === 2) {
      return `Accuracy ≥ ${this.level1AccuracyReq}% and ${this.level1MaxStreak} correct streak`;
    } else if (level === 3) {
      return `Accuracy ≥ ${this.level2AccuracyReq}%`;
    }
    return '';
  }
}