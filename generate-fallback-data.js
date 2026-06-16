/**
 * generate-fallback-data.js
 * 
 * Reads JSON data files and generates js/data.js with embedded fallback data.
 * This ensures the fallback data in data.js stays in sync with the JSON files.
 * 
 * Usage: node generate-fallback-data.js
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const outputFile = path.join(__dirname, 'js', 'data.js');

const files = {
  level1: path.join(dataDir, 'level1.json'),
  level2: path.join(dataDir, 'level2.json'),
  level3: path.join(dataDir, 'level3.json'),
  boss: path.join(dataDir, 'boss.json')
};

// Read all JSON files
const data = {};
for (const [key, filePath] of Object.entries(files)) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    data[key] = JSON.parse(content);
    console.log(`Loaded ${key}: ${data[key].length} items`);
  } catch (err) {
    console.error(`Error reading ${filePath}: ${err.message}`);
    process.exit(1);
  }
}

// Generate data.js
let output = `/**
 * Data Module - Embedded Fallback Data
 * 
 * This file serves as a FALLBACK when JSON files cannot be loaded via fetch()
 * (e.g., when opened directly from file:// protocol).
 * 
 * PRIMARY data source: /data/level1.json, /data/level2.json, /data/level3.json, /data/boss.json
 * Edit those JSON files to change game content.
 * 
 * When running via a local server (recommended), the JSON files are loaded directly.
 * This embedded data only activates when fetch() fails.
 * 
 * AUTO-GENERATED from JSON files. Do not edit manually.
 * Run: node generate-fallback-data.js
 */

window.FallbackData = {

  /** Level 1: ${data.level1.length} words */
  level1: ${JSON.stringify(data.level1, null, 2).split('\n').map(l => '    ' + l).join('\n').trim()},

  /** Level 2: ${data.level2.length} words */
  level2: ${JSON.stringify(data.level2, null, 2).split('\n').map(l => '    ' + l).join('\n').trim()},

  /** Level 3: ${data.level3.length} words */
  level3: ${JSON.stringify(data.level3, null, 2).split('\n').map(l => '    ' + l).join('\n').trim()},

  /** Boss fight: ${data.boss.length} questions */
  boss: ${JSON.stringify(data.boss, null, 2).split('\n').map(l => '    ' + l).join('\n').trim()}
};
`;

fs.writeFileSync(outputFile, output, 'utf8');
console.log(`\nGenerated ${outputFile} successfully!`);
console.log(`File size: ${(fs.statSync(outputFile).size / 1024).toFixed(1)} KB`);