/**
 * Storage Module
 * Manages all localStorage operations for the game.
 * Supports multiple users via UserManager per-user keys.
 * Uses ES6 class with static methods - no global variables.
 */
class Storage {
  /** Legacy storage key (used for migration) */
  static STORAGE_KEY = 'wordtype_stats';

  /** Default statistics object */
  static DEFAULT_STATS = {
    xp: 0,
    currentLevel: 1,
    highestCombo: 0,
    accuracy: 0,
    wordsLearned: 0,
    bossesDefeated: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    /* Track which levels are unlocked (1 = unlocked, 0 = locked) */
    unlockedLevels: { 1: 1, 2: 0, 3: 0 },
    /* Track which levels are completed */
    completedLevels: {},
    /* Current streak of correct answers in a row */
    currentStreak: 0,
    /* Max streak achieved in this session */
    maxStreak: 0
  };

  /**
   * Get the storage key for the current user.
   * @returns {string}
   */
  static _getKey() {
    if (typeof UserManager !== 'undefined') {
      return UserManager.getStatsKey(UserManager.getCurrentUser());
    }
    return Storage.STORAGE_KEY;
  }

  /**
   * Load statistics from localStorage for the current user.
   * Returns default stats if nothing is stored or if data is corrupted.
   * @returns {Object} The statistics object
   */
  static load() {
    try {
      const key = Storage._getKey();
      const raw = localStorage.getItem(key);
      if (!raw) {
        return { ...Storage.DEFAULT_STATS };
      }
      const parsed = JSON.parse(raw);
      // Merge with defaults to handle any missing keys (forward compatibility)
      return { ...Storage.DEFAULT_STATS, ...parsed };
    } catch (e) {
      console.warn('Storage corrupted, resetting to defaults:', e.message);
      return { ...Storage.DEFAULT_STATS };
    }
  }

  /**
   * Save statistics to localStorage for the current user.
   * @param {Object} stats - The statistics object to save
   */
  static save(stats) {
    try {
      const key = Storage._getKey();
      localStorage.setItem(key, JSON.stringify(stats));
    } catch (e) {
      console.error('Failed to save storage:', e.message);
    }
  }

  /**
   * Reset all statistics to defaults.
   */
  static reset() {
    localStorage.removeItem(Storage.STORAGE_KEY);
    return { ...Storage.DEFAULT_STATS };
  }

  /**
   * Update a specific stat field.
   * @param {string} key - The field name to update
   * @param {*} value - The new value
   */
  static updateField(key, value) {
    const stats = Storage.load();
    stats[key] = value;
    Storage.save(stats);
  }

  /**
   * Increment a numeric stat field.
   * @param {string} key - The field name
   * @param {number} amount - Amount to add (default 1)
   */
  static increment(key, amount = 1) {
    const stats = Storage.load();
    stats[key] = (stats[key] || 0) + amount;
    Storage.save(stats);
  }

  /**
   * Unlock a level for play.
   * @param {number} level - The level number to unlock
   */
  static unlockLevel(level) {
    const stats = Storage.load();
    stats.unlockedLevels[level] = 1;
    Storage.save(stats);
  }

  /**
   * Mark a level as completed.
   * @param {number} level - The level number completed
   */
  static completeLevel(level) {
    const stats = Storage.load();
    stats.completedLevels[level] = 1;
    Storage.save(stats);
  }

  /**
   * Check if a level is unlocked.
   * @param {number} level - The level number
   * @returns {boolean} Whether the level is unlocked
   */
  static isLevelUnlocked(level) {
    const stats = Storage.load();
    return stats.unlockedLevels[level] === 1;
  }

  /**
   * Check if a level is completed.
   * @param {number} level - The level number
   * @returns {boolean} Whether the level is completed
   */
  static isLevelCompleted(level) {
    const stats = Storage.load();
    return stats.completedLevels[level] === 1;
  }

  /**
   * Recalculate accuracy percentage.
   */
  static recalculateAccuracy() {
    const stats = Storage.load();
    if (stats.totalQuestions === 0) {
      stats.accuracy = 0;
    } else {
      stats.accuracy = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
    }
    Storage.save(stats);
  }

  /**
   * Update the highest combo if current streak exceeds it.
   */
  static updateHighestCombo() {
    const stats = Storage.load();
    if (stats.currentStreak > stats.highestCombo) {
      stats.highestCombo = stats.currentStreak;
      Storage.save(stats);
    }
  }
}