/**
 * WordType PWA Icon Generator
 * Run: node generate-icons.js
 * 
 * This script generates placeholder PWA icons.
 * For production, replace with your custom designed icons.
 * 
 * Requires: npm install canvas (optional - uses fallback if not available)
 */

const fs = require('fs');
const path = require('path');

const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

try {
  const { createCanvas } = require('canvas');
  console.log('Using canvas package to generate icons...');

  SIZES.forEach(size => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    const r = size / 2;

    // Background circle with gradient
    const gradient = ctx.createRadialGradient(r, r, 0, r, r, r);
    gradient.addColorStop(0, '#8b85ff');
    gradient.addColorStop(1, '#6c63ff');
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // "En" text
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.35}px Arial, sans-serif`;
    ctx.fillText('En', r, r - size * 0.02);

    // Save PNG
    const buffer = canvas.toBuffer('image/png');
    const filePath = path.join(iconsDir, `icon-${size}x${size}.png`);
    fs.writeFileSync(filePath, buffer);
    console.log(`  Created: icon-${size}x${size}.png`);
  });

  console.log('\nAll icons generated successfully in icons/ folder!');
} catch (err) {
  console.log('Canvas package not available. Generating SVG fallback icon...');
  
  // Create SVG icon as fallback
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#8b85ff"/>
      <stop offset="100%" style="stop-color:#6c63ff"/>
    </radialGradient>
  </defs>
  <circle cx="256" cy="256" r="256" fill="url(#bg)"/>
  <text x="256" y="240" text-anchor="middle" dominant-baseline="middle" 
        font-family="Arial, sans-serif" font-size="180" font-weight="bold" fill="white">En</text>
  <text x="256" y="380" text-anchor="middle" font-size="80">⭐</text>
</svg>`;

  const svgPath = path.join(iconsDir, 'icon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log('Created icon.svg as fallback');
  
  // Also create a simple HTML file for manual icon generation
  console.log('\nTo generate PNG icons:');
  console.log('1. Open icons/generate-icons.html in your browser');
  console.log('2. Click "Download All" to save PNG icons');
  console.log('3. Place them in the icons/ folder');
}