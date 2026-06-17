# 📚 WordType - Game Process & Logic Documentation

> **Tài liệu mô tả toàn bộ quy trình, logic và kiến trúc game WordType**
> English Grammar Learning Game - PWA Mobile App

---

## 📋 Mục lục

1. [Tổng quan проекта](#1-tổng-quan)
2. [Kiến trúc hệ thống](#2-kiến-trúc-hệ-thống)
3. [Sơ đồ luồng game (Game Flow)](#3-sơ-đồ-luồng-game)
4. [Chi tiết các module](#4-chi-tiết-các-module)
5. [Cấu trúc dữ liệu](#5-cấu-trúc-dữ-liệu)
6. [Logic gameplay chi tiết](#6-logic-gameplay-chi-tiết)
7. [Hệ thống scoring & progression](#7-hệ-thống-scoring--progression)
8. [Boss Fight Logic](#8-boss-fight-logic)
9. [Multi-User System](#9-multi-user-system)
10. [PWA & Offline Support](#10-pwa--offline-support)

---

## 1. Tổng quan

**WordType** là game giáo dục giúp người học phân loại từ vựng tiếng Anh theo 4 loại:

```
┌─────────────────────────────────────────┐
│           WORD CATEGORIES               │
├───────────┬───────────┬────────┬────────┤
│   NOUN    │   VERB    │  ADJ   │  ADV   │
│  (Danh từ)│ (Động từ) │(Tính từ)│(Trạng từ)│
├───────────┼───────────┼────────┼────────┤
│ success   │ create    │success-│success-│
│ education │ develop   │  ful   │  fully │
│ creation  │ cultivate │creative│creative│
└───────────┴───────────┴────────┴────────┘
```

**Mục tiêu**: Player nhìn 1 từ → chọn đúng loại từ (Noun/Verb/Adjective/Adverb)

---

## 2. Kiến trúc hệ thống

### 2.1 Sơ đồ module

```
┌─────────────────────────────────────────────────────────┐
│                     index.html                           │
│  ┌───────────────────────────────────────────────────┐  │
│  │                    Game (game.js)                  │  │
│  │          ← Central Orchestrator / Controller →     │  │
│  └──────┬────────┬────────┬────────┬────────┬────────┘  │
│         │        │        │        │        │            │
│    ┌────▼───┐ ┌──▼───┐ ┌──▼──┐ ┌──▼───┐ ┌──▼────────┐  │
│    │   UI   │ │Audio │ │Level│ │ Boss │ │  Storage   │  │
│    │Manager │ │Manager│ │Mgr  │ │ Mgr  │ │(localStorage)│
│    │ (ui.js)│ │(audio│ │     │ │      │ │(storage.js)│  │
│    └────┬───┘ │ .js) │ └──┬──┘ └──┬───┘ └──┬────────┘  │
│         │     └──────┘    │       │        │            │
│    ┌────▼──────────┐   ┌──▼──┐ ┌──▼──┐ ┌──▼────────┐  │
│    │   DataManager │   │JSON │ │JSON │ │UserManager │  │
│    │  (data.js)    │   │Level│ │Boss │ │(userManager│  │
│    │  FallbackData │   │ 1-3 │ │.json│ │   .js)     │  │
│    └───────────────┘   └─────┘ └─────┘ └────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 2.2 Tải dữ liệu - Flow

```
Game.init()
    │
    ├──► LevelManager.loadAllLevels()
    │       │
    │       ├── Thử fetch('data/level1.json') ──► Thành công → Dùng JSON
    │       │
    │       └── Thất bại (file:// protocol) ──► Dùng FallbackData (data.js)
    │
    └──► BossManager.loadBossData()
            │
            ├── Thử fetch('data/boss.json') ──► Thành công → Dùng JSON
            │
            └── Thất bại ──► Dùng FallbackData.boss
```

---

## 3. Sơ đồ luồng game (Game Flow)

### 3.1 Toàn bộ game flow

```
                        ┌──────────────┐
                        │  APP START   │
                        │  Game.init() │
                        └──────┬───────┘
                               │
                    ┌──────────▼──────────┐
                    │    MAIN MENU        │
                    │ ┌─────┐ ┌────────┐  │
                    │ │ PLAY│ │ LEVELS │  │
                    │ └─────┘ │ STATS  │  │
                    │         │ USERS  │  │
                    │         └────────┘  │
                    └──────────┬──────────┘
                               │
                     ┌─────────▼─────────┐
                     │  User clicks PLAY  │
                     └─────────┬─────────┘
                               │
                    ┌──────────▼──────────┐
                    │  START LEVEL        │
                    │  hearts = 5         │
                    │  combo = 0          │
                    │  questionNumber = 0 │
                    └──────────┬──────────┘
                               │
              ┌────────────────▼────────────────┐
              │         GAMEPLAY LOOP            │
              │                                  │
              │  ┌────────────────────────────┐  │
              │  │  questionNumber++           │  │
              │  │  if > totalQuestions        │──┐
              │  │     → BOSS FIGHT            │  │
              │  └─────────┬──────────────────┘  │
              │            │                      │
              │  ┌─────────▼──────────────────┐  │
              │  │  Display Word Card          │  │
              │  │  word = getNextWord()       │  │
              │  │  Show: hint, word, meaning  │  │
              │  └─────────┬──────────────────┘  │
              │            │                      │
              │  ┌─────────▼──────────────────┐  │
              │  │  Player clicks N/V/Adj/Adv  │  │
              │  └─────────┬──────────────────┘  │
              │            │                      │
              │  ┌─────────▼──────────────────┐  │
              │  │  Check: isCorrect?          │  │
              │  └────┬───────────────┬───────┘  │
              │       │               │           │
              │   ┌───▼───┐      ┌───▼────┐     │
              │   │CORRECT │      │ WRONG  │     │
              │   │+10 XP  │      │-5 XP   │     │
              │   │streak++│      │streak=0 │     │
              │   │combo++ │      │hearts-1 │     │
              │   └───┬───┘      └───┬────┘     │
              │       │               │           │
              │  ┌────▼───────────────▼───────┐  │
              │  │  Show Feedback Overlay      │  │
              │  │  (hint, family, XP gained)  │  │
              │  └─────────┬──────────────────┘  │
              │            │                      │
              │  ┌─────────▼──────────────────┐  │
              │  │  Click OK → Next Question   │──┐
              │  └────────────────────────────┘  │
              │                                  │
              │  Check: hearts <= 0?              │
              │  YES → GAME OVER                  │
              │                                  │
              └──────────────────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │     BOSS FIGHT      │
                    │  (Final Challenge)  │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │   Boss Defeated?    │
                    │   YES → VICTORY     │
                    │   NO  → GAME OVER   │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │   LEVEL COMPLETE    │
                    │   Check unlock next │
                    │   → Unlock Level 2? │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │   Back to MENU      │
                    └─────────────────────┘
```

### 3.2 State Machine

```
┌─────────┐   PLAY    ┌──────────┐  allQuestionsDone  ┌────────────┐
│  MENU   │──────────►│ PLAYING  │────────────────────►│ BOSS FIGHT │
│         │           │          │                     │            │
└─────────┘           └────┬─────┘                     └──────┬─────┘
                           │                                  │
                    hearts <= 0                        ┌──────┴──────┐
                           │                          │             │
                    ┌──────▼──────┐            DEFEATED        HEARTS=0
                    │  GAME OVER  │                │             │
                    │             │         ┌──────▼──────┐  ┌──▼────────┐
                    │  ┌────────┐ │         │  VICTORY    │  │ GAME OVER │
                    │  │ RETRY  │ │         │  +100 XP    │  │           │
                    │  │  MENU  │ │         │  +1 Heart   │  │           │
                    │  └────────┘ │         └──────┬──────┘  └───────────┘
                    └─────────────┘                │
                                          ┌───────▼────────┐
                                          │ LEVEL COMPLETE │
                                          │ Unlock next?   │
                                          └───────┬────────┘
                                                  │
                                          ┌───────▼────────┐
                                          │  MENU / NEXT   │
                                          └────────────────┘
```

---

## 4. Chi tiết các module

### 4.1 Game (game.js) - Central Controller

```
Responsibilities:
├── Khởi tạo tất cả modules
├── Quản lý game state (hearts, xp, combo, streak)
├── Điều phối flow giữa các screen
├── Xử lý input từ player
├── Tính toán scoring
├── Trigger boss fight
└── Haptic feedback (mobile)
```

**Key Properties:**
| Property | Default | Mô tả |
|----------|---------|-------|
| `hearts` | 5 | Số mạng hiện tại |
| `maxHearts` | 5 | Số mạng tối đa |
| `xp` | 0 | Điểm kinh nghiệm |
| `currentLevel` | 1 | Level đang chơi |
| `combo` | 0 | Combo streak hiện tại |
| `questionNumber` | 0 | Câu hỏi hiện tại |
| `isPlaying` | false | Đang trong game? |
| `isBossFight` | false | Đang boss fight? |
| `isAnswering` | false | Đang xử lý câu trả lời? |

### 4.2 UIManager (ui.js)

```
Responsibilities:
├── Hiển thị/ẩn screens
├── Render word cards
├── Hiển thị feedback overlay
├── Cập nhật HUD (hearts, XP bar, combo)
├── Boss fight UI
├── Combo popup animation
├── XP gain floating animation
└── User management UI
```

### 4.3 LevelManager (levelManager.js)

```
Responsibilities:
├── Load level data (JSON → fallback)
├── Quản lý word pool per level
├── Smart random (không lặp từ)
├── Fisher-Yates shuffle
├── Difficulty settings (30/50/80 questions)
└── Level unlock requirements
```

**Algorithm - Smart Word Selection:**
```
getNextWord():
    1. Find first unused word in pool
    2. If found → mark as used, remove from pool, return
    3. If ALL words used → reshuffle pool, reset tracker
    4. Return first word from reshuffled pool
```

### 4.4 BossManager (bossManager.js)

```
Responsibilities:
├── Load boss questions from JSON
├── HP management (100 HP)
├── Difficulty-based damage
├── Question selection (no repeats)
└── Boss defeat detection
```

### 4.5 Storage (storage.js)

```
Responsibilities:
├── localStorage CRUD per user
├── Default stats management
├── Stats recalculation (accuracy)
├── Level unlock/completion tracking
└── Data migration (forward compatibility)
```

### 4.6 AudioManager (audio.js)

```
Responsibilities:
├── Sound effects (correct, wrong, combo)
├── Boss sounds (hit, victory, game over)
├── UI sounds (click, heart loss)
├── Audio context resume (browser policy)
└── Level up sound
```

### 4.7 UserManager (userManager.js)

```
Responsibilities:
├── Create/switch/delete users
├── Per-user localStorage keys
├── Username validation
└── Display name management
```

---

## 5. Cấu trúc dữ liệu

### 5.1 Word Object (Level Data)

```json
{
  "id": 1,
  "word": "successful",
  "type": "adjective",
  "family": "success",
  "level": 1,
  "difficulty": 1,
  "vnMeaning": "thành công",
  "hint": "-ful",
  "confusionWords": ["success", "succeed", "successfully"]
}
```

| Field | Type | Mô tả |
|-------|------|-------|
| `id` | number | ID duy nhất |
| `word` | string | Từ tiếng Anh |
| `type` | string | `noun` / `verb` / `adjective` / `adverb` |
| `family` | string | Word family (root word) |
| `level` | number | Level mà từ này thuộc về (1-3) |
| `difficulty` | number | Độ khó (1=easy, 2=medium, 3=hard) |
| `vnMeaning` | string | Nghĩa tiếng Việt |
| `hint` | string | Gợi ý suffix (-ful, -ly, -tion...) |
| `confusionWords` | string[] | Các từ hay nhầm lẫn |

### 5.2 Boss Question Object

```json
{
  "id": 1,
  "sentence": "She is a _____ student.",
  "answer": "successful",
  "options": ["success", "successful", "successfully", "succeed"],
  "family": "success",
  "explanation": "'successful' là tính từ (adjective)修饰 student. Dấu hiệu: '-ful' = adjective."
}
```

### 5.3 Player Stats Object (Storage)

```json
{
  "xp": 150,
  "currentLevel": 2,
  "highestCombo": 12,
  "accuracy": 85.5,
  "wordsLearned": 45,
  "bossesDefeated": 3,
  "totalQuestions": 60,
  "totalCorrect": 51,
  "unlockedLevels": { "1": 1, "2": 1, "3": 0 },
  "completedLevels": { "1": true },
  "currentStreak": 5,
  "maxStreak": 12
}
```

### 5.4 Storage Key Structure (Multi-User)

```
localStorage:
├── wordtype_current_user → "leluan"
├── wordtype_users → ["leluan", "player2"]
├── wordtype_stats_leluan → { xp: 150, ... }
├── wordtype_stats_player2 → { xp: 0, ... }
└── wordtype_profile_leluan → { displayName: "Le Luan" }
```

---

## 6. Logic gameplay chi tiết

### 6.1 Question Flow

```
Player starts level
       │
       ▼
┌─────────────────────────────┐
│ LevelManager.setLevel(n)    │
│ - Filter words by level     │
│ - Shuffle pool (Fisher-Yates)│
│ - Reset usedWordIds tracker │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ _nextQuestion()             │
│ - questionNumber++          │
│ - If > totalQuestions →     │
│   START BOSS FIGHT          │
│ - word = getNextWord()      │
│ - ui.displayWord(word)      │
│   Shows: hint, word, meaning│
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ Player clicks N/V/Adj/Adv   │
│ - isAnswering = true        │
│ - Disable all buttons       │
│ - Check: type === correct?  │
└──────────────┬──────────────┘
               │
       ┌───────┴────────┐
       │                │
   ┌───▼───┐      ┌────▼────┐
   │CORRECT │      │  WRONG  │
   │        │      │         │
   │+10 XP  │      │ -5 XP   │
   │streak++│      │streak=0 │
   │combo++ │      │hearts-- │
   │        │      │         │
   │Check   │      │         │
   │combo   │      │         │
   │bonuses │      │         │
   └───┬────┘      └────┬────┘
       │                │
       └───────┬────────┘
               │
               ▼
┌─────────────────────────────┐
│ Show Feedback Overlay       │
│ - Icon: ✔ or ✘              │
│ - Detail: +10 XP            │
│ - Hint: "-ful"              │
│ - Family: success, succeed  │
│ - Player clicks OK          │
└──────────────┬──────────────┘
               │
               ▼
       Check hearts <= 0?
       │            │
      YES          NO
       │            │
   GAME OVER    Next Question
               (loop back)
```

### 6.2 Smart Random Algorithm

```
Pool: [word1, word2, word3, ..., word250]
Used: {}

Round 1-250:
    getNextWord() → Pick first unused from pool
    Mark as used → Remove from pool
    
Round 251 (pool empty):
    Reset Used: {} 
    Reshuffle pool (Fisher-Yates)
    Continue picking...
    
Result: Mỗi từ xuất hiện đúng 1 lần trước khi lặp lại
```

---

## 7. Hệ thống scoring & progression

### 7.1 XP System

```
Correct answer:     +10 XP
Wrong answer:       -5 XP (minimum 0)
Boss defeat:       +100 XP

Combo bonuses:
├── 5 streak:      +5 XP bonus
├── 10 streak:     +15 XP bonus
└── 20 streak:     +30 XP bonus
```

### 7.2 Difficulty Settings

```
┌────────────┬─────────┬──────────┬──────────┐
│ Difficulty │Questions │Boss Dmg  │Boss HP   │
├────────────┼─────────┼──────────┼──────────┤
│ Easy       │   30    │ 10/quest │   100    │
│ Medium     │   50    │  5/quest │   100    │
│ Hard       │   80    │  4/quest │   100    │
└────────────┴─────────┴──────────┴──────────┘
```

### 7.3 Level Unlock Requirements

```
Level 1: Always unlocked
Level 2: Accuracy >= 80% AND Max Streak >= 20
Level 3: Accuracy >= 85%
```

### 7.4 Hearts System

```
Start each level:     5 hearts ❤️❤️❤️❤️❤️
Wrong answer:         -1 heart
Boss fight start:     Reset to 5 hearts
Game over:            hearts = 0
```

---

## 8. Boss Fight Logic

### 8.1 When Boss Appears

```
After completing ALL regular questions in a level:
    questionsAnswered >= totalQuestions (30/50/80)
    → Boss Fight starts as FINAL CHALLENGE
```

### 8.2 Boss Fight Flow

```
┌─────────────────────────┐
│     BOSS FIGHT START    │
│  - Boss HP = 100        │
│  - Player hearts = 5    │
│  - Select boss question │
└──────────┬──────────────┘
           │
    ┌──────▼──────────────┐
    │ Display:            │
    │ - Boss HP bar       │
    │ - Sentence with ___ │
    │ - 4 options (words) │
    │ - Family tag        │
    └──────┬──────────────┘
           │
    ┌──────▼──────────────┐
    │ Player picks answer │
    └──────┬──────────────┘
           │
     ┌─────┴─────┐
     │           │
 CORRECT      WRONG
     │           │
     ▼           ▼
Boss HP -=    Player
damagePerHit  hearts--
     │           │
     ▼           ▼
Show         Show
explanation  explanation
     │           │
     ▼           ▼
Boss dead?   Hearts=0?
  │    │       │    │
 YES   NO     YES   NO
  │    │       │    │
VICTORY│   GAME OVER │
       │            │
       └────────────┘
       Next boss question
```

### 8.3 Boss Damage by Difficulty

```
Easy:   100 HP ÷ 10 dmg/hit = 10 correct answers to defeat
Medium: 100 HP ÷ 5 dmg/hit  = 20 correct answers to defeat  
Hard:   100 HP ÷ 4 dmg/hit  = 25 correct answers to defeat
```

---

## 9. Multi-User System

### 9.1 User Data Structure

```
UserManager
├── getUsers()          → [{ username, displayName }]
├── getCurrentUser()    → "leluan"
├── setCurrentUser(u)   → Saves to localStorage
├── createUser(u, d)    → Creates new user profile
├── deleteUser(u)       → Removes user + stats
├── isValidUsername(u)   → 2-20 chars, [a-zA-Z0-9_ ]
└── getStatsKey(u)      → "wordtype_stats_{username}"
```

### 9.2 Per-User Isolation

```
Each user has their OWN:
├── XP progress
├── Level unlocks
├── Statistics
├── Combo records
└── Completion data

Stored as separate localStorage keys:
├── wordtype_stats_leluan
├── wordtype_stats_player2
└── wordtype_stats_teacher
```

---

## 10. PWA & Offline Support

### 10.1 PWA Architecture

```
┌─────────────────────────────────────────┐
│              BROWSER                     │
│  ┌─────────────┐  ┌──────────────────┐  │
│  │  index.html  │  │  manifest.json   │  │
│  │  (App Shell) │  │  (App Metadata)  │  │
│  └──────┬──────┘  └──────────────────┘  │
│         │                                │
│  ┌──────▼──────────────────────────┐    │
│  │        Service Worker (sw.js)    │    │
│  │                                  │    │
│  │  ┌──────────┐  ┌──────────────┐ │    │
│  │  │  CACHE   │  │   FETCH      │ │    │
│  │  │  First   │  │   Network    │ │    │
│  │  │  Strategy│  │   (backup)   │ │    │
│  │  └──────────┘  └──────────────┘ │    │
│  │                                  │    │
│  │  Cached Assets:                  │    │
│  │  ├── index.html                  │    │
│  │  ├── css/style.css               │    │
│  │  ├── js/*.js (all modules)       │    │
│  │  ├── data/*.json (all levels)    │    │
│  │  ├── manifest.json               │    │
│  │  └── icons/*.png                 │    │
│  └──────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

### 10.2 Cache Strategy

```
1. First Visit:
   Service Worker installs → caches ALL assets
   
2. Subsequent Visits:
   Request → Check Cache → Found? → Return cached
                           → Not found? → Fetch network → Cache it
   
3. Background Update:
   Return cached version immediately
   Fetch fresh version in background → Update cache
   
4. Offline:
   Request → Cache → Return (no network needed)
```

### 10.3 Files Added for PWA

```
新增文件:
├── manifest.json          # Web App Manifest
├── sw.js                  # Service Worker
├── icons/                 # PWA Icons
│   ├── icon.svg           # SVG fallback
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png   # Required for install
│   ├── icon-384x384.png
│   └── icon-512x512.png   # Required for install
├── generate-icons.js      # Icon generator (Node.js)
├── create-icons.js        # Pure Node.js icon creator
└── generate-fallback-data.js

修改文件:
├── index.html             # +meta tags, +manifest link, +SW register
├── css/style.css          # +safe area, +touch opt, +PWA CSS
└── js/game.js             # +haptic feedback
```

### 10.4 Mobile Optimizations

```
CSS Optimizations:
├── Safe area insets (iPhone notch/home indicator)
├── overscroll-behavior-y: none (prevent bounce)
├── Touch target minimum: 44px
├── Prevent text selection on buttons
├── Prevent zoom on input focus
├── Standalone mode spacing
└── Haptic feedback (navigator.vibrate)

HTML Meta Tags:
├── theme-color: #6c63ff
├── apple-mobile-web-app-capable: yes
├── apple-mobile-web-app-status-bar-style
├── viewport: width=device-width, user-scalable=no
└── mobile-web-app-capable: yes
```

---

## 📊 Screen Overview

```
┌──────────────┬────────────────────────────────────┐
│ Screen ID    │ Mô tả                              │
├──────────────┼────────────────────────────────────┤
│ screen-menu  │ Main menu - PLAY, Levels, Stats    │
│ screen-levels│ Level selection with lock status    │
│ screen-stats │ Statistics dashboard                │
│ screen-game  │ Core gameplay - word cards + buttons│
│ screen-boss  │ Boss fight - sentence + options     │
│ screen-boss-victory │ Boss defeated celebration    │
│ screen-level-complete │ Level completed + rewards  │
│ screen-gameover │ Out of hearts - retry/menu       │
│ screen-users │ User management - create/switch     │
└──────────────┴────────────────────────────────────┘
```

---

## 🔧 Development Notes

### Data Files
- **Primary**: `/data/level1.json`, `/data/level2.json`, `/data/level3.json`, `/data/boss.json`
- **Fallback**: `/js/data.js` (embedded, auto-generated)
- **Regenerate fallback**: `node generate-fallback-data.js`

### Key Algorithms
1. **Fisher-Yates Shuffle** - Fair random permutation
2. **Smart Random** - No-repeat word selection with pool exhaustion handling
3. **CRC32** - Used in PNG icon generation (create-icons.js)
4. **Cache-First** - Service Worker strategy for offline support

### Browser Compatibility
- Chrome 60+ (full PWA support)
- Safari 11+ (iOS home screen)
- Firefox 60+ (basic)
- Edge 79+ (Chromium-based)

---

*Document created for WordType - English Grammar Game*
*Author: Le Luan*
*Last updated: 2026-06-16*