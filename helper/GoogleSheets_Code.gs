/**
 * Google Apps Script - Game English Analytics Logger
 * 
 * This script receives play data from the Game English Hub,
 * logs it to a Google Sheet for analysis.
 * 
 * HOW TO DEPLOY:
 * 1. Go to https://sheets.google.com and create a new spreadsheet
 * 2. Name it "Game English Analytics"
 * 3. Go to Extensions → Apps Script
 * 4. Delete the default code and paste this entire file
 * 5. Click Save (💾) → Name it "Game English Logger"
 * 6. Click Deploy → New Deployment
 * 7. Choose Type: "Web App"
 * 8. Execute as: "Me"
 * 9. Who has access: "Anyone" (since users need to send data)
 * 10. Click Deploy → Copy the Web App URL
 * 11. Paste the URL into shared/js/analytics.js:
 *     Analytics.SHEETS_WEB_APP_URL = 'YOUR_URL_HERE';
 * 
 * Sheet structure (auto-created):
 * - Sheet 1: "Raw Data" - All play sessions
 * - Sheet 2: "Summary" - Daily/Monthly summaries
 */

// ============================================================
// CONFIGURATION
// ============================================================

/** Sheet names */
const SHEET_RAW = 'Raw Data';
const SHEET_SUMMARY = 'Summary';
const SHEET_DEVICES = 'Devices';

// ============================================================
// WEB APP ENTRY POINT
// ============================================================

/**
 * Handle GET requests (for testing).
 * Just returns a simple status page.
 */
function doGet() {
  return HtmlService.createHtmlOutput(`
    <h1>📊 Game English Analytics Logger</h1>
    <p>Status: ✅ Running</p>
    <p>This is a Google Apps Script Web App for logging game analytics.</p>
    <p>Send POST requests with JSON payload to log data.</p>
    <hr>
    <h3>Example POST payload:</h3>
    <pre>{
  "deviceId": "uuid-here",
  "timestamp": "2026-01-01T12:00:00.000Z",
  "gameId": "wordtype",
  "xp": 150,
  "playTime": 300,
  "level": 2,
  "accuracy": 85,
  "bossDefeated": 1,
  "totalQuestions": 30,
  "totalCorrect": 25
}</pre>
  `);
}

/**
 * Handle POST requests - Receives game analytics from the client.
 * Expects JSON payload with play session data.
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Log to raw data sheet
    logToRawSheet(data);
    
    // Update device tracking
    updateDeviceSheet(data);
    
    // Update summary
    updateSummarySheet(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Data logged successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error('Error processing request:', err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
// RAW DATA LOGGING
// ============================================================

/**
 * Log a play session to the Raw Data sheet.
 * @param {Object} data - The play session data
 */
function logToRawSheet(data) {
  const sheet = getOrCreateSheet(SHEET_RAW);
  
  // Check if headers exist, create them if not
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp', 'Device ID', 'Game ID', 'XP Earned', 
      'Play Time (s)', 'Level', 'Accuracy (%)', 
      'Boss Defeated', 'Total Questions', 'Total Correct'
    ];
    sheet.appendRow(headers);
    // Freeze header row
    sheet.setFrozenRows(1);
  }
  
  // Append the data row
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.deviceId || 'unknown',
    data.gameId || 'unknown',
    data.xp || 0,
    data.playTime || 0,
    data.level || 0,
    data.accuracy || 0,
    data.bossDefeated || 0,
    data.totalQuestions || 0,
    data.totalCorrect || 0
  ]);
}

// ============================================================
// DEVICE TRACKING
// ============================================================

/**
 * Update the Devices sheet with unique device IDs and their first/last seen dates.
 * @param {Object} data - The play session data
 */
function updateDeviceSheet(data) {
  const sheet = getOrCreateSheet(SHEET_DEVICES);
  const deviceId = data.deviceId || 'unknown';
  const timestamp = data.timestamp || new Date().toISOString();
  
  // Check if headers exist
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Device ID', 'First Seen', 'Last Seen', 'Total Sessions']);
    sheet.setFrozenRows(1);
  }
  
  // Look for existing device
  const existingData = sheet.getDataRange().getValues();
  let found = false;
  
  for (let i = 1; i < existingData.length; i++) {
    if (existingData[i][0] === deviceId) {
      // Update last seen and session count
      const lastSeen = new Date(timestamp);
      const currentSessions = (existingData[i][3] || 0) + 1;
      sheet.getRange(i + 1, 3).setValue(lastSeen);
      sheet.getRange(i + 1, 4).setValue(currentSessions);
      found = true;
      break;
    }
  }
  
  if (!found) {
    // New device - add row
    sheet.appendRow([
      deviceId,
      new Date(timestamp),
      new Date(timestamp),
      1
    ]);
  }
}

// ============================================================
// SUMMARY
// ============================================================

/**
 * Update summary statistics.
 * Calculates per-day and per-game summaries.
 */
function updateSummarySheet(data) {
  const sheet = getOrCreateSheet(SHEET_SUMMARY);
  const today = (data.timestamp || new Date().toISOString()).substring(0, 10);
  
  // Check if headers exist
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Date', 'Game ID', 'Total Sessions', 'Total XP', 
      'Total Play Time (s)', 'Avg Accuracy (%)', 'Bosses Defeated'
    ]);
    sheet.setFrozenRows(1);
  }
  
  // Find or create summary row for today + game
  const existingData = sheet.getDataRange().getValues();
  let found = false;
  
  for (let i = 1; i < existingData.length; i++) {
    if (existingData[i][0] === today && existingData[i][1] === data.gameId) {
      // Update existing row
      const currentRow = i + 1;
      sheet.getRange(currentRow, 3).setValue((existingData[i][2] || 0) + 1); // Sessions
      sheet.getRange(currentRow, 4).setValue((existingData[i][3] || 0) + (data.xp || 0)); // XP
      sheet.getRange(currentRow, 5).setValue((existingData[i][4] || 0) + (data.playTime || 0)); // Play time
      // Recalculate average accuracy
      const oldSessions = existingData[i][2] || 0;
      const oldAccuracy = existingData[i][5] || 0;
      const newSessions = oldSessions + 1;
      const newAvg = Math.round(((oldAccuracy * oldSessions) + (data.accuracy || 0)) / newSessions);
      sheet.getRange(currentRow, 6).setValue(newAvg); // Avg accuracy
      sheet.getRange(currentRow, 7).setValue((existingData[i][6] || 0) + (data.bossDefeated || 0)); // Bosses
      found = true;
      break;
    }
  }
  
  if (!found) {
    sheet.appendRow([
      today,
      data.gameId || 'unknown',
      1, // Sessions
      data.xp || 0,
      data.playTime || 0,
      data.accuracy || 0,
      data.bossDefeated || 0
    ]);
  }
}

// ============================================================
// UTILITY
// ============================================================

/**
 * Get an existing sheet by name, or create it if it doesn't exist.
 * @param {string} name - The sheet name
 * @returns {Sheet} The Google Sheet object
 */
function getOrCreateSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}