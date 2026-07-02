/**
 * UserManager Module
 * Manages multiple users with per-user localStorage data.
 * Each user's stats are stored under a unique key: wordtype_stats_{username}
 */
class UserManager {
  /** Storage key prefix for user list */
  static USERS_KEY = 'wordtype_users';

  /** Default username for single-user backward compatibility */
  static DEFAULT_USER = 'default';

  /**
   * Get the list of all registered users.
   * @returns {Array<{username: string, displayName: string}>}
   */
  static getUsers() {
    try {
      const raw = localStorage.getItem(UserManager.USERS_KEY);
      if (!raw) {
        // Migrate: if there's existing default data, create the default user
        const defaultStats = localStorage.getItem('wordtype_stats');
        if (defaultStats) {
          const users = [{ username: 'default', displayName: 'Player 1' }];
          // Migrate old key to new per-user key
          localStorage.setItem('wordtype_stats_default', defaultStats);
          localStorage.removeItem('wordtype_stats');
          localStorage.setItem(UserManager.USERS_KEY, JSON.stringify(users));
          return users;
        }
        return [{ username: 'default', displayName: 'Player 1' }];
      }
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Failed to load users:', e.message);
      return [{ username: 'default', displayName: 'Player 1' }];
    }
  }

  /**
   * Save the user list.
   * @param {Array} users - Array of user objects
   */
  static saveUsers(users) {
    try {
      localStorage.setItem(UserManager.USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to save users:', e.message);
    }
  }

  /**
   * Create a new user.
   * @param {string} username - Unique username (lowercase, no spaces)
   * @param {string} displayName - Display name
   * @returns {boolean} Whether creation succeeded
   */
  static createUser(username, displayName) {
    const users = UserManager.getUsers();
    const normalized = username.toLowerCase().trim();
    
    // Check for duplicate
    if (users.some(u => u.username === normalized)) {
      return false;
    }

    users.push({ username: normalized, displayName: displayName.trim() || normalized });
    UserManager.saveUsers(users);

    // Initialize empty stats for the new user
    const stats = { ...Storage.DEFAULT_STATS };
    localStorage.setItem(`wordtype_stats_${normalized}`, JSON.stringify(stats));
    
    return true;
  }

  /**
   * Delete a user and all their data.
   * @param {string} username
   */
  static deleteUser(username) {
    let users = UserManager.getUsers();
    users = users.filter(u => u.username !== username);
    UserManager.saveUsers(users);
    localStorage.removeItem(`wordtype_stats_${username}`);
  }

  /**
   * Get the storage key for a user's stats for a specific game.
   * @param {string} username
   * @param {string} [gameId='wordtype'] - The game identifier
   * @returns {string}
   */
  static getStatsKey(username, gameId = 'wordtype') {
    return `wordtype_stats_${username}_${gameId}`;
  }

  /**
   * Get the current active username.
   * @returns {string}
   */
  static getCurrentUser() {
    return localStorage.getItem('wordtype_current_user') || 'default';
  }

  /**
   * Set the current active user.
   * @param {string} username
   */
  static setCurrentUser(username) {
    localStorage.setItem('wordtype_current_user', username);
  }

  /**
   * Get display name for a username.
   * @param {string} username
   * @returns {string}
   */
  static getDisplayName(username) {
    const users = UserManager.getUsers();
    const user = users.find(u => u.username === username);
    return user ? user.displayName : username;
  }

  /**
   * Check if a username is valid (3-20 chars, alphanumeric + underscore + space).
   * @param {string} username
   * @returns {boolean}
   */
  static isValidUsername(username) {
    return /^[a-zA-Z0-9_\u00C0-\u1EF9 ]{2,20}$/.test(username.trim());
  }
}