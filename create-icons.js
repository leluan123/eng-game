/**
 * Create simple PNG icons without external dependencies
 * Run: node create-icons.js
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ICONS_DIR = path.join(__dirname, 'icons');
const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

function createPNG(width, height, r, g, b) {
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // color type: RGB
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = createChunk('IHDR', ihdrData);

  // IDAT chunk - create image data
  const rawData = Buffer.alloc(height * (1 + width * 3));
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(cx, cy) * 0.9;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (1 + width * 3);
    rawData[rowOffset] = 0; // filter: none

    for (let x = 0; x < width; x++) {
      const px = x + 0.5;
      const py = y + 0.5;
      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const pixelOffset = rowOffset + 1 + x * 3;

      if (dist <= radius) {
        // Inside circle - gradient from light purple to purple
        const t = dist / radius;
        const pr = Math.round(139 + (108 - 139) * t); // #8b85ff -> #6c63ff
        const pg = Math.round(133 + (99 - 133) * t);
        const pb = Math.round(255 + (255 - 255) * t);

        // Draw "En" text area - make center white-ish
        const normX = (px - cx) / radius;
        const normY = (py - cy) / radius;

        // Simple text approximation: white area in center
        if (Math.abs(normX) < 0.35 && Math.abs(normY) < 0.15) {
          rawData[pixelOffset] = 255;
          rawData[pixelOffset + 1] = 255;
          rawData[pixelOffset + 2] = 255;
        } else {
          rawData[pixelOffset] = pr;
          rawData[pixelOffset + 1] = pg;
          rawData[pixelOffset + 2] = pb;
        }
      } else {
        // Outside circle - transparent (white background for compatibility)
        rawData[pixelOffset] = 240;
        rawData[pixelOffset + 1] = 244;
        rawData[pixelOffset + 2] = 255;
      }
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idat = createChunk('IDAT', compressed);

  // IEND chunk
  const iend = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeBuffer = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeBuffer, data]);

  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcData), 0);

  return Buffer.concat([length, typeBuffer, data, crc]);
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

console.log('Creating PWA icons...\n');

SIZES.forEach(size => {
  const png = createPNG(size, size, 108, 99, 255);
  const filePath = path.join(ICONS_DIR, `icon-${size}x${size}.png`);
  fs.writeFileSync(filePath, png);
  const kb = (png.length / 1024).toFixed(1);
  console.log(`  ✓ icon-${size}x${size}.png (${kb} KB)`);
});

console.log(`\nAll ${SIZES.length} icons created in icons/ folder!`);
console.log('Icons are purple circles - replace with your custom design for production.');