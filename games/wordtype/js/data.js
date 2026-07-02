/**
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

  /** Level 1: 250 words */
  level1: [
      {
        "id": 1,
        "word": "successful",
        "type": "adjective",
        "family": "success",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thành công",
        "hint": "-ful",
        "confusionWords": [
          "success",
          "succeed",
          "successfully"
        ]
      },
      {
        "id": 2,
        "word": "successfully",
        "type": "adverb",
        "family": "success",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thành công",
        "hint": "-ly",
        "confusionWords": [
          "success",
          "succeed",
          "successful"
        ]
      },
      {
        "id": 3,
        "word": "beautify",
        "type": "verb",
        "family": "beauty",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm đẹp",
        "hint": "-ify",
        "confusionWords": [
          "beauty",
          "beautiful",
          "beautifully"
        ]
      },
      {
        "id": 4,
        "word": "beautiful",
        "type": "adjective",
        "family": "beauty",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "xinh đẹp",
        "hint": "-ful",
        "confusionWords": [
          "beauty",
          "beautify",
          "beautifully"
        ]
      },
      {
        "id": 5,
        "word": "beautifully",
        "type": "adverb",
        "family": "beauty",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách xinh đẹp",
        "hint": "-ly",
        "confusionWords": [
          "beauty",
          "beautify",
          "beautiful"
        ]
      },
      {
        "id": 6,
        "word": "careful",
        "type": "adjective",
        "family": "care",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "cẩn thận",
        "hint": "-ful",
        "confusionWords": [
          "care",
          "care",
          "carefully"
        ]
      },
      {
        "id": 7,
        "word": "carefully",
        "type": "adverb",
        "family": "care",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách cẩn thận",
        "hint": "-ly",
        "confusionWords": [
          "care",
          "care",
          "careful"
        ]
      },
      {
        "id": 8,
        "word": "health",
        "type": "noun",
        "family": "health",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sức khỏe",
        "hint": "-th",
        "confusionWords": [
          "heal",
          "healthy",
          "healthily"
        ]
      },
      {
        "id": 9,
        "word": "healthy",
        "type": "adjective",
        "family": "health",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "khỏe mạnh",
        "hint": "-y",
        "confusionWords": [
          "health",
          "heal",
          "healthily"
        ]
      },
      {
        "id": 10,
        "word": "healthily",
        "type": "adverb",
        "family": "health",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách lành mạnh",
        "hint": "-ly",
        "confusionWords": [
          "health",
          "heal",
          "healthy"
        ]
      },
      {
        "id": 11,
        "word": "education",
        "type": "noun",
        "family": "educate",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "nền giáo dục",
        "hint": "-tion",
        "confusionWords": [
          "educate",
          "educational",
          "educationally"
        ]
      },
      {
        "id": 12,
        "word": "educate",
        "type": "verb",
        "family": "educate",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "giáo dục",
        "hint": "-ate",
        "confusionWords": [
          "education",
          "educational",
          "educationally"
        ]
      },
      {
        "id": 13,
        "word": "educational",
        "type": "adjective",
        "family": "educate",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "mang tính giáo dục",
        "hint": "-al",
        "confusionWords": [
          "education",
          "educate",
          "educationally"
        ]
      },
      {
        "id": 14,
        "word": "educationally",
        "type": "adverb",
        "family": "educate",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt giáo dục",
        "hint": "-ly",
        "confusionWords": [
          "education",
          "educate",
          "educational"
        ]
      },
      {
        "id": 15,
        "word": "creation",
        "type": "noun",
        "family": "create",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự sáng tạo",
        "hint": "-tion",
        "confusionWords": [
          "create",
          "creative",
          "creatively"
        ]
      },
      {
        "id": 16,
        "word": "create",
        "type": "verb",
        "family": "create",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sáng tạo",
        "hint": "-ate",
        "confusionWords": [
          "creation",
          "creative",
          "creatively"
        ]
      },
      {
        "id": 17,
        "word": "creative",
        "type": "adjective",
        "family": "create",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "sáng tạo",
        "hint": "-ive",
        "confusionWords": [
          "creation",
          "create",
          "creatively"
        ]
      },
      {
        "id": 18,
        "word": "creatively",
        "type": "adverb",
        "family": "create",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách sáng tạo",
        "hint": "-ly",
        "confusionWords": [
          "creation",
          "create",
          "creative"
        ]
      },
      {
        "id": 19,
        "word": "decisive",
        "type": "adjective",
        "family": "decide",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "kiên quyết",
        "hint": "-ive",
        "confusionWords": [
          "decision",
          "decide",
          "decisively"
        ]
      },
      {
        "id": 20,
        "word": "decisively",
        "type": "adverb",
        "family": "decide",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách kiên quyết",
        "hint": "-ly",
        "confusionWords": [
          "decision",
          "decide",
          "decisive"
        ]
      },
      {
        "id": 21,
        "word": "development",
        "type": "noun",
        "family": "develop",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự phát triển",
        "hint": "-ment",
        "confusionWords": [
          "develop",
          "developing",
          "developingly"
        ]
      },
      {
        "id": 22,
        "word": "developingly",
        "type": "adverb",
        "family": "develop",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách phát triển",
        "hint": "-ly",
        "confusionWords": [
          "development",
          "develop",
          "developing"
        ]
      },
      {
        "id": 23,
        "word": "interestingly",
        "type": "adverb",
        "family": "interest",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thú vị",
        "hint": "-ly",
        "confusionWords": [
          "interest",
          "interest",
          "interesting"
        ]
      },
      {
        "id": 24,
        "word": "friendship",
        "type": "noun",
        "family": "friend",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "tình bạn",
        "hint": "-ship",
        "confusionWords": [
          "befriend",
          "friendly",
          "friendlily"
        ]
      },
      {
        "id": 25,
        "word": "friendly",
        "type": "adjective",
        "family": "friend",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thân thiện",
        "hint": "-y",
        "confusionWords": [
          "friendship",
          "befriend",
          "friendlily"
        ]
      },
      {
        "id": 26,
        "word": "friendlily",
        "type": "adverb",
        "family": "friend",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thân thiện",
        "hint": "-ly",
        "confusionWords": [
          "friendship",
          "befriend",
          "friendly"
        ]
      },
      {
        "id": 27,
        "word": "dangerous",
        "type": "adjective",
        "family": "danger",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "nguy hiểm",
        "hint": "-ous",
        "confusionWords": [
          "danger",
          "endanger",
          "dangerously"
        ]
      },
      {
        "id": 28,
        "word": "dangerously",
        "type": "adverb",
        "family": "danger",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách nguy hiểm",
        "hint": "-ly",
        "confusionWords": [
          "danger",
          "endanger",
          "dangerous"
        ]
      },
      {
        "id": 29,
        "word": "useful",
        "type": "adjective",
        "family": "use",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "hữu ích",
        "hint": "-ful",
        "confusionWords": [
          "use",
          "use",
          "usefully"
        ]
      },
      {
        "id": 30,
        "word": "usefully",
        "type": "adverb",
        "family": "use",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách hữu ích",
        "hint": "-ly",
        "confusionWords": [
          "use",
          "use",
          "useful"
        ]
      },
      {
        "id": 31,
        "word": "helpful",
        "type": "adjective",
        "family": "help",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "có ích",
        "hint": "-ful",
        "confusionWords": [
          "help",
          "help",
          "helpfully"
        ]
      },
      {
        "id": 32,
        "word": "helpfully",
        "type": "adverb",
        "family": "help",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách có ích",
        "hint": "-ly",
        "confusionWords": [
          "help",
          "help",
          "helpful"
        ]
      },
      {
        "id": 33,
        "word": "comfortable",
        "type": "adjective",
        "family": "comfort",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thoải mái",
        "hint": "-able",
        "confusionWords": [
          "comfort",
          "comfort",
          "comfortably"
        ]
      },
      {
        "id": 34,
        "word": "comfortably",
        "type": "adverb",
        "family": "comfort",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thoải mái",
        "hint": "-ly",
        "confusionWords": [
          "comfort",
          "comfort",
          "comfortable"
        ]
      },
      {
        "id": 35,
        "word": "powerful",
        "type": "adjective",
        "family": "power",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "mạnh mẽ",
        "hint": "-ful",
        "confusionWords": [
          "power",
          "empower",
          "powerfully"
        ]
      },
      {
        "id": 36,
        "word": "powerfully",
        "type": "adverb",
        "family": "power",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách mạnh mẽ",
        "hint": "-ly",
        "confusionWords": [
          "power",
          "empower",
          "powerful"
        ]
      },
      {
        "id": 37,
        "word": "pacify",
        "type": "verb",
        "family": "peace",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm yên lòng",
        "hint": "-ify",
        "confusionWords": [
          "peace",
          "peaceful",
          "peacefully"
        ]
      },
      {
        "id": 38,
        "word": "peaceful",
        "type": "adjective",
        "family": "peace",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "yên bình",
        "hint": "-ful",
        "confusionWords": [
          "peace",
          "pacify",
          "peacefully"
        ]
      },
      {
        "id": 39,
        "word": "peacefully",
        "type": "adverb",
        "family": "peace",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách hòa bình",
        "hint": "-ly",
        "confusionWords": [
          "peace",
          "pacify",
          "peaceful"
        ]
      },
      {
        "id": 40,
        "word": "nation",
        "type": "noun",
        "family": "nation",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "quốc gia",
        "hint": "-tion",
        "confusionWords": [
          "nationalize",
          "national",
          "nationally"
        ]
      },
      {
        "id": 41,
        "word": "nationalize",
        "type": "verb",
        "family": "nation",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "quốc gia hóa",
        "hint": "-ize",
        "confusionWords": [
          "nation",
          "national",
          "nationally"
        ]
      },
      {
        "id": 42,
        "word": "national",
        "type": "adjective",
        "family": "nation",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc quốc gia",
        "hint": "-al",
        "confusionWords": [
          "nation",
          "nationalize",
          "nationally"
        ]
      },
      {
        "id": 43,
        "word": "nationally",
        "type": "adverb",
        "family": "nation",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "trên toàn quốc",
        "hint": "-ly",
        "confusionWords": [
          "nation",
          "nationalize",
          "national"
        ]
      },
      {
        "id": 44,
        "word": "cultivate",
        "type": "verb",
        "family": "culture",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "trau dồi",
        "hint": "-ate",
        "confusionWords": [
          "culture",
          "cultural",
          "culturally"
        ]
      },
      {
        "id": 45,
        "word": "cultural",
        "type": "adjective",
        "family": "culture",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc văn hóa",
        "hint": "-al",
        "confusionWords": [
          "culture",
          "cultivate",
          "culturally"
        ]
      },
      {
        "id": 46,
        "word": "culturally",
        "type": "adverb",
        "family": "culture",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt văn hóa",
        "hint": "-ly",
        "confusionWords": [
          "culture",
          "cultivate",
          "cultural"
        ]
      },
      {
        "id": 47,
        "word": "science",
        "type": "noun",
        "family": "science",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "khoa học",
        "hint": "-ence",
        "confusionWords": [
          "scientific",
          "scientifically"
        ]
      },
      {
        "id": 48,
        "word": "scientific",
        "type": "adjective",
        "family": "science",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc khoa học",
        "hint": "-ic",
        "confusionWords": [
          "science",
          "science",
          "scientifically"
        ]
      },
      {
        "id": 49,
        "word": "scientifically",
        "type": "adverb",
        "family": "science",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt khoa học",
        "hint": "-ly",
        "confusionWords": [
          "science",
          "science",
          "scientific"
        ]
      },
      {
        "id": 50,
        "word": "musical",
        "type": "adjective",
        "family": "music",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc âm nhạc",
        "hint": "-al",
        "confusionWords": [
          "music",
          "music",
          "musically"
        ]
      },
      {
        "id": 51,
        "word": "musically",
        "type": "adverb",
        "family": "music",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt âm nhạc",
        "hint": "-ly",
        "confusionWords": [
          "music",
          "music",
          "musical"
        ]
      },
      {
        "id": 52,
        "word": "industrialize",
        "type": "verb",
        "family": "industry",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "công nghiệp hóa",
        "hint": "-ize",
        "confusionWords": [
          "industry",
          "industrial",
          "industrially"
        ]
      },
      {
        "id": 53,
        "word": "industrial",
        "type": "adjective",
        "family": "industry",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc công nghiệp",
        "hint": "-al",
        "confusionWords": [
          "industry",
          "industrialize",
          "industrially"
        ]
      },
      {
        "id": 54,
        "word": "industrially",
        "type": "adverb",
        "family": "industry",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt công nghiệp",
        "hint": "-ly",
        "confusionWords": [
          "industry",
          "industrialize",
          "industrial"
        ]
      },
      {
        "id": 55,
        "word": "historic",
        "type": "adjective",
        "family": "history",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "mang tính lịch sử",
        "hint": "-ic",
        "confusionWords": [
          "history",
          "history",
          "historically"
        ]
      },
      {
        "id": 56,
        "word": "historically",
        "type": "adverb",
        "family": "history",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt lịch sử",
        "hint": "-ly",
        "confusionWords": [
          "history",
          "history",
          "historic"
        ]
      },
      {
        "id": 57,
        "word": "naturalize",
        "type": "verb",
        "family": "nature",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "tự nhiên hóa",
        "hint": "-ize",
        "confusionWords": [
          "nature",
          "natural",
          "naturally"
        ]
      },
      {
        "id": 58,
        "word": "natural",
        "type": "adjective",
        "family": "nature",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc tự nhiên",
        "hint": "-al",
        "confusionWords": [
          "nature",
          "naturalize",
          "naturally"
        ]
      },
      {
        "id": 59,
        "word": "naturally",
        "type": "adverb",
        "family": "nature",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tự nhiên",
        "hint": "-ly",
        "confusionWords": [
          "nature",
          "naturalize",
          "natural"
        ]
      },
      {
        "id": 60,
        "word": "technological",
        "type": "adjective",
        "family": "technology",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc công nghệ",
        "hint": "-al",
        "confusionWords": [
          "technology",
          "technology",
          "technologically"
        ]
      },
      {
        "id": 61,
        "word": "technologically",
        "type": "adverb",
        "family": "technology",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt công nghệ",
        "hint": "-ly",
        "confusionWords": [
          "technology",
          "technology",
          "technological"
        ]
      },
      {
        "id": 62,
        "word": "environment",
        "type": "noun",
        "family": "environment",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "môi trường",
        "hint": "-ment",
        "confusionWords": [
          "environmental",
          "environmentally"
        ]
      },
      {
        "id": 63,
        "word": "environmental",
        "type": "adjective",
        "family": "environment",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc môi trường",
        "hint": "-al",
        "confusionWords": [
          "environment",
          "environment",
          "environmentally"
        ]
      },
      {
        "id": 64,
        "word": "environmentally",
        "type": "adverb",
        "family": "environment",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt môi trường",
        "hint": "-ly",
        "confusionWords": [
          "environment",
          "environment",
          "environmental"
        ]
      },
      {
        "id": 65,
        "word": "communication",
        "type": "noun",
        "family": "communicate",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự giao tiếp",
        "hint": "-tion",
        "confusionWords": [
          "communicate",
          "communicative",
          "communicatively"
        ]
      },
      {
        "id": 66,
        "word": "communicate",
        "type": "verb",
        "family": "communicate",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "giao tiếp",
        "hint": "-ate",
        "confusionWords": [
          "communication",
          "communicative",
          "communicatively"
        ]
      },
      {
        "id": 67,
        "word": "communicative",
        "type": "adjective",
        "family": "communicate",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "cởi mở giao tiếp",
        "hint": "-ive",
        "confusionWords": [
          "communication",
          "communicate",
          "communicatively"
        ]
      },
      {
        "id": 68,
        "word": "communicatively",
        "type": "adverb",
        "family": "communicate",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "bằng cách giao tiếp",
        "hint": "-ly",
        "confusionWords": [
          "communication",
          "communicate",
          "communicative"
        ]
      },
      {
        "id": 69,
        "word": "celebration",
        "type": "noun",
        "family": "celebrate",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "lễ kỷ niệm",
        "hint": "-tion",
        "confusionWords": [
          "celebrate",
          "celebrated",
          "celebratedly"
        ]
      },
      {
        "id": 70,
        "word": "celebrate",
        "type": "verb",
        "family": "celebrate",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "ăn mừng",
        "hint": "-ate",
        "confusionWords": [
          "celebration",
          "celebrated",
          "celebratedly"
        ]
      },
      {
        "id": 71,
        "word": "celebratedly",
        "type": "adverb",
        "family": "celebrate",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách nổi tiếng",
        "hint": "-ly",
        "confusionWords": [
          "celebration",
          "celebrate",
          "celebrated"
        ]
      },
      {
        "id": 72,
        "word": "comparative",
        "type": "adjective",
        "family": "compare",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "so sánh",
        "hint": "-ive",
        "confusionWords": [
          "comparison",
          "compare",
          "comparatively"
        ]
      },
      {
        "id": 73,
        "word": "comparatively",
        "type": "adverb",
        "family": "compare",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "tương đối",
        "hint": "-ly",
        "confusionWords": [
          "comparison",
          "compare",
          "comparative"
        ]
      },
      {
        "id": 74,
        "word": "protection",
        "type": "noun",
        "family": "protect",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự bảo vệ",
        "hint": "-tion",
        "confusionWords": [
          "protect",
          "protective",
          "protectively"
        ]
      },
      {
        "id": 75,
        "word": "protective",
        "type": "adjective",
        "family": "protect",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "bảo vệ",
        "hint": "-ive",
        "confusionWords": [
          "protection",
          "protect",
          "protectively"
        ]
      },
      {
        "id": 76,
        "word": "protectively",
        "type": "adverb",
        "family": "protect",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách bảo vệ",
        "hint": "-ly",
        "confusionWords": [
          "protection",
          "protect",
          "protective"
        ]
      },
      {
        "id": 77,
        "word": "organization",
        "type": "noun",
        "family": "organize",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "tổ chức",
        "hint": "-tion",
        "confusionWords": [
          "organize",
          "organizational",
          "organizationally"
        ]
      },
      {
        "id": 78,
        "word": "organize",
        "type": "verb",
        "family": "organize",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "tổ chức",
        "hint": "-ize",
        "confusionWords": [
          "organization",
          "organizational",
          "organizationally"
        ]
      },
      {
        "id": 79,
        "word": "organizational",
        "type": "adjective",
        "family": "organize",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc tổ chức",
        "hint": "-al",
        "confusionWords": [
          "organization",
          "organize",
          "organizationally"
        ]
      },
      {
        "id": 80,
        "word": "organizationally",
        "type": "adverb",
        "family": "organize",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt tổ chức",
        "hint": "-ly",
        "confusionWords": [
          "organization",
          "organize",
          "organizational"
        ]
      },
      {
        "id": 81,
        "word": "supportive",
        "type": "adjective",
        "family": "support",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "đỡ đầu, ủng hộ",
        "hint": "-ive",
        "confusionWords": [
          "support",
          "support",
          "supportively"
        ]
      },
      {
        "id": 82,
        "word": "supportively",
        "type": "adverb",
        "family": "support",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách ủng hộ",
        "hint": "-ly",
        "confusionWords": [
          "support",
          "support",
          "supportive"
        ]
      },
      {
        "id": 83,
        "word": "action",
        "type": "noun",
        "family": "act",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "hành động",
        "hint": "-tion",
        "confusionWords": [
          "act",
          "active",
          "actively"
        ]
      },
      {
        "id": 84,
        "word": "active",
        "type": "adjective",
        "family": "act",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "năng động",
        "hint": "-ive",
        "confusionWords": [
          "action",
          "act",
          "actively"
        ]
      },
      {
        "id": 85,
        "word": "actively",
        "type": "adverb",
        "family": "act",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách chủ động",
        "hint": "-ly",
        "confusionWords": [
          "action",
          "act",
          "active"
        ]
      },
      {
        "id": 86,
        "word": "attraction",
        "type": "noun",
        "family": "attract",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự thu hút",
        "hint": "-tion",
        "confusionWords": [
          "attract",
          "attractive",
          "attractively"
        ]
      },
      {
        "id": 87,
        "word": "attractive",
        "type": "adjective",
        "family": "attract",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "hấp dẫn",
        "hint": "-ive",
        "confusionWords": [
          "attraction",
          "attract",
          "attractively"
        ]
      },
      {
        "id": 88,
        "word": "attractively",
        "type": "adverb",
        "family": "attract",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách hấp dẫn",
        "hint": "-ly",
        "confusionWords": [
          "attraction",
          "attract",
          "attractive"
        ]
      },
      {
        "id": 89,
        "word": "sadness",
        "type": "noun",
        "family": "sad",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "nỗi buồn",
        "hint": "-ness",
        "confusionWords": [
          "sadden",
          "sad",
          "sadly"
        ]
      },
      {
        "id": 90,
        "word": "sadden",
        "type": "verb",
        "family": "sad",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm buồn",
        "hint": "-en",
        "confusionWords": [
          "sadness",
          "sad",
          "sadly"
        ]
      },
      {
        "id": 91,
        "word": "sadly",
        "type": "adverb",
        "family": "sad",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách buồn bã",
        "hint": "-ly",
        "confusionWords": [
          "sadness",
          "sadden",
          "sad"
        ]
      },
      {
        "id": 92,
        "word": "happiness",
        "type": "noun",
        "family": "happy",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "niềm hạnh phúc",
        "hint": "-ness",
        "confusionWords": [
          "happy",
          "happy",
          "happily"
        ]
      },
      {
        "id": 93,
        "word": "happy",
        "type": "adjective",
        "family": "happy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "vui vẻ",
        "hint": "-y",
        "confusionWords": [
          "happiness",
          "happily"
        ]
      },
      {
        "id": 94,
        "word": "happily",
        "type": "adverb",
        "family": "happy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách vui vẻ",
        "hint": "-ly",
        "confusionWords": [
          "happiness",
          "happy",
          "happy"
        ]
      },
      {
        "id": 95,
        "word": "ability",
        "type": "noun",
        "family": "able",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "khả năng",
        "hint": "-ity",
        "confusionWords": [
          "enable",
          "able",
          "ably"
        ]
      },
      {
        "id": 96,
        "word": "able",
        "type": "adjective",
        "family": "able",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "có thể",
        "hint": "-able",
        "confusionWords": [
          "ability",
          "enable",
          "ably"
        ]
      },
      {
        "id": 97,
        "word": "ably",
        "type": "adverb",
        "family": "able",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách có tài",
        "hint": "-ly",
        "confusionWords": [
          "ability",
          "enable",
          "able"
        ]
      },
      {
        "id": 98,
        "word": "direction",
        "type": "noun",
        "family": "direct",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "hướng đi",
        "hint": "-tion",
        "confusionWords": [
          "direct",
          "direct",
          "directly"
        ]
      },
      {
        "id": 99,
        "word": "directly",
        "type": "adverb",
        "family": "direct",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách trực tiếp",
        "hint": "-ly",
        "confusionWords": [
          "direction",
          "direct",
          "direct"
        ]
      },
      {
        "id": 100,
        "word": "excitingly",
        "type": "adverb",
        "family": "excite",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách phấn khích",
        "hint": "-ly",
        "confusionWords": [
          "excite",
          "excite",
          "exciting"
        ]
      },
      {
        "id": 101,
        "word": "famous",
        "type": "adjective",
        "family": "fame",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "nổi tiếng",
        "hint": "-ous",
        "confusionWords": [
          "fame",
          "defame",
          "famously"
        ]
      },
      {
        "id": 102,
        "word": "famously",
        "type": "adverb",
        "family": "fame",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách nổi tiếng",
        "hint": "-ly",
        "confusionWords": [
          "fame",
          "defame",
          "famous"
        ]
      },
      {
        "id": 103,
        "word": "agreement",
        "type": "noun",
        "family": "agree",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự đồng ý",
        "hint": "-ment",
        "confusionWords": [
          "agree",
          "agreeable",
          "agreeably"
        ]
      },
      {
        "id": 104,
        "word": "agreeable",
        "type": "adjective",
        "family": "agree",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "dễ chịu",
        "hint": "-able",
        "confusionWords": [
          "agreement",
          "agree",
          "agreeably"
        ]
      },
      {
        "id": 105,
        "word": "agreeably",
        "type": "adverb",
        "family": "agree",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách dễ chịu",
        "hint": "-ly",
        "confusionWords": [
          "agreement",
          "agree",
          "agreeable"
        ]
      },
      {
        "id": 106,
        "word": "appearance",
        "type": "noun",
        "family": "appear",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "di diện mạo",
        "hint": "-ance",
        "confusionWords": [
          "appear",
          "apparent",
          "apparently"
        ]
      },
      {
        "id": 107,
        "word": "apparent",
        "type": "adjective",
        "family": "appear",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "rõ ràng",
        "hint": "-ent",
        "confusionWords": [
          "appearance",
          "appear",
          "apparently"
        ]
      },
      {
        "id": 108,
        "word": "apparently",
        "type": "adverb",
        "family": "appear",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "nhìn có vẻ",
        "hint": "-ly",
        "confusionWords": [
          "appearance",
          "appear",
          "apparent"
        ]
      },
      {
        "id": 109,
        "word": "assistance",
        "type": "noun",
        "family": "assist",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự giúp đỡ",
        "hint": "-ance",
        "confusionWords": [
          "assist",
          "assistant",
          "assistantly"
        ]
      },
      {
        "id": 110,
        "word": "assistant",
        "type": "adjective",
        "family": "assist",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "phụ tá",
        "hint": "-ant",
        "confusionWords": [
          "assistance",
          "assist",
          "assistantly"
        ]
      },
      {
        "id": 111,
        "word": "assistantly",
        "type": "adverb",
        "family": "assist",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách phụ tá",
        "hint": "-ly",
        "confusionWords": [
          "assistance",
          "assist",
          "assistant"
        ]
      },
      {
        "id": 112,
        "word": "attendance",
        "type": "noun",
        "family": "attend",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự tham gia",
        "hint": "-ance",
        "confusionWords": [
          "attend",
          "attentive",
          "attentively"
        ]
      },
      {
        "id": 113,
        "word": "attentive",
        "type": "adjective",
        "family": "attend",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "chú ý",
        "hint": "-ive",
        "confusionWords": [
          "attendance",
          "attend",
          "attentively"
        ]
      },
      {
        "id": 114,
        "word": "attentively",
        "type": "adverb",
        "family": "attend",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách chú ý",
        "hint": "-ly",
        "confusionWords": [
          "attendance",
          "attend",
          "attentive"
        ]
      },
      {
        "id": 115,
        "word": "bravely",
        "type": "adverb",
        "family": "brave",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách dũng cảm",
        "hint": "-ly",
        "confusionWords": [
          "bravery",
          "brave",
          "brave"
        ]
      },
      {
        "id": 116,
        "word": "brightness",
        "type": "noun",
        "family": "bright",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "độ sáng",
        "hint": "-ness",
        "confusionWords": [
          "brighten",
          "bright",
          "brightly"
        ]
      },
      {
        "id": 117,
        "word": "brighten",
        "type": "verb",
        "family": "bright",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm sáng",
        "hint": "-en",
        "confusionWords": [
          "brightness",
          "bright",
          "brightly"
        ]
      },
      {
        "id": 118,
        "word": "brightly",
        "type": "adverb",
        "family": "bright",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách sáng sủa",
        "hint": "-ly",
        "confusionWords": [
          "brightness",
          "brighten",
          "bright"
        ]
      },
      {
        "id": 119,
        "word": "collection",
        "type": "noun",
        "family": "collect",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "bộ sưu tập",
        "hint": "-tion",
        "confusionWords": [
          "collect",
          "collective",
          "collectively"
        ]
      },
      {
        "id": 120,
        "word": "collective",
        "type": "adjective",
        "family": "collect",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "tập thể",
        "hint": "-ive",
        "confusionWords": [
          "collection",
          "collect",
          "collectively"
        ]
      },
      {
        "id": 121,
        "word": "collectively",
        "type": "adverb",
        "family": "collect",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tập thể",
        "hint": "-ly",
        "confusionWords": [
          "collection",
          "collect",
          "collective"
        ]
      },
      {
        "id": 122,
        "word": "competition",
        "type": "noun",
        "family": "compete",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "cuộc thi",
        "hint": "-tion",
        "confusionWords": [
          "compete",
          "competitive",
          "competitively"
        ]
      },
      {
        "id": 123,
        "word": "competitive",
        "type": "adjective",
        "family": "compete",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "mang tính cạnh tranh",
        "hint": "-ive",
        "confusionWords": [
          "competition",
          "compete",
          "competitively"
        ]
      },
      {
        "id": 124,
        "word": "competitively",
        "type": "adverb",
        "family": "compete",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách cạnh tranh",
        "hint": "-ly",
        "confusionWords": [
          "competition",
          "compete",
          "competitive"
        ]
      },
      {
        "id": 125,
        "word": "confidence",
        "type": "noun",
        "family": "confidence",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự tự tin",
        "hint": "-ence",
        "confusionWords": [
          "confide",
          "confident",
          "confidently"
        ]
      },
      {
        "id": 126,
        "word": "confident",
        "type": "adjective",
        "family": "confidence",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "tự tin",
        "hint": "-ent",
        "confusionWords": [
          "confidence",
          "confide",
          "confidently"
        ]
      },
      {
        "id": 127,
        "word": "confidently",
        "type": "adverb",
        "family": "confidence",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tự tin",
        "hint": "-ly",
        "confusionWords": [
          "confidence",
          "confide",
          "confident"
        ]
      },
      {
        "id": 128,
        "word": "connection",
        "type": "noun",
        "family": "connect",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự kết nối",
        "hint": "-tion",
        "confusionWords": [
          "connect",
          "connected",
          "connectedly"
        ]
      },
      {
        "id": 129,
        "word": "connectedly",
        "type": "adverb",
        "family": "connect",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "liên tục",
        "hint": "-ly",
        "confusionWords": [
          "connection",
          "connect",
          "connected"
        ]
      },
      {
        "id": 130,
        "word": "courageous",
        "type": "adjective",
        "family": "courage",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "can đảm",
        "hint": "-ous",
        "confusionWords": [
          "courage",
          "encourage",
          "courageously"
        ]
      },
      {
        "id": 131,
        "word": "courageously",
        "type": "adverb",
        "family": "courage",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách can đảm",
        "hint": "-ly",
        "confusionWords": [
          "courage",
          "encourage",
          "courageous"
        ]
      },
      {
        "id": 132,
        "word": "darkness",
        "type": "noun",
        "family": "dark",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "bóng tối",
        "hint": "-ness",
        "confusionWords": [
          "darken",
          "dark",
          "darkly"
        ]
      },
      {
        "id": 133,
        "word": "darken",
        "type": "verb",
        "family": "dark",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm tối",
        "hint": "-en",
        "confusionWords": [
          "darkness",
          "dark",
          "darkly"
        ]
      },
      {
        "id": 134,
        "word": "darkly",
        "type": "adverb",
        "family": "dark",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tối tăm",
        "hint": "-ly",
        "confusionWords": [
          "darkness",
          "darken",
          "dark"
        ]
      },
      {
        "id": 135,
        "word": "depth",
        "type": "noun",
        "family": "deep",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "chiều sâu",
        "hint": "-th",
        "confusionWords": [
          "deepen",
          "deep",
          "deeply"
        ]
      },
      {
        "id": 136,
        "word": "deepen",
        "type": "verb",
        "family": "deep",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm sâu",
        "hint": "-en",
        "confusionWords": [
          "depth",
          "deep",
          "deeply"
        ]
      },
      {
        "id": 137,
        "word": "deeply",
        "type": "adverb",
        "family": "deep",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách sâu sắc",
        "hint": "-ly",
        "confusionWords": [
          "depth",
          "deepen",
          "deep"
        ]
      },
      {
        "id": 138,
        "word": "dependence",
        "type": "noun",
        "family": "depend",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự phụ thuộc",
        "hint": "-ence",
        "confusionWords": [
          "depend",
          "dependent",
          "dependently"
        ]
      },
      {
        "id": 139,
        "word": "dependent",
        "type": "adjective",
        "family": "depend",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "phụ thuộc",
        "hint": "-ent",
        "confusionWords": [
          "dependence",
          "depend",
          "dependently"
        ]
      },
      {
        "id": 140,
        "word": "dependently",
        "type": "adverb",
        "family": "depend",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách phụ thuộc",
        "hint": "-ly",
        "confusionWords": [
          "dependence",
          "depend",
          "dependent"
        ]
      },
      {
        "id": 141,
        "word": "description",
        "type": "noun",
        "family": "describe",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự miêu tả",
        "hint": "-tion",
        "confusionWords": [
          "describe",
          "descriptive",
          "descriptively"
        ]
      },
      {
        "id": 142,
        "word": "descriptive",
        "type": "adjective",
        "family": "describe",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "có tính miêu tả",
        "hint": "-ive",
        "confusionWords": [
          "description",
          "describe",
          "descriptively"
        ]
      },
      {
        "id": 143,
        "word": "descriptively",
        "type": "adverb",
        "family": "describe",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "bằng cách miêu tả",
        "hint": "-ly",
        "confusionWords": [
          "description",
          "describe",
          "descriptive"
        ]
      },
      {
        "id": 144,
        "word": "difference",
        "type": "noun",
        "family": "differ",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự khác biệt",
        "hint": "-ence",
        "confusionWords": [
          "differ",
          "different",
          "differently"
        ]
      },
      {
        "id": 145,
        "word": "different",
        "type": "adjective",
        "family": "differ",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "khác nhau",
        "hint": "-ent",
        "confusionWords": [
          "difference",
          "differ",
          "differently"
        ]
      },
      {
        "id": 146,
        "word": "differently",
        "type": "adverb",
        "family": "differ",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách khác biệt",
        "hint": "-ly",
        "confusionWords": [
          "difference",
          "differ",
          "different"
        ]
      },
      {
        "id": 147,
        "word": "difficultly",
        "type": "adverb",
        "family": "difficult",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách khó khăn",
        "hint": "-ly",
        "confusionWords": [
          "difficulty",
          "difficulty",
          "difficult"
        ]
      },
      {
        "id": 148,
        "word": "disappointment",
        "type": "noun",
        "family": "disappoint",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự thất vọng",
        "hint": "-ment",
        "confusionWords": [
          "disappoint",
          "disappointing",
          "disappointingly"
        ]
      },
      {
        "id": 149,
        "word": "disappointingly",
        "type": "adverb",
        "family": "disappoint",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thất vọng",
        "hint": "-ly",
        "confusionWords": [
          "disappointment",
          "disappoint",
          "disappointing"
        ]
      },
      {
        "id": 150,
        "word": "honestly",
        "type": "adverb",
        "family": "honest",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách trung thực",
        "hint": "-ly",
        "confusionWords": [
          "honesty",
          "honest",
          "honest"
        ]
      },
      {
        "id": 151,
        "word": "economize",
        "type": "verb",
        "family": "economy",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "tiết kiệm",
        "hint": "-ize",
        "confusionWords": [
          "economy",
          "economic",
          "economically"
        ]
      },
      {
        "id": 152,
        "word": "economic",
        "type": "adjective",
        "family": "economy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thuộc kinh tế",
        "hint": "-ic",
        "confusionWords": [
          "economy",
          "economize",
          "economically"
        ]
      },
      {
        "id": 153,
        "word": "economically",
        "type": "adverb",
        "family": "economy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "về mặt kinh tế",
        "hint": "-ly",
        "confusionWords": [
          "economy",
          "economize",
          "economic"
        ]
      },
      {
        "id": 154,
        "word": "employment",
        "type": "noun",
        "family": "employ",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "việc làm",
        "hint": "-ment",
        "confusionWords": [
          "employ",
          "employed",
          "employedly"
        ]
      },
      {
        "id": 155,
        "word": "employedly",
        "type": "adverb",
        "family": "employ",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "theo cách thuê mướn",
        "hint": "-ly",
        "confusionWords": [
          "employment",
          "employ",
          "employed"
        ]
      },
      {
        "id": 156,
        "word": "enjoyment",
        "type": "noun",
        "family": "enjoy",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự thích thú",
        "hint": "-ment",
        "confusionWords": [
          "enjoy",
          "enjoyable",
          "enjoyably"
        ]
      },
      {
        "id": 157,
        "word": "enjoyable",
        "type": "adjective",
        "family": "enjoy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thú vị",
        "hint": "-able",
        "confusionWords": [
          "enjoyment",
          "enjoy",
          "enjoyably"
        ]
      },
      {
        "id": 158,
        "word": "enjoyably",
        "type": "adverb",
        "family": "enjoy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thú vị",
        "hint": "-ly",
        "confusionWords": [
          "enjoyment",
          "enjoy",
          "enjoyable"
        ]
      },
      {
        "id": 159,
        "word": "explanation",
        "type": "noun",
        "family": "explain",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự giải thích",
        "hint": "-tion",
        "confusionWords": [
          "explain",
          "explanatory",
          "explainingly"
        ]
      },
      {
        "id": 160,
        "word": "explanatory",
        "type": "adjective",
        "family": "explain",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "mang tính giải thích",
        "hint": "-y",
        "confusionWords": [
          "explanation",
          "explain",
          "explainingly"
        ]
      },
      {
        "id": 161,
        "word": "explainingly",
        "type": "adverb",
        "family": "explain",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "bằng cách giải thích",
        "hint": "-ly",
        "confusionWords": [
          "explanation",
          "explain",
          "explanatory"
        ]
      },
      {
        "id": 162,
        "word": "forgetfulness",
        "type": "noun",
        "family": "forget",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "tính hay quên",
        "hint": "-ness",
        "confusionWords": [
          "forget",
          "forgetful",
          "forgetfully"
        ]
      },
      {
        "id": 163,
        "word": "forgetful",
        "type": "adjective",
        "family": "forget",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "hay quên",
        "hint": "-ful",
        "confusionWords": [
          "forgetfulness",
          "forget",
          "forgetfully"
        ]
      },
      {
        "id": 164,
        "word": "forgetfully",
        "type": "adverb",
        "family": "forget",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách đãng trí",
        "hint": "-ly",
        "confusionWords": [
          "forgetfulness",
          "forget",
          "forgetful"
        ]
      },
      {
        "id": 165,
        "word": "freedom",
        "type": "noun",
        "family": "free",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự tự do",
        "hint": "-dom",
        "confusionWords": [
          "free",
          "free",
          "freely"
        ]
      },
      {
        "id": 166,
        "word": "freely",
        "type": "adverb",
        "family": "free",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tự do",
        "hint": "-ly",
        "confusionWords": [
          "freedom",
          "free",
          "free"
        ]
      },
      {
        "id": 167,
        "word": "growth",
        "type": "noun",
        "family": "grow",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự phát triển",
        "hint": "-th",
        "confusionWords": [
          "grow",
          "growing",
          "growingly"
        ]
      },
      {
        "id": 168,
        "word": "growingly",
        "type": "adverb",
        "family": "grow",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "ngày càng tăng",
        "hint": "-ly",
        "confusionWords": [
          "growth",
          "grow",
          "growing"
        ]
      },
      {
        "id": 169,
        "word": "heighten",
        "type": "verb",
        "family": "high",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "nâng cao",
        "hint": "-en",
        "confusionWords": [
          "height",
          "high",
          "highly"
        ]
      },
      {
        "id": 170,
        "word": "highly",
        "type": "adverb",
        "family": "high",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "rất nhiều, cao",
        "hint": "-ly",
        "confusionWords": [
          "height",
          "heighten",
          "high"
        ]
      },
      {
        "id": 171,
        "word": "imagination",
        "type": "noun",
        "family": "imagine",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự tưởng tượng",
        "hint": "-tion",
        "confusionWords": [
          "imagine",
          "imaginative",
          "imaginatively"
        ]
      },
      {
        "id": 172,
        "word": "imaginative",
        "type": "adjective",
        "family": "imagine",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "giàu tưởng tượng",
        "hint": "-ive",
        "confusionWords": [
          "imagination",
          "imagine",
          "imaginatively"
        ]
      },
      {
        "id": 173,
        "word": "imaginatively",
        "type": "adverb",
        "family": "imagine",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tưởng tượng",
        "hint": "-ly",
        "confusionWords": [
          "imagination",
          "imagine",
          "imaginative"
        ]
      },
      {
        "id": 174,
        "word": "impressive",
        "type": "adjective",
        "family": "impress",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "gợi ấn tượng",
        "hint": "-ive",
        "confusionWords": [
          "impression",
          "impress",
          "impressively"
        ]
      },
      {
        "id": 175,
        "word": "impressively",
        "type": "adverb",
        "family": "impress",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách ấn tượng",
        "hint": "-ly",
        "confusionWords": [
          "impression",
          "impress",
          "impressive"
        ]
      },
      {
        "id": 176,
        "word": "improvement",
        "type": "noun",
        "family": "improve",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự cải thiện",
        "hint": "-ment",
        "confusionWords": [
          "improve",
          "improved",
          "improvingly"
        ]
      },
      {
        "id": 177,
        "word": "improvingly",
        "type": "adverb",
        "family": "improve",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách cải thiện",
        "hint": "-ly",
        "confusionWords": [
          "improvement",
          "improve",
          "improved"
        ]
      },
      {
        "id": 178,
        "word": "information",
        "type": "noun",
        "family": "inform",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "thông tin",
        "hint": "-tion",
        "confusionWords": [
          "inform",
          "informative",
          "informatively"
        ]
      },
      {
        "id": 179,
        "word": "informative",
        "type": "adjective",
        "family": "inform",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "nhiều thông tin",
        "hint": "-ive",
        "confusionWords": [
          "information",
          "inform",
          "informatively"
        ]
      },
      {
        "id": 180,
        "word": "informatively",
        "type": "adverb",
        "family": "inform",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "đầy đủ thông tin",
        "hint": "-ly",
        "confusionWords": [
          "information",
          "inform",
          "informative"
        ]
      },
      {
        "id": 181,
        "word": "invention",
        "type": "noun",
        "family": "invent",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự phát minh",
        "hint": "-tion",
        "confusionWords": [
          "invent",
          "inventive",
          "inventively"
        ]
      },
      {
        "id": 182,
        "word": "inventive",
        "type": "adjective",
        "family": "invent",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "sáng tạo",
        "hint": "-ive",
        "confusionWords": [
          "invention",
          "invent",
          "inventively"
        ]
      },
      {
        "id": 183,
        "word": "inventively",
        "type": "adverb",
        "family": "invent",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách sáng tạo",
        "hint": "-ly",
        "confusionWords": [
          "invention",
          "invent",
          "inventive"
        ]
      },
      {
        "id": 184,
        "word": "invitation",
        "type": "noun",
        "family": "invite",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "lời mời",
        "hint": "-tion",
        "confusionWords": [
          "invite",
          "inviting",
          "invitingly"
        ]
      },
      {
        "id": 185,
        "word": "invitingly",
        "type": "adverb",
        "family": "invite",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách hấp dẫn",
        "hint": "-ly",
        "confusionWords": [
          "invitation",
          "invite",
          "inviting"
        ]
      },
      {
        "id": 186,
        "word": "kindness",
        "type": "noun",
        "family": "kind",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "lòng tốt",
        "hint": "-ness",
        "confusionWords": [
          "kind",
          "kind",
          "kindly"
        ]
      },
      {
        "id": 187,
        "word": "kindly",
        "type": "adverb",
        "family": "kind",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tử tế",
        "hint": "-ly",
        "confusionWords": [
          "kindness",
          "kind",
          "kind"
        ]
      },
      {
        "id": 188,
        "word": "knowledgeable",
        "type": "adjective",
        "family": "know",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "am hiểu",
        "hint": "-able",
        "confusionWords": [
          "knowledge",
          "know",
          "knowledgeably"
        ]
      },
      {
        "id": 189,
        "word": "knowledgeably",
        "type": "adverb",
        "family": "know",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách am hiểu",
        "hint": "-ly",
        "confusionWords": [
          "knowledge",
          "know",
          "knowledgeable"
        ]
      },
      {
        "id": 190,
        "word": "lively",
        "type": "adjective",
        "family": "live",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "sinh động",
        "hint": "-y",
        "confusionWords": [
          "life",
          "live",
          "live"
        ]
      },
      {
        "id": 191,
        "word": "length",
        "type": "noun",
        "family": "long",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "chiều dài",
        "hint": "-th",
        "confusionWords": [
          "lengthen",
          "long",
          "longingly"
        ]
      },
      {
        "id": 192,
        "word": "lengthen",
        "type": "verb",
        "family": "long",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "kéo dài",
        "hint": "-en",
        "confusionWords": [
          "length",
          "long",
          "longingly"
        ]
      },
      {
        "id": 193,
        "word": "longingly",
        "type": "adverb",
        "family": "long",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thèm muốn",
        "hint": "-ly",
        "confusionWords": [
          "length",
          "lengthen",
          "long"
        ]
      },
      {
        "id": 194,
        "word": "lovely",
        "type": "adjective",
        "family": "love",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "đáng yêu",
        "hint": "-y",
        "confusionWords": [
          "love",
          "love",
          "lovingly"
        ]
      },
      {
        "id": 195,
        "word": "lovingly",
        "type": "adverb",
        "family": "love",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách âu yếm",
        "hint": "-ly",
        "confusionWords": [
          "love",
          "love",
          "lovely"
        ]
      },
      {
        "id": 196,
        "word": "movement",
        "type": "noun",
        "family": "move",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự di chuyển",
        "hint": "-ment",
        "confusionWords": [
          "move",
          "movable",
          "movably"
        ]
      },
      {
        "id": 197,
        "word": "movable",
        "type": "adjective",
        "family": "move",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "có thể di chuyển",
        "hint": "-able",
        "confusionWords": [
          "movement",
          "move",
          "movably"
        ]
      },
      {
        "id": 198,
        "word": "movably",
        "type": "adverb",
        "family": "move",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "di động",
        "hint": "-ly",
        "confusionWords": [
          "movement",
          "move",
          "movable"
        ]
      },
      {
        "id": 199,
        "word": "noisy",
        "type": "adjective",
        "family": "noise",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "ồn ào",
        "hint": "-y",
        "confusionWords": [
          "noise",
          "noise",
          "noisily"
        ]
      },
      {
        "id": 200,
        "word": "noisily",
        "type": "adverb",
        "family": "noise",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách ồn ào",
        "hint": "-ly",
        "confusionWords": [
          "noise",
          "noise",
          "noisy"
        ]
      },
      {
        "id": 201,
        "word": "perfection",
        "type": "noun",
        "family": "perfect",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự hoàn hảo",
        "hint": "-tion",
        "confusionWords": [
          "perfect",
          "perfect",
          "perfectly"
        ]
      },
      {
        "id": 202,
        "word": "perfectly",
        "type": "adverb",
        "family": "perfect",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách hoàn hảo",
        "hint": "-ly",
        "confusionWords": [
          "perfection",
          "perfect",
          "perfect"
        ]
      },
      {
        "id": 203,
        "word": "performance",
        "type": "noun",
        "family": "perform",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "buổi biểu diễn",
        "hint": "-ance",
        "confusionWords": [
          "perform",
          "performing",
          "performingly"
        ]
      },
      {
        "id": 204,
        "word": "performingly",
        "type": "adverb",
        "family": "perform",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "hiệu quả",
        "hint": "-ly",
        "confusionWords": [
          "performance",
          "perform",
          "performing"
        ]
      },
      {
        "id": 205,
        "word": "politeness",
        "type": "noun",
        "family": "polite",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự lịch sự",
        "hint": "-ness",
        "confusionWords": [
          "polite",
          "polite",
          "politely"
        ]
      },
      {
        "id": 206,
        "word": "politely",
        "type": "adverb",
        "family": "polite",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách lịch sự",
        "hint": "-ly",
        "confusionWords": [
          "politeness",
          "polite",
          "polite"
        ]
      },
      {
        "id": 207,
        "word": "popularity",
        "type": "noun",
        "family": "popular",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự phổ biến",
        "hint": "-ity",
        "confusionWords": [
          "popularize",
          "popular",
          "popularly"
        ]
      },
      {
        "id": 208,
        "word": "popularize",
        "type": "verb",
        "family": "popular",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "phổ biến hóa",
        "hint": "-ize",
        "confusionWords": [
          "popularity",
          "popular",
          "popularly"
        ]
      },
      {
        "id": 209,
        "word": "popularly",
        "type": "adverb",
        "family": "popular",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách phổ biến",
        "hint": "-ly",
        "confusionWords": [
          "popularity",
          "popularize",
          "popular"
        ]
      },
      {
        "id": 210,
        "word": "possibility",
        "type": "noun",
        "family": "possible",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "khả năng",
        "hint": "-ity",
        "confusionWords": [
          "possible",
          "possibly"
        ]
      },
      {
        "id": 211,
        "word": "possible",
        "type": "adjective",
        "family": "possible",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "khả thi",
        "hint": "-ible",
        "confusionWords": [
          "possibility",
          "possibility",
          "possibly"
        ]
      },
      {
        "id": 212,
        "word": "possibly",
        "type": "adverb",
        "family": "possible",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "có lẽ",
        "hint": "-ly",
        "confusionWords": [
          "possibility",
          "possibility",
          "possible"
        ]
      },
      {
        "id": 213,
        "word": "preparation",
        "type": "noun",
        "family": "prepare",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự chuẩn bị",
        "hint": "-tion",
        "confusionWords": [
          "prepare",
          "prepared",
          "preparedly"
        ]
      },
      {
        "id": 214,
        "word": "preparedly",
        "type": "adverb",
        "family": "prepare",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách sẵn sàng",
        "hint": "-ly",
        "confusionWords": [
          "preparation",
          "prepare",
          "prepared"
        ]
      },
      {
        "id": 215,
        "word": "production",
        "type": "noun",
        "family": "produce",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự sản xuất",
        "hint": "-tion",
        "confusionWords": [
          "produce",
          "productive",
          "productively"
        ]
      },
      {
        "id": 216,
        "word": "productive",
        "type": "adjective",
        "family": "produce",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "năng suất",
        "hint": "-ive",
        "confusionWords": [
          "production",
          "produce",
          "productively"
        ]
      },
      {
        "id": 217,
        "word": "productively",
        "type": "adverb",
        "family": "produce",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách năng suất",
        "hint": "-ly",
        "confusionWords": [
          "production",
          "produce",
          "productive"
        ]
      },
      {
        "id": 218,
        "word": "proudly",
        "type": "adverb",
        "family": "proud",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách tự hào",
        "hint": "-ly",
        "confusionWords": [
          "pride",
          "pride",
          "proud"
        ]
      },
      {
        "id": 219,
        "word": "quietness",
        "type": "noun",
        "family": "quiet",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự yên tĩnh",
        "hint": "-ness",
        "confusionWords": [
          "quiet",
          "quiet",
          "quietly"
        ]
      },
      {
        "id": 220,
        "word": "quietly",
        "type": "adverb",
        "family": "quiet",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách yên tĩnh",
        "hint": "-ly",
        "confusionWords": [
          "quietness",
          "quiet",
          "quiet"
        ]
      },
      {
        "id": 221,
        "word": "reality",
        "type": "noun",
        "family": "real",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "thực tế",
        "hint": "-ity",
        "confusionWords": [
          "realize",
          "real",
          "really"
        ]
      },
      {
        "id": 222,
        "word": "realize",
        "type": "verb",
        "family": "real",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "nhận ra",
        "hint": "-ize",
        "confusionWords": [
          "reality",
          "real",
          "really"
        ]
      },
      {
        "id": 223,
        "word": "real",
        "type": "adjective",
        "family": "real",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thực tế",
        "hint": "-al",
        "confusionWords": [
          "reality",
          "realize",
          "really"
        ]
      },
      {
        "id": 224,
        "word": "really",
        "type": "adverb",
        "family": "real",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thực sự",
        "hint": "-ly",
        "confusionWords": [
          "reality",
          "realize",
          "real"
        ]
      },
      {
        "id": 225,
        "word": "relaxation",
        "type": "noun",
        "family": "relax",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự thư giãn",
        "hint": "-tion",
        "confusionWords": [
          "relax",
          "relaxing",
          "relaxingly"
        ]
      },
      {
        "id": 226,
        "word": "relaxingly",
        "type": "adverb",
        "family": "relax",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thư giãn",
        "hint": "-ly",
        "confusionWords": [
          "relaxation",
          "relax",
          "relaxing"
        ]
      },
      {
        "id": 227,
        "word": "safely",
        "type": "adverb",
        "family": "safe",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách an toàn",
        "hint": "-ly",
        "confusionWords": [
          "safety",
          "safe",
          "safe"
        ]
      },
      {
        "id": 228,
        "word": "satisfaction",
        "type": "noun",
        "family": "satisfy",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự thỏa mãn",
        "hint": "-tion",
        "confusionWords": [
          "satisfy",
          "satisfactory",
          "satisfactorily"
        ]
      },
      {
        "id": 229,
        "word": "satisfactory",
        "type": "adjective",
        "family": "satisfy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thỏa đáng",
        "hint": "-y",
        "confusionWords": [
          "satisfaction",
          "satisfy",
          "satisfactorily"
        ]
      },
      {
        "id": 230,
        "word": "satisfactorily",
        "type": "adverb",
        "family": "satisfy",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách thỏa đáng",
        "hint": "-ly",
        "confusionWords": [
          "satisfaction",
          "satisfy",
          "satisfactory"
        ]
      },
      {
        "id": 231,
        "word": "shortness",
        "type": "noun",
        "family": "short",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự ngắn",
        "hint": "-ness",
        "confusionWords": [
          "shorten",
          "short",
          "shortly"
        ]
      },
      {
        "id": 232,
        "word": "shorten",
        "type": "verb",
        "family": "short",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "rút ngắn",
        "hint": "-en",
        "confusionWords": [
          "shortness",
          "short",
          "shortly"
        ]
      },
      {
        "id": 233,
        "word": "shortly",
        "type": "adverb",
        "family": "short",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "sớm, nhanh chóng",
        "hint": "-ly",
        "confusionWords": [
          "shortness",
          "shorten",
          "short"
        ]
      },
      {
        "id": 234,
        "word": "silence",
        "type": "noun",
        "family": "silent",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự im lặng",
        "hint": "-ence",
        "confusionWords": [
          "silent",
          "silently"
        ]
      },
      {
        "id": 235,
        "word": "silent",
        "type": "adjective",
        "family": "silent",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "im lặng",
        "hint": "-ent",
        "confusionWords": [
          "silence",
          "silence",
          "silently"
        ]
      },
      {
        "id": 236,
        "word": "silently",
        "type": "adverb",
        "family": "silent",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách im lặng",
        "hint": "-ly",
        "confusionWords": [
          "silence",
          "silence",
          "silent"
        ]
      },
      {
        "id": 237,
        "word": "simplicity",
        "type": "noun",
        "family": "simple",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự đơn giản",
        "hint": "-ity",
        "confusionWords": [
          "simplify",
          "simple",
          "simply"
        ]
      },
      {
        "id": 238,
        "word": "simplify",
        "type": "verb",
        "family": "simple",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "đơn giản hóa",
        "hint": "-ify",
        "confusionWords": [
          "simplicity",
          "simple",
          "simply"
        ]
      },
      {
        "id": 239,
        "word": "simply",
        "type": "adverb",
        "family": "simple",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "đơn giản là",
        "hint": "-ly",
        "confusionWords": [
          "simplicity",
          "simplify",
          "simple"
        ]
      },
      {
        "id": 240,
        "word": "softness",
        "type": "noun",
        "family": "soft",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự mềm mại",
        "hint": "-ness",
        "confusionWords": [
          "soften",
          "soft",
          "softly"
        ]
      },
      {
        "id": 241,
        "word": "soften",
        "type": "verb",
        "family": "soft",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm mềm",
        "hint": "-en",
        "confusionWords": [
          "softness",
          "soft",
          "softly"
        ]
      },
      {
        "id": 242,
        "word": "softly",
        "type": "adverb",
        "family": "soft",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách nhẹ nhàng",
        "hint": "-ly",
        "confusionWords": [
          "softness",
          "soften",
          "soft"
        ]
      },
      {
        "id": 243,
        "word": "strength",
        "type": "noun",
        "family": "strong",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sức mạnh",
        "hint": "-th",
        "confusionWords": [
          "strengthen",
          "strong",
          "strongly"
        ]
      },
      {
        "id": 244,
        "word": "strengthen",
        "type": "verb",
        "family": "strong",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "làm mạnh thêm",
        "hint": "-en",
        "confusionWords": [
          "strength",
          "strong",
          "strongly"
        ]
      },
      {
        "id": 245,
        "word": "strongly",
        "type": "adverb",
        "family": "strong",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách mạnh mẽ",
        "hint": "-ly",
        "confusionWords": [
          "strength",
          "strengthen",
          "strong"
        ]
      },
      {
        "id": 246,
        "word": "thoughtful",
        "type": "adjective",
        "family": "thought",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "chu đáo",
        "hint": "-ful",
        "confusionWords": [
          "thought",
          "think",
          "thoughtfully"
        ]
      },
      {
        "id": 247,
        "word": "thoughtfully",
        "type": "adverb",
        "family": "thought",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "một cách chu đáo",
        "hint": "-ly",
        "confusionWords": [
          "thought",
          "think",
          "thoughtful"
        ]
      },
      {
        "id": 248,
        "word": "truth",
        "type": "noun",
        "family": "true",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự thật",
        "hint": "-th",
        "confusionWords": [
          "true",
          "true",
          "truly"
        ]
      },
      {
        "id": 249,
        "word": "truly",
        "type": "adverb",
        "family": "true",
        "level": 1,
        "difficulty": 1,
        "vnMeaning": "thực sự",
        "hint": "-ly",
        "confusionWords": [
          "truth",
          "true",
          "true"
        ]
      },
      {
        "id": 250,
        "word": "warmth",
        "type": "noun",
        "family": "warm",
        "level": 1,
        "difficulty": 2,
        "vnMeaning": "sự ấm áp",
        "hint": "-th",
        "confusionWords": [
          "warm",
          "warm",
          "warmly"
        ]
      }
    ],

  /** Level 2: 300 words */
  level2: [
      {
        "id": 251,
        "word": "student",
        "type": "noun",
        "family": "study",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "học sinh",
        "hint": "từ chỉ người học",
        "confusionWords": [
          "teacher",
          "doctor",
          "school"
        ]
      },
      {
        "id": 252,
        "word": "teacher",
        "type": "noun",
        "family": "teach",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "giáo viên",
        "hint": "-er chỉ người dạy",
        "confusionWords": [
          "student",
          "doctor",
          "school"
        ]
      },
      {
        "id": 253,
        "word": "doctor",
        "type": "noun",
        "family": "doctor",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bác sĩ",
        "hint": "-or chỉ nghề nghiệp",
        "confusionWords": [
          "student",
          "teacher",
          "school"
        ]
      },
      {
        "id": 254,
        "word": "school",
        "type": "noun",
        "family": "school",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "trường học",
        "hint": "danh từ cơ bản",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 255,
        "word": "classroom",
        "type": "noun",
        "family": "school",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "lớp học",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 256,
        "word": "book",
        "type": "noun",
        "family": "book",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "quyển sách",
        "hint": "danh từ cơ bản",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 257,
        "word": "pencil",
        "type": "noun",
        "family": "pen",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bút chì",
        "hint": "danh từ học tập",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 258,
        "word": "computer",
        "type": "noun",
        "family": "compute",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "máy tính",
        "hint": "-er chỉ đồ vật",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 259,
        "word": "house",
        "type": "noun",
        "family": "house",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngôi nhà",
        "hint": "danh từ cơ bản",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 260,
        "word": "family",
        "type": "noun",
        "family": "family",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "gia đình",
        "hint": "danh từ chỉ tập hợp",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 261,
        "word": "morning",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "buổi sáng",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 262,
        "word": "night",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "buổi đêm",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 263,
        "word": "summer",
        "type": "noun",
        "family": "season",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mùa hè",
        "hint": "danh từ chỉ mùa",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 264,
        "word": "river",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "con sông",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 265,
        "word": "mountain",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngọn núi",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "student",
          "teacher",
          "doctor"
        ]
      },
      {
        "id": 266,
        "word": "happy",
        "type": "adjective",
        "family": "happy",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "vui vẻ, hạnh phúc",
        "hint": "tính từ cảm xúc",
        "confusionWords": [
          "busy",
          "fast",
          "hard"
        ]
      },
      {
        "id": 267,
        "word": "busy",
        "type": "adjective",
        "family": "busy",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "bận rộn",
        "hint": "tính từ trạng thái",
        "confusionWords": [
          "happy",
          "fast",
          "hard"
        ]
      },
      {
        "id": 268,
        "word": "fast",
        "type": "adjective",
        "family": "fast",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "nhanh",
        "hint": "tính từ/trạng từ đặc biệt",
        "confusionWords": [
          "happy",
          "busy",
          "hard"
        ]
      },
      {
        "id": 269,
        "word": "hard",
        "type": "adjective",
        "family": "hard",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "chăm chỉ, khó",
        "hint": "tính từ/trạng từ cơ bản",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 270,
        "word": "big",
        "type": "adjective",
        "family": "size",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "to lớn",
        "hint": "tính từ kích thước",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 271,
        "word": "small",
        "type": "adjective",
        "family": "size",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "nhỏ bé",
        "hint": "tính từ kích thước",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 272,
        "word": "hot",
        "type": "adjective",
        "family": "weather",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "nóng nực",
        "hint": "tính từ thời tiết",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 273,
        "word": "cold",
        "type": "adjective",
        "family": "weather",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "lạnh giá",
        "hint": "tính từ thời tiết",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 274,
        "word": "new",
        "type": "adjective",
        "family": "age",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "mới mẻ",
        "hint": "tính từ đặc điểm",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 275,
        "word": "old",
        "type": "adjective",
        "family": "age",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "cũ, già",
        "hint": "tính từ đặc điểm",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 276,
        "word": "early",
        "type": "adjective",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "sớm",
        "hint": "tính từ thời gian",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 277,
        "word": "late",
        "type": "adjective",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "muộn, trễ",
        "hint": "tính từ thời gian",
        "confusionWords": [
          "happy",
          "busy",
          "fast"
        ]
      },
      {
        "id": 278,
        "word": "always",
        "type": "adverb",
        "family": "frequency",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "luôn luôn",
        "hint": "trạng từ tần suất",
        "confusionWords": [
          "never",
          "often",
          "usually"
        ]
      },
      {
        "id": 279,
        "word": "never",
        "type": "adverb",
        "family": "frequency",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "không bao giờ",
        "hint": "trạng từ tần suất",
        "confusionWords": [
          "always",
          "often",
          "usually"
        ]
      },
      {
        "id": 280,
        "word": "often",
        "type": "adverb",
        "family": "frequency",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "thường xuyên",
        "hint": "trạng từ tần suất",
        "confusionWords": [
          "always",
          "never",
          "usually"
        ]
      },
      {
        "id": 281,
        "word": "usually",
        "type": "adverb",
        "family": "frequency",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "thường thường",
        "hint": "trạng từ tần suất",
        "confusionWords": [
          "always",
          "never",
          "often"
        ]
      },
      {
        "id": 282,
        "word": "sometimes",
        "type": "adverb",
        "family": "frequency",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "thỉnh thoảng",
        "hint": "trạng từ tần suất",
        "confusionWords": [
          "always",
          "never",
          "often"
        ]
      },
      {
        "id": 283,
        "word": "today",
        "type": "adverb",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "hôm nay",
        "hint": "trạng từ thời gian",
        "confusionWords": [
          "always",
          "never",
          "often"
        ]
      },
      {
        "id": 284,
        "word": "yesterday",
        "type": "adverb",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "hôm qua",
        "hint": "trạng từ thời gian",
        "confusionWords": [
          "always",
          "never",
          "often"
        ]
      },
      {
        "id": 285,
        "word": "tomorrow",
        "type": "adverb",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "ngày mai",
        "hint": "trạng từ thời gian",
        "confusionWords": [
          "always",
          "never",
          "often"
        ]
      },
      {
        "id": 286,
        "word": "well",
        "type": "adverb",
        "family": "good",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "tốt, giỏi",
        "hint": "trạng từ bất quy tắc",
        "confusionWords": [
          "always",
          "never",
          "often"
        ]
      },
      {
        "id": 287,
        "word": "run",
        "type": "verb",
        "family": "run",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chạy bộ",
        "hint": "động từ hành động",
        "confusionWords": [
          "walk",
          "eat",
          "drink"
        ]
      },
      {
        "id": 288,
        "word": "walk",
        "type": "verb",
        "family": "walk",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đi bộ",
        "hint": "động từ hành động",
        "confusionWords": [
          "run",
          "eat",
          "drink"
        ]
      },
      {
        "id": 289,
        "word": "eat",
        "type": "verb",
        "family": "eat",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ăn",
        "hint": "động từ cơ bản",
        "confusionWords": [
          "run",
          "walk",
          "drink"
        ]
      },
      {
        "id": 290,
        "word": "drink",
        "type": "verb",
        "family": "drink",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "uống",
        "hint": "động từ cơ bản",
        "confusionWords": [
          "run",
          "walk",
          "eat"
        ]
      },
      {
        "id": 291,
        "word": "sleep",
        "type": "verb",
        "family": "sleep",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngủ",
        "hint": "động từ cơ bản",
        "confusionWords": [
          "run",
          "walk",
          "eat"
        ]
      },
      {
        "id": 292,
        "word": "study",
        "type": "verb",
        "family": "study",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "học tập",
        "hint": "động từ hành động",
        "confusionWords": [
          "run",
          "walk",
          "eat"
        ]
      },
      {
        "id": 293,
        "word": "work",
        "type": "verb",
        "family": "work",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm việc",
        "hint": "động từ hành động",
        "confusionWords": [
          "run",
          "walk",
          "eat"
        ]
      },
      {
        "id": 294,
        "word": "clean",
        "type": "verb",
        "family": "clean",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "lau dọn",
        "hint": "động từ hành động",
        "confusionWords": [
          "run",
          "walk",
          "eat"
        ]
      },
      {
        "id": 295,
        "word": "cook",
        "type": "verb",
        "family": "cook",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nấu ăn",
        "hint": "động từ hành động",
        "confusionWords": [
          "run",
          "walk",
          "eat"
        ]
      },
      {
        "id": 296,
        "word": "swim",
        "type": "verb",
        "family": "swim",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bơi lội",
        "hint": "động từ hành động",
        "confusionWords": [
          "run",
          "walk",
          "eat"
        ]
      },
      {
        "id": 297,
        "word": "success",
        "type": "noun",
        "family": "success",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự thành công",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "succeed",
          "successful",
          "successfully"
        ]
      },
      {
        "id": 298,
        "word": "succeed",
        "type": "verb",
        "family": "success",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thành công",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ]
      },
      {
        "id": 299,
        "word": "beauty",
        "type": "noun",
        "family": "beauty",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "vẻ đẹp",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "beautify",
          "beautiful",
          "beautifully"
        ]
      },
      {
        "id": 300,
        "word": "care",
        "type": "noun",
        "family": "care",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự cẩn thận",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "care",
          "careful",
          "carefully"
        ]
      },
      {
        "id": 301,
        "word": "heal",
        "type": "verb",
        "family": "health",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chữa lành",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ]
      },
      {
        "id": 302,
        "word": "decision",
        "type": "noun",
        "family": "decide",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự quyết định",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "decide",
          "decisive",
          "decisively"
        ]
      },
      {
        "id": 303,
        "word": "decide",
        "type": "verb",
        "family": "decide",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "quyết định",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ]
      },
      {
        "id": 304,
        "word": "develop",
        "type": "verb",
        "family": "develop",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "phát triển",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "development",
          "develop",
          "developing",
          "developingly"
        ]
      },
      {
        "id": 305,
        "word": "developing",
        "type": "adjective",
        "family": "develop",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đang phát triển",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "development",
          "develop",
          "developing",
          "developingly"
        ]
      },
      {
        "id": 306,
        "word": "interest",
        "type": "noun",
        "family": "interest",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự quan tâm",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "interest",
          "interesting",
          "interestingly"
        ]
      },
      {
        "id": 307,
        "word": "interesting",
        "type": "adjective",
        "family": "interest",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thú vị",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "interest",
          "interest",
          "interesting",
          "interestingly"
        ]
      },
      {
        "id": 308,
        "word": "befriend",
        "type": "verb",
        "family": "friend",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "kết bạn",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ]
      },
      {
        "id": 309,
        "word": "danger",
        "type": "noun",
        "family": "danger",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự nguy hiểm",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "endanger",
          "dangerous",
          "dangerously"
        ]
      },
      {
        "id": 310,
        "word": "endanger",
        "type": "verb",
        "family": "danger",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "gây nguy hiểm",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ]
      },
      {
        "id": 311,
        "word": "use",
        "type": "noun",
        "family": "use",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự sử dụng",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "use",
          "useful",
          "usefully"
        ]
      },
      {
        "id": 312,
        "word": "help",
        "type": "noun",
        "family": "help",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự giúp đỡ",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "help",
          "helpful",
          "helpfully"
        ]
      },
      {
        "id": 313,
        "word": "comfort",
        "type": "noun",
        "family": "comfort",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự thoải mái",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "comfort",
          "comfortable",
          "comfortably"
        ]
      },
      {
        "id": 314,
        "word": "power",
        "type": "noun",
        "family": "power",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sức mạnh",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "empower",
          "powerful",
          "powerfully"
        ]
      },
      {
        "id": 315,
        "word": "empower",
        "type": "verb",
        "family": "power",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "trao quyền",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ]
      },
      {
        "id": 316,
        "word": "peace",
        "type": "noun",
        "family": "peace",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "hòa bình",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "pacify",
          "peaceful",
          "peacefully"
        ]
      },
      {
        "id": 317,
        "word": "culture",
        "type": "noun",
        "family": "culture",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "văn hóa",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "cultivate",
          "cultural",
          "culturally"
        ]
      },
      {
        "id": 318,
        "word": "music",
        "type": "noun",
        "family": "music",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "âm nhạc",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "music",
          "musical",
          "musically"
        ]
      },
      {
        "id": 319,
        "word": "industry",
        "type": "noun",
        "family": "industry",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "công nghiệp",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "industrialize",
          "industrial",
          "industrially"
        ]
      },
      {
        "id": 320,
        "word": "history",
        "type": "noun",
        "family": "history",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "lịch sử",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "history",
          "historic",
          "historically"
        ]
      },
      {
        "id": 321,
        "word": "nature",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tự nhiên",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "naturalize",
          "natural",
          "naturally"
        ]
      },
      {
        "id": 322,
        "word": "technology",
        "type": "noun",
        "family": "technology",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "công nghệ",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "technology",
          "technological",
          "technologically"
        ]
      },
      {
        "id": 323,
        "word": "celebrated",
        "type": "adjective",
        "family": "celebrate",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nổi tiếng",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ]
      },
      {
        "id": 324,
        "word": "comparison",
        "type": "noun",
        "family": "compare",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự so sánh",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "compare",
          "comparative",
          "comparatively"
        ]
      },
      {
        "id": 325,
        "word": "compare",
        "type": "verb",
        "family": "compare",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "so sánh",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ]
      },
      {
        "id": 326,
        "word": "protect",
        "type": "verb",
        "family": "protect",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bảo vệ",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ]
      },
      {
        "id": 327,
        "word": "support",
        "type": "noun",
        "family": "support",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự ủng hộ",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "support",
          "supportive",
          "supportively"
        ]
      },
      {
        "id": 328,
        "word": "act",
        "type": "verb",
        "family": "act",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "hành động",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "action",
          "act",
          "active",
          "actively"
        ]
      },
      {
        "id": 329,
        "word": "attract",
        "type": "verb",
        "family": "attract",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thu hút",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ]
      },
      {
        "id": 330,
        "word": "sad",
        "type": "adjective",
        "family": "sad",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "buồn bã",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ]
      },
      {
        "id": 331,
        "word": "enable",
        "type": "verb",
        "family": "able",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cho phép",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "ability",
          "enable",
          "able",
          "ably"
        ]
      },
      {
        "id": 332,
        "word": "direct",
        "type": "verb",
        "family": "direct",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "hướng dẫn",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "direction",
          "direct",
          "direct",
          "directly"
        ]
      },
      {
        "id": 333,
        "word": "excite",
        "type": "noun",
        "family": "excite",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự phấn khích",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "excite",
          "exciting",
          "excitingly"
        ]
      },
      {
        "id": 334,
        "word": "exciting",
        "type": "adjective",
        "family": "excite",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thú vị, phấn khích",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "excite",
          "excite",
          "exciting",
          "excitingly"
        ]
      },
      {
        "id": 335,
        "word": "fame",
        "type": "noun",
        "family": "fame",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự nổi tiếng",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "defame",
          "famous",
          "famously"
        ]
      },
      {
        "id": 336,
        "word": "defame",
        "type": "verb",
        "family": "fame",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nói xấu",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "fame",
          "defame",
          "famous",
          "famously"
        ]
      },
      {
        "id": 337,
        "word": "agree",
        "type": "verb",
        "family": "agree",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đồng ý",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ]
      },
      {
        "id": 338,
        "word": "appear",
        "type": "verb",
        "family": "appear",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "xuất hiện",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ]
      },
      {
        "id": 339,
        "word": "assist",
        "type": "verb",
        "family": "assist",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "giúp đỡ",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ]
      },
      {
        "id": 340,
        "word": "attend",
        "type": "verb",
        "family": "attend",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tham gia",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ]
      },
      {
        "id": 341,
        "word": "bravery",
        "type": "noun",
        "family": "brave",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự dũng cảm",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "brave",
          "brave",
          "bravely"
        ]
      },
      {
        "id": 342,
        "word": "brave",
        "type": "verb",
        "family": "brave",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bất chấp",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "bravery",
          "brave",
          "brave",
          "bravely"
        ]
      },
      {
        "id": 343,
        "word": "bright",
        "type": "adjective",
        "family": "bright",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sáng sủa",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ]
      },
      {
        "id": 344,
        "word": "collect",
        "type": "verb",
        "family": "collect",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sưu tập",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ]
      },
      {
        "id": 345,
        "word": "compete",
        "type": "verb",
        "family": "compete",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cạnh tranh",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ]
      },
      {
        "id": 346,
        "word": "confide",
        "type": "verb",
        "family": "confidence",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tâm sự",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ]
      },
      {
        "id": 347,
        "word": "connect",
        "type": "verb",
        "family": "connect",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "kết nối",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ]
      },
      {
        "id": 348,
        "word": "connected",
        "type": "adjective",
        "family": "connect",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "được kết nối",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ]
      },
      {
        "id": 349,
        "word": "courage",
        "type": "noun",
        "family": "courage",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "lòng can đảm",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "encourage",
          "courageous",
          "courageously"
        ]
      },
      {
        "id": 350,
        "word": "encourage",
        "type": "verb",
        "family": "courage",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "khuyến khích",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ]
      },
      {
        "id": 351,
        "word": "dark",
        "type": "adjective",
        "family": "dark",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tối tăm",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ]
      },
      {
        "id": 352,
        "word": "deep",
        "type": "adjective",
        "family": "deep",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sâu sắc",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ]
      },
      {
        "id": 353,
        "word": "depend",
        "type": "verb",
        "family": "depend",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "phụ thuộc",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ]
      },
      {
        "id": 354,
        "word": "describe",
        "type": "verb",
        "family": "describe",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "miêu tả",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ]
      },
      {
        "id": 355,
        "word": "differ",
        "type": "verb",
        "family": "differ",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "khác biệt",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "difference",
          "differ",
          "different",
          "differently"
        ]
      },
      {
        "id": 356,
        "word": "difficulty",
        "type": "noun",
        "family": "difficult",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự khó khăn",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "difficulty",
          "difficult",
          "difficultly"
        ]
      },
      {
        "id": 357,
        "word": "difficult",
        "type": "adjective",
        "family": "difficult",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "khó khăn",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "difficulty",
          "difficulty",
          "difficult",
          "difficultly"
        ]
      },
      {
        "id": 358,
        "word": "disappoint",
        "type": "verb",
        "family": "disappoint",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm thất vọng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ]
      },
      {
        "id": 359,
        "word": "disappointing",
        "type": "adjective",
        "family": "disappoint",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đáng thất vọng",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ]
      },
      {
        "id": 360,
        "word": "honesty",
        "type": "noun",
        "family": "honest",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "lòng trung thực",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "honest",
          "honest",
          "honestly"
        ]
      },
      {
        "id": 361,
        "word": "honest",
        "type": "verb",
        "family": "honest",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "trung thực",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "honesty",
          "honest",
          "honest",
          "honestly"
        ]
      },
      {
        "id": 362,
        "word": "economy",
        "type": "noun",
        "family": "economy",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nền kinh tế",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "economize",
          "economic",
          "economically"
        ]
      },
      {
        "id": 363,
        "word": "employ",
        "type": "verb",
        "family": "employ",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thuê mướn",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ]
      },
      {
        "id": 364,
        "word": "employed",
        "type": "adjective",
        "family": "employ",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "có việc làm",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ]
      },
      {
        "id": 365,
        "word": "enjoy",
        "type": "verb",
        "family": "enjoy",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thưởng thức",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ]
      },
      {
        "id": 366,
        "word": "explain",
        "type": "verb",
        "family": "explain",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "giải thích",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ]
      },
      {
        "id": 367,
        "word": "forget",
        "type": "verb",
        "family": "forget",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "quên",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ]
      },
      {
        "id": 368,
        "word": "free",
        "type": "verb",
        "family": "free",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "giải phóng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "freedom",
          "free",
          "free",
          "freely"
        ]
      },
      {
        "id": 369,
        "word": "grow",
        "type": "verb",
        "family": "grow",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tăng trưởng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ]
      },
      {
        "id": 370,
        "word": "growing",
        "type": "adjective",
        "family": "grow",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đang lớn",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ]
      },
      {
        "id": 371,
        "word": "height",
        "type": "noun",
        "family": "high",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chiều cao",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "heighten",
          "high",
          "highly"
        ]
      },
      {
        "id": 372,
        "word": "high",
        "type": "adjective",
        "family": "high",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cao",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "height",
          "heighten",
          "high",
          "highly"
        ]
      },
      {
        "id": 373,
        "word": "imagine",
        "type": "verb",
        "family": "imagine",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tưởng tượng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ]
      },
      {
        "id": 374,
        "word": "impression",
        "type": "noun",
        "family": "impress",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ấn tượng",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "impress",
          "impressive",
          "impressively"
        ]
      },
      {
        "id": 375,
        "word": "impress",
        "type": "verb",
        "family": "impress",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "gây ấn tượng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ]
      },
      {
        "id": 376,
        "word": "improve",
        "type": "verb",
        "family": "improve",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cải tiến",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ]
      },
      {
        "id": 377,
        "word": "improved",
        "type": "adjective",
        "family": "improve",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "được cải thiện",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ]
      },
      {
        "id": 378,
        "word": "inform",
        "type": "verb",
        "family": "inform",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thông báo",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "information",
          "inform",
          "informative",
          "informatively"
        ]
      },
      {
        "id": 379,
        "word": "invent",
        "type": "verb",
        "family": "invent",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "phát minh",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ]
      },
      {
        "id": 380,
        "word": "invite",
        "type": "verb",
        "family": "invite",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mời",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ]
      },
      {
        "id": 381,
        "word": "inviting",
        "type": "adjective",
        "family": "invite",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "hấp dẫn",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ]
      },
      {
        "id": 382,
        "word": "kind",
        "type": "verb",
        "family": "kind",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tử tế",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "kindness",
          "kind",
          "kind",
          "kindly"
        ]
      },
      {
        "id": 383,
        "word": "knowledge",
        "type": "noun",
        "family": "know",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "kiến thức",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "know",
          "knowledgeable",
          "knowledgeably"
        ]
      },
      {
        "id": 384,
        "word": "know",
        "type": "verb",
        "family": "know",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "biết",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "knowledge",
          "know",
          "knowledgeable",
          "knowledgeably"
        ]
      },
      {
        "id": 385,
        "word": "life",
        "type": "noun",
        "family": "live",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cuộc sống",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "live",
          "lively",
          "live"
        ]
      },
      {
        "id": 386,
        "word": "live",
        "type": "verb",
        "family": "live",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sống",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "life",
          "live",
          "lively",
          "live"
        ]
      },
      {
        "id": 387,
        "word": "long",
        "type": "adjective",
        "family": "long",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "dài",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "length",
          "lengthen",
          "long",
          "longingly"
        ]
      },
      {
        "id": 388,
        "word": "love",
        "type": "noun",
        "family": "love",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tình yêu",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "love",
          "lovely",
          "lovingly"
        ]
      },
      {
        "id": 389,
        "word": "move",
        "type": "verb",
        "family": "move",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "di chuyển",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "movement",
          "move",
          "movable",
          "movably"
        ]
      },
      {
        "id": 390,
        "word": "noise",
        "type": "noun",
        "family": "noise",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tiếng ồn",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "noise",
          "noisy",
          "noisily"
        ]
      },
      {
        "id": 391,
        "word": "perfect",
        "type": "verb",
        "family": "perfect",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "hoàn thiện",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "perfection",
          "perfect",
          "perfect",
          "perfectly"
        ]
      },
      {
        "id": 392,
        "word": "perform",
        "type": "verb",
        "family": "perform",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "biểu diễn",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "performance",
          "perform",
          "performing",
          "performingly"
        ]
      },
      {
        "id": 393,
        "word": "performing",
        "type": "adjective",
        "family": "perform",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đang biểu diễn",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "performance",
          "perform",
          "performing",
          "performingly"
        ]
      },
      {
        "id": 394,
        "word": "polite",
        "type": "verb",
        "family": "polite",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "lịch sự",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "politeness",
          "polite",
          "polite",
          "politely"
        ]
      },
      {
        "id": 395,
        "word": "popular",
        "type": "adjective",
        "family": "popular",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "phổ biến",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "popularity",
          "popularize",
          "popular",
          "popularly"
        ]
      },
      {
        "id": 396,
        "word": "prepare",
        "type": "verb",
        "family": "prepare",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chuẩn bị",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "preparation",
          "prepare",
          "prepared",
          "preparedly"
        ]
      },
      {
        "id": 397,
        "word": "prepared",
        "type": "adjective",
        "family": "prepare",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sẵn sàng",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "preparation",
          "prepare",
          "prepared",
          "preparedly"
        ]
      },
      {
        "id": 398,
        "word": "produce",
        "type": "verb",
        "family": "produce",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sản xuất",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "production",
          "produce",
          "productive",
          "productively"
        ]
      },
      {
        "id": 399,
        "word": "pride",
        "type": "noun",
        "family": "proud",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự tự hào",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "pride",
          "proud",
          "proudly"
        ]
      },
      {
        "id": 400,
        "word": "proud",
        "type": "adjective",
        "family": "proud",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tự hào",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "pride",
          "pride",
          "proud",
          "proudly"
        ]
      },
      {
        "id": 401,
        "word": "quiet",
        "type": "verb",
        "family": "quiet",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm dịu",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "quietness",
          "quiet",
          "quiet",
          "quietly"
        ]
      },
      {
        "id": 402,
        "word": "relax",
        "type": "verb",
        "family": "relax",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thư giãn",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "relaxation",
          "relax",
          "relaxing",
          "relaxingly"
        ]
      },
      {
        "id": 403,
        "word": "relaxing",
        "type": "adjective",
        "family": "relax",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thư giãn",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "relaxation",
          "relax",
          "relaxing",
          "relaxingly"
        ]
      },
      {
        "id": 404,
        "word": "safety",
        "type": "noun",
        "family": "safe",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "sự an toàn",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "safe",
          "safe",
          "safely"
        ]
      },
      {
        "id": 405,
        "word": "safe",
        "type": "verb",
        "family": "safe",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "an toàn",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "safety",
          "safe",
          "safe",
          "safely"
        ]
      },
      {
        "id": 406,
        "word": "satisfy",
        "type": "verb",
        "family": "satisfy",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm hài lòng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "satisfaction",
          "satisfy",
          "satisfactory",
          "satisfactorily"
        ]
      },
      {
        "id": 407,
        "word": "short",
        "type": "adjective",
        "family": "short",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngắn",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "shortness",
          "shorten",
          "short",
          "shortly"
        ]
      },
      {
        "id": 408,
        "word": "simple",
        "type": "adjective",
        "family": "simple",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đơn giản",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "simplicity",
          "simplify",
          "simple",
          "simply"
        ]
      },
      {
        "id": 409,
        "word": "soft",
        "type": "adjective",
        "family": "soft",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mềm",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "softness",
          "soften",
          "soft",
          "softly"
        ]
      },
      {
        "id": 410,
        "word": "strong",
        "type": "adjective",
        "family": "strong",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mạnh mẽ",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "strength",
          "strengthen",
          "strong",
          "strongly"
        ]
      },
      {
        "id": 411,
        "word": "thought",
        "type": "noun",
        "family": "thought",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "suy nghĩ",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "think",
          "thoughtful",
          "thoughtfully"
        ]
      },
      {
        "id": 412,
        "word": "think",
        "type": "verb",
        "family": "thought",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "suy nghĩ",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "thought",
          "think",
          "thoughtful",
          "thoughtfully"
        ]
      },
      {
        "id": 413,
        "word": "true",
        "type": "verb",
        "family": "true",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đúng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "truth",
          "true",
          "true",
          "truly"
        ]
      },
      {
        "id": 414,
        "word": "warm",
        "type": "verb",
        "family": "warm",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm ấm",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "warmth",
          "warm",
          "warm",
          "warmly"
        ]
      },
      {
        "id": 415,
        "word": "weakness",
        "type": "noun",
        "family": "weak",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "điểm yếu",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "weaken",
          "weak",
          "weakly"
        ]
      },
      {
        "id": 416,
        "word": "weaken",
        "type": "verb",
        "family": "weak",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm yếu đi",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "weakness",
          "weaken",
          "weak",
          "weakly"
        ]
      },
      {
        "id": 417,
        "word": "weak",
        "type": "adjective",
        "family": "weak",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "yếu",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "weakness",
          "weaken",
          "weak",
          "weakly"
        ]
      },
      {
        "id": 418,
        "word": "width",
        "type": "noun",
        "family": "wide",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chiều rộng",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "widen",
          "wide",
          "widely"
        ]
      },
      {
        "id": 419,
        "word": "widen",
        "type": "verb",
        "family": "wide",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mở rộng",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "width",
          "widen",
          "wide",
          "widely"
        ]
      },
      {
        "id": 420,
        "word": "wide",
        "type": "adjective",
        "family": "wide",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "rộng",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "width",
          "widen",
          "wide",
          "widely"
        ]
      },
      {
        "id": 421,
        "word": "wisdom",
        "type": "noun",
        "family": "wise",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "trí khôn",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "wise",
          "wise",
          "wisely"
        ]
      },
      {
        "id": 422,
        "word": "wise",
        "type": "verb",
        "family": "wise",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "khôn ngoan",
        "hint": "Từ phổ biến: verb",
        "confusionWords": [
          "wisdom",
          "wise",
          "wise",
          "wisely"
        ]
      },
      {
        "id": 423,
        "word": "wonder",
        "type": "noun",
        "family": "wonder",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "điều kỳ diệu",
        "hint": "Từ phổ biến: noun",
        "confusionWords": [
          "wonder",
          "wonderful",
          "wonderfully"
        ]
      },
      {
        "id": 424,
        "word": "wonderful",
        "type": "adjective",
        "family": "wonder",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tuyệt vời",
        "hint": "Từ phổ biến: adjective",
        "confusionWords": [
          "wonder",
          "wonder",
          "wonderful",
          "wonderfully"
        ]
      },
      {
        "id": 425,
        "word": "window",
        "type": "noun",
        "family": "house",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cửa sổ",
        "hint": "danh từ chỉ vật",
        "confusionWords": [
          "door",
          "table",
          "chair"
        ]
      },
      {
        "id": 426,
        "word": "door",
        "type": "noun",
        "family": "house",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cánh cửa",
        "hint": "danh từ chỉ vật",
        "confusionWords": [
          "window",
          "table",
          "chair"
        ]
      },
      {
        "id": 427,
        "word": "table",
        "type": "noun",
        "family": "furniture",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cái bàn",
        "hint": "danh từ chỉ vật",
        "confusionWords": [
          "window",
          "door",
          "chair"
        ]
      },
      {
        "id": 428,
        "word": "chair",
        "type": "noun",
        "family": "furniture",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cái ghế",
        "hint": "danh từ chỉ vật",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 429,
        "word": "water",
        "type": "noun",
        "family": "drink",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nước",
        "hint": "danh từ không đếm được",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 430,
        "word": "food",
        "type": "noun",
        "family": "eat",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thức ăn",
        "hint": "danh từ chỉ đồ ăn",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 431,
        "word": "friend",
        "type": "noun",
        "family": "friend",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "người bạn",
        "hint": "danh từ chỉ người",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 432,
        "word": "parent",
        "type": "noun",
        "family": "family",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "phụ huynh",
        "hint": "danh từ chỉ người",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 433,
        "word": "brother",
        "type": "noun",
        "family": "family",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "anh em trai",
        "hint": "danh từ chỉ người",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 434,
        "word": "sister",
        "type": "noun",
        "family": "family",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chị em gái",
        "hint": "danh từ chỉ người",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 435,
        "word": "cat",
        "type": "noun",
        "family": "animal",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "con mèo",
        "hint": "danh từ động vật",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 436,
        "word": "dog",
        "type": "noun",
        "family": "animal",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "con chó",
        "hint": "danh từ động vật",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 437,
        "word": "bird",
        "type": "noun",
        "family": "animal",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "con chim",
        "hint": "danh từ động vật",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 438,
        "word": "fish",
        "type": "noun",
        "family": "animal",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "con cá",
        "hint": "danh từ động vật",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 439,
        "word": "tree",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cái cây",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 440,
        "word": "flower",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bông hoa",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 441,
        "word": "sun",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mặt trời",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 442,
        "word": "moon",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mặt trăng",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 443,
        "word": "star",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngôi sao",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 444,
        "word": "sky",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bầu trời",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 445,
        "word": "cloud",
        "type": "noun",
        "family": "nature",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đám mây",
        "hint": "danh từ tự nhiên",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 446,
        "word": "rain",
        "type": "noun",
        "family": "weather",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cơn mưa",
        "hint": "danh từ thời tiết",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 447,
        "word": "snow",
        "type": "noun",
        "family": "weather",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tuyết",
        "hint": "danh từ thời tiết",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 448,
        "word": "wind",
        "type": "noun",
        "family": "weather",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cơn gió",
        "hint": "danh từ thời tiết",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 449,
        "word": "street",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đường phố",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 450,
        "word": "city",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thành phố",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 451,
        "word": "village",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngôi làng",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 452,
        "word": "country",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đất nước",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 453,
        "word": "world",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thế giới",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 454,
        "word": "time",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thời gian",
        "hint": "danh từ trừu tượng",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 455,
        "word": "year",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "năm",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 456,
        "word": "month",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tháng",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 457,
        "word": "week",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tuần",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 458,
        "word": "day",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngày",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 459,
        "word": "hour",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "giờ",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 460,
        "word": "minute",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "phút",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 461,
        "word": "second",
        "type": "noun",
        "family": "time",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "giây",
        "hint": "danh từ thời gian",
        "confusionWords": [
          "window",
          "door",
          "table"
        ]
      },
      {
        "id": 462,
        "word": "good",
        "type": "adjective",
        "family": "good",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "tốt",
        "hint": "tính từ đặc điểm",
        "confusionWords": [
          "bad",
          "beautiful",
          "ugly"
        ]
      },
      {
        "id": 463,
        "word": "bad",
        "type": "adjective",
        "family": "bad",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "xấu, tồi",
        "hint": "tính từ đặc điểm",
        "confusionWords": [
          "good",
          "beautiful",
          "ugly"
        ]
      },
      {
        "id": 464,
        "word": "beautiful",
        "type": "adjective",
        "family": "beauty",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "đẹp",
        "hint": "tính từ mô tả",
        "confusionWords": [
          "good",
          "bad",
          "ugly"
        ]
      },
      {
        "id": 465,
        "word": "ugly",
        "type": "adjective",
        "family": "ugly",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "xấu xí",
        "hint": "tính từ mô tả",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 466,
        "word": "dirty",
        "type": "adjective",
        "family": "dirty",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "bẩn thỉu",
        "hint": "tính từ trạng thái",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 467,
        "word": "smart",
        "type": "adjective",
        "family": "smart",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "thông minh",
        "hint": "tính từ chỉ phẩm chất",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 468,
        "word": "stupid",
        "type": "adjective",
        "family": "stupid",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "ngốc nghếch",
        "hint": "tính từ chỉ phẩm chất",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 469,
        "word": "rich",
        "type": "adjective",
        "family": "rich",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "giàu có",
        "hint": "tính từ tình trạng",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 470,
        "word": "poor",
        "type": "adjective",
        "family": "poor",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "nghèo khó",
        "hint": "tính từ tình trạng",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 471,
        "word": "tall",
        "type": "adjective",
        "family": "size",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "cao",
        "hint": "tính từ kích thước",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 472,
        "word": "heavy",
        "type": "adjective",
        "family": "weight",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "nặng",
        "hint": "tính từ trọng lượng",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 473,
        "word": "light",
        "type": "adjective",
        "family": "weight",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "nhẹ, sáng",
        "hint": "tính từ trọng lượng/đặc điểm",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 474,
        "word": "easy",
        "type": "adjective",
        "family": "difficulty",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "dễ dàng",
        "hint": "tính từ mức độ",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 475,
        "word": "scared",
        "type": "adjective",
        "family": "fear",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "sợ hãi",
        "hint": "tính từ cảm xúc",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 476,
        "word": "funny",
        "type": "adjective",
        "family": "fun",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "buồn cười",
        "hint": "tính từ cảm xúc",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 477,
        "word": "angry",
        "type": "adjective",
        "family": "anger",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "tức giận",
        "hint": "tính từ cảm xúc",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 478,
        "word": "tired",
        "type": "adjective",
        "family": "tired",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "mệt mỏi",
        "hint": "tính từ cảm xúc",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 479,
        "word": "hungry",
        "type": "adjective",
        "family": "hunger",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "đói",
        "hint": "tính từ cảm xúc",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 480,
        "word": "thirsty",
        "type": "adjective",
        "family": "thirst",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "khát",
        "hint": "tính từ cảm xúc",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 481,
        "word": "sick",
        "type": "adjective",
        "family": "illness",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "ốm",
        "hint": "tính từ tình trạng",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 482,
        "word": "healthy",
        "type": "adjective",
        "family": "health",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "khỏe mạnh",
        "hint": "tính từ tình trạng",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 483,
        "word": "young",
        "type": "adjective",
        "family": "age",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "trẻ tuổi",
        "hint": "tính từ độ tuổi",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 484,
        "word": "right",
        "type": "adjective",
        "family": "direction",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "đúng, bên phải",
        "hint": "tính từ vị trí/đặc điểm",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 485,
        "word": "left",
        "type": "adjective",
        "family": "direction",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "bên trái",
        "hint": "tính từ vị trí",
        "confusionWords": [
          "good",
          "bad",
          "beautiful"
        ]
      },
      {
        "id": 486,
        "word": "here",
        "type": "adverb",
        "family": "place",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "ở đây",
        "hint": "trạng từ nơi chốn",
        "confusionWords": [
          "there",
          "up",
          "down"
        ]
      },
      {
        "id": 487,
        "word": "there",
        "type": "adverb",
        "family": "place",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "ở đó",
        "hint": "trạng từ nơi chốn",
        "confusionWords": [
          "here",
          "up",
          "down"
        ]
      },
      {
        "id": 488,
        "word": "up",
        "type": "adverb",
        "family": "direction",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "lên",
        "hint": "trạng từ hướng",
        "confusionWords": [
          "here",
          "there",
          "down"
        ]
      },
      {
        "id": 489,
        "word": "down",
        "type": "adverb",
        "family": "direction",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "xuống",
        "hint": "trạng từ hướng",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 490,
        "word": "in",
        "type": "adverb",
        "family": "position",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "vào trong",
        "hint": "trạng từ vị trí",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 491,
        "word": "out",
        "type": "adverb",
        "family": "position",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "ra ngoài",
        "hint": "trạng từ vị trí",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 492,
        "word": "now",
        "type": "adverb",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "bây giờ",
        "hint": "trạng từ thời gian",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 493,
        "word": "then",
        "type": "adverb",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "sau đó",
        "hint": "trạng từ thời gian",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 494,
        "word": "soon",
        "type": "adverb",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "sớm thôi",
        "hint": "trạng từ thời gian",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 495,
        "word": "again",
        "type": "adverb",
        "family": "frequency",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "lại, nữa",
        "hint": "trạng từ tần suất",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 496,
        "word": "together",
        "type": "adverb",
        "family": "manner",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "cùng nhau",
        "hint": "trạng từ cách thức",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 497,
        "word": "alone",
        "type": "adverb",
        "family": "manner",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "một mình",
        "hint": "trạng từ cách thức",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 498,
        "word": "very",
        "type": "adverb",
        "family": "degree",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "rất",
        "hint": "trạng từ mức độ",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 499,
        "word": "too",
        "type": "adverb",
        "family": "degree",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "quá, cũng",
        "hint": "trạng từ mức độ",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 500,
        "word": "so",
        "type": "adverb",
        "family": "degree",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "vì vậy, quá",
        "hint": "trạng từ mức độ",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 501,
        "word": "really",
        "type": "adverb",
        "family": "degree",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "thật sự",
        "hint": "trạng từ mức độ",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 502,
        "word": "just",
        "type": "adverb",
        "family": "time",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "vừa mới, chỉ",
        "hint": "trạng từ thời gian/mức độ",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 503,
        "word": "only",
        "type": "adverb",
        "family": "degree",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "chỉ",
        "hint": "trạng từ mức độ",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 504,
        "word": "almost",
        "type": "adverb",
        "family": "degree",
        "level": 2,
        "difficulty": 3,
        "vnMeaning": "gần như",
        "hint": "trạng từ mức độ",
        "confusionWords": [
          "here",
          "there",
          "up"
        ]
      },
      {
        "id": 505,
        "word": "see",
        "type": "verb",
        "family": "vision",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nhìn thấy",
        "hint": "động từ giác quan",
        "confusionWords": [
          "hear",
          "smell",
          "taste"
        ]
      },
      {
        "id": 506,
        "word": "hear",
        "type": "verb",
        "family": "hearing",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nghe thấy",
        "hint": "động từ giác quan",
        "confusionWords": [
          "see",
          "smell",
          "taste"
        ]
      },
      {
        "id": 507,
        "word": "smell",
        "type": "verb",
        "family": "smell",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ngửi",
        "hint": "động từ giác quan",
        "confusionWords": [
          "see",
          "hear",
          "taste"
        ]
      },
      {
        "id": 508,
        "word": "taste",
        "type": "verb",
        "family": "taste",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nếm",
        "hint": "động từ giác quan",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 509,
        "word": "touch",
        "type": "verb",
        "family": "touch",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chạm",
        "hint": "động từ giác quan",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 510,
        "word": "understand",
        "type": "verb",
        "family": "understand",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "hiểu",
        "hint": "động từ nhận thức",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 511,
        "word": "remember",
        "type": "verb",
        "family": "memory",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nhớ",
        "hint": "động từ nhận thức",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 512,
        "word": "hate",
        "type": "verb",
        "family": "hate",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ghét",
        "hint": "động từ cảm xúc",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 513,
        "word": "like",
        "type": "verb",
        "family": "like",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "thích",
        "hint": "động từ cảm xúc",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 514,
        "word": "want",
        "type": "verb",
        "family": "desire",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "muốn",
        "hint": "động từ mong muốn",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 515,
        "word": "need",
        "type": "verb",
        "family": "need",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cần",
        "hint": "động từ nhu cầu",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 516,
        "word": "go",
        "type": "verb",
        "family": "move",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đi",
        "hint": "động từ di chuyển",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 517,
        "word": "come",
        "type": "verb",
        "family": "move",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đến",
        "hint": "động từ di chuyển",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 518,
        "word": "stop",
        "type": "verb",
        "family": "move",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "dừng lại",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 519,
        "word": "start",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bắt đầu",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 520,
        "word": "finish",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "kết thúc",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 521,
        "word": "open",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mở",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 522,
        "word": "close",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đóng",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 523,
        "word": "play",
        "type": "verb",
        "family": "play",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chơi",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 524,
        "word": "buy",
        "type": "verb",
        "family": "trade",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "mua",
        "hint": "động từ giao dịch",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 525,
        "word": "sell",
        "type": "verb",
        "family": "trade",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bán",
        "hint": "động từ giao dịch",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 526,
        "word": "give",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cho, tặng",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 527,
        "word": "take",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "lấy",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 528,
        "word": "make",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm, tạo ra",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 529,
        "word": "do",
        "type": "verb",
        "family": "action",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "làm",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 530,
        "word": "say",
        "type": "verb",
        "family": "speak",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nói",
        "hint": "động từ giao tiếp",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 531,
        "word": "tell",
        "type": "verb",
        "family": "speak",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "kể, bảo",
        "hint": "động từ giao tiếp",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 532,
        "word": "ask",
        "type": "verb",
        "family": "speak",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "hỏi",
        "hint": "động từ giao tiếp",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 533,
        "word": "answer",
        "type": "verb",
        "family": "speak",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "trả lời",
        "hint": "động từ giao tiếp",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 534,
        "word": "read",
        "type": "verb",
        "family": "read",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "đọc",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 535,
        "word": "write",
        "type": "verb",
        "family": "write",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "viết",
        "hint": "động từ hành động",
        "confusionWords": [
          "see",
          "hear",
          "smell"
        ]
      },
      {
        "id": 536,
        "word": "car",
        "type": "noun",
        "family": "vehicle",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "ô tô",
        "hint": "danh từ chỉ phương tiện",
        "confusionWords": [
          "bus",
          "train",
          "plane"
        ]
      },
      {
        "id": 537,
        "word": "bus",
        "type": "noun",
        "family": "vehicle",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "xe buýt",
        "hint": "danh từ chỉ phương tiện",
        "confusionWords": [
          "car",
          "train",
          "plane"
        ]
      },
      {
        "id": 538,
        "word": "train",
        "type": "noun",
        "family": "vehicle",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tàu hỏa",
        "hint": "danh từ chỉ phương tiện",
        "confusionWords": [
          "car",
          "bus",
          "plane"
        ]
      },
      {
        "id": 539,
        "word": "plane",
        "type": "noun",
        "family": "vehicle",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "máy bay",
        "hint": "danh từ chỉ phương tiện",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 540,
        "word": "bike",
        "type": "noun",
        "family": "vehicle",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "xe đạp",
        "hint": "danh từ chỉ phương tiện",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 541,
        "word": "shirt",
        "type": "noun",
        "family": "clothes",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "áo sơ mi",
        "hint": "danh từ trang phục",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 542,
        "word": "shoe",
        "type": "noun",
        "family": "clothes",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "chiếc giày",
        "hint": "danh từ trang phục",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 543,
        "word": "hat",
        "type": "noun",
        "family": "clothes",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cái mũ",
        "hint": "danh từ trang phục",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 544,
        "word": "money",
        "type": "noun",
        "family": "finance",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "tiền",
        "hint": "danh từ không đếm được",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 545,
        "word": "shop",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "cửa hàng",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 546,
        "word": "park",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "công viên",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 547,
        "word": "hospital",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bệnh viện",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 548,
        "word": "farm",
        "type": "noun",
        "family": "place",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "nông trại",
        "hint": "danh từ chỉ nơi chốn",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 549,
        "word": "game",
        "type": "noun",
        "family": "play",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "trò chơi",
        "hint": "danh từ chỉ vật",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      },
      {
        "id": 550,
        "word": "song",
        "type": "noun",
        "family": "music",
        "level": 2,
        "difficulty": 2,
        "vnMeaning": "bài hát",
        "hint": "danh từ chỉ vật",
        "confusionWords": [
          "car",
          "bus",
          "train"
        ]
      }
    ],

  /** Level 3: 350 words */
  level3: [
      {
        "id": 551,
        "word": "success",
        "type": "noun",
        "family": "success",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự thành công",
        "hint": "Nhóm từ: success (noun)",
        "confusionWords": [
          "succeed",
          "successful",
          "successfully"
        ]
      },
      {
        "id": 552,
        "word": "succeed",
        "type": "verb",
        "family": "success",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thành công",
        "hint": "Nhóm từ: success (verb)",
        "confusionWords": [
          "success",
          "successful",
          "successfully"
        ]
      },
      {
        "id": 553,
        "word": "successful",
        "type": "adjective",
        "family": "success",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thành công",
        "hint": "Nhóm từ: success (adjective)",
        "confusionWords": [
          "success",
          "succeed",
          "successfully"
        ]
      },
      {
        "id": 554,
        "word": "successfully",
        "type": "adverb",
        "family": "success",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thành công",
        "hint": "Nhóm từ: success (adverb)",
        "confusionWords": [
          "success",
          "succeed",
          "successful"
        ]
      },
      {
        "id": 555,
        "word": "beauty",
        "type": "noun",
        "family": "beauty",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "vẻ đẹp",
        "hint": "Nhóm từ: beauty (noun)",
        "confusionWords": [
          "beautify",
          "beautiful",
          "beautifully"
        ]
      },
      {
        "id": 556,
        "word": "beautify",
        "type": "verb",
        "family": "beauty",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm đẹp",
        "hint": "Nhóm từ: beauty (verb)",
        "confusionWords": [
          "beauty",
          "beautiful",
          "beautifully"
        ]
      },
      {
        "id": 557,
        "word": "beautiful",
        "type": "adjective",
        "family": "beauty",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "xinh đẹp",
        "hint": "Nhóm từ: beauty (adjective)",
        "confusionWords": [
          "beauty",
          "beautify",
          "beautifully"
        ]
      },
      {
        "id": 558,
        "word": "beautifully",
        "type": "adverb",
        "family": "beauty",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách xinh đẹp",
        "hint": "Nhóm từ: beauty (adverb)",
        "confusionWords": [
          "beauty",
          "beautify",
          "beautiful"
        ]
      },
      {
        "id": 559,
        "word": "care",
        "type": "noun",
        "family": "care",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự cẩn thận",
        "hint": "Nhóm từ: care (noun)",
        "confusionWords": [
          "careful",
          "carefully"
        ]
      },
      {
        "id": 560,
        "word": "careful",
        "type": "adjective",
        "family": "care",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "cẩn thận",
        "hint": "Nhóm từ: care (adjective)",
        "confusionWords": [
          "care",
          "care",
          "carefully"
        ]
      },
      {
        "id": 561,
        "word": "carefully",
        "type": "adverb",
        "family": "care",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách cẩn thận",
        "hint": "Nhóm từ: care (adverb)",
        "confusionWords": [
          "care",
          "care",
          "careful"
        ]
      },
      {
        "id": 562,
        "word": "health",
        "type": "noun",
        "family": "health",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sức khỏe",
        "hint": "Nhóm từ: health (noun)",
        "confusionWords": [
          "heal",
          "healthy",
          "healthily"
        ]
      },
      {
        "id": 563,
        "word": "heal",
        "type": "verb",
        "family": "health",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "chữa lành",
        "hint": "Nhóm từ: health (verb)",
        "confusionWords": [
          "health",
          "healthy",
          "healthily"
        ]
      },
      {
        "id": 564,
        "word": "healthy",
        "type": "adjective",
        "family": "health",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "khỏe mạnh",
        "hint": "Nhóm từ: health (adjective)",
        "confusionWords": [
          "health",
          "heal",
          "healthily"
        ]
      },
      {
        "id": 565,
        "word": "healthily",
        "type": "adverb",
        "family": "health",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách lành mạnh",
        "hint": "Nhóm từ: health (adverb)",
        "confusionWords": [
          "health",
          "heal",
          "healthy"
        ]
      },
      {
        "id": 566,
        "word": "education",
        "type": "noun",
        "family": "educate",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "nền giáo dục",
        "hint": "Nhóm từ: educate (noun)",
        "confusionWords": [
          "educate",
          "educational",
          "educationally"
        ]
      },
      {
        "id": 567,
        "word": "educate",
        "type": "verb",
        "family": "educate",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "giáo dục",
        "hint": "Nhóm từ: educate (verb)",
        "confusionWords": [
          "education",
          "educational",
          "educationally"
        ]
      },
      {
        "id": 568,
        "word": "educational",
        "type": "adjective",
        "family": "educate",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "mang tính giáo dục",
        "hint": "Nhóm từ: educate (adjective)",
        "confusionWords": [
          "education",
          "educate",
          "educationally"
        ]
      },
      {
        "id": 569,
        "word": "educationally",
        "type": "adverb",
        "family": "educate",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt giáo dục",
        "hint": "Nhóm từ: educate (adverb)",
        "confusionWords": [
          "education",
          "educate",
          "educational"
        ]
      },
      {
        "id": 570,
        "word": "creation",
        "type": "noun",
        "family": "create",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự sáng tạo",
        "hint": "Nhóm từ: create (noun)",
        "confusionWords": [
          "create",
          "creative",
          "creatively"
        ]
      },
      {
        "id": 571,
        "word": "create",
        "type": "verb",
        "family": "create",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sáng tạo",
        "hint": "Nhóm từ: create (verb)",
        "confusionWords": [
          "creation",
          "creative",
          "creatively"
        ]
      },
      {
        "id": 572,
        "word": "creative",
        "type": "adjective",
        "family": "create",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sáng tạo",
        "hint": "Nhóm từ: create (adjective)",
        "confusionWords": [
          "creation",
          "create",
          "creatively"
        ]
      },
      {
        "id": 573,
        "word": "creatively",
        "type": "adverb",
        "family": "create",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách sáng tạo",
        "hint": "Nhóm từ: create (adverb)",
        "confusionWords": [
          "creation",
          "create",
          "creative"
        ]
      },
      {
        "id": 574,
        "word": "decision",
        "type": "noun",
        "family": "decide",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự quyết định",
        "hint": "Nhóm từ: decide (noun)",
        "confusionWords": [
          "decide",
          "decisive",
          "decisively"
        ]
      },
      {
        "id": 575,
        "word": "decide",
        "type": "verb",
        "family": "decide",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "quyết định",
        "hint": "Nhóm từ: decide (verb)",
        "confusionWords": [
          "decision",
          "decisive",
          "decisively"
        ]
      },
      {
        "id": 576,
        "word": "decisive",
        "type": "adjective",
        "family": "decide",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "kiên quyết",
        "hint": "Nhóm từ: decide (adjective)",
        "confusionWords": [
          "decision",
          "decide",
          "decisively"
        ]
      },
      {
        "id": 577,
        "word": "decisively",
        "type": "adverb",
        "family": "decide",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách kiên quyết",
        "hint": "Nhóm từ: decide (adverb)",
        "confusionWords": [
          "decision",
          "decide",
          "decisive"
        ]
      },
      {
        "id": 578,
        "word": "development",
        "type": "noun",
        "family": "develop",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự phát triển",
        "hint": "Nhóm từ: develop (noun)",
        "confusionWords": [
          "develop",
          "developing",
          "developingly"
        ]
      },
      {
        "id": 579,
        "word": "develop",
        "type": "verb",
        "family": "develop",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "phát triển",
        "hint": "Nhóm từ: develop (verb)",
        "confusionWords": [
          "development",
          "developing",
          "developingly"
        ]
      },
      {
        "id": 580,
        "word": "developing",
        "type": "adjective",
        "family": "develop",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đang phát triển",
        "hint": "Nhóm từ: develop (adjective)",
        "confusionWords": [
          "development",
          "develop",
          "developingly"
        ]
      },
      {
        "id": 581,
        "word": "developingly",
        "type": "adverb",
        "family": "develop",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách phát triển",
        "hint": "Nhóm từ: develop (adverb)",
        "confusionWords": [
          "development",
          "develop",
          "developing"
        ]
      },
      {
        "id": 582,
        "word": "interest",
        "type": "noun",
        "family": "interest",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự quan tâm",
        "hint": "Nhóm từ: interest (noun)",
        "confusionWords": [
          "interesting",
          "interestingly"
        ]
      },
      {
        "id": 583,
        "word": "interesting",
        "type": "adjective",
        "family": "interest",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thú vị",
        "hint": "Nhóm từ: interest (adjective)",
        "confusionWords": [
          "interest",
          "interest",
          "interestingly"
        ]
      },
      {
        "id": 584,
        "word": "interestingly",
        "type": "adverb",
        "family": "interest",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thú vị",
        "hint": "Nhóm từ: interest (adverb)",
        "confusionWords": [
          "interest",
          "interest",
          "interesting"
        ]
      },
      {
        "id": 585,
        "word": "friendship",
        "type": "noun",
        "family": "friend",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "tình bạn",
        "hint": "Nhóm từ: friend (noun)",
        "confusionWords": [
          "befriend",
          "friendly",
          "friendlily"
        ]
      },
      {
        "id": 586,
        "word": "befriend",
        "type": "verb",
        "family": "friend",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "kết bạn",
        "hint": "Nhóm từ: friend (verb)",
        "confusionWords": [
          "friendship",
          "friendly",
          "friendlily"
        ]
      },
      {
        "id": 587,
        "word": "friendly",
        "type": "adjective",
        "family": "friend",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thân thiện",
        "hint": "Nhóm từ: friend (adjective)",
        "confusionWords": [
          "friendship",
          "befriend",
          "friendlily"
        ]
      },
      {
        "id": 588,
        "word": "friendlily",
        "type": "adverb",
        "family": "friend",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thân thiện",
        "hint": "Nhóm từ: friend (adverb)",
        "confusionWords": [
          "friendship",
          "befriend",
          "friendly"
        ]
      },
      {
        "id": 589,
        "word": "danger",
        "type": "noun",
        "family": "danger",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự nguy hiểm",
        "hint": "Nhóm từ: danger (noun)",
        "confusionWords": [
          "endanger",
          "dangerous",
          "dangerously"
        ]
      },
      {
        "id": 590,
        "word": "endanger",
        "type": "verb",
        "family": "danger",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "gây nguy hiểm",
        "hint": "Nhóm từ: danger (verb)",
        "confusionWords": [
          "danger",
          "dangerous",
          "dangerously"
        ]
      },
      {
        "id": 591,
        "word": "dangerous",
        "type": "adjective",
        "family": "danger",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "nguy hiểm",
        "hint": "Nhóm từ: danger (adjective)",
        "confusionWords": [
          "danger",
          "endanger",
          "dangerously"
        ]
      },
      {
        "id": 592,
        "word": "dangerously",
        "type": "adverb",
        "family": "danger",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách nguy hiểm",
        "hint": "Nhóm từ: danger (adverb)",
        "confusionWords": [
          "danger",
          "endanger",
          "dangerous"
        ]
      },
      {
        "id": 593,
        "word": "use",
        "type": "noun",
        "family": "use",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự sử dụng",
        "hint": "Nhóm từ: use (noun)",
        "confusionWords": [
          "useful",
          "usefully"
        ]
      },
      {
        "id": 594,
        "word": "useful",
        "type": "adjective",
        "family": "use",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hữu ích",
        "hint": "Nhóm từ: use (adjective)",
        "confusionWords": [
          "use",
          "use",
          "usefully"
        ]
      },
      {
        "id": 595,
        "word": "usefully",
        "type": "adverb",
        "family": "use",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách hữu ích",
        "hint": "Nhóm từ: use (adverb)",
        "confusionWords": [
          "use",
          "use",
          "useful"
        ]
      },
      {
        "id": 596,
        "word": "help",
        "type": "noun",
        "family": "help",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự giúp đỡ",
        "hint": "Nhóm từ: help (noun)",
        "confusionWords": [
          "helpful",
          "helpfully"
        ]
      },
      {
        "id": 597,
        "word": "helpful",
        "type": "adjective",
        "family": "help",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "có ích",
        "hint": "Nhóm từ: help (adjective)",
        "confusionWords": [
          "help",
          "help",
          "helpfully"
        ]
      },
      {
        "id": 598,
        "word": "helpfully",
        "type": "adverb",
        "family": "help",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách có ích",
        "hint": "Nhóm từ: help (adverb)",
        "confusionWords": [
          "help",
          "help",
          "helpful"
        ]
      },
      {
        "id": 599,
        "word": "comfort",
        "type": "noun",
        "family": "comfort",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự thoải mái",
        "hint": "Nhóm từ: comfort (noun)",
        "confusionWords": [
          "comfortable",
          "comfortably"
        ]
      },
      {
        "id": 600,
        "word": "comfortable",
        "type": "adjective",
        "family": "comfort",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thoải mái",
        "hint": "Nhóm từ: comfort (adjective)",
        "confusionWords": [
          "comfort",
          "comfort",
          "comfortably"
        ]
      },
      {
        "id": 601,
        "word": "comfortably",
        "type": "adverb",
        "family": "comfort",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thoải mái",
        "hint": "Nhóm từ: comfort (adverb)",
        "confusionWords": [
          "comfort",
          "comfort",
          "comfortable"
        ]
      },
      {
        "id": 602,
        "word": "power",
        "type": "noun",
        "family": "power",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sức mạnh",
        "hint": "Nhóm từ: power (noun)",
        "confusionWords": [
          "empower",
          "powerful",
          "powerfully"
        ]
      },
      {
        "id": 603,
        "word": "empower",
        "type": "verb",
        "family": "power",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "trao quyền",
        "hint": "Nhóm từ: power (verb)",
        "confusionWords": [
          "power",
          "powerful",
          "powerfully"
        ]
      },
      {
        "id": 604,
        "word": "powerful",
        "type": "adjective",
        "family": "power",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "mạnh mẽ",
        "hint": "Nhóm từ: power (adjective)",
        "confusionWords": [
          "power",
          "empower",
          "powerfully"
        ]
      },
      {
        "id": 605,
        "word": "powerfully",
        "type": "adverb",
        "family": "power",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách mạnh mẽ",
        "hint": "Nhóm từ: power (adverb)",
        "confusionWords": [
          "power",
          "empower",
          "powerful"
        ]
      },
      {
        "id": 606,
        "word": "peace",
        "type": "noun",
        "family": "peace",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "hòa bình",
        "hint": "Nhóm từ: peace (noun)",
        "confusionWords": [
          "pacify",
          "peaceful",
          "peacefully"
        ]
      },
      {
        "id": 607,
        "word": "pacify",
        "type": "verb",
        "family": "peace",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm yên lòng",
        "hint": "Nhóm từ: peace (verb)",
        "confusionWords": [
          "peace",
          "peaceful",
          "peacefully"
        ]
      },
      {
        "id": 608,
        "word": "peaceful",
        "type": "adjective",
        "family": "peace",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "yên bình",
        "hint": "Nhóm từ: peace (adjective)",
        "confusionWords": [
          "peace",
          "pacify",
          "peacefully"
        ]
      },
      {
        "id": 609,
        "word": "peacefully",
        "type": "adverb",
        "family": "peace",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách hòa bình",
        "hint": "Nhóm từ: peace (adverb)",
        "confusionWords": [
          "peace",
          "pacify",
          "peaceful"
        ]
      },
      {
        "id": 610,
        "word": "nation",
        "type": "noun",
        "family": "nation",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "quốc gia",
        "hint": "Nhóm từ: nation (noun)",
        "confusionWords": [
          "nationalize",
          "national",
          "nationally"
        ]
      },
      {
        "id": 611,
        "word": "nationalize",
        "type": "verb",
        "family": "nation",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "quốc gia hóa",
        "hint": "Nhóm từ: nation (verb)",
        "confusionWords": [
          "nation",
          "national",
          "nationally"
        ]
      },
      {
        "id": 612,
        "word": "national",
        "type": "adjective",
        "family": "nation",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc quốc gia",
        "hint": "Nhóm từ: nation (adjective)",
        "confusionWords": [
          "nation",
          "nationalize",
          "nationally"
        ]
      },
      {
        "id": 613,
        "word": "nationally",
        "type": "adverb",
        "family": "nation",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "trên toàn quốc",
        "hint": "Nhóm từ: nation (adverb)",
        "confusionWords": [
          "nation",
          "nationalize",
          "national"
        ]
      },
      {
        "id": 614,
        "word": "culture",
        "type": "noun",
        "family": "culture",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "văn hóa",
        "hint": "Nhóm từ: culture (noun)",
        "confusionWords": [
          "cultivate",
          "cultural",
          "culturally"
        ]
      },
      {
        "id": 615,
        "word": "cultivate",
        "type": "verb",
        "family": "culture",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "trau dồi",
        "hint": "Nhóm từ: culture (verb)",
        "confusionWords": [
          "culture",
          "cultural",
          "culturally"
        ]
      },
      {
        "id": 616,
        "word": "cultural",
        "type": "adjective",
        "family": "culture",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc văn hóa",
        "hint": "Nhóm từ: culture (adjective)",
        "confusionWords": [
          "culture",
          "cultivate",
          "culturally"
        ]
      },
      {
        "id": 617,
        "word": "culturally",
        "type": "adverb",
        "family": "culture",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt văn hóa",
        "hint": "Nhóm từ: culture (adverb)",
        "confusionWords": [
          "culture",
          "cultivate",
          "cultural"
        ]
      },
      {
        "id": 618,
        "word": "science",
        "type": "noun",
        "family": "science",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "khoa học",
        "hint": "Nhóm từ: science (noun)",
        "confusionWords": [
          "scientific",
          "scientifically"
        ]
      },
      {
        "id": 619,
        "word": "scientific",
        "type": "adjective",
        "family": "science",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc khoa học",
        "hint": "Nhóm từ: science (adjective)",
        "confusionWords": [
          "science",
          "science",
          "scientifically"
        ]
      },
      {
        "id": 620,
        "word": "scientifically",
        "type": "adverb",
        "family": "science",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt khoa học",
        "hint": "Nhóm từ: science (adverb)",
        "confusionWords": [
          "science",
          "science",
          "scientific"
        ]
      },
      {
        "id": 621,
        "word": "music",
        "type": "noun",
        "family": "music",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "âm nhạc",
        "hint": "Nhóm từ: music (noun)",
        "confusionWords": [
          "musical",
          "musically"
        ]
      },
      {
        "id": 622,
        "word": "musical",
        "type": "adjective",
        "family": "music",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc âm nhạc",
        "hint": "Nhóm từ: music (adjective)",
        "confusionWords": [
          "music",
          "music",
          "musically"
        ]
      },
      {
        "id": 623,
        "word": "musically",
        "type": "adverb",
        "family": "music",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt âm nhạc",
        "hint": "Nhóm từ: music (adverb)",
        "confusionWords": [
          "music",
          "music",
          "musical"
        ]
      },
      {
        "id": 624,
        "word": "industry",
        "type": "noun",
        "family": "industry",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "công nghiệp",
        "hint": "Nhóm từ: industry (noun)",
        "confusionWords": [
          "industrialize",
          "industrial",
          "industrially"
        ]
      },
      {
        "id": 625,
        "word": "industrialize",
        "type": "verb",
        "family": "industry",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "công nghiệp hóa",
        "hint": "Nhóm từ: industry (verb)",
        "confusionWords": [
          "industry",
          "industrial",
          "industrially"
        ]
      },
      {
        "id": 626,
        "word": "industrial",
        "type": "adjective",
        "family": "industry",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc công nghiệp",
        "hint": "Nhóm từ: industry (adjective)",
        "confusionWords": [
          "industry",
          "industrialize",
          "industrially"
        ]
      },
      {
        "id": 627,
        "word": "industrially",
        "type": "adverb",
        "family": "industry",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt công nghiệp",
        "hint": "Nhóm từ: industry (adverb)",
        "confusionWords": [
          "industry",
          "industrialize",
          "industrial"
        ]
      },
      {
        "id": 628,
        "word": "history",
        "type": "noun",
        "family": "history",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "lịch sử",
        "hint": "Nhóm từ: history (noun)",
        "confusionWords": [
          "historic",
          "historically"
        ]
      },
      {
        "id": 629,
        "word": "historic",
        "type": "adjective",
        "family": "history",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "mang tính lịch sử",
        "hint": "Nhóm từ: history (adjective)",
        "confusionWords": [
          "history",
          "history",
          "historically"
        ]
      },
      {
        "id": 630,
        "word": "historically",
        "type": "adverb",
        "family": "history",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt lịch sử",
        "hint": "Nhóm từ: history (adverb)",
        "confusionWords": [
          "history",
          "history",
          "historic"
        ]
      },
      {
        "id": 631,
        "word": "nature",
        "type": "noun",
        "family": "nature",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "tự nhiên",
        "hint": "Nhóm từ: nature (noun)",
        "confusionWords": [
          "naturalize",
          "natural",
          "naturally"
        ]
      },
      {
        "id": 632,
        "word": "naturalize",
        "type": "verb",
        "family": "nature",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tự nhiên hóa",
        "hint": "Nhóm từ: nature (verb)",
        "confusionWords": [
          "nature",
          "natural",
          "naturally"
        ]
      },
      {
        "id": 633,
        "word": "natural",
        "type": "adjective",
        "family": "nature",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc tự nhiên",
        "hint": "Nhóm từ: nature (adjective)",
        "confusionWords": [
          "nature",
          "naturalize",
          "naturally"
        ]
      },
      {
        "id": 634,
        "word": "naturally",
        "type": "adverb",
        "family": "nature",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tự nhiên",
        "hint": "Nhóm từ: nature (adverb)",
        "confusionWords": [
          "nature",
          "naturalize",
          "natural"
        ]
      },
      {
        "id": 635,
        "word": "technology",
        "type": "noun",
        "family": "technology",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "công nghệ",
        "hint": "Nhóm từ: technology (noun)",
        "confusionWords": [
          "technological",
          "technologically"
        ]
      },
      {
        "id": 636,
        "word": "technological",
        "type": "adjective",
        "family": "technology",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc công nghệ",
        "hint": "Nhóm từ: technology (adjective)",
        "confusionWords": [
          "technology",
          "technology",
          "technologically"
        ]
      },
      {
        "id": 637,
        "word": "technologically",
        "type": "adverb",
        "family": "technology",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt công nghệ",
        "hint": "Nhóm từ: technology (adverb)",
        "confusionWords": [
          "technology",
          "technology",
          "technological"
        ]
      },
      {
        "id": 638,
        "word": "environment",
        "type": "noun",
        "family": "environment",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "môi trường",
        "hint": "Nhóm từ: environment (noun)",
        "confusionWords": [
          "environmental",
          "environmentally"
        ]
      },
      {
        "id": 639,
        "word": "environmental",
        "type": "adjective",
        "family": "environment",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc môi trường",
        "hint": "Nhóm từ: environment (adjective)",
        "confusionWords": [
          "environment",
          "environment",
          "environmentally"
        ]
      },
      {
        "id": 640,
        "word": "environmentally",
        "type": "adverb",
        "family": "environment",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt môi trường",
        "hint": "Nhóm từ: environment (adverb)",
        "confusionWords": [
          "environment",
          "environment",
          "environmental"
        ]
      },
      {
        "id": 641,
        "word": "communication",
        "type": "noun",
        "family": "communicate",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự giao tiếp",
        "hint": "Nhóm từ: communicate (noun)",
        "confusionWords": [
          "communicate",
          "communicative",
          "communicatively"
        ]
      },
      {
        "id": 642,
        "word": "communicate",
        "type": "verb",
        "family": "communicate",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "giao tiếp",
        "hint": "Nhóm từ: communicate (verb)",
        "confusionWords": [
          "communication",
          "communicative",
          "communicatively"
        ]
      },
      {
        "id": 643,
        "word": "communicative",
        "type": "adjective",
        "family": "communicate",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "cởi mở giao tiếp",
        "hint": "Nhóm từ: communicate (adjective)",
        "confusionWords": [
          "communication",
          "communicate",
          "communicatively"
        ]
      },
      {
        "id": 644,
        "word": "communicatively",
        "type": "adverb",
        "family": "communicate",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "bằng cách giao tiếp",
        "hint": "Nhóm từ: communicate (adverb)",
        "confusionWords": [
          "communication",
          "communicate",
          "communicative"
        ]
      },
      {
        "id": 645,
        "word": "celebration",
        "type": "noun",
        "family": "celebrate",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "lễ kỷ niệm",
        "hint": "Nhóm từ: celebrate (noun)",
        "confusionWords": [
          "celebrate",
          "celebrated",
          "celebratedly"
        ]
      },
      {
        "id": 646,
        "word": "celebrate",
        "type": "verb",
        "family": "celebrate",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "ăn mừng",
        "hint": "Nhóm từ: celebrate (verb)",
        "confusionWords": [
          "celebration",
          "celebrated",
          "celebratedly"
        ]
      },
      {
        "id": 647,
        "word": "celebrated",
        "type": "adjective",
        "family": "celebrate",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "nổi tiếng",
        "hint": "Nhóm từ: celebrate (adjective)",
        "confusionWords": [
          "celebration",
          "celebrate",
          "celebratedly"
        ]
      },
      {
        "id": 648,
        "word": "celebratedly",
        "type": "adverb",
        "family": "celebrate",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách nổi tiếng",
        "hint": "Nhóm từ: celebrate (adverb)",
        "confusionWords": [
          "celebration",
          "celebrate",
          "celebrated"
        ]
      },
      {
        "id": 649,
        "word": "comparison",
        "type": "noun",
        "family": "compare",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự so sánh",
        "hint": "Nhóm từ: compare (noun)",
        "confusionWords": [
          "compare",
          "comparative",
          "comparatively"
        ]
      },
      {
        "id": 650,
        "word": "compare",
        "type": "verb",
        "family": "compare",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "so sánh",
        "hint": "Nhóm từ: compare (verb)",
        "confusionWords": [
          "comparison",
          "comparative",
          "comparatively"
        ]
      },
      {
        "id": 651,
        "word": "comparative",
        "type": "adjective",
        "family": "compare",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "so sánh",
        "hint": "Nhóm từ: compare (adjective)",
        "confusionWords": [
          "comparison",
          "compare",
          "comparatively"
        ]
      },
      {
        "id": 652,
        "word": "comparatively",
        "type": "adverb",
        "family": "compare",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "tương đối",
        "hint": "Nhóm từ: compare (adverb)",
        "confusionWords": [
          "comparison",
          "compare",
          "comparative"
        ]
      },
      {
        "id": 653,
        "word": "protection",
        "type": "noun",
        "family": "protect",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự bảo vệ",
        "hint": "Nhóm từ: protect (noun)",
        "confusionWords": [
          "protect",
          "protective",
          "protectively"
        ]
      },
      {
        "id": 654,
        "word": "protect",
        "type": "verb",
        "family": "protect",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "bảo vệ",
        "hint": "Nhóm từ: protect (verb)",
        "confusionWords": [
          "protection",
          "protective",
          "protectively"
        ]
      },
      {
        "id": 655,
        "word": "protective",
        "type": "adjective",
        "family": "protect",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "bảo vệ",
        "hint": "Nhóm từ: protect (adjective)",
        "confusionWords": [
          "protection",
          "protect",
          "protectively"
        ]
      },
      {
        "id": 656,
        "word": "protectively",
        "type": "adverb",
        "family": "protect",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách bảo vệ",
        "hint": "Nhóm từ: protect (adverb)",
        "confusionWords": [
          "protection",
          "protect",
          "protective"
        ]
      },
      {
        "id": 657,
        "word": "organization",
        "type": "noun",
        "family": "organize",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "tổ chức",
        "hint": "Nhóm từ: organize (noun)",
        "confusionWords": [
          "organize",
          "organizational",
          "organizationally"
        ]
      },
      {
        "id": 658,
        "word": "organize",
        "type": "verb",
        "family": "organize",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tổ chức",
        "hint": "Nhóm từ: organize (verb)",
        "confusionWords": [
          "organization",
          "organizational",
          "organizationally"
        ]
      },
      {
        "id": 659,
        "word": "organizational",
        "type": "adjective",
        "family": "organize",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc tổ chức",
        "hint": "Nhóm từ: organize (adjective)",
        "confusionWords": [
          "organization",
          "organize",
          "organizationally"
        ]
      },
      {
        "id": 660,
        "word": "organizationally",
        "type": "adverb",
        "family": "organize",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt tổ chức",
        "hint": "Nhóm từ: organize (adverb)",
        "confusionWords": [
          "organization",
          "organize",
          "organizational"
        ]
      },
      {
        "id": 661,
        "word": "support",
        "type": "noun",
        "family": "support",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự ủng hộ",
        "hint": "Nhóm từ: support (noun)",
        "confusionWords": [
          "supportive",
          "supportively"
        ]
      },
      {
        "id": 662,
        "word": "supportive",
        "type": "adjective",
        "family": "support",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đỡ đầu, ủng hộ",
        "hint": "Nhóm từ: support (adjective)",
        "confusionWords": [
          "support",
          "support",
          "supportively"
        ]
      },
      {
        "id": 663,
        "word": "supportively",
        "type": "adverb",
        "family": "support",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách ủng hộ",
        "hint": "Nhóm từ: support (adverb)",
        "confusionWords": [
          "support",
          "support",
          "supportive"
        ]
      },
      {
        "id": 664,
        "word": "action",
        "type": "noun",
        "family": "act",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "hành động",
        "hint": "Nhóm từ: act (noun)",
        "confusionWords": [
          "act",
          "active",
          "actively"
        ]
      },
      {
        "id": 665,
        "word": "act",
        "type": "verb",
        "family": "act",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hành động",
        "hint": "Nhóm từ: act (verb)",
        "confusionWords": [
          "action",
          "active",
          "actively"
        ]
      },
      {
        "id": 666,
        "word": "active",
        "type": "adjective",
        "family": "act",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "năng động",
        "hint": "Nhóm từ: act (adjective)",
        "confusionWords": [
          "action",
          "act",
          "actively"
        ]
      },
      {
        "id": 667,
        "word": "actively",
        "type": "adverb",
        "family": "act",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách chủ động",
        "hint": "Nhóm từ: act (adverb)",
        "confusionWords": [
          "action",
          "act",
          "active"
        ]
      },
      {
        "id": 668,
        "word": "attraction",
        "type": "noun",
        "family": "attract",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự thu hút",
        "hint": "Nhóm từ: attract (noun)",
        "confusionWords": [
          "attract",
          "attractive",
          "attractively"
        ]
      },
      {
        "id": 669,
        "word": "attract",
        "type": "verb",
        "family": "attract",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thu hút",
        "hint": "Nhóm từ: attract (verb)",
        "confusionWords": [
          "attraction",
          "attractive",
          "attractively"
        ]
      },
      {
        "id": 670,
        "word": "attractive",
        "type": "adjective",
        "family": "attract",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hấp dẫn",
        "hint": "Nhóm từ: attract (adjective)",
        "confusionWords": [
          "attraction",
          "attract",
          "attractively"
        ]
      },
      {
        "id": 671,
        "word": "attractively",
        "type": "adverb",
        "family": "attract",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách hấp dẫn",
        "hint": "Nhóm từ: attract (adverb)",
        "confusionWords": [
          "attraction",
          "attract",
          "attractive"
        ]
      },
      {
        "id": 672,
        "word": "sadness",
        "type": "noun",
        "family": "sad",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "nỗi buồn",
        "hint": "Nhóm từ: sad (noun)",
        "confusionWords": [
          "sadden",
          "sad",
          "sadly"
        ]
      },
      {
        "id": 673,
        "word": "sadden",
        "type": "verb",
        "family": "sad",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm buồn",
        "hint": "Nhóm từ: sad (verb)",
        "confusionWords": [
          "sadness",
          "sad",
          "sadly"
        ]
      },
      {
        "id": 674,
        "word": "sad",
        "type": "adjective",
        "family": "sad",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "buồn bã",
        "hint": "Nhóm từ: sad (adjective)",
        "confusionWords": [
          "sadness",
          "sadden",
          "sadly"
        ]
      },
      {
        "id": 675,
        "word": "sadly",
        "type": "adverb",
        "family": "sad",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách buồn bã",
        "hint": "Nhóm từ: sad (adverb)",
        "confusionWords": [
          "sadness",
          "sadden",
          "sad"
        ]
      },
      {
        "id": 676,
        "word": "happiness",
        "type": "noun",
        "family": "happy",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "niềm hạnh phúc",
        "hint": "Nhóm từ: happy (noun)",
        "confusionWords": [
          "happy",
          "happy",
          "happily"
        ]
      },
      {
        "id": 677,
        "word": "happy",
        "type": "verb",
        "family": "happy",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hạnh phúc",
        "hint": "Nhóm từ: happy (verb)",
        "confusionWords": [
          "happiness",
          "happily"
        ]
      },
      {
        "id": 678,
        "word": "happily",
        "type": "adverb",
        "family": "happy",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách vui vẻ",
        "hint": "Nhóm từ: happy (adverb)",
        "confusionWords": [
          "happiness",
          "happy",
          "happy"
        ]
      },
      {
        "id": 679,
        "word": "ability",
        "type": "noun",
        "family": "able",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "khả năng",
        "hint": "Nhóm từ: able (noun)",
        "confusionWords": [
          "enable",
          "able",
          "ably"
        ]
      },
      {
        "id": 680,
        "word": "enable",
        "type": "verb",
        "family": "able",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "cho phép",
        "hint": "Nhóm từ: able (verb)",
        "confusionWords": [
          "ability",
          "able",
          "ably"
        ]
      },
      {
        "id": 681,
        "word": "able",
        "type": "adjective",
        "family": "able",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "có thể",
        "hint": "Nhóm từ: able (adjective)",
        "confusionWords": [
          "ability",
          "enable",
          "ably"
        ]
      },
      {
        "id": 682,
        "word": "ably",
        "type": "adverb",
        "family": "able",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách có tài",
        "hint": "Nhóm từ: able (adverb)",
        "confusionWords": [
          "ability",
          "enable",
          "able"
        ]
      },
      {
        "id": 683,
        "word": "direction",
        "type": "noun",
        "family": "direct",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "hướng đi",
        "hint": "Nhóm từ: direct (noun)",
        "confusionWords": [
          "direct",
          "direct",
          "directly"
        ]
      },
      {
        "id": 684,
        "word": "direct",
        "type": "verb",
        "family": "direct",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hướng dẫn",
        "hint": "Nhóm từ: direct (verb)",
        "confusionWords": [
          "direction",
          "directly"
        ]
      },
      {
        "id": 685,
        "word": "directly",
        "type": "adverb",
        "family": "direct",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách trực tiếp",
        "hint": "Nhóm từ: direct (adverb)",
        "confusionWords": [
          "direction",
          "direct",
          "direct"
        ]
      },
      {
        "id": 686,
        "word": "excite",
        "type": "noun",
        "family": "excite",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự phấn khích",
        "hint": "Nhóm từ: excite (noun)",
        "confusionWords": [
          "exciting",
          "excitingly"
        ]
      },
      {
        "id": 687,
        "word": "exciting",
        "type": "adjective",
        "family": "excite",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thú vị, phấn khích",
        "hint": "Nhóm từ: excite (adjective)",
        "confusionWords": [
          "excite",
          "excite",
          "excitingly"
        ]
      },
      {
        "id": 688,
        "word": "excitingly",
        "type": "adverb",
        "family": "excite",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách phấn khích",
        "hint": "Nhóm từ: excite (adverb)",
        "confusionWords": [
          "excite",
          "excite",
          "exciting"
        ]
      },
      {
        "id": 689,
        "word": "fame",
        "type": "noun",
        "family": "fame",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự nổi tiếng",
        "hint": "Nhóm từ: fame (noun)",
        "confusionWords": [
          "defame",
          "famous",
          "famously"
        ]
      },
      {
        "id": 690,
        "word": "defame",
        "type": "verb",
        "family": "fame",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "nói xấu",
        "hint": "Nhóm từ: fame (verb)",
        "confusionWords": [
          "fame",
          "famous",
          "famously"
        ]
      },
      {
        "id": 691,
        "word": "famous",
        "type": "adjective",
        "family": "fame",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "nổi tiếng",
        "hint": "Nhóm từ: fame (adjective)",
        "confusionWords": [
          "fame",
          "defame",
          "famously"
        ]
      },
      {
        "id": 692,
        "word": "famously",
        "type": "adverb",
        "family": "fame",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách nổi tiếng",
        "hint": "Nhóm từ: fame (adverb)",
        "confusionWords": [
          "fame",
          "defame",
          "famous"
        ]
      },
      {
        "id": 693,
        "word": "agreement",
        "type": "noun",
        "family": "agree",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự đồng ý",
        "hint": "Nhóm từ: agree (noun)",
        "confusionWords": [
          "agree",
          "agreeable",
          "agreeably"
        ]
      },
      {
        "id": 694,
        "word": "agree",
        "type": "verb",
        "family": "agree",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đồng ý",
        "hint": "Nhóm từ: agree (verb)",
        "confusionWords": [
          "agreement",
          "agreeable",
          "agreeably"
        ]
      },
      {
        "id": 695,
        "word": "agreeable",
        "type": "adjective",
        "family": "agree",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "dễ chịu",
        "hint": "Nhóm từ: agree (adjective)",
        "confusionWords": [
          "agreement",
          "agree",
          "agreeably"
        ]
      },
      {
        "id": 696,
        "word": "agreeably",
        "type": "adverb",
        "family": "agree",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách dễ chịu",
        "hint": "Nhóm từ: agree (adverb)",
        "confusionWords": [
          "agreement",
          "agree",
          "agreeable"
        ]
      },
      {
        "id": 697,
        "word": "appearance",
        "type": "noun",
        "family": "appear",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "di diện mạo",
        "hint": "Nhóm từ: appear (noun)",
        "confusionWords": [
          "appear",
          "apparent",
          "apparently"
        ]
      },
      {
        "id": 698,
        "word": "appear",
        "type": "verb",
        "family": "appear",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "xuất hiện",
        "hint": "Nhóm từ: appear (verb)",
        "confusionWords": [
          "appearance",
          "apparent",
          "apparently"
        ]
      },
      {
        "id": 699,
        "word": "apparent",
        "type": "adjective",
        "family": "appear",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "rõ ràng",
        "hint": "Nhóm từ: appear (adjective)",
        "confusionWords": [
          "appearance",
          "appear",
          "apparently"
        ]
      },
      {
        "id": 700,
        "word": "apparently",
        "type": "adverb",
        "family": "appear",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "nhìn có vẻ",
        "hint": "Nhóm từ: appear (adverb)",
        "confusionWords": [
          "appearance",
          "appear",
          "apparent"
        ]
      },
      {
        "id": 701,
        "word": "assistance",
        "type": "noun",
        "family": "assist",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự giúp đỡ",
        "hint": "Nhóm từ: assist (noun)",
        "confusionWords": [
          "assist",
          "assistant",
          "assistantly"
        ]
      },
      {
        "id": 702,
        "word": "assist",
        "type": "verb",
        "family": "assist",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "giúp đỡ",
        "hint": "Nhóm từ: assist (verb)",
        "confusionWords": [
          "assistance",
          "assistant",
          "assistantly"
        ]
      },
      {
        "id": 703,
        "word": "assistant",
        "type": "adjective",
        "family": "assist",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "phụ tá",
        "hint": "Nhóm từ: assist (adjective)",
        "confusionWords": [
          "assistance",
          "assist",
          "assistantly"
        ]
      },
      {
        "id": 704,
        "word": "assistantly",
        "type": "adverb",
        "family": "assist",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách phụ tá",
        "hint": "Nhóm từ: assist (adverb)",
        "confusionWords": [
          "assistance",
          "assist",
          "assistant"
        ]
      },
      {
        "id": 705,
        "word": "attendance",
        "type": "noun",
        "family": "attend",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự tham gia",
        "hint": "Nhóm từ: attend (noun)",
        "confusionWords": [
          "attend",
          "attentive",
          "attentively"
        ]
      },
      {
        "id": 706,
        "word": "attend",
        "type": "verb",
        "family": "attend",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tham gia",
        "hint": "Nhóm từ: attend (verb)",
        "confusionWords": [
          "attendance",
          "attentive",
          "attentively"
        ]
      },
      {
        "id": 707,
        "word": "attentive",
        "type": "adjective",
        "family": "attend",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "chú ý",
        "hint": "Nhóm từ: attend (adjective)",
        "confusionWords": [
          "attendance",
          "attend",
          "attentively"
        ]
      },
      {
        "id": 708,
        "word": "attentively",
        "type": "adverb",
        "family": "attend",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách chú ý",
        "hint": "Nhóm từ: attend (adverb)",
        "confusionWords": [
          "attendance",
          "attend",
          "attentive"
        ]
      },
      {
        "id": 709,
        "word": "bravery",
        "type": "noun",
        "family": "brave",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự dũng cảm",
        "hint": "Nhóm từ: brave (noun)",
        "confusionWords": [
          "brave",
          "brave",
          "bravely"
        ]
      },
      {
        "id": 710,
        "word": "brave",
        "type": "verb",
        "family": "brave",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "bất chấp",
        "hint": "Nhóm từ: brave (verb)",
        "confusionWords": [
          "bravery",
          "bravely"
        ]
      },
      {
        "id": 711,
        "word": "bravely",
        "type": "adverb",
        "family": "brave",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách dũng cảm",
        "hint": "Nhóm từ: brave (adverb)",
        "confusionWords": [
          "bravery",
          "brave",
          "brave"
        ]
      },
      {
        "id": 712,
        "word": "brightness",
        "type": "noun",
        "family": "bright",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "độ sáng",
        "hint": "Nhóm từ: bright (noun)",
        "confusionWords": [
          "brighten",
          "bright",
          "brightly"
        ]
      },
      {
        "id": 713,
        "word": "brighten",
        "type": "verb",
        "family": "bright",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm sáng",
        "hint": "Nhóm từ: bright (verb)",
        "confusionWords": [
          "brightness",
          "bright",
          "brightly"
        ]
      },
      {
        "id": 714,
        "word": "bright",
        "type": "adjective",
        "family": "bright",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sáng sủa",
        "hint": "Nhóm từ: bright (adjective)",
        "confusionWords": [
          "brightness",
          "brighten",
          "brightly"
        ]
      },
      {
        "id": 715,
        "word": "brightly",
        "type": "adverb",
        "family": "bright",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách sáng sủa",
        "hint": "Nhóm từ: bright (adverb)",
        "confusionWords": [
          "brightness",
          "brighten",
          "bright"
        ]
      },
      {
        "id": 716,
        "word": "collection",
        "type": "noun",
        "family": "collect",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "bộ sưu tập",
        "hint": "Nhóm từ: collect (noun)",
        "confusionWords": [
          "collect",
          "collective",
          "collectively"
        ]
      },
      {
        "id": 717,
        "word": "collect",
        "type": "verb",
        "family": "collect",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sưu tập",
        "hint": "Nhóm từ: collect (verb)",
        "confusionWords": [
          "collection",
          "collective",
          "collectively"
        ]
      },
      {
        "id": 718,
        "word": "collective",
        "type": "adjective",
        "family": "collect",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tập thể",
        "hint": "Nhóm từ: collect (adjective)",
        "confusionWords": [
          "collection",
          "collect",
          "collectively"
        ]
      },
      {
        "id": 719,
        "word": "collectively",
        "type": "adverb",
        "family": "collect",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tập thể",
        "hint": "Nhóm từ: collect (adverb)",
        "confusionWords": [
          "collection",
          "collect",
          "collective"
        ]
      },
      {
        "id": 720,
        "word": "competition",
        "type": "noun",
        "family": "compete",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "cuộc thi",
        "hint": "Nhóm từ: compete (noun)",
        "confusionWords": [
          "compete",
          "competitive",
          "competitively"
        ]
      },
      {
        "id": 721,
        "word": "compete",
        "type": "verb",
        "family": "compete",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "cạnh tranh",
        "hint": "Nhóm từ: compete (verb)",
        "confusionWords": [
          "competition",
          "competitive",
          "competitively"
        ]
      },
      {
        "id": 722,
        "word": "competitive",
        "type": "adjective",
        "family": "compete",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "mang tính cạnh tranh",
        "hint": "Nhóm từ: compete (adjective)",
        "confusionWords": [
          "competition",
          "compete",
          "competitively"
        ]
      },
      {
        "id": 723,
        "word": "competitively",
        "type": "adverb",
        "family": "compete",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách cạnh tranh",
        "hint": "Nhóm từ: compete (adverb)",
        "confusionWords": [
          "competition",
          "compete",
          "competitive"
        ]
      },
      {
        "id": 724,
        "word": "confidence",
        "type": "noun",
        "family": "confidence",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự tự tin",
        "hint": "Nhóm từ: confidence (noun)",
        "confusionWords": [
          "confide",
          "confident",
          "confidently"
        ]
      },
      {
        "id": 725,
        "word": "confide",
        "type": "verb",
        "family": "confidence",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tâm sự",
        "hint": "Nhóm từ: confidence (verb)",
        "confusionWords": [
          "confidence",
          "confident",
          "confidently"
        ]
      },
      {
        "id": 726,
        "word": "confident",
        "type": "adjective",
        "family": "confidence",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tự tin",
        "hint": "Nhóm từ: confidence (adjective)",
        "confusionWords": [
          "confidence",
          "confide",
          "confidently"
        ]
      },
      {
        "id": 727,
        "word": "confidently",
        "type": "adverb",
        "family": "confidence",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tự tin",
        "hint": "Nhóm từ: confidence (adverb)",
        "confusionWords": [
          "confidence",
          "confide",
          "confident"
        ]
      },
      {
        "id": 728,
        "word": "connection",
        "type": "noun",
        "family": "connect",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự kết nối",
        "hint": "Nhóm từ: connect (noun)",
        "confusionWords": [
          "connect",
          "connected",
          "connectedly"
        ]
      },
      {
        "id": 729,
        "word": "connect",
        "type": "verb",
        "family": "connect",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "kết nối",
        "hint": "Nhóm từ: connect (verb)",
        "confusionWords": [
          "connection",
          "connected",
          "connectedly"
        ]
      },
      {
        "id": 730,
        "word": "connected",
        "type": "adjective",
        "family": "connect",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "được kết nối",
        "hint": "Nhóm từ: connect (adjective)",
        "confusionWords": [
          "connection",
          "connect",
          "connectedly"
        ]
      },
      {
        "id": 731,
        "word": "connectedly",
        "type": "adverb",
        "family": "connect",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "liên tục",
        "hint": "Nhóm từ: connect (adverb)",
        "confusionWords": [
          "connection",
          "connect",
          "connected"
        ]
      },
      {
        "id": 732,
        "word": "courage",
        "type": "noun",
        "family": "courage",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "lòng can đảm",
        "hint": "Nhóm từ: courage (noun)",
        "confusionWords": [
          "encourage",
          "courageous",
          "courageously"
        ]
      },
      {
        "id": 733,
        "word": "encourage",
        "type": "verb",
        "family": "courage",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "khuyến khích",
        "hint": "Nhóm từ: courage (verb)",
        "confusionWords": [
          "courage",
          "courageous",
          "courageously"
        ]
      },
      {
        "id": 734,
        "word": "courageous",
        "type": "adjective",
        "family": "courage",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "can đảm",
        "hint": "Nhóm từ: courage (adjective)",
        "confusionWords": [
          "courage",
          "encourage",
          "courageously"
        ]
      },
      {
        "id": 735,
        "word": "courageously",
        "type": "adverb",
        "family": "courage",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách can đảm",
        "hint": "Nhóm từ: courage (adverb)",
        "confusionWords": [
          "courage",
          "encourage",
          "courageous"
        ]
      },
      {
        "id": 736,
        "word": "darkness",
        "type": "noun",
        "family": "dark",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "bóng tối",
        "hint": "Nhóm từ: dark (noun)",
        "confusionWords": [
          "darken",
          "dark",
          "darkly"
        ]
      },
      {
        "id": 737,
        "word": "darken",
        "type": "verb",
        "family": "dark",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm tối",
        "hint": "Nhóm từ: dark (verb)",
        "confusionWords": [
          "darkness",
          "dark",
          "darkly"
        ]
      },
      {
        "id": 738,
        "word": "dark",
        "type": "adjective",
        "family": "dark",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tối tăm",
        "hint": "Nhóm từ: dark (adjective)",
        "confusionWords": [
          "darkness",
          "darken",
          "darkly"
        ]
      },
      {
        "id": 739,
        "word": "darkly",
        "type": "adverb",
        "family": "dark",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tối tăm",
        "hint": "Nhóm từ: dark (adverb)",
        "confusionWords": [
          "darkness",
          "darken",
          "dark"
        ]
      },
      {
        "id": 740,
        "word": "depth",
        "type": "noun",
        "family": "deep",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "chiều sâu",
        "hint": "Nhóm từ: deep (noun)",
        "confusionWords": [
          "deepen",
          "deep",
          "deeply"
        ]
      },
      {
        "id": 741,
        "word": "deepen",
        "type": "verb",
        "family": "deep",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm sâu",
        "hint": "Nhóm từ: deep (verb)",
        "confusionWords": [
          "depth",
          "deep",
          "deeply"
        ]
      },
      {
        "id": 742,
        "word": "deep",
        "type": "adjective",
        "family": "deep",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sâu sắc",
        "hint": "Nhóm từ: deep (adjective)",
        "confusionWords": [
          "depth",
          "deepen",
          "deeply"
        ]
      },
      {
        "id": 743,
        "word": "deeply",
        "type": "adverb",
        "family": "deep",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách sâu sắc",
        "hint": "Nhóm từ: deep (adverb)",
        "confusionWords": [
          "depth",
          "deepen",
          "deep"
        ]
      },
      {
        "id": 744,
        "word": "dependence",
        "type": "noun",
        "family": "depend",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự phụ thuộc",
        "hint": "Nhóm từ: depend (noun)",
        "confusionWords": [
          "depend",
          "dependent",
          "dependently"
        ]
      },
      {
        "id": 745,
        "word": "depend",
        "type": "verb",
        "family": "depend",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "phụ thuộc",
        "hint": "Nhóm từ: depend (verb)",
        "confusionWords": [
          "dependence",
          "dependent",
          "dependently"
        ]
      },
      {
        "id": 746,
        "word": "dependent",
        "type": "adjective",
        "family": "depend",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "phụ thuộc",
        "hint": "Nhóm từ: depend (adjective)",
        "confusionWords": [
          "dependence",
          "depend",
          "dependently"
        ]
      },
      {
        "id": 747,
        "word": "dependently",
        "type": "adverb",
        "family": "depend",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách phụ thuộc",
        "hint": "Nhóm từ: depend (adverb)",
        "confusionWords": [
          "dependence",
          "depend",
          "dependent"
        ]
      },
      {
        "id": 748,
        "word": "description",
        "type": "noun",
        "family": "describe",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự miêu tả",
        "hint": "Nhóm từ: describe (noun)",
        "confusionWords": [
          "describe",
          "descriptive",
          "descriptively"
        ]
      },
      {
        "id": 749,
        "word": "describe",
        "type": "verb",
        "family": "describe",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "miêu tả",
        "hint": "Nhóm từ: describe (verb)",
        "confusionWords": [
          "description",
          "descriptive",
          "descriptively"
        ]
      },
      {
        "id": 750,
        "word": "descriptive",
        "type": "adjective",
        "family": "describe",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "có tính miêu tả",
        "hint": "Nhóm từ: describe (adjective)",
        "confusionWords": [
          "description",
          "describe",
          "descriptively"
        ]
      },
      {
        "id": 751,
        "word": "descriptively",
        "type": "adverb",
        "family": "describe",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "bằng cách miêu tả",
        "hint": "Nhóm từ: describe (adverb)",
        "confusionWords": [
          "description",
          "describe",
          "descriptive"
        ]
      },
      {
        "id": 752,
        "word": "difference",
        "type": "noun",
        "family": "differ",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự khác biệt",
        "hint": "Nhóm từ: differ (noun)",
        "confusionWords": [
          "differ",
          "different",
          "differently"
        ]
      },
      {
        "id": 753,
        "word": "differ",
        "type": "verb",
        "family": "differ",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "khác biệt",
        "hint": "Nhóm từ: differ (verb)",
        "confusionWords": [
          "difference",
          "different",
          "differently"
        ]
      },
      {
        "id": 754,
        "word": "different",
        "type": "adjective",
        "family": "differ",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "khác nhau",
        "hint": "Nhóm từ: differ (adjective)",
        "confusionWords": [
          "difference",
          "differ",
          "differently"
        ]
      },
      {
        "id": 755,
        "word": "differently",
        "type": "adverb",
        "family": "differ",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách khác biệt",
        "hint": "Nhóm từ: differ (adverb)",
        "confusionWords": [
          "difference",
          "differ",
          "different"
        ]
      },
      {
        "id": 756,
        "word": "difficulty",
        "type": "noun",
        "family": "difficult",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự khó khăn",
        "hint": "Nhóm từ: difficult (noun)",
        "confusionWords": [
          "difficult",
          "difficultly"
        ]
      },
      {
        "id": 757,
        "word": "difficult",
        "type": "adjective",
        "family": "difficult",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "khó khăn",
        "hint": "Nhóm từ: difficult (adjective)",
        "confusionWords": [
          "difficulty",
          "difficulty",
          "difficultly"
        ]
      },
      {
        "id": 758,
        "word": "difficultly",
        "type": "adverb",
        "family": "difficult",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách khó khăn",
        "hint": "Nhóm từ: difficult (adverb)",
        "confusionWords": [
          "difficulty",
          "difficulty",
          "difficult"
        ]
      },
      {
        "id": 759,
        "word": "disappointment",
        "type": "noun",
        "family": "disappoint",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự thất vọng",
        "hint": "Nhóm từ: disappoint (noun)",
        "confusionWords": [
          "disappoint",
          "disappointing",
          "disappointingly"
        ]
      },
      {
        "id": 760,
        "word": "disappoint",
        "type": "verb",
        "family": "disappoint",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm thất vọng",
        "hint": "Nhóm từ: disappoint (verb)",
        "confusionWords": [
          "disappointment",
          "disappointing",
          "disappointingly"
        ]
      },
      {
        "id": 761,
        "word": "disappointing",
        "type": "adjective",
        "family": "disappoint",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đáng thất vọng",
        "hint": "Nhóm từ: disappoint (adjective)",
        "confusionWords": [
          "disappointment",
          "disappoint",
          "disappointingly"
        ]
      },
      {
        "id": 762,
        "word": "disappointingly",
        "type": "adverb",
        "family": "disappoint",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thất vọng",
        "hint": "Nhóm từ: disappoint (adverb)",
        "confusionWords": [
          "disappointment",
          "disappoint",
          "disappointing"
        ]
      },
      {
        "id": 763,
        "word": "honesty",
        "type": "noun",
        "family": "honest",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "lòng trung thực",
        "hint": "Nhóm từ: honest (noun)",
        "confusionWords": [
          "honest",
          "honest",
          "honestly"
        ]
      },
      {
        "id": 764,
        "word": "honest",
        "type": "verb",
        "family": "honest",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "trung thực",
        "hint": "Nhóm từ: honest (verb)",
        "confusionWords": [
          "honesty",
          "honestly"
        ]
      },
      {
        "id": 765,
        "word": "honestly",
        "type": "adverb",
        "family": "honest",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách trung thực",
        "hint": "Nhóm từ: honest (adverb)",
        "confusionWords": [
          "honesty",
          "honest",
          "honest"
        ]
      },
      {
        "id": 766,
        "word": "economy",
        "type": "noun",
        "family": "economy",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "nền kinh tế",
        "hint": "Nhóm từ: economy (noun)",
        "confusionWords": [
          "economize",
          "economic",
          "economically"
        ]
      },
      {
        "id": 767,
        "word": "economize",
        "type": "verb",
        "family": "economy",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tiết kiệm",
        "hint": "Nhóm từ: economy (verb)",
        "confusionWords": [
          "economy",
          "economic",
          "economically"
        ]
      },
      {
        "id": 768,
        "word": "economic",
        "type": "adjective",
        "family": "economy",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuộc kinh tế",
        "hint": "Nhóm từ: economy (adjective)",
        "confusionWords": [
          "economy",
          "economize",
          "economically"
        ]
      },
      {
        "id": 769,
        "word": "economically",
        "type": "adverb",
        "family": "economy",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "về mặt kinh tế",
        "hint": "Nhóm từ: economy (adverb)",
        "confusionWords": [
          "economy",
          "economize",
          "economic"
        ]
      },
      {
        "id": 770,
        "word": "employment",
        "type": "noun",
        "family": "employ",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "việc làm",
        "hint": "Nhóm từ: employ (noun)",
        "confusionWords": [
          "employ",
          "employed",
          "employedly"
        ]
      },
      {
        "id": 771,
        "word": "employ",
        "type": "verb",
        "family": "employ",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thuê mướn",
        "hint": "Nhóm từ: employ (verb)",
        "confusionWords": [
          "employment",
          "employed",
          "employedly"
        ]
      },
      {
        "id": 772,
        "word": "employed",
        "type": "adjective",
        "family": "employ",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "có việc làm",
        "hint": "Nhóm từ: employ (adjective)",
        "confusionWords": [
          "employment",
          "employ",
          "employedly"
        ]
      },
      {
        "id": 773,
        "word": "employedly",
        "type": "adverb",
        "family": "employ",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "theo cách thuê mướn",
        "hint": "Nhóm từ: employ (adverb)",
        "confusionWords": [
          "employment",
          "employ",
          "employed"
        ]
      },
      {
        "id": 774,
        "word": "enjoyment",
        "type": "noun",
        "family": "enjoy",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự thích thú",
        "hint": "Nhóm từ: enjoy (noun)",
        "confusionWords": [
          "enjoy",
          "enjoyable",
          "enjoyably"
        ]
      },
      {
        "id": 775,
        "word": "enjoy",
        "type": "verb",
        "family": "enjoy",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thưởng thức",
        "hint": "Nhóm từ: enjoy (verb)",
        "confusionWords": [
          "enjoyment",
          "enjoyable",
          "enjoyably"
        ]
      },
      {
        "id": 776,
        "word": "enjoyable",
        "type": "adjective",
        "family": "enjoy",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thú vị",
        "hint": "Nhóm từ: enjoy (adjective)",
        "confusionWords": [
          "enjoyment",
          "enjoy",
          "enjoyably"
        ]
      },
      {
        "id": 777,
        "word": "enjoyably",
        "type": "adverb",
        "family": "enjoy",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thú vị",
        "hint": "Nhóm từ: enjoy (adverb)",
        "confusionWords": [
          "enjoyment",
          "enjoy",
          "enjoyable"
        ]
      },
      {
        "id": 778,
        "word": "explanation",
        "type": "noun",
        "family": "explain",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự giải thích",
        "hint": "Nhóm từ: explain (noun)",
        "confusionWords": [
          "explain",
          "explanatory",
          "explainingly"
        ]
      },
      {
        "id": 779,
        "word": "explain",
        "type": "verb",
        "family": "explain",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "giải thích",
        "hint": "Nhóm từ: explain (verb)",
        "confusionWords": [
          "explanation",
          "explanatory",
          "explainingly"
        ]
      },
      {
        "id": 780,
        "word": "explanatory",
        "type": "adjective",
        "family": "explain",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "mang tính giải thích",
        "hint": "Nhóm từ: explain (adjective)",
        "confusionWords": [
          "explanation",
          "explain",
          "explainingly"
        ]
      },
      {
        "id": 781,
        "word": "explainingly",
        "type": "adverb",
        "family": "explain",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "bằng cách giải thích",
        "hint": "Nhóm từ: explain (adverb)",
        "confusionWords": [
          "explanation",
          "explain",
          "explanatory"
        ]
      },
      {
        "id": 782,
        "word": "forgetfulness",
        "type": "noun",
        "family": "forget",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "tính hay quên",
        "hint": "Nhóm từ: forget (noun)",
        "confusionWords": [
          "forget",
          "forgetful",
          "forgetfully"
        ]
      },
      {
        "id": 783,
        "word": "forget",
        "type": "verb",
        "family": "forget",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "quên",
        "hint": "Nhóm từ: forget (verb)",
        "confusionWords": [
          "forgetfulness",
          "forgetful",
          "forgetfully"
        ]
      },
      {
        "id": 784,
        "word": "forgetful",
        "type": "adjective",
        "family": "forget",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hay quên",
        "hint": "Nhóm từ: forget (adjective)",
        "confusionWords": [
          "forgetfulness",
          "forget",
          "forgetfully"
        ]
      },
      {
        "id": 785,
        "word": "forgetfully",
        "type": "adverb",
        "family": "forget",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách đãng trí",
        "hint": "Nhóm từ: forget (adverb)",
        "confusionWords": [
          "forgetfulness",
          "forget",
          "forgetful"
        ]
      },
      {
        "id": 786,
        "word": "freedom",
        "type": "noun",
        "family": "free",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự tự do",
        "hint": "Nhóm từ: free (noun)",
        "confusionWords": [
          "free",
          "free",
          "freely"
        ]
      },
      {
        "id": 787,
        "word": "free",
        "type": "verb",
        "family": "free",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "giải phóng",
        "hint": "Nhóm từ: free (verb)",
        "confusionWords": [
          "freedom",
          "freely"
        ]
      },
      {
        "id": 788,
        "word": "freely",
        "type": "adverb",
        "family": "free",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tự do",
        "hint": "Nhóm từ: free (adverb)",
        "confusionWords": [
          "freedom",
          "free",
          "free"
        ]
      },
      {
        "id": 789,
        "word": "growth",
        "type": "noun",
        "family": "grow",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự phát triển",
        "hint": "Nhóm từ: grow (noun)",
        "confusionWords": [
          "grow",
          "growing",
          "growingly"
        ]
      },
      {
        "id": 790,
        "word": "grow",
        "type": "verb",
        "family": "grow",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tăng trưởng",
        "hint": "Nhóm từ: grow (verb)",
        "confusionWords": [
          "growth",
          "growing",
          "growingly"
        ]
      },
      {
        "id": 791,
        "word": "growing",
        "type": "adjective",
        "family": "grow",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đang lớn",
        "hint": "Nhóm từ: grow (adjective)",
        "confusionWords": [
          "growth",
          "grow",
          "growingly"
        ]
      },
      {
        "id": 792,
        "word": "growingly",
        "type": "adverb",
        "family": "grow",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "ngày càng tăng",
        "hint": "Nhóm từ: grow (adverb)",
        "confusionWords": [
          "growth",
          "grow",
          "growing"
        ]
      },
      {
        "id": 793,
        "word": "height",
        "type": "noun",
        "family": "high",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "chiều cao",
        "hint": "Nhóm từ: high (noun)",
        "confusionWords": [
          "heighten",
          "high",
          "highly"
        ]
      },
      {
        "id": 794,
        "word": "heighten",
        "type": "verb",
        "family": "high",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "nâng cao",
        "hint": "Nhóm từ: high (verb)",
        "confusionWords": [
          "height",
          "high",
          "highly"
        ]
      },
      {
        "id": 795,
        "word": "high",
        "type": "adjective",
        "family": "high",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "cao",
        "hint": "Nhóm từ: high (adjective)",
        "confusionWords": [
          "height",
          "heighten",
          "highly"
        ]
      },
      {
        "id": 796,
        "word": "highly",
        "type": "adverb",
        "family": "high",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "rất nhiều, cao",
        "hint": "Nhóm từ: high (adverb)",
        "confusionWords": [
          "height",
          "heighten",
          "high"
        ]
      },
      {
        "id": 797,
        "word": "imagination",
        "type": "noun",
        "family": "imagine",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự tưởng tượng",
        "hint": "Nhóm từ: imagine (noun)",
        "confusionWords": [
          "imagine",
          "imaginative",
          "imaginatively"
        ]
      },
      {
        "id": 798,
        "word": "imagine",
        "type": "verb",
        "family": "imagine",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tưởng tượng",
        "hint": "Nhóm từ: imagine (verb)",
        "confusionWords": [
          "imagination",
          "imaginative",
          "imaginatively"
        ]
      },
      {
        "id": 799,
        "word": "imaginative",
        "type": "adjective",
        "family": "imagine",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "giàu tưởng tượng",
        "hint": "Nhóm từ: imagine (adjective)",
        "confusionWords": [
          "imagination",
          "imagine",
          "imaginatively"
        ]
      },
      {
        "id": 800,
        "word": "imaginatively",
        "type": "adverb",
        "family": "imagine",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tưởng tượng",
        "hint": "Nhóm từ: imagine (adverb)",
        "confusionWords": [
          "imagination",
          "imagine",
          "imaginative"
        ]
      },
      {
        "id": 801,
        "word": "impression",
        "type": "noun",
        "family": "impress",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "ấn tượng",
        "hint": "Nhóm từ: impress (noun)",
        "confusionWords": [
          "impress",
          "impressive",
          "impressively"
        ]
      },
      {
        "id": 802,
        "word": "impress",
        "type": "verb",
        "family": "impress",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "gây ấn tượng",
        "hint": "Nhóm từ: impress (verb)",
        "confusionWords": [
          "impression",
          "impressive",
          "impressively"
        ]
      },
      {
        "id": 803,
        "word": "impressive",
        "type": "adjective",
        "family": "impress",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "gợi ấn tượng",
        "hint": "Nhóm từ: impress (adjective)",
        "confusionWords": [
          "impression",
          "impress",
          "impressively"
        ]
      },
      {
        "id": 804,
        "word": "impressively",
        "type": "adverb",
        "family": "impress",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách ấn tượng",
        "hint": "Nhóm từ: impress (adverb)",
        "confusionWords": [
          "impression",
          "impress",
          "impressive"
        ]
      },
      {
        "id": 805,
        "word": "improvement",
        "type": "noun",
        "family": "improve",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự cải thiện",
        "hint": "Nhóm từ: improve (noun)",
        "confusionWords": [
          "improve",
          "improved",
          "improvingly"
        ]
      },
      {
        "id": 806,
        "word": "improve",
        "type": "verb",
        "family": "improve",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "cải tiến",
        "hint": "Nhóm từ: improve (verb)",
        "confusionWords": [
          "improvement",
          "improved",
          "improvingly"
        ]
      },
      {
        "id": 807,
        "word": "improved",
        "type": "adjective",
        "family": "improve",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "được cải thiện",
        "hint": "Nhóm từ: improve (adjective)",
        "confusionWords": [
          "improvement",
          "improve",
          "improvingly"
        ]
      },
      {
        "id": 808,
        "word": "improvingly",
        "type": "adverb",
        "family": "improve",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách cải thiện",
        "hint": "Nhóm từ: improve (adverb)",
        "confusionWords": [
          "improvement",
          "improve",
          "improved"
        ]
      },
      {
        "id": 809,
        "word": "information",
        "type": "noun",
        "family": "inform",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "thông tin",
        "hint": "Nhóm từ: inform (noun)",
        "confusionWords": [
          "inform",
          "informative",
          "informatively"
        ]
      },
      {
        "id": 810,
        "word": "inform",
        "type": "verb",
        "family": "inform",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thông báo",
        "hint": "Nhóm từ: inform (verb)",
        "confusionWords": [
          "information",
          "informative",
          "informatively"
        ]
      },
      {
        "id": 811,
        "word": "informative",
        "type": "adjective",
        "family": "inform",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "nhiều thông tin",
        "hint": "Nhóm từ: inform (adjective)",
        "confusionWords": [
          "information",
          "inform",
          "informatively"
        ]
      },
      {
        "id": 812,
        "word": "informatively",
        "type": "adverb",
        "family": "inform",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "đầy đủ thông tin",
        "hint": "Nhóm từ: inform (adverb)",
        "confusionWords": [
          "information",
          "inform",
          "informative"
        ]
      },
      {
        "id": 813,
        "word": "invention",
        "type": "noun",
        "family": "invent",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự phát minh",
        "hint": "Nhóm từ: invent (noun)",
        "confusionWords": [
          "invent",
          "inventive",
          "inventively"
        ]
      },
      {
        "id": 814,
        "word": "invent",
        "type": "verb",
        "family": "invent",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "phát minh",
        "hint": "Nhóm từ: invent (verb)",
        "confusionWords": [
          "invention",
          "inventive",
          "inventively"
        ]
      },
      {
        "id": 815,
        "word": "inventive",
        "type": "adjective",
        "family": "invent",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sáng tạo",
        "hint": "Nhóm từ: invent (adjective)",
        "confusionWords": [
          "invention",
          "invent",
          "inventively"
        ]
      },
      {
        "id": 816,
        "word": "inventively",
        "type": "adverb",
        "family": "invent",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách sáng tạo",
        "hint": "Nhóm từ: invent (adverb)",
        "confusionWords": [
          "invention",
          "invent",
          "inventive"
        ]
      },
      {
        "id": 817,
        "word": "invitation",
        "type": "noun",
        "family": "invite",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "lời mời",
        "hint": "Nhóm từ: invite (noun)",
        "confusionWords": [
          "invite",
          "inviting",
          "invitingly"
        ]
      },
      {
        "id": 818,
        "word": "invite",
        "type": "verb",
        "family": "invite",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "mời",
        "hint": "Nhóm từ: invite (verb)",
        "confusionWords": [
          "invitation",
          "inviting",
          "invitingly"
        ]
      },
      {
        "id": 819,
        "word": "inviting",
        "type": "adjective",
        "family": "invite",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hấp dẫn",
        "hint": "Nhóm từ: invite (adjective)",
        "confusionWords": [
          "invitation",
          "invite",
          "invitingly"
        ]
      },
      {
        "id": 820,
        "word": "invitingly",
        "type": "adverb",
        "family": "invite",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách hấp dẫn",
        "hint": "Nhóm từ: invite (adverb)",
        "confusionWords": [
          "invitation",
          "invite",
          "inviting"
        ]
      },
      {
        "id": 821,
        "word": "kindness",
        "type": "noun",
        "family": "kind",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "lòng tốt",
        "hint": "Nhóm từ: kind (noun)",
        "confusionWords": [
          "kind",
          "kind",
          "kindly"
        ]
      },
      {
        "id": 822,
        "word": "kind",
        "type": "verb",
        "family": "kind",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tử tế",
        "hint": "Nhóm từ: kind (verb)",
        "confusionWords": [
          "kindness",
          "kindly"
        ]
      },
      {
        "id": 823,
        "word": "kindly",
        "type": "adverb",
        "family": "kind",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tử tế",
        "hint": "Nhóm từ: kind (adverb)",
        "confusionWords": [
          "kindness",
          "kind",
          "kind"
        ]
      },
      {
        "id": 824,
        "word": "knowledge",
        "type": "noun",
        "family": "know",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "kiến thức",
        "hint": "Nhóm từ: know (noun)",
        "confusionWords": [
          "know",
          "knowledgeable",
          "knowledgeably"
        ]
      },
      {
        "id": 825,
        "word": "know",
        "type": "verb",
        "family": "know",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "biết",
        "hint": "Nhóm từ: know (verb)",
        "confusionWords": [
          "knowledge",
          "knowledgeable",
          "knowledgeably"
        ]
      },
      {
        "id": 826,
        "word": "knowledgeable",
        "type": "adjective",
        "family": "know",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "am hiểu",
        "hint": "Nhóm từ: know (adjective)",
        "confusionWords": [
          "knowledge",
          "know",
          "knowledgeably"
        ]
      },
      {
        "id": 827,
        "word": "knowledgeably",
        "type": "adverb",
        "family": "know",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách am hiểu",
        "hint": "Nhóm từ: know (adverb)",
        "confusionWords": [
          "knowledge",
          "know",
          "knowledgeable"
        ]
      },
      {
        "id": 828,
        "word": "life",
        "type": "noun",
        "family": "live",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "cuộc sống",
        "hint": "Nhóm từ: live (noun)",
        "confusionWords": [
          "live",
          "lively",
          "live"
        ]
      },
      {
        "id": 829,
        "word": "live",
        "type": "verb",
        "family": "live",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sống",
        "hint": "Nhóm từ: live (verb)",
        "confusionWords": [
          "life",
          "lively"
        ]
      },
      {
        "id": 830,
        "word": "lively",
        "type": "adjective",
        "family": "live",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sinh động",
        "hint": "Nhóm từ: live (adjective)",
        "confusionWords": [
          "life",
          "live",
          "live"
        ]
      },
      {
        "id": 831,
        "word": "length",
        "type": "noun",
        "family": "long",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "chiều dài",
        "hint": "Nhóm từ: long (noun)",
        "confusionWords": [
          "lengthen",
          "long",
          "longingly"
        ]
      },
      {
        "id": 832,
        "word": "lengthen",
        "type": "verb",
        "family": "long",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "kéo dài",
        "hint": "Nhóm từ: long (verb)",
        "confusionWords": [
          "length",
          "long",
          "longingly"
        ]
      },
      {
        "id": 833,
        "word": "long",
        "type": "adjective",
        "family": "long",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "dài",
        "hint": "Nhóm từ: long (adjective)",
        "confusionWords": [
          "length",
          "lengthen",
          "longingly"
        ]
      },
      {
        "id": 834,
        "word": "longingly",
        "type": "adverb",
        "family": "long",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thèm muốn",
        "hint": "Nhóm từ: long (adverb)",
        "confusionWords": [
          "length",
          "lengthen",
          "long"
        ]
      },
      {
        "id": 835,
        "word": "love",
        "type": "noun",
        "family": "love",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "tình yêu",
        "hint": "Nhóm từ: love (noun)",
        "confusionWords": [
          "lovely",
          "lovingly"
        ]
      },
      {
        "id": 836,
        "word": "lovely",
        "type": "adjective",
        "family": "love",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đáng yêu",
        "hint": "Nhóm từ: love (adjective)",
        "confusionWords": [
          "love",
          "love",
          "lovingly"
        ]
      },
      {
        "id": 837,
        "word": "lovingly",
        "type": "adverb",
        "family": "love",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách âu yếm",
        "hint": "Nhóm từ: love (adverb)",
        "confusionWords": [
          "love",
          "love",
          "lovely"
        ]
      },
      {
        "id": 838,
        "word": "movement",
        "type": "noun",
        "family": "move",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự di chuyển",
        "hint": "Nhóm từ: move (noun)",
        "confusionWords": [
          "move",
          "movable",
          "movably"
        ]
      },
      {
        "id": 839,
        "word": "move",
        "type": "verb",
        "family": "move",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "di chuyển",
        "hint": "Nhóm từ: move (verb)",
        "confusionWords": [
          "movement",
          "movable",
          "movably"
        ]
      },
      {
        "id": 840,
        "word": "movable",
        "type": "adjective",
        "family": "move",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "có thể di chuyển",
        "hint": "Nhóm từ: move (adjective)",
        "confusionWords": [
          "movement",
          "move",
          "movably"
        ]
      },
      {
        "id": 841,
        "word": "movably",
        "type": "adverb",
        "family": "move",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "di động",
        "hint": "Nhóm từ: move (adverb)",
        "confusionWords": [
          "movement",
          "move",
          "movable"
        ]
      },
      {
        "id": 842,
        "word": "noise",
        "type": "noun",
        "family": "noise",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "tiếng ồn",
        "hint": "Nhóm từ: noise (noun)",
        "confusionWords": [
          "noisy",
          "noisily"
        ]
      },
      {
        "id": 843,
        "word": "noisy",
        "type": "adjective",
        "family": "noise",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "ồn ào",
        "hint": "Nhóm từ: noise (adjective)",
        "confusionWords": [
          "noise",
          "noise",
          "noisily"
        ]
      },
      {
        "id": 844,
        "word": "noisily",
        "type": "adverb",
        "family": "noise",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách ồn ào",
        "hint": "Nhóm từ: noise (adverb)",
        "confusionWords": [
          "noise",
          "noise",
          "noisy"
        ]
      },
      {
        "id": 845,
        "word": "perfection",
        "type": "noun",
        "family": "perfect",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự hoàn hảo",
        "hint": "Nhóm từ: perfect (noun)",
        "confusionWords": [
          "perfect",
          "perfect",
          "perfectly"
        ]
      },
      {
        "id": 846,
        "word": "perfect",
        "type": "verb",
        "family": "perfect",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "hoàn thiện",
        "hint": "Nhóm từ: perfect (verb)",
        "confusionWords": [
          "perfection",
          "perfectly"
        ]
      },
      {
        "id": 847,
        "word": "perfectly",
        "type": "adverb",
        "family": "perfect",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách hoàn hảo",
        "hint": "Nhóm từ: perfect (adverb)",
        "confusionWords": [
          "perfection",
          "perfect",
          "perfect"
        ]
      },
      {
        "id": 848,
        "word": "performance",
        "type": "noun",
        "family": "perform",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "buổi biểu diễn",
        "hint": "Nhóm từ: perform (noun)",
        "confusionWords": [
          "perform",
          "performing",
          "performingly"
        ]
      },
      {
        "id": 849,
        "word": "perform",
        "type": "verb",
        "family": "perform",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "biểu diễn",
        "hint": "Nhóm từ: perform (verb)",
        "confusionWords": [
          "performance",
          "performing",
          "performingly"
        ]
      },
      {
        "id": 850,
        "word": "performing",
        "type": "adjective",
        "family": "perform",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đang biểu diễn",
        "hint": "Nhóm từ: perform (adjective)",
        "confusionWords": [
          "performance",
          "perform",
          "performingly"
        ]
      },
      {
        "id": 851,
        "word": "performingly",
        "type": "adverb",
        "family": "perform",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "hiệu quả",
        "hint": "Nhóm từ: perform (adverb)",
        "confusionWords": [
          "performance",
          "perform",
          "performing"
        ]
      },
      {
        "id": 852,
        "word": "politeness",
        "type": "noun",
        "family": "polite",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự lịch sự",
        "hint": "Nhóm từ: polite (noun)",
        "confusionWords": [
          "polite",
          "polite",
          "politely"
        ]
      },
      {
        "id": 853,
        "word": "polite",
        "type": "verb",
        "family": "polite",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "lịch sự",
        "hint": "Nhóm từ: polite (verb)",
        "confusionWords": [
          "politeness",
          "politely"
        ]
      },
      {
        "id": 854,
        "word": "politely",
        "type": "adverb",
        "family": "polite",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách lịch sự",
        "hint": "Nhóm từ: polite (adverb)",
        "confusionWords": [
          "politeness",
          "polite",
          "polite"
        ]
      },
      {
        "id": 855,
        "word": "popularity",
        "type": "noun",
        "family": "popular",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự phổ biến",
        "hint": "Nhóm từ: popular (noun)",
        "confusionWords": [
          "popularize",
          "popular",
          "popularly"
        ]
      },
      {
        "id": 856,
        "word": "popularize",
        "type": "verb",
        "family": "popular",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "phổ biến hóa",
        "hint": "Nhóm từ: popular (verb)",
        "confusionWords": [
          "popularity",
          "popular",
          "popularly"
        ]
      },
      {
        "id": 857,
        "word": "popular",
        "type": "adjective",
        "family": "popular",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "phổ biến",
        "hint": "Nhóm từ: popular (adjective)",
        "confusionWords": [
          "popularity",
          "popularize",
          "popularly"
        ]
      },
      {
        "id": 858,
        "word": "popularly",
        "type": "adverb",
        "family": "popular",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách phổ biến",
        "hint": "Nhóm từ: popular (adverb)",
        "confusionWords": [
          "popularity",
          "popularize",
          "popular"
        ]
      },
      {
        "id": 859,
        "word": "possibility",
        "type": "noun",
        "family": "possible",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "khả năng",
        "hint": "Nhóm từ: possible (noun)",
        "confusionWords": [
          "possible",
          "possibly"
        ]
      },
      {
        "id": 860,
        "word": "possible",
        "type": "adjective",
        "family": "possible",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "khả thi",
        "hint": "Nhóm từ: possible (adjective)",
        "confusionWords": [
          "possibility",
          "possibility",
          "possibly"
        ]
      },
      {
        "id": 861,
        "word": "possibly",
        "type": "adverb",
        "family": "possible",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "có lẽ",
        "hint": "Nhóm từ: possible (adverb)",
        "confusionWords": [
          "possibility",
          "possibility",
          "possible"
        ]
      },
      {
        "id": 862,
        "word": "preparation",
        "type": "noun",
        "family": "prepare",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự chuẩn bị",
        "hint": "Nhóm từ: prepare (noun)",
        "confusionWords": [
          "prepare",
          "prepared",
          "preparedly"
        ]
      },
      {
        "id": 863,
        "word": "prepare",
        "type": "verb",
        "family": "prepare",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "chuẩn bị",
        "hint": "Nhóm từ: prepare (verb)",
        "confusionWords": [
          "preparation",
          "prepared",
          "preparedly"
        ]
      },
      {
        "id": 864,
        "word": "prepared",
        "type": "adjective",
        "family": "prepare",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sẵn sàng",
        "hint": "Nhóm từ: prepare (adjective)",
        "confusionWords": [
          "preparation",
          "prepare",
          "preparedly"
        ]
      },
      {
        "id": 865,
        "word": "preparedly",
        "type": "adverb",
        "family": "prepare",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách sẵn sàng",
        "hint": "Nhóm từ: prepare (adverb)",
        "confusionWords": [
          "preparation",
          "prepare",
          "prepared"
        ]
      },
      {
        "id": 866,
        "word": "production",
        "type": "noun",
        "family": "produce",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự sản xuất",
        "hint": "Nhóm từ: produce (noun)",
        "confusionWords": [
          "produce",
          "productive",
          "productively"
        ]
      },
      {
        "id": 867,
        "word": "produce",
        "type": "verb",
        "family": "produce",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "sản xuất",
        "hint": "Nhóm từ: produce (verb)",
        "confusionWords": [
          "production",
          "productive",
          "productively"
        ]
      },
      {
        "id": 868,
        "word": "productive",
        "type": "adjective",
        "family": "produce",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "năng suất",
        "hint": "Nhóm từ: produce (adjective)",
        "confusionWords": [
          "production",
          "produce",
          "productively"
        ]
      },
      {
        "id": 869,
        "word": "productively",
        "type": "adverb",
        "family": "produce",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách năng suất",
        "hint": "Nhóm từ: produce (adverb)",
        "confusionWords": [
          "production",
          "produce",
          "productive"
        ]
      },
      {
        "id": 870,
        "word": "pride",
        "type": "noun",
        "family": "proud",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự tự hào",
        "hint": "Nhóm từ: proud (noun)",
        "confusionWords": [
          "proud",
          "proudly"
        ]
      },
      {
        "id": 871,
        "word": "proud",
        "type": "adjective",
        "family": "proud",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "tự hào",
        "hint": "Nhóm từ: proud (adjective)",
        "confusionWords": [
          "pride",
          "pride",
          "proudly"
        ]
      },
      {
        "id": 872,
        "word": "proudly",
        "type": "adverb",
        "family": "proud",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách tự hào",
        "hint": "Nhóm từ: proud (adverb)",
        "confusionWords": [
          "pride",
          "pride",
          "proud"
        ]
      },
      {
        "id": 873,
        "word": "quietness",
        "type": "noun",
        "family": "quiet",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự yên tĩnh",
        "hint": "Nhóm từ: quiet (noun)",
        "confusionWords": [
          "quiet",
          "quiet",
          "quietly"
        ]
      },
      {
        "id": 874,
        "word": "quiet",
        "type": "verb",
        "family": "quiet",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm dịu",
        "hint": "Nhóm từ: quiet (verb)",
        "confusionWords": [
          "quietness",
          "quietly"
        ]
      },
      {
        "id": 875,
        "word": "quietly",
        "type": "adverb",
        "family": "quiet",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách yên tĩnh",
        "hint": "Nhóm từ: quiet (adverb)",
        "confusionWords": [
          "quietness",
          "quiet",
          "quiet"
        ]
      },
      {
        "id": 876,
        "word": "reality",
        "type": "noun",
        "family": "real",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "thực tế",
        "hint": "Nhóm từ: real (noun)",
        "confusionWords": [
          "realize",
          "real",
          "really"
        ]
      },
      {
        "id": 877,
        "word": "realize",
        "type": "verb",
        "family": "real",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "nhận ra",
        "hint": "Nhóm từ: real (verb)",
        "confusionWords": [
          "reality",
          "real",
          "really"
        ]
      },
      {
        "id": 878,
        "word": "real",
        "type": "adjective",
        "family": "real",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thực tế",
        "hint": "Nhóm từ: real (adjective)",
        "confusionWords": [
          "reality",
          "realize",
          "really"
        ]
      },
      {
        "id": 879,
        "word": "really",
        "type": "adverb",
        "family": "real",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "thực sự",
        "hint": "Nhóm từ: real (adverb)",
        "confusionWords": [
          "reality",
          "realize",
          "real"
        ]
      },
      {
        "id": 880,
        "word": "relaxation",
        "type": "noun",
        "family": "relax",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự thư giãn",
        "hint": "Nhóm từ: relax (noun)",
        "confusionWords": [
          "relax",
          "relaxing",
          "relaxingly"
        ]
      },
      {
        "id": 881,
        "word": "relax",
        "type": "verb",
        "family": "relax",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thư giãn",
        "hint": "Nhóm từ: relax (verb)",
        "confusionWords": [
          "relaxation",
          "relaxing",
          "relaxingly"
        ]
      },
      {
        "id": 882,
        "word": "relaxing",
        "type": "adjective",
        "family": "relax",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thư giãn",
        "hint": "Nhóm từ: relax (adjective)",
        "confusionWords": [
          "relaxation",
          "relax",
          "relaxingly"
        ]
      },
      {
        "id": 883,
        "word": "relaxingly",
        "type": "adverb",
        "family": "relax",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thư giãn",
        "hint": "Nhóm từ: relax (adverb)",
        "confusionWords": [
          "relaxation",
          "relax",
          "relaxing"
        ]
      },
      {
        "id": 884,
        "word": "safety",
        "type": "noun",
        "family": "safe",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự an toàn",
        "hint": "Nhóm từ: safe (noun)",
        "confusionWords": [
          "safe",
          "safe",
          "safely"
        ]
      },
      {
        "id": 885,
        "word": "safe",
        "type": "verb",
        "family": "safe",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "an toàn",
        "hint": "Nhóm từ: safe (verb)",
        "confusionWords": [
          "safety",
          "safely"
        ]
      },
      {
        "id": 886,
        "word": "safely",
        "type": "adverb",
        "family": "safe",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách an toàn",
        "hint": "Nhóm từ: safe (adverb)",
        "confusionWords": [
          "safety",
          "safe",
          "safe"
        ]
      },
      {
        "id": 887,
        "word": "satisfaction",
        "type": "noun",
        "family": "satisfy",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự thỏa mãn",
        "hint": "Nhóm từ: satisfy (noun)",
        "confusionWords": [
          "satisfy",
          "satisfactory",
          "satisfactorily"
        ]
      },
      {
        "id": 888,
        "word": "satisfy",
        "type": "verb",
        "family": "satisfy",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "làm hài lòng",
        "hint": "Nhóm từ: satisfy (verb)",
        "confusionWords": [
          "satisfaction",
          "satisfactory",
          "satisfactorily"
        ]
      },
      {
        "id": 889,
        "word": "satisfactory",
        "type": "adjective",
        "family": "satisfy",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "thỏa đáng",
        "hint": "Nhóm từ: satisfy (adjective)",
        "confusionWords": [
          "satisfaction",
          "satisfy",
          "satisfactorily"
        ]
      },
      {
        "id": 890,
        "word": "satisfactorily",
        "type": "adverb",
        "family": "satisfy",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách thỏa đáng",
        "hint": "Nhóm từ: satisfy (adverb)",
        "confusionWords": [
          "satisfaction",
          "satisfy",
          "satisfactory"
        ]
      },
      {
        "id": 891,
        "word": "shortness",
        "type": "noun",
        "family": "short",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự ngắn",
        "hint": "Nhóm từ: short (noun)",
        "confusionWords": [
          "shorten",
          "short",
          "shortly"
        ]
      },
      {
        "id": 892,
        "word": "shorten",
        "type": "verb",
        "family": "short",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "rút ngắn",
        "hint": "Nhóm từ: short (verb)",
        "confusionWords": [
          "shortness",
          "short",
          "shortly"
        ]
      },
      {
        "id": 893,
        "word": "short",
        "type": "adjective",
        "family": "short",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "ngắn",
        "hint": "Nhóm từ: short (adjective)",
        "confusionWords": [
          "shortness",
          "shorten",
          "shortly"
        ]
      },
      {
        "id": 894,
        "word": "shortly",
        "type": "adverb",
        "family": "short",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "sớm, nhanh chóng",
        "hint": "Nhóm từ: short (adverb)",
        "confusionWords": [
          "shortness",
          "shorten",
          "short"
        ]
      },
      {
        "id": 895,
        "word": "silence",
        "type": "noun",
        "family": "silent",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự im lặng",
        "hint": "Nhóm từ: silent (noun)",
        "confusionWords": [
          "silent",
          "silently"
        ]
      },
      {
        "id": 896,
        "word": "silent",
        "type": "adjective",
        "family": "silent",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "im lặng",
        "hint": "Nhóm từ: silent (adjective)",
        "confusionWords": [
          "silence",
          "silence",
          "silently"
        ]
      },
      {
        "id": 897,
        "word": "silently",
        "type": "adverb",
        "family": "silent",
        "level": 3,
        "difficulty": 5,
        "vnMeaning": "một cách im lặng",
        "hint": "Nhóm từ: silent (adverb)",
        "confusionWords": [
          "silence",
          "silence",
          "silent"
        ]
      },
      {
        "id": 898,
        "word": "simplicity",
        "type": "noun",
        "family": "simple",
        "level": 3,
        "difficulty": 3,
        "vnMeaning": "sự đơn giản",
        "hint": "Nhóm từ: simple (noun)",
        "confusionWords": [
          "simplify",
          "simple",
          "simply"
        ]
      },
      {
        "id": 899,
        "word": "simplify",
        "type": "verb",
        "family": "simple",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đơn giản hóa",
        "hint": "Nhóm từ: simple (verb)",
        "confusionWords": [
          "simplicity",
          "simple",
          "simply"
        ]
      },
      {
        "id": 900,
        "word": "simple",
        "type": "adjective",
        "family": "simple",
        "level": 3,
        "difficulty": 4,
        "vnMeaning": "đơn giản",
        "hint": "Nhóm từ: simple (adjective)",
        "confusionWords": [
          "simplicity",
          "simplify",
          "simply"
        ]
      }
    ],

  /** Boss fight: 500 questions */
  boss: [
      {
        "id": 901,
        "family": "success",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "success",
        "explanation": "VNI: sự thành công - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 902,
        "family": "beauty",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beauty",
        "explanation": "VNI: vẻ đẹp - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 903,
        "family": "health",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "health",
        "explanation": "VNI: sức khỏe - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 904,
        "family": "educate",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "education",
        "explanation": "VNI: nền giáo dục - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 905,
        "family": "create",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "creation",
        "explanation": "VNI: sự sáng tạo - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 906,
        "family": "decide",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decision",
        "explanation": "VNI: sự quyết định - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 907,
        "family": "develop",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "development",
        "explanation": "VNI: sự phát triển - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 908,
        "family": "friend",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "friendship",
        "explanation": "VNI: tình bạn - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 909,
        "family": "danger",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "danger",
        "explanation": "VNI: sự nguy hiểm - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 910,
        "family": "power",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "power",
        "explanation": "VNI: sức mạnh - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 911,
        "family": "peace",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "peace",
        "explanation": "VNI: hòa bình - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 912,
        "family": "nation",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "nation",
        "explanation": "VNI: quốc gia - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 913,
        "family": "culture",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "culture",
        "explanation": "VNI: văn hóa - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 914,
        "family": "industry",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industry",
        "explanation": "VNI: công nghiệp - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 915,
        "family": "nature",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "nature",
        "explanation": "VNI: tự nhiên - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 916,
        "family": "communicate",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communication",
        "explanation": "VNI: sự giao tiếp - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 917,
        "family": "celebrate",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebration",
        "explanation": "VNI: lễ kỷ niệm - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 918,
        "family": "compare",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "comparison",
        "explanation": "VNI: sự so sánh - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 919,
        "family": "protect",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protection",
        "explanation": "VNI: sự bảo vệ - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 920,
        "family": "organize",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organization",
        "explanation": "VNI: tổ chức - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 921,
        "family": "act",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "action",
        "explanation": "VNI: hành động - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 922,
        "family": "attract",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attraction",
        "explanation": "VNI: sự thu hút - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 923,
        "family": "sad",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sadness",
        "explanation": "VNI: nỗi buồn - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 924,
        "family": "able",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "ability",
        "explanation": "VNI: khả năng - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 925,
        "family": "fame",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "fame",
        "explanation": "VNI: sự nổi tiếng - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 926,
        "family": "agree",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agreement",
        "explanation": "VNI: sự đồng ý - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 927,
        "family": "appear",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "appearance",
        "explanation": "VNI: di diện mạo - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 928,
        "family": "assist",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assistance",
        "explanation": "VNI: sự giúp đỡ - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 929,
        "family": "attend",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attendance",
        "explanation": "VNI: sự tham gia - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 930,
        "family": "bright",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "brightness",
        "explanation": "VNI: độ sáng - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 931,
        "family": "collect",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collection",
        "explanation": "VNI: bộ sưu tập - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 932,
        "family": "compete",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "competition",
        "explanation": "VNI: cuộc thi - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 933,
        "family": "confidence",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confidence",
        "explanation": "VNI: sự tự tin - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 934,
        "family": "connect",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connection",
        "explanation": "VNI: sự kết nối - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 935,
        "family": "courage",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "courage",
        "explanation": "VNI: lòng can đảm - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 936,
        "family": "dark",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "darkness",
        "explanation": "VNI: bóng tối - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 937,
        "family": "deep",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "depth",
        "explanation": "VNI: chiều sâu - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 938,
        "family": "depend",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "dependence",
        "explanation": "VNI: sự phụ thuộc - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 939,
        "family": "describe",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "description",
        "explanation": "VNI: sự miêu tả - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 940,
        "family": "differ",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "difference",
        "explanation": "VNI: sự khác biệt - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 941,
        "family": "disappoint",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappointment",
        "explanation": "VNI: sự thất vọng - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 942,
        "family": "economy",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economy",
        "explanation": "VNI: nền kinh tế - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 943,
        "family": "employ",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employment",
        "explanation": "VNI: việc làm - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 944,
        "family": "enjoy",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoyment",
        "explanation": "VNI: sự thích thú - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 945,
        "family": "explain",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explanation",
        "explanation": "VNI: sự giải thích - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 946,
        "family": "forget",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forgetfulness",
        "explanation": "VNI: tính hay quên - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 947,
        "family": "grow",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "growth",
        "explanation": "VNI: sự phát triển - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 948,
        "family": "high",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "height",
        "explanation": "VNI: chiều cao - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 949,
        "family": "imagine",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imagination",
        "explanation": "VNI: sự tưởng tượng - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 950,
        "family": "impress",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impression",
        "explanation": "VNI: ấn tượng - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 951,
        "family": "improve",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improvement",
        "explanation": "VNI: sự cải thiện - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 952,
        "family": "inform",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "information",
        "explanation": "VNI: thông tin - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 953,
        "family": "invent",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "invention",
        "explanation": "VNI: sự phát minh - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 954,
        "family": "invite",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "invitation",
        "explanation": "VNI: lời mời - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 955,
        "family": "know",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "knowledge",
          "know",
          "knowledgeable",
          "knowledgeably"
        ],
        "answer": "knowledge",
        "explanation": "VNI: kiến thức - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 956,
        "family": "long",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "length",
          "lengthen",
          "long",
          "longingly"
        ],
        "answer": "length",
        "explanation": "VNI: chiều dài - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 957,
        "family": "move",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "movement",
          "move",
          "movable",
          "movably"
        ],
        "answer": "movement",
        "explanation": "VNI: sự di chuyển - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 958,
        "family": "perform",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "performance",
          "perform",
          "performing",
          "performingly"
        ],
        "answer": "performance",
        "explanation": "VNI: buổi biểu diễn - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 959,
        "family": "popular",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "popularity",
          "popularize",
          "popular",
          "popularly"
        ],
        "answer": "popularity",
        "explanation": "VNI: sự phổ biến - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 960,
        "family": "prepare",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "preparation",
          "prepare",
          "prepared",
          "preparedly"
        ],
        "answer": "preparation",
        "explanation": "VNI: sự chuẩn bị - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 961,
        "family": "produce",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "production",
          "produce",
          "productive",
          "productively"
        ],
        "answer": "production",
        "explanation": "VNI: sự sản xuất - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 962,
        "family": "real",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "reality",
          "realize",
          "real",
          "really"
        ],
        "answer": "reality",
        "explanation": "VNI: thực tế - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 963,
        "family": "relax",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "relaxation",
          "relax",
          "relaxing",
          "relaxingly"
        ],
        "answer": "relaxation",
        "explanation": "VNI: sự thư giãn - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 964,
        "family": "satisfy",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "satisfaction",
          "satisfy",
          "satisfactory",
          "satisfactorily"
        ],
        "answer": "satisfaction",
        "explanation": "VNI: sự thỏa mãn - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 965,
        "family": "short",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "shortness",
          "shorten",
          "short",
          "shortly"
        ],
        "answer": "shortness",
        "explanation": "VNI: sự ngắn - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 966,
        "family": "simple",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "simplicity",
          "simplify",
          "simple",
          "simply"
        ],
        "answer": "simplicity",
        "explanation": "VNI: sự đơn giản - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 967,
        "family": "soft",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "softness",
          "soften",
          "soft",
          "softly"
        ],
        "answer": "softness",
        "explanation": "VNI: sự mềm mại - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 968,
        "family": "strong",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "strength",
          "strengthen",
          "strong",
          "strongly"
        ],
        "answer": "strength",
        "explanation": "VNI: sức mạnh - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 969,
        "family": "thought",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "thought",
          "think",
          "thoughtful",
          "thoughtfully"
        ],
        "answer": "thought",
        "explanation": "VNI: suy nghĩ - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 970,
        "family": "weak",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "weakness",
          "weaken",
          "weak",
          "weakly"
        ],
        "answer": "weakness",
        "explanation": "VNI: điểm yếu - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 971,
        "family": "wide",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "width",
          "widen",
          "wide",
          "widely"
        ],
        "answer": "width",
        "explanation": "VNI: chiều rộng - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 972,
        "family": "success",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "success",
        "explanation": "VNI: sự thành công - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 973,
        "family": "beauty",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beauty",
        "explanation": "VNI: vẻ đẹp - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 974,
        "family": "health",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "health",
        "explanation": "VNI: sức khỏe - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 975,
        "family": "educate",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "education",
        "explanation": "VNI: nền giáo dục - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 976,
        "family": "create",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "creation",
        "explanation": "VNI: sự sáng tạo - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 977,
        "family": "decide",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decision",
        "explanation": "VNI: sự quyết định - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 978,
        "family": "develop",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "development",
        "explanation": "VNI: sự phát triển - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 979,
        "family": "friend",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "friendship",
        "explanation": "VNI: tình bạn - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 980,
        "family": "danger",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "danger",
        "explanation": "VNI: sự nguy hiểm - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 981,
        "family": "power",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "power",
        "explanation": "VNI: sức mạnh - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 982,
        "family": "peace",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "peace",
        "explanation": "VNI: hòa bình - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 983,
        "family": "nation",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "nation",
        "explanation": "VNI: quốc gia - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 984,
        "family": "culture",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "culture",
        "explanation": "VNI: văn hóa - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 985,
        "family": "industry",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industry",
        "explanation": "VNI: công nghiệp - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 986,
        "family": "nature",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "nature",
        "explanation": "VNI: tự nhiên - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 987,
        "family": "communicate",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communication",
        "explanation": "VNI: sự giao tiếp - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 988,
        "family": "celebrate",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebration",
        "explanation": "VNI: lễ kỷ niệm - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 989,
        "family": "compare",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "comparison",
        "explanation": "VNI: sự so sánh - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 990,
        "family": "protect",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protection",
        "explanation": "VNI: sự bảo vệ - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 991,
        "family": "organize",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organization",
        "explanation": "VNI: tổ chức - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 992,
        "family": "act",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "action",
        "explanation": "VNI: hành động - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 993,
        "family": "attract",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attraction",
        "explanation": "VNI: sự thu hút - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 994,
        "family": "sad",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sadness",
        "explanation": "VNI: nỗi buồn - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 995,
        "family": "able",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "ability",
        "explanation": "VNI: khả năng - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 996,
        "family": "fame",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "fame",
        "explanation": "VNI: sự nổi tiếng - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 997,
        "family": "agree",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agreement",
        "explanation": "VNI: sự đồng ý - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 998,
        "family": "appear",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "appearance",
        "explanation": "VNI: di diện mạo - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 999,
        "family": "assist",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assistance",
        "explanation": "VNI: sự giúp đỡ - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 1000,
        "family": "attend",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attendance",
        "explanation": "VNI: sự tham gia - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 1001,
        "family": "bright",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "brightness",
        "explanation": "VNI: độ sáng - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 1002,
        "family": "collect",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collection",
        "explanation": "VNI: bộ sưu tập - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 1003,
        "family": "compete",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "competition",
        "explanation": "VNI: cuộc thi - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 1004,
        "family": "confidence",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confidence",
        "explanation": "VNI: sự tự tin - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 1005,
        "family": "connect",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connection",
        "explanation": "VNI: sự kết nối - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 1006,
        "family": "courage",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "courage",
        "explanation": "VNI: lòng can đảm - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 1007,
        "family": "dark",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "darkness",
        "explanation": "VNI: bóng tối - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 1008,
        "family": "deep",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "depth",
        "explanation": "VNI: chiều sâu - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 1009,
        "family": "depend",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "dependence",
        "explanation": "VNI: sự phụ thuộc - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 1010,
        "family": "describe",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "description",
        "explanation": "VNI: sự miêu tả - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 1011,
        "family": "differ",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "difference",
        "explanation": "VNI: sự khác biệt - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 1012,
        "family": "disappoint",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappointment",
        "explanation": "VNI: sự thất vọng - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 1013,
        "family": "economy",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economy",
        "explanation": "VNI: nền kinh tế - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 1014,
        "family": "employ",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employment",
        "explanation": "VNI: việc làm - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 1015,
        "family": "enjoy",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoyment",
        "explanation": "VNI: sự thích thú - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 1016,
        "family": "explain",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explanation",
        "explanation": "VNI: sự giải thích - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 1017,
        "family": "forget",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forgetfulness",
        "explanation": "VNI: tính hay quên - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 1018,
        "family": "grow",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "growth",
        "explanation": "VNI: sự phát triển - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 1019,
        "family": "high",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "height",
        "explanation": "VNI: chiều cao - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 1020,
        "family": "imagine",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imagination",
        "explanation": "VNI: sự tưởng tượng - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 1021,
        "family": "impress",
        "questionType": "choose-noun",
        "sentence": "We are amazed by the _____ of this country.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impression",
        "explanation": "VNI: ấn tượng - Grammar: Sau giới từ 'by' và mạo từ 'the' cần một danh từ."
      },
      {
        "id": 1022,
        "family": "improve",
        "questionType": "choose-noun",
        "sentence": "The teacher praised his great _____.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improvement",
        "explanation": "VNI: sự cải thiện - Grammar: Sau tính từ 'great' cần một danh từ đóng vai trò tân ngữ."
      },
      {
        "id": 1023,
        "family": "inform",
        "questionType": "choose-noun",
        "sentence": "They are working hard for the _____ of the community.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "information",
        "explanation": "VNI: thông tin - Grammar: Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ."
      },
      {
        "id": 1024,
        "family": "invent",
        "questionType": "choose-noun",
        "sentence": "Her _____ brought joy to everyone in the room.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "invention",
        "explanation": "VNI: sự phát minh - Grammar: Sau tính từ sở hữu 'Her' làm chủ ngữ cần một danh từ."
      },
      {
        "id": 1025,
        "family": "invite",
        "questionType": "choose-noun",
        "sentence": "We need more _____ to complete the school project.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "invitation",
        "explanation": "VNI: lời mời - Grammar: Sau từ chỉ lượng 'more' bổ nghĩa cần một danh từ."
      },
      {
        "id": 1026,
        "family": "success",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "succeed",
        "explanation": "VNI: thành công - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1027,
        "family": "beauty",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beautify",
        "explanation": "VNI: làm đẹp - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1028,
        "family": "health",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "heal",
        "explanation": "VNI: chữa lành - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1029,
        "family": "educate",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "educate",
        "explanation": "VNI: giáo dục - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1030,
        "family": "create",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "create",
        "explanation": "VNI: sáng tạo - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1031,
        "family": "decide",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decide",
        "explanation": "VNI: quyết định - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1032,
        "family": "develop",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "develop",
        "explanation": "VNI: phát triển - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1033,
        "family": "friend",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "befriend",
        "explanation": "VNI: kết bạn - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1034,
        "family": "danger",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "endanger",
        "explanation": "VNI: gây nguy hiểm - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1035,
        "family": "power",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "empower",
        "explanation": "VNI: trao quyền - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1036,
        "family": "peace",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "pacify",
        "explanation": "VNI: làm yên lòng - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1037,
        "family": "nation",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "nationalize",
        "explanation": "VNI: quốc gia hóa - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1038,
        "family": "culture",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "cultivate",
        "explanation": "VNI: trau dồi - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1039,
        "family": "industry",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industrialize",
        "explanation": "VNI: công nghiệp hóa - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1040,
        "family": "nature",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "naturalize",
        "explanation": "VNI: tự nhiên hóa - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1041,
        "family": "communicate",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communicate",
        "explanation": "VNI: giao tiếp - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1042,
        "family": "celebrate",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebrate",
        "explanation": "VNI: ăn mừng - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1043,
        "family": "compare",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "compare",
        "explanation": "VNI: so sánh - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1044,
        "family": "protect",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protect",
        "explanation": "VNI: bảo vệ - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1045,
        "family": "organize",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organize",
        "explanation": "VNI: tổ chức - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1046,
        "family": "act",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "act",
        "explanation": "VNI: hành động - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1047,
        "family": "attract",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attract",
        "explanation": "VNI: thu hút - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1048,
        "family": "sad",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sadden",
        "explanation": "VNI: làm buồn - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1049,
        "family": "able",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "enable",
        "explanation": "VNI: cho phép - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1050,
        "family": "fame",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "defame",
        "explanation": "VNI: nói xấu - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1051,
        "family": "agree",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agree",
        "explanation": "VNI: đồng ý - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1052,
        "family": "appear",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "appear",
        "explanation": "VNI: xuất hiện - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1053,
        "family": "assist",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assist",
        "explanation": "VNI: giúp đỡ - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1054,
        "family": "attend",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attend",
        "explanation": "VNI: tham gia - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1055,
        "family": "bright",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "brighten",
        "explanation": "VNI: làm sáng - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1056,
        "family": "collect",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collect",
        "explanation": "VNI: sưu tập - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1057,
        "family": "compete",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "compete",
        "explanation": "VNI: cạnh tranh - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1058,
        "family": "confidence",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confide",
        "explanation": "VNI: tâm sự - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1059,
        "family": "connect",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connect",
        "explanation": "VNI: kết nối - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1060,
        "family": "courage",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "encourage",
        "explanation": "VNI: khuyến khích - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1061,
        "family": "dark",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "darken",
        "explanation": "VNI: làm tối - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1062,
        "family": "deep",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "deepen",
        "explanation": "VNI: làm sâu - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1063,
        "family": "depend",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "depend",
        "explanation": "VNI: phụ thuộc - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1064,
        "family": "describe",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "describe",
        "explanation": "VNI: miêu tả - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1065,
        "family": "differ",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "differ",
        "explanation": "VNI: khác biệt - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1066,
        "family": "disappoint",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappoint",
        "explanation": "VNI: làm thất vọng - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1067,
        "family": "economy",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economize",
        "explanation": "VNI: tiết kiệm - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1068,
        "family": "employ",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employ",
        "explanation": "VNI: thuê mướn - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1069,
        "family": "enjoy",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoy",
        "explanation": "VNI: thưởng thức - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1070,
        "family": "explain",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explain",
        "explanation": "VNI: giải thích - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1071,
        "family": "forget",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forget",
        "explanation": "VNI: quên - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1072,
        "family": "grow",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "grow",
        "explanation": "VNI: tăng trưởng - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1073,
        "family": "high",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "heighten",
        "explanation": "VNI: nâng cao - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1074,
        "family": "imagine",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imagine",
        "explanation": "VNI: tưởng tượng - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1075,
        "family": "impress",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impress",
        "explanation": "VNI: gây ấn tượng - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1076,
        "family": "improve",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improve",
        "explanation": "VNI: cải tiến - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1077,
        "family": "inform",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "inform",
        "explanation": "VNI: thông báo - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1078,
        "family": "invent",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "invent",
        "explanation": "VNI: phát minh - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1079,
        "family": "invite",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "invite",
        "explanation": "VNI: mời - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1080,
        "family": "know",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "knowledge",
          "know",
          "knowledgeable",
          "knowledgeably"
        ],
        "answer": "know",
        "explanation": "VNI: biết - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1081,
        "family": "long",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "length",
          "lengthen",
          "long",
          "longingly"
        ],
        "answer": "lengthen",
        "explanation": "VNI: kéo dài - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1082,
        "family": "move",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "movement",
          "move",
          "movable",
          "movably"
        ],
        "answer": "move",
        "explanation": "VNI: di chuyển - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1083,
        "family": "perform",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "performance",
          "perform",
          "performing",
          "performingly"
        ],
        "answer": "perform",
        "explanation": "VNI: biểu diễn - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1084,
        "family": "popular",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "popularity",
          "popularize",
          "popular",
          "popularly"
        ],
        "answer": "popularize",
        "explanation": "VNI: phổ biến hóa - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1085,
        "family": "prepare",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "preparation",
          "prepare",
          "prepared",
          "preparedly"
        ],
        "answer": "prepare",
        "explanation": "VNI: chuẩn bị - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1086,
        "family": "produce",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "production",
          "produce",
          "productive",
          "productively"
        ],
        "answer": "produce",
        "explanation": "VNI: sản xuất - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1087,
        "family": "real",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "reality",
          "realize",
          "real",
          "really"
        ],
        "answer": "realize",
        "explanation": "VNI: nhận ra - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1088,
        "family": "relax",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "relaxation",
          "relax",
          "relaxing",
          "relaxingly"
        ],
        "answer": "relax",
        "explanation": "VNI: thư giãn - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1089,
        "family": "satisfy",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "satisfaction",
          "satisfy",
          "satisfactory",
          "satisfactorily"
        ],
        "answer": "satisfy",
        "explanation": "VNI: làm hài lòng - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1090,
        "family": "short",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "shortness",
          "shorten",
          "short",
          "shortly"
        ],
        "answer": "shorten",
        "explanation": "VNI: rút ngắn - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1091,
        "family": "simple",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "simplicity",
          "simplify",
          "simple",
          "simply"
        ],
        "answer": "simplify",
        "explanation": "VNI: đơn giản hóa - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1092,
        "family": "soft",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "softness",
          "soften",
          "soft",
          "softly"
        ],
        "answer": "soften",
        "explanation": "VNI: làm mềm - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1093,
        "family": "strong",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "strength",
          "strengthen",
          "strong",
          "strongly"
        ],
        "answer": "strengthen",
        "explanation": "VNI: làm mạnh thêm - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1094,
        "family": "thought",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "thought",
          "think",
          "thoughtful",
          "thoughtfully"
        ],
        "answer": "think",
        "explanation": "VNI: suy nghĩ - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1095,
        "family": "weak",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "weakness",
          "weaken",
          "weak",
          "weakly"
        ],
        "answer": "weaken",
        "explanation": "VNI: làm yếu đi - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1096,
        "family": "wide",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "width",
          "widen",
          "wide",
          "widely"
        ],
        "answer": "widen",
        "explanation": "VNI: mở rộng - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1097,
        "family": "success",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "succeed",
        "explanation": "VNI: thành công - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1098,
        "family": "beauty",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beautify",
        "explanation": "VNI: làm đẹp - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1099,
        "family": "health",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "heal",
        "explanation": "VNI: chữa lành - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1100,
        "family": "educate",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "educate",
        "explanation": "VNI: giáo dục - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1101,
        "family": "create",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "create",
        "explanation": "VNI: sáng tạo - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1102,
        "family": "decide",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decide",
        "explanation": "VNI: quyết định - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1103,
        "family": "develop",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "develop",
        "explanation": "VNI: phát triển - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1104,
        "family": "friend",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "befriend",
        "explanation": "VNI: kết bạn - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1105,
        "family": "danger",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "endanger",
        "explanation": "VNI: gây nguy hiểm - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1106,
        "family": "power",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "empower",
        "explanation": "VNI: trao quyền - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1107,
        "family": "peace",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "pacify",
        "explanation": "VNI: làm yên lòng - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1108,
        "family": "nation",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "nationalize",
        "explanation": "VNI: quốc gia hóa - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1109,
        "family": "culture",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "cultivate",
        "explanation": "VNI: trau dồi - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1110,
        "family": "industry",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industrialize",
        "explanation": "VNI: công nghiệp hóa - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1111,
        "family": "nature",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "naturalize",
        "explanation": "VNI: tự nhiên hóa - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1112,
        "family": "communicate",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communicate",
        "explanation": "VNI: giao tiếp - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1113,
        "family": "celebrate",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebrate",
        "explanation": "VNI: ăn mừng - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1114,
        "family": "compare",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "compare",
        "explanation": "VNI: so sánh - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1115,
        "family": "protect",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protect",
        "explanation": "VNI: bảo vệ - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1116,
        "family": "organize",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organize",
        "explanation": "VNI: tổ chức - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1117,
        "family": "act",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "act",
        "explanation": "VNI: hành động - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1118,
        "family": "attract",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attract",
        "explanation": "VNI: thu hút - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1119,
        "family": "sad",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sadden",
        "explanation": "VNI: làm buồn - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1120,
        "family": "able",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "enable",
        "explanation": "VNI: cho phép - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1121,
        "family": "fame",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "defame",
        "explanation": "VNI: nói xấu - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1122,
        "family": "agree",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agree",
        "explanation": "VNI: đồng ý - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1123,
        "family": "appear",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "appear",
        "explanation": "VNI: xuất hiện - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1124,
        "family": "assist",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assist",
        "explanation": "VNI: giúp đỡ - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1125,
        "family": "attend",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attend",
        "explanation": "VNI: tham gia - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1126,
        "family": "bright",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "brighten",
        "explanation": "VNI: làm sáng - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1127,
        "family": "collect",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collect",
        "explanation": "VNI: sưu tập - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1128,
        "family": "compete",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "compete",
        "explanation": "VNI: cạnh tranh - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1129,
        "family": "confidence",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confide",
        "explanation": "VNI: tâm sự - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1130,
        "family": "connect",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connect",
        "explanation": "VNI: kết nối - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1131,
        "family": "courage",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "encourage",
        "explanation": "VNI: khuyến khích - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1132,
        "family": "dark",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "darken",
        "explanation": "VNI: làm tối - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1133,
        "family": "deep",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "deepen",
        "explanation": "VNI: làm sâu - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1134,
        "family": "depend",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "depend",
        "explanation": "VNI: phụ thuộc - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1135,
        "family": "describe",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "describe",
        "explanation": "VNI: miêu tả - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1136,
        "family": "differ",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "differ",
        "explanation": "VNI: khác biệt - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1137,
        "family": "disappoint",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappoint",
        "explanation": "VNI: làm thất vọng - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1138,
        "family": "economy",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economize",
        "explanation": "VNI: tiết kiệm - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1139,
        "family": "employ",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employ",
        "explanation": "VNI: thuê mướn - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1140,
        "family": "enjoy",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoy",
        "explanation": "VNI: thưởng thức - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1141,
        "family": "explain",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explain",
        "explanation": "VNI: giải thích - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1142,
        "family": "forget",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forget",
        "explanation": "VNI: quên - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1143,
        "family": "grow",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "grow",
        "explanation": "VNI: tăng trưởng - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1144,
        "family": "high",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "heighten",
        "explanation": "VNI: nâng cao - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1145,
        "family": "imagine",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imagine",
        "explanation": "VNI: tưởng tượng - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1146,
        "family": "impress",
        "questionType": "choose-verb",
        "sentence": "They want to _____ their local park this weekend.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impress",
        "explanation": "VNI: gây ấn tượng - Grammar: Sau 'to' chỉ mục đích của hành động cần một động từ nguyên mẫu."
      },
      {
        "id": 1147,
        "family": "improve",
        "questionType": "choose-verb",
        "sentence": "You must _____ your parents' opinions.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improve",
        "explanation": "VNI: cải tiến - Grammar: Sau động từ khuyết thiếu 'must' cần một động từ nguyên mẫu."
      },
      {
        "id": 1148,
        "family": "inform",
        "questionType": "choose-verb",
        "sentence": "We will _____ our traditional festival tomorrow.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "inform",
        "explanation": "VNI: thông báo - Grammar: Sau trợ động từ tương lai 'will' cần một động từ nguyên mẫu."
      },
      {
        "id": 1149,
        "family": "invent",
        "questionType": "choose-verb",
        "sentence": "Please _____ your answer to the class.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "invent",
        "explanation": "VNI: phát minh - Grammar: Đầu câu mệnh lệnh/yêu cầu lịch sự cần một động từ nguyên mẫu."
      },
      {
        "id": 1150,
        "family": "invite",
        "questionType": "choose-verb",
        "sentence": "He tried his best to _____ the challenge.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "invite",
        "explanation": "VNI: mời - Grammar: Cấu trúc 'try one's best to-V' cần một động từ nguyên mẫu."
      },
      {
        "id": 1151,
        "family": "success",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "successful",
        "explanation": "VNI: thành công - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1152,
        "family": "beauty",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beautiful",
        "explanation": "VNI: xinh đẹp - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1153,
        "family": "health",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "healthy",
        "explanation": "VNI: khỏe mạnh - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1154,
        "family": "educate",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "educational",
        "explanation": "VNI: mang tính giáo dục - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1155,
        "family": "create",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "creative",
        "explanation": "VNI: sáng tạo - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1156,
        "family": "decide",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decisive",
        "explanation": "VNI: kiên quyết - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1157,
        "family": "develop",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "developing",
        "explanation": "VNI: đang phát triển - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1158,
        "family": "friend",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "friendly",
        "explanation": "VNI: thân thiện - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1159,
        "family": "danger",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "dangerous",
        "explanation": "VNI: nguy hiểm - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1160,
        "family": "power",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "powerful",
        "explanation": "VNI: mạnh mẽ - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1161,
        "family": "peace",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "peaceful",
        "explanation": "VNI: yên bình - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1162,
        "family": "nation",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "national",
        "explanation": "VNI: thuộc quốc gia - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1163,
        "family": "culture",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "cultural",
        "explanation": "VNI: thuộc văn hóa - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1164,
        "family": "industry",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industrial",
        "explanation": "VNI: thuộc công nghiệp - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1165,
        "family": "nature",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "natural",
        "explanation": "VNI: thuộc tự nhiên - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1166,
        "family": "communicate",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communicative",
        "explanation": "VNI: cởi mở giao tiếp - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1167,
        "family": "celebrate",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebrated",
        "explanation": "VNI: nổi tiếng - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1168,
        "family": "compare",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "comparative",
        "explanation": "VNI: so sánh - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1169,
        "family": "protect",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protective",
        "explanation": "VNI: bảo vệ - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1170,
        "family": "organize",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organizational",
        "explanation": "VNI: thuộc tổ chức - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1171,
        "family": "act",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "active",
        "explanation": "VNI: năng động - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1172,
        "family": "attract",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attractive",
        "explanation": "VNI: hấp dẫn - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1173,
        "family": "sad",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sad",
        "explanation": "VNI: buồn bã - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1174,
        "family": "able",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "able",
        "explanation": "VNI: có thể - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1175,
        "family": "fame",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "famous",
        "explanation": "VNI: nổi tiếng - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1176,
        "family": "agree",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agreeable",
        "explanation": "VNI: dễ chịu - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1177,
        "family": "appear",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "apparent",
        "explanation": "VNI: rõ ràng - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1178,
        "family": "assist",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assistant",
        "explanation": "VNI: phụ tá - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1179,
        "family": "attend",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attentive",
        "explanation": "VNI: chú ý - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1180,
        "family": "bright",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "bright",
        "explanation": "VNI: sáng sủa - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1181,
        "family": "collect",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collective",
        "explanation": "VNI: tập thể - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1182,
        "family": "compete",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "competitive",
        "explanation": "VNI: mang tính cạnh tranh - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1183,
        "family": "confidence",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confident",
        "explanation": "VNI: tự tin - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1184,
        "family": "connect",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connected",
        "explanation": "VNI: được kết nối - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1185,
        "family": "courage",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "courageous",
        "explanation": "VNI: can đảm - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1186,
        "family": "dark",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "dark",
        "explanation": "VNI: tối tăm - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1187,
        "family": "deep",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "deep",
        "explanation": "VNI: sâu sắc - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1188,
        "family": "depend",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "dependent",
        "explanation": "VNI: phụ thuộc - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1189,
        "family": "describe",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "descriptive",
        "explanation": "VNI: có tính miêu tả - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1190,
        "family": "differ",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "different",
        "explanation": "VNI: khác nhau - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1191,
        "family": "disappoint",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappointing",
        "explanation": "VNI: đáng thất vọng - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1192,
        "family": "economy",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economic",
        "explanation": "VNI: thuộc kinh tế - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1193,
        "family": "employ",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employed",
        "explanation": "VNI: có việc làm - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1194,
        "family": "enjoy",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoyable",
        "explanation": "VNI: thú vị - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1195,
        "family": "explain",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explanatory",
        "explanation": "VNI: mang tính giải thích - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1196,
        "family": "forget",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forgetful",
        "explanation": "VNI: hay quên - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1197,
        "family": "grow",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "growing",
        "explanation": "VNI: đang lớn - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1198,
        "family": "high",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "high",
        "explanation": "VNI: cao - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1199,
        "family": "imagine",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imaginative",
        "explanation": "VNI: giàu tưởng tượng - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1200,
        "family": "impress",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impressive",
        "explanation": "VNI: gợi ấn tượng - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1201,
        "family": "improve",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improved",
        "explanation": "VNI: được cải thiện - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1202,
        "family": "inform",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "informative",
        "explanation": "VNI: nhiều thông tin - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1203,
        "family": "invent",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "inventive",
        "explanation": "VNI: sáng tạo - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1204,
        "family": "invite",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "inviting",
        "explanation": "VNI: hấp dẫn - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1205,
        "family": "know",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "knowledge",
          "know",
          "knowledgeable",
          "knowledgeably"
        ],
        "answer": "knowledgeable",
        "explanation": "VNI: am hiểu - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1206,
        "family": "long",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "length",
          "lengthen",
          "long",
          "longingly"
        ],
        "answer": "long",
        "explanation": "VNI: dài - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1207,
        "family": "move",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "movement",
          "move",
          "movable",
          "movably"
        ],
        "answer": "movable",
        "explanation": "VNI: có thể di chuyển - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1208,
        "family": "perform",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "performance",
          "perform",
          "performing",
          "performingly"
        ],
        "answer": "performing",
        "explanation": "VNI: đang biểu diễn - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1209,
        "family": "popular",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "popularity",
          "popularize",
          "popular",
          "popularly"
        ],
        "answer": "popular",
        "explanation": "VNI: phổ biến - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1210,
        "family": "prepare",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "preparation",
          "prepare",
          "prepared",
          "preparedly"
        ],
        "answer": "prepared",
        "explanation": "VNI: sẵn sàng - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1211,
        "family": "produce",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "production",
          "produce",
          "productive",
          "productively"
        ],
        "answer": "productive",
        "explanation": "VNI: năng suất - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1212,
        "family": "real",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "reality",
          "realize",
          "real",
          "really"
        ],
        "answer": "real",
        "explanation": "VNI: thực tế - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1213,
        "family": "relax",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "relaxation",
          "relax",
          "relaxing",
          "relaxingly"
        ],
        "answer": "relaxing",
        "explanation": "VNI: thư giãn - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1214,
        "family": "satisfy",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "satisfaction",
          "satisfy",
          "satisfactory",
          "satisfactorily"
        ],
        "answer": "satisfactory",
        "explanation": "VNI: thỏa đáng - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1215,
        "family": "short",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "shortness",
          "shorten",
          "short",
          "shortly"
        ],
        "answer": "short",
        "explanation": "VNI: ngắn - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1216,
        "family": "simple",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "simplicity",
          "simplify",
          "simple",
          "simply"
        ],
        "answer": "simple",
        "explanation": "VNI: đơn giản - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1217,
        "family": "soft",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "softness",
          "soften",
          "soft",
          "softly"
        ],
        "answer": "soft",
        "explanation": "VNI: mềm - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1218,
        "family": "strong",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "strength",
          "strengthen",
          "strong",
          "strongly"
        ],
        "answer": "strong",
        "explanation": "VNI: mạnh mẽ - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1219,
        "family": "thought",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "thought",
          "think",
          "thoughtful",
          "thoughtfully"
        ],
        "answer": "thoughtful",
        "explanation": "VNI: chu đáo - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1220,
        "family": "weak",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "weakness",
          "weaken",
          "weak",
          "weakly"
        ],
        "answer": "weak",
        "explanation": "VNI: yếu - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1221,
        "family": "wide",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "width",
          "widen",
          "wide",
          "widely"
        ],
        "answer": "wide",
        "explanation": "VNI: rộng - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1222,
        "family": "success",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "successful",
        "explanation": "VNI: thành công - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1223,
        "family": "beauty",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beautiful",
        "explanation": "VNI: xinh đẹp - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1224,
        "family": "health",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "healthy",
        "explanation": "VNI: khỏe mạnh - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1225,
        "family": "educate",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "educational",
        "explanation": "VNI: mang tính giáo dục - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1226,
        "family": "create",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "creative",
        "explanation": "VNI: sáng tạo - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1227,
        "family": "decide",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decisive",
        "explanation": "VNI: kiên quyết - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1228,
        "family": "develop",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "developing",
        "explanation": "VNI: đang phát triển - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1229,
        "family": "friend",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "friendly",
        "explanation": "VNI: thân thiện - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1230,
        "family": "danger",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "dangerous",
        "explanation": "VNI: nguy hiểm - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1231,
        "family": "power",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "powerful",
        "explanation": "VNI: mạnh mẽ - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1232,
        "family": "peace",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "peaceful",
        "explanation": "VNI: yên bình - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1233,
        "family": "nation",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "national",
        "explanation": "VNI: thuộc quốc gia - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1234,
        "family": "culture",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "cultural",
        "explanation": "VNI: thuộc văn hóa - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1235,
        "family": "industry",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industrial",
        "explanation": "VNI: thuộc công nghiệp - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1236,
        "family": "nature",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "natural",
        "explanation": "VNI: thuộc tự nhiên - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1237,
        "family": "communicate",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communicative",
        "explanation": "VNI: cởi mở giao tiếp - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1238,
        "family": "celebrate",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebrated",
        "explanation": "VNI: nổi tiếng - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1239,
        "family": "compare",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "comparative",
        "explanation": "VNI: so sánh - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1240,
        "family": "protect",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protective",
        "explanation": "VNI: bảo vệ - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1241,
        "family": "organize",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organizational",
        "explanation": "VNI: thuộc tổ chức - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1242,
        "family": "act",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "active",
        "explanation": "VNI: năng động - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1243,
        "family": "attract",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attractive",
        "explanation": "VNI: hấp dẫn - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1244,
        "family": "sad",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sad",
        "explanation": "VNI: buồn bã - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1245,
        "family": "able",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "able",
        "explanation": "VNI: có thể - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1246,
        "family": "fame",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "famous",
        "explanation": "VNI: nổi tiếng - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1247,
        "family": "agree",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agreeable",
        "explanation": "VNI: dễ chịu - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1248,
        "family": "appear",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "apparent",
        "explanation": "VNI: rõ ràng - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1249,
        "family": "assist",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assistant",
        "explanation": "VNI: phụ tá - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1250,
        "family": "attend",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attentive",
        "explanation": "VNI: chú ý - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1251,
        "family": "bright",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "bright",
        "explanation": "VNI: sáng sủa - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1252,
        "family": "collect",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collective",
        "explanation": "VNI: tập thể - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1253,
        "family": "compete",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "competitive",
        "explanation": "VNI: mang tính cạnh tranh - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1254,
        "family": "confidence",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confident",
        "explanation": "VNI: tự tin - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1255,
        "family": "connect",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connected",
        "explanation": "VNI: được kết nối - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1256,
        "family": "courage",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "courageous",
        "explanation": "VNI: can đảm - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1257,
        "family": "dark",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "dark",
        "explanation": "VNI: tối tăm - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1258,
        "family": "deep",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "deep",
        "explanation": "VNI: sâu sắc - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1259,
        "family": "depend",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "dependent",
        "explanation": "VNI: phụ thuộc - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1260,
        "family": "describe",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "descriptive",
        "explanation": "VNI: có tính miêu tả - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1261,
        "family": "differ",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "different",
        "explanation": "VNI: khác nhau - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1262,
        "family": "disappoint",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappointing",
        "explanation": "VNI: đáng thất vọng - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1263,
        "family": "economy",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economic",
        "explanation": "VNI: thuộc kinh tế - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1264,
        "family": "employ",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employed",
        "explanation": "VNI: có việc làm - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1265,
        "family": "enjoy",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoyable",
        "explanation": "VNI: thú vị - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1266,
        "family": "explain",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explanatory",
        "explanation": "VNI: mang tính giải thích - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1267,
        "family": "forget",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forgetful",
        "explanation": "VNI: hay quên - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1268,
        "family": "grow",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "growing",
        "explanation": "VNI: đang lớn - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1269,
        "family": "high",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "high",
        "explanation": "VNI: cao - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1270,
        "family": "imagine",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imaginative",
        "explanation": "VNI: giàu tưởng tượng - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1271,
        "family": "impress",
        "questionType": "choose-adjective",
        "sentence": "She is a highly _____ person in our team.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impressive",
        "explanation": "VNI: gợi ấn tượng - Grammar: Giữa trạng từ chỉ mức độ và danh từ cần một tính từ bổ nghĩa."
      },
      {
        "id": 1272,
        "family": "improve",
        "questionType": "choose-adjective",
        "sentence": "The scientific experiment was very _____.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improved",
        "explanation": "VNI: được cải thiện - Grammar: Sau động từ tobe 'was' và trạng từ 'very' cần một tính từ chỉ tính chất."
      },
      {
        "id": 1273,
        "family": "inform",
        "questionType": "choose-adjective",
        "sentence": "It is _____ to join outdoor activities.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "informative",
        "explanation": "VNI: nhiều thông tin - Grammar: Cấu trúc chủ ngữ giả 'It is + Adjective + to-V'."
      },
      {
        "id": 1274,
        "family": "invent",
        "questionType": "choose-adjective",
        "sentence": "He felt _____ after receiving the good news.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "inventive",
        "explanation": "VNI: sáng tạo - Grammar: Sau động từ chỉ cảm giác/trạng thái (linking verb) cần một tính từ."
      },
      {
        "id": 1275,
        "family": "invite",
        "questionType": "choose-adjective",
        "sentence": "Make sure your room is always _____.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "inviting",
        "explanation": "VNI: hấp dẫn - Grammar: Sau động từ tobe bổ nghĩa cho chủ ngữ cần một tính từ."
      },
      {
        "id": 1276,
        "family": "success",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "successfully",
        "explanation": "VNI: một cách thành công - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1277,
        "family": "beauty",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beautifully",
        "explanation": "VNI: một cách xinh đẹp - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1278,
        "family": "health",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "healthily",
        "explanation": "VNI: một cách lành mạnh - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1279,
        "family": "educate",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "educationally",
        "explanation": "VNI: về mặt giáo dục - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1280,
        "family": "create",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "creatively",
        "explanation": "VNI: một cách sáng tạo - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1281,
        "family": "decide",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decisively",
        "explanation": "VNI: một cách kiên quyết - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1282,
        "family": "develop",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "developingly",
        "explanation": "VNI: một cách phát triển - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1283,
        "family": "friend",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "friendlily",
        "explanation": "VNI: một cách thân thiện - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1284,
        "family": "danger",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "dangerously",
        "explanation": "VNI: một cách nguy hiểm - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1285,
        "family": "power",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "powerfully",
        "explanation": "VNI: một cách mạnh mẽ - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1286,
        "family": "peace",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "peacefully",
        "explanation": "VNI: một cách hòa bình - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1287,
        "family": "nation",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "nationally",
        "explanation": "VNI: trên toàn quốc - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1288,
        "family": "culture",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "culturally",
        "explanation": "VNI: về mặt văn hóa - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1289,
        "family": "industry",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industrially",
        "explanation": "VNI: về mặt công nghiệp - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1290,
        "family": "nature",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "naturally",
        "explanation": "VNI: một cách tự nhiên - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1291,
        "family": "communicate",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communicatively",
        "explanation": "VNI: bằng cách giao tiếp - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1292,
        "family": "celebrate",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebratedly",
        "explanation": "VNI: một cách nổi tiếng - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1293,
        "family": "compare",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "comparatively",
        "explanation": "VNI: tương đối - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1294,
        "family": "protect",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protectively",
        "explanation": "VNI: một cách bảo vệ - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1295,
        "family": "organize",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organizationally",
        "explanation": "VNI: về mặt tổ chức - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1296,
        "family": "act",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "actively",
        "explanation": "VNI: một cách chủ động - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1297,
        "family": "attract",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attractively",
        "explanation": "VNI: một cách hấp dẫn - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1298,
        "family": "sad",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sadly",
        "explanation": "VNI: một cách buồn bã - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1299,
        "family": "able",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "ably",
        "explanation": "VNI: một cách có tài - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1300,
        "family": "fame",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "famously",
        "explanation": "VNI: một cách nổi tiếng - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1301,
        "family": "agree",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agreeably",
        "explanation": "VNI: một cách dễ chịu - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1302,
        "family": "appear",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "apparently",
        "explanation": "VNI: nhìn có vẻ - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1303,
        "family": "assist",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assistantly",
        "explanation": "VNI: một cách phụ tá - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1304,
        "family": "attend",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attentively",
        "explanation": "VNI: một cách chú ý - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1305,
        "family": "bright",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "brightly",
        "explanation": "VNI: một cách sáng sủa - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1306,
        "family": "collect",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collectively",
        "explanation": "VNI: một cách tập thể - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1307,
        "family": "compete",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "competitively",
        "explanation": "VNI: một cách cạnh tranh - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1308,
        "family": "confidence",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confidently",
        "explanation": "VNI: một cách tự tin - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1309,
        "family": "connect",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connectedly",
        "explanation": "VNI: liên tục - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1310,
        "family": "courage",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "courageously",
        "explanation": "VNI: một cách can đảm - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1311,
        "family": "dark",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "darkly",
        "explanation": "VNI: một cách tối tăm - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1312,
        "family": "deep",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "deeply",
        "explanation": "VNI: một cách sâu sắc - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1313,
        "family": "depend",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "dependently",
        "explanation": "VNI: một cách phụ thuộc - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1314,
        "family": "describe",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "descriptively",
        "explanation": "VNI: bằng cách miêu tả - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1315,
        "family": "differ",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "differently",
        "explanation": "VNI: một cách khác biệt - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1316,
        "family": "disappoint",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappointingly",
        "explanation": "VNI: một cách thất vọng - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1317,
        "family": "economy",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economically",
        "explanation": "VNI: về mặt kinh tế - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1318,
        "family": "employ",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employedly",
        "explanation": "VNI: theo cách thuê mướn - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1319,
        "family": "enjoy",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoyably",
        "explanation": "VNI: một cách thú vị - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1320,
        "family": "explain",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explainingly",
        "explanation": "VNI: bằng cách giải thích - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1321,
        "family": "forget",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forgetfully",
        "explanation": "VNI: một cách đãng trí - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1322,
        "family": "grow",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "growingly",
        "explanation": "VNI: ngày càng tăng - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1323,
        "family": "high",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "highly",
        "explanation": "VNI: rất nhiều, cao - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1324,
        "family": "imagine",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imaginatively",
        "explanation": "VNI: một cách tưởng tượng - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1325,
        "family": "impress",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impressively",
        "explanation": "VNI: một cách ấn tượng - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1326,
        "family": "improve",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improvingly",
        "explanation": "VNI: một cách cải thiện - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1327,
        "family": "inform",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "informatively",
        "explanation": "VNI: đầy đủ thông tin - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1328,
        "family": "invent",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "inventively",
        "explanation": "VNI: một cách sáng tạo - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1329,
        "family": "invite",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "invitingly",
        "explanation": "VNI: một cách hấp dẫn - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1330,
        "family": "know",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "knowledge",
          "know",
          "knowledgeable",
          "knowledgeably"
        ],
        "answer": "knowledgeably",
        "explanation": "VNI: một cách am hiểu - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1331,
        "family": "long",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "length",
          "lengthen",
          "long",
          "longingly"
        ],
        "answer": "longingly",
        "explanation": "VNI: một cách thèm muốn - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1332,
        "family": "move",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "movement",
          "move",
          "movable",
          "movably"
        ],
        "answer": "movably",
        "explanation": "VNI: di động - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1333,
        "family": "perform",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "performance",
          "perform",
          "performing",
          "performingly"
        ],
        "answer": "performingly",
        "explanation": "VNI: hiệu quả - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1334,
        "family": "popular",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "popularity",
          "popularize",
          "popular",
          "popularly"
        ],
        "answer": "popularly",
        "explanation": "VNI: một cách phổ biến - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1335,
        "family": "prepare",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "preparation",
          "prepare",
          "prepared",
          "preparedly"
        ],
        "answer": "preparedly",
        "explanation": "VNI: một cách sẵn sàng - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1336,
        "family": "produce",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "production",
          "produce",
          "productive",
          "productively"
        ],
        "answer": "productively",
        "explanation": "VNI: một cách năng suất - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1337,
        "family": "real",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "reality",
          "realize",
          "real",
          "really"
        ],
        "answer": "really",
        "explanation": "VNI: thực sự - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1338,
        "family": "relax",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "relaxation",
          "relax",
          "relaxing",
          "relaxingly"
        ],
        "answer": "relaxingly",
        "explanation": "VNI: một cách thư giãn - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1339,
        "family": "satisfy",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "satisfaction",
          "satisfy",
          "satisfactory",
          "satisfactorily"
        ],
        "answer": "satisfactorily",
        "explanation": "VNI: một cách thỏa đáng - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1340,
        "family": "short",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "shortness",
          "shorten",
          "short",
          "shortly"
        ],
        "answer": "shortly",
        "explanation": "VNI: sớm, nhanh chóng - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1341,
        "family": "simple",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "simplicity",
          "simplify",
          "simple",
          "simply"
        ],
        "answer": "simply",
        "explanation": "VNI: đơn giản là - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1342,
        "family": "soft",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "softness",
          "soften",
          "soft",
          "softly"
        ],
        "answer": "softly",
        "explanation": "VNI: một cách nhẹ nhàng - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1343,
        "family": "strong",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "strength",
          "strengthen",
          "strong",
          "strongly"
        ],
        "answer": "strongly",
        "explanation": "VNI: một cách mạnh mẽ - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1344,
        "family": "thought",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "thought",
          "think",
          "thoughtful",
          "thoughtfully"
        ],
        "answer": "thoughtfully",
        "explanation": "VNI: một cách chu đáo - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1345,
        "family": "weak",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "weakness",
          "weaken",
          "weak",
          "weakly"
        ],
        "answer": "weakly",
        "explanation": "VNI: một cách yếu ớt - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1346,
        "family": "wide",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "width",
          "widen",
          "wide",
          "widely"
        ],
        "answer": "widely",
        "explanation": "VNI: rộng rãi - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1347,
        "family": "success",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "success",
          "succeed",
          "successful",
          "successfully"
        ],
        "answer": "successfully",
        "explanation": "VNI: một cách thành công - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1348,
        "family": "beauty",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "beauty",
          "beautify",
          "beautiful",
          "beautifully"
        ],
        "answer": "beautifully",
        "explanation": "VNI: một cách xinh đẹp - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1349,
        "family": "health",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "health",
          "heal",
          "healthy",
          "healthily"
        ],
        "answer": "healthily",
        "explanation": "VNI: một cách lành mạnh - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1350,
        "family": "educate",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "education",
          "educate",
          "educational",
          "educationally"
        ],
        "answer": "educationally",
        "explanation": "VNI: về mặt giáo dục - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1351,
        "family": "create",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "creation",
          "create",
          "creative",
          "creatively"
        ],
        "answer": "creatively",
        "explanation": "VNI: một cách sáng tạo - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1352,
        "family": "decide",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "decision",
          "decide",
          "decisive",
          "decisively"
        ],
        "answer": "decisively",
        "explanation": "VNI: một cách kiên quyết - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1353,
        "family": "develop",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "development",
          "develop",
          "developing",
          "developingly"
        ],
        "answer": "developingly",
        "explanation": "VNI: một cách phát triển - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1354,
        "family": "friend",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "friendship",
          "befriend",
          "friendly",
          "friendlily"
        ],
        "answer": "friendlily",
        "explanation": "VNI: một cách thân thiện - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1355,
        "family": "danger",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "danger",
          "endanger",
          "dangerous",
          "dangerously"
        ],
        "answer": "dangerously",
        "explanation": "VNI: một cách nguy hiểm - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1356,
        "family": "power",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "power",
          "empower",
          "powerful",
          "powerfully"
        ],
        "answer": "powerfully",
        "explanation": "VNI: một cách mạnh mẽ - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1357,
        "family": "peace",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "peace",
          "pacify",
          "peaceful",
          "peacefully"
        ],
        "answer": "peacefully",
        "explanation": "VNI: một cách hòa bình - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1358,
        "family": "nation",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "nation",
          "nationalize",
          "national",
          "nationally"
        ],
        "answer": "nationally",
        "explanation": "VNI: trên toàn quốc - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1359,
        "family": "culture",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "culture",
          "cultivate",
          "cultural",
          "culturally"
        ],
        "answer": "culturally",
        "explanation": "VNI: về mặt văn hóa - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1360,
        "family": "industry",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "industry",
          "industrialize",
          "industrial",
          "industrially"
        ],
        "answer": "industrially",
        "explanation": "VNI: về mặt công nghiệp - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1361,
        "family": "nature",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "nature",
          "naturalize",
          "natural",
          "naturally"
        ],
        "answer": "naturally",
        "explanation": "VNI: một cách tự nhiên - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1362,
        "family": "communicate",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "communication",
          "communicate",
          "communicative",
          "communicatively"
        ],
        "answer": "communicatively",
        "explanation": "VNI: bằng cách giao tiếp - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1363,
        "family": "celebrate",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "celebration",
          "celebrate",
          "celebrated",
          "celebratedly"
        ],
        "answer": "celebratedly",
        "explanation": "VNI: một cách nổi tiếng - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1364,
        "family": "compare",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "comparison",
          "compare",
          "comparative",
          "comparatively"
        ],
        "answer": "comparatively",
        "explanation": "VNI: tương đối - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1365,
        "family": "protect",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "protection",
          "protect",
          "protective",
          "protectively"
        ],
        "answer": "protectively",
        "explanation": "VNI: một cách bảo vệ - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1366,
        "family": "organize",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "organization",
          "organize",
          "organizational",
          "organizationally"
        ],
        "answer": "organizationally",
        "explanation": "VNI: về mặt tổ chức - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1367,
        "family": "act",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "action",
          "act",
          "active",
          "actively"
        ],
        "answer": "actively",
        "explanation": "VNI: một cách chủ động - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1368,
        "family": "attract",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "attraction",
          "attract",
          "attractive",
          "attractively"
        ],
        "answer": "attractively",
        "explanation": "VNI: một cách hấp dẫn - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1369,
        "family": "sad",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "sadness",
          "sadden",
          "sad",
          "sadly"
        ],
        "answer": "sadly",
        "explanation": "VNI: một cách buồn bã - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1370,
        "family": "able",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "ability",
          "enable",
          "able",
          "ably"
        ],
        "answer": "ably",
        "explanation": "VNI: một cách có tài - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1371,
        "family": "fame",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "fame",
          "defame",
          "famous",
          "famously"
        ],
        "answer": "famously",
        "explanation": "VNI: một cách nổi tiếng - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1372,
        "family": "agree",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "agreement",
          "agree",
          "agreeable",
          "agreeably"
        ],
        "answer": "agreeably",
        "explanation": "VNI: một cách dễ chịu - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1373,
        "family": "appear",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "appearance",
          "appear",
          "apparent",
          "apparently"
        ],
        "answer": "apparently",
        "explanation": "VNI: nhìn có vẻ - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1374,
        "family": "assist",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "assistance",
          "assist",
          "assistant",
          "assistantly"
        ],
        "answer": "assistantly",
        "explanation": "VNI: một cách phụ tá - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1375,
        "family": "attend",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "attendance",
          "attend",
          "attentive",
          "attentively"
        ],
        "answer": "attentively",
        "explanation": "VNI: một cách chú ý - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1376,
        "family": "bright",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "brightness",
          "brighten",
          "bright",
          "brightly"
        ],
        "answer": "brightly",
        "explanation": "VNI: một cách sáng sủa - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1377,
        "family": "collect",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "collection",
          "collect",
          "collective",
          "collectively"
        ],
        "answer": "collectively",
        "explanation": "VNI: một cách tập thể - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1378,
        "family": "compete",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "competition",
          "compete",
          "competitive",
          "competitively"
        ],
        "answer": "competitively",
        "explanation": "VNI: một cách cạnh tranh - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1379,
        "family": "confidence",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "confidence",
          "confide",
          "confident",
          "confidently"
        ],
        "answer": "confidently",
        "explanation": "VNI: một cách tự tin - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1380,
        "family": "connect",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "connection",
          "connect",
          "connected",
          "connectedly"
        ],
        "answer": "connectedly",
        "explanation": "VNI: liên tục - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1381,
        "family": "courage",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "courage",
          "encourage",
          "courageous",
          "courageously"
        ],
        "answer": "courageously",
        "explanation": "VNI: một cách can đảm - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1382,
        "family": "dark",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "darkness",
          "darken",
          "dark",
          "darkly"
        ],
        "answer": "darkly",
        "explanation": "VNI: một cách tối tăm - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1383,
        "family": "deep",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "depth",
          "deepen",
          "deep",
          "deeply"
        ],
        "answer": "deeply",
        "explanation": "VNI: một cách sâu sắc - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1384,
        "family": "depend",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "dependence",
          "depend",
          "dependent",
          "dependently"
        ],
        "answer": "dependently",
        "explanation": "VNI: một cách phụ thuộc - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1385,
        "family": "describe",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "description",
          "describe",
          "descriptive",
          "descriptively"
        ],
        "answer": "descriptively",
        "explanation": "VNI: bằng cách miêu tả - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1386,
        "family": "differ",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "difference",
          "differ",
          "different",
          "differently"
        ],
        "answer": "differently",
        "explanation": "VNI: một cách khác biệt - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1387,
        "family": "disappoint",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "disappointment",
          "disappoint",
          "disappointing",
          "disappointingly"
        ],
        "answer": "disappointingly",
        "explanation": "VNI: một cách thất vọng - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1388,
        "family": "economy",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "economy",
          "economize",
          "economic",
          "economically"
        ],
        "answer": "economically",
        "explanation": "VNI: về mặt kinh tế - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1389,
        "family": "employ",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "employment",
          "employ",
          "employed",
          "employedly"
        ],
        "answer": "employedly",
        "explanation": "VNI: theo cách thuê mướn - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1390,
        "family": "enjoy",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "enjoyment",
          "enjoy",
          "enjoyable",
          "enjoyably"
        ],
        "answer": "enjoyably",
        "explanation": "VNI: một cách thú vị - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1391,
        "family": "explain",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "explanation",
          "explain",
          "explanatory",
          "explainingly"
        ],
        "answer": "explainingly",
        "explanation": "VNI: bằng cách giải thích - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1392,
        "family": "forget",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "forgetfulness",
          "forget",
          "forgetful",
          "forgetfully"
        ],
        "answer": "forgetfully",
        "explanation": "VNI: một cách đãng trí - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1393,
        "family": "grow",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "growth",
          "grow",
          "growing",
          "growingly"
        ],
        "answer": "growingly",
        "explanation": "VNI: ngày càng tăng - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1394,
        "family": "high",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "height",
          "heighten",
          "high",
          "highly"
        ],
        "answer": "highly",
        "explanation": "VNI: rất nhiều, cao - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1395,
        "family": "imagine",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "imagination",
          "imagine",
          "imaginative",
          "imaginatively"
        ],
        "answer": "imaginatively",
        "explanation": "VNI: một cách tưởng tượng - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      },
      {
        "id": 1396,
        "family": "impress",
        "questionType": "choose-adverb",
        "sentence": "He completed the final exam _____.",
        "options": [
          "impression",
          "impress",
          "impressive",
          "impressively"
        ],
        "answer": "impressively",
        "explanation": "VNI: một cách ấn tượng - Grammar: Cuối câu bổ nghĩa cho động từ thường đã hoàn thành cần một trạng từ."
      },
      {
        "id": 1397,
        "family": "improve",
        "questionType": "choose-adverb",
        "sentence": "The young student answered the question _____.",
        "options": [
          "improvement",
          "improve",
          "improved",
          "improvingly"
        ],
        "answer": "improvingly",
        "explanation": "VNI: một cách cải thiện - Grammar: Sau động từ thường và tân ngữ cần một trạng từ để bổ nghĩa."
      },
      {
        "id": 1398,
        "family": "inform",
        "questionType": "choose-adverb",
        "sentence": "_____ , they won the first prize in the competition.",
        "options": [
          "information",
          "inform",
          "informative",
          "informatively"
        ],
        "answer": "informatively",
        "explanation": "VNI: đầy đủ thông tin - Grammar: Trạng từ đứng ở đầu câu dùng để bổ nghĩa cho cả câu."
      },
      {
        "id": 1399,
        "family": "invent",
        "questionType": "choose-adverb",
        "sentence": "We should listen to the lecture _____.",
        "options": [
          "invention",
          "invent",
          "inventive",
          "inventively"
        ],
        "answer": "inventively",
        "explanation": "VNI: một cách sáng tạo - Grammar: Bổ nghĩa cho cụm động từ thường cần một trạng từ ở cuối."
      },
      {
        "id": 1400,
        "family": "invite",
        "questionType": "choose-adverb",
        "sentence": "She speaks English very _____.",
        "options": [
          "invitation",
          "invite",
          "inviting",
          "invitingly"
        ],
        "answer": "invitingly",
        "explanation": "VNI: một cách hấp dẫn - Grammar: Sau cụm động từ thường và trạng từ chỉ mức độ 'very' cần một trạng từ."
      }
    ]
};
