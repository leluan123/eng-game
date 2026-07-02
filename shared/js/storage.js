/**
 * Storage Module
 * Manages all localStorage operations for the game hub and individual games.
 * Supports multiple users via UserManager per-user keys.
 * Each game has its own stats stored under: wordtype_stats_{username}_{gameId}
 * Uses ES6 class with static methods - no global variables.
 */
class Storage {
  /** Legacy storage key (used for migration) */
  static STORAGE_KEY = 'wordtype_stats';

  /** Default statistics object for a game */
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
   * Get the storage key for the current user and a specific game.
   * @param {string} [gameId='wordtype'] - The game identifier
   * @returns {string}
   */
  static _getKey(gameId = 'wordtype') {
    if (typeof UserManager !== 'undefined') {
      return UserManager.getStatsKey(UserManager.getCurrentUser(), gameId);
    }
    return `${Storage.STORAGE_KEY}_${gameId}`;
  }

  /**
   * Load statistics from localStorage for the current user and game.
   * Returns default stats if nothing is stored or if data is corrupted.
   * @param {string} [gameId='wordtype'] - The game identifier
   * @returns {Object} The statistics object
   */
  static load(gameId = 'wordtype') {
    try {
      const key = Storage._getKey(gameId);
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
   * Save statistics to localStorage for the current user and game.
   * @param {Object} stats - The statistics object to save
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static save(stats, gameId = 'wordtype') {
    try {
      const key = Storage._getKey(gameId);
      localStorage.setItem(key, JSON.stringify(stats));
    } catch (e) {
      console.error('Failed to save storage:', e.message);
    }
  }

  /**
   * Reset all statistics to defaults for the current user and game.
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static reset(gameId = 'wordtype') {
    const key = Storage._getKey(gameId);
    localStorage.removeItem(key);
    return { ...Storage.DEFAULT_STATS };
  }

  /**
   * Update a specific stat field.
   * @param {string} key - The field name to update
   * @param {*} value - The new value
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static updateField(key, value, gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    stats[key] = value;
    Storage.save(stats, gameId);
  }

  /**
   * Increment a numeric stat field.
   * @param {string} key - The field name
   * @param {number} amount - Amount to add (default 1)
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static increment(key, amount = 1, gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    stats[key] = (stats[key] || 0) + amount;
    Storage.save(stats, gameId);
  }

  /**
   * Unlock a level for play.
   * @param {number} level - The level number to unlock
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static unlockLevel(level, gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    stats.unlockedLevels[level] = 1;
    Storage.save(stats, gameId);
  }

  /**
   * Mark a level as completed.
   * @param {number} level - The level number completed
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static completeLevel(level, gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    stats.completedLevels[level] = 1;
    Storage.save(stats, gameId);
  }

  /**
   * Check if a level is unlocked.
   * @param {number} level - The level number
   * @param {string} [gameId='wordtype'] - The game identifier
   * @returns {boolean} Whether the level is unlocked
   */
  static isLevelUnlocked(level, gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    return stats.unlockedLevels[level] === 1;
  }

  /**
   * Check if a level is completed.
   * @param {number} level - The level number
   * @param {string} [gameId='wordtype'] - The game identifier
   * @returns {boolean} Whether the level is completed
   */
  static isLevelCompleted(level, gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    return stats.completedLevels[level] === 1;
  }

  /**
   * Recalculate accuracy percentage.
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static recalculateAccuracy(gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    if (stats.totalQuestions === 0) {
      stats.accuracy = 0;
    } else {
      stats.accuracy = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
    }
    Storage.save(stats, gameId);
  }

  /**
   * Update the highest combo and max streak if current streak exceeds them.
   * @param {string} [gameId='wordtype'] - The game identifier
   */
  static updateHighestCombo(gameId = 'wordtype') {
    const stats = Storage.load(gameId);
    if (stats.currentStreak > stats.highestCombo) {
      stats.highestCombo = stats.currentStreak;
    }
    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak = stats.currentStreak;
    }
    Storage.save(stats, gameId);
  }

  /**
   * Get XP for a specific game for the current user.
   * @param {string} gameId - The game identifier
   * @returns {number}
   */
  static getGameXp(gameId) {
    const stats = Storage.load(gameId);
    return stats.xp || 0;
  }

  /**
   * Get all game stats for the current user.
   * Returns an array of { gameId, xp, played } objects.
   * @param {string[]} gameIds - Array of game identifiers to check
   * @returns {Array<{gameId: string, xp: number, played: boolean}>}
   */
  static getAllGameStats(gameIds) {
    return gameIds.map(gameId => {
      const stats = Storage.load(gameId);
      return {
        gameId,
        xp: stats.xp || 0,
        played: stats.totalQuestions > 0
      };
    });
  }
}