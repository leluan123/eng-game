# 📚 WordType - English Grammar Game

A fun, interactive English Grammar learning game built with vanilla HTML, CSS, and JavaScript. Learn word types (Nouns, Verbs, Adjectives, Adverbs) through gameplay with combo systems, boss fights, and multiple difficulty levels.

## 🎮 Features

- **3 Levels** of increasing difficulty
- **Word Type Classification** - Noun, Verb, Adjective, Adverb
- **Boss Fight** - Final challenge at the end of each level
- **Combo System** - Earn bonus XP for streaks
- **Multiple Users** - Create and switch between profiles
- **Progress Tracking** - Statistics, XP, and level progress
- **Offline Support** - Works without internet (PWA)
- **Mobile Optimized** - Installable as a web app on phones

## 🚀 Quick Start

### Option 1: Run Locally
```bash
# Clone the repository
git clone https://github.com/leluan123/eng-game.git
cd eng-game

# Start a local server (any of these work)
npx serve .
# or
python -m http.server 8000
# or use VS Code Live Server extension

# Open http://localhost:3000 (or 8000)
```

### Option 2: Open Directly
Simply open `index.html` in your browser. Note: Service Worker may not work without a server.

## 📱 Install as Mobile App (PWA)

This game is a **Progressive Web App (PWA)** and can be installed on your phone:

### Android (Chrome)
1. Open the game URL in Chrome
2. Tap the **"Add to Home Screen"** banner, or
3. Tap **⋮ menu** → **"Install app"** / **"Add to Home Screen"**

### iPhone (Safari)
1. Open the game URL in Safari
2. Tap the **Share button** (□↗)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"**

The app will appear on your home screen like a native app!

## 🌐 Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, `/ (root)` folder
5. Click **Save**
6. Your game will be live at: `https://leluan123.github.io/eng-game/`

## 🌐 Deploy to Netlify (Free)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop your entire project folder
4. Your game will be live with a free URL instantly!

## 🌐 Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"New Project"** → Import your repository
3. Click **"Deploy"** (no configuration needed)
4. Your game will be live at a free `.vercel.app` URL

## 🎨 Generate App Icons

### Using the Browser (Recommended)
1. Open `icons/generate-icons.html` in your browser
2. Click **"Download All"**
3. Move the downloaded PNG files into the `icons/` folder

### Using Node.js
```bash
# Install canvas package (optional)
npm install canvas

# Generate icons
node generate-icons.js
```

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── manifest.json           # PWA Web App Manifest
├── sw.js                   # Service Worker (offline support)
├── css/
│   └── style.css           # All styles
├── js/
│   ├── data.js             # Data loader
│   ├── game.js             # Main game controller
│   ├── ui.js               # UI Manager
│   ├── audio.js            # Sound effects
│   ├── storage.js          # LocalStorage manager
│   ├── levelManager.js     # Level management
│   ├── bossManager.js      # Boss fight logic
│   └── userManager.js      # Multi-user support
├── data/
│   ├── level1.json         # Level 1 words
│   ├── level2.json         # Level 2 words
│   ├── level3.json         # Level 3 words
│   └── boss.json           # Boss fight questions
├── icons/                  # PWA icons
│   ├── generate-icons.html # Icon generator tool
│   └── icon.svg            # Fallback SVG icon
└── generate-icons.js       # Node.js icon generator
```

## 🛠️ PWA Features

| Feature | Status |
|---------|--------|
| Web App Manifest | ✅ |
| Service Worker (Offline) | ✅ |
| Installable (Add to Home Screen) | ✅ |
| Safe Area Insets (iPhone) | ✅ |
| Haptic Feedback | ✅ |
| Touch Optimizations | ✅ |
| Prevent Zoom on Input | ✅ |

## 📝 License

Created by **Le Luan**