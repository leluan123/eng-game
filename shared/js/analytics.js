/**
 * Analytics Module
 * 
 * Handles:
 * 1. Device ID generation & management (localStorage-based UUID)
 * 2. Google Analytics 4 custom event tracking
 * 3. Google Sheets logging (via Web App)
 * 
 * This module works entirely client-side for GitHub Pages deployment.
 */

class Analytics {
  /** Key for storing device ID in localStorage */
  static DEVICE_ID_KEY = 'gameenglish_device_id';

  /** Key for storing session start time */
  static SESSION_KEY = 'gameenglish_session';

  /** Key for storing daily play data */
  static DAILY_KEY = 'gameenglish_daily';

  /** Google Sheets Web App URL - set this after deploying the Apps Script */
  static SHEETS_WEB_APP_URL = '';

  /**
   * Get or create a persistent Device ID.
   * This ID is stored in localStorage and uniquely identifies this browser/device.
   * @returns {string} The device UUID
   */
  static getDeviceId() {
    let deviceId = localStorage.getItem(Analytics.DEVICE_ID_KEY);
    if (!deviceId) {
      deviceId = Analytics._generateUUID();
      localStorage.setItem(Analytics.DEVICE_ID_KEY, deviceId);
    }
    return deviceId;
  }

  /**
   * Generate a random UUID v4.
   * @returns {string}
   */
  static _generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  /**
   * Start a new session timer.
   * Call this when the app loads or a game starts.
   */
  static startSession() {
    const session = {
      startTime: Date.now(),
      deviceId: Analytics.getDeviceId()
    };
    sessionStorage.setItem(Analytics.SESSION_KEY, JSON.stringify(session));
  }

  /**
   * End the current session and return duration in seconds.
   * @returns {number} Session duration in seconds
   */
  static endSession() {
    try {
      const raw = sessionStorage.getItem(Analytics.SESSION_KEY);
      if (!raw) return 0;
      const session = JSON.parse(raw);
      const duration = Math.round((Date.now() - session.startTime) / 1000);
      sessionStorage.removeItem(Analytics.SESSION_KEY);
      return duration;
    } catch (e) {
      return 0;
    }
  }

  /**
   * Track a custom event via Google Analytics 4.
   * Queues events if gtag is not yet loaded.
   * @param {string} eventName - The event name (e.g., 'game_start', 'level_complete')
   * @param {Object} [params] - Additional parameters
   */
  static trackEvent(eventName, params = {}) {
    const eventParams = {
      ...params,
      device_id: Analytics.getDeviceId()
    };

    // Queue events if gtag not ready yet
    if (typeof gtag !== 'function') {
      if (!Analytics._eventQueue) Analytics._eventQueue = [];
      Analytics._eventQueue.push({ eventName, eventParams });
      console.log(`[Analytics] Queued: ${eventName}`, eventParams);
      return;
    }

    gtag('event', eventName, eventParams);
    console.log(`[Analytics] Tracked: ${eventName}`, eventParams);
  }

  /**
   * Flush queued events (call after gtag is confirmed loaded).
   */
  static flushEventQueue() {
    if (!Analytics._eventQueue) return;
    const queue = [...Analytics._eventQueue];
    Analytics._eventQueue = [];
    queue.forEach(({ eventName, eventParams }) => {
      gtag('event', eventName, eventParams);
      console.log(`[Analytics] Flushed: ${eventName}`, eventParams);
    });
  }

  /**
   * Log play data to Google Sheets (if Web App URL is configured).
   * @param {Object} data - The data to log
   * @param {string} data.gameId - Game identifier
   * @param {number} data.xp - XP earned
   * @param {number} data.playTime - Play time in seconds
   * @param {number} data.level - Level played
   * @param {number} data.accuracy - Accuracy percentage
   * @param {boolean} data.bossDefeated - Whether boss was defeated
   */
  static logToSheet(data) {
    if (!Analytics.SHEETS_WEB_APP_URL) {
      console.log('[Analytics] Sheets URL not configured. Skipping log.');
      return;
    }

    const payload = {
      deviceId: Analytics.getDeviceId(),
      timestamp: new Date().toISOString(),
      gameId: data.gameId || 'unknown',
      xp: data.xp || 0,
      playTime: data.playTime || 0,
      level: data.level || 0,
      accuracy: data.accuracy || 0,
      bossDefeated: data.bossDefeated ? 1 : 0,
      totalQuestions: data.totalQuestions || 0,
      totalCorrect: data.totalCorrect || 0
    };

    // Use sendBeacon for reliability (works even when page is closing)
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon(Analytics.SHEETS_WEB_APP_URL, blob);
      console.log('[Analytics] Logged to Sheets:', payload);
    } catch (e) {
      // Fallback to fetch
      fetch(Analytics.SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    }
  }

  /**
   * Update daily play stats in localStorage.
   * Tracks: today's XP, today's sessions, last active date
   */
  static updateDailyStats(xpGained = 0) {
    try {
      const today = new Date().toDateString();
      const raw = localStorage.getItem(Analytics.DAILY_KEY);
      let daily = raw ? JSON.parse(raw) : {};

      if (daily.date !== today) {
        // New day - reset daily stats
        daily = {
          date: today,
          xp: 0,
          sessions: 0,
          firstPlayed: Date.now()
        };
      }

      daily.xp = (daily.xp || 0) + xpGained;
      daily.sessions = (daily.sessions || 0) + 1;
      daily.lastActive = Date.now();

      localStorage.setItem(Analytics.DAILY_KEY, JSON.stringify(daily));
    } catch (e) {
      // Ignore storage errors
    }
  }

  /**
   * Get daily stats for the current user.
   * @returns {Object} { date, xp, sessions, lastActive, firstPlayed }
   */
  static getDailyStats() {
    try {
      const raw = localStorage.getItem(Analytics.DAILY_KEY);
      if (!raw) {
        return { date: new Date().toDateString(), xp: 0, sessions: 0, lastActive: null, firstPlayed: null };
      }
      return JSON.parse(raw);
    } catch (e) {
      return { date: new Date().toDateString(), xp: 0, sessions: 0, lastActive: null, firstPlayed: null };
    }
  }

  /**
   * Get all-time stats for the current device.
   * @returns {Object} { deviceId, firstSeen, lastSeen, totalSessions, totalPlayTime }
   */
  static getDeviceStats() {
    const deviceId = Analytics.getDeviceId();
    const daily = Analytics.getDailyStats();
    return {
      deviceId,
      firstSeen: daily.firstPlayed ? new Date(daily.firstPlayed).toLocaleDateString() : 'Today',
      lastSeen: daily.lastActive ? new Date(daily.lastActive).toLocaleDateString() : 'Today',
      todayXp: daily.xp || 0,
      todaySessions: daily.sessions || 0
    };
  }
}