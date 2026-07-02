/**
 * Audio Module
 * Generates all game sounds programmatically using the Web Audio API.
 * Enhanced with richer sounds: background melody, drums, power-ups, etc.
 * No external MP3 files are needed.
 */
class AudioManager {
  constructor() {
    /** @type {AudioContext|null} */
    this.ctx = null;
    /** Whether audio has been initialized (user gesture required) */
    this.initialized = false;
    /** Master volume (0.0 - 1.0) — set to 0.6 for louder sound */
    this.volume = 2.5;
    /** Master gain node for all sounds */
    this.masterGain = null;
  }

  /**
   * Initialize AudioContext.
   * Must be called from a user gesture (click/touch) due to browser autoplay policy.
   * @returns {AudioContext}
   */
  init() {
    if (this.initialized && this.ctx) return this.ctx;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported:', e.message);
      this.ctx = null;
    }
    return this.ctx;
  }

  /**
   * Resume AudioContext if suspended (autoplay policy).
   */
  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(e => console.warn('Audio resume failed:', e));
    }
  }

  /**
   * Create a gain node for volume control.
   * @param {number} gainValue - The gain level (0-1)
   * @returns {GainNode}
   */
  _createGain(gainValue) {
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
    return gain;
  }

  /**
   * Play a tone with given parameters.
   * @param {number} frequency - Hz
   * @param {string} type - Oscillator type (sine, square, sawtooth, triangle)
   * @param {number} duration - Seconds
   * @param {number} gainValue - Volume 0-1
   * @param {number} [delay=0] - Delay before starting
   * @param {number} [detune=0] - Detune in cents
   */
  _playTone(frequency, type, duration, gainValue, delay = 0, detune = 0) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime + delay);
    if (detune) osc.detune.setValueAtTime(detune, this.ctx.currentTime + delay);

    // Envelope: fade in/out to avoid clicks
    gain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(gainValue, this.ctx.currentTime + delay + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration + 0.05);
  }

  /**
   * Play a chord (multiple tones at once).
   * @param {Array} freqs - Array of frequencies
   * @param {string} type - Oscillator type
   * @param {number} duration - Seconds
   * @param {number} gain - Volume
   * @param {number} delay - Delay
   */
  _playChord(freqs, type, duration, gain, delay = 0) {
    freqs.forEach((freq, i) => {
      this._playTone(freq, type, duration, gain / freqs.length, delay, i * 5);
    });
  }

  /**
   * Play sequential notes (arpeggio).
   * @param {Array} notes - Array of {freq, duration, type?, gain?}
   * @param {number} baseDelay - Starting delay
   */
  _playArpeggio(notes, baseDelay = 0) {
    let time = baseDelay;
    notes.forEach(note => {
      this._playTone(note.freq, note.type || 'sine', note.duration || 0.1, note.gain || 0.3, time, note.detune || 0);
      time += note.duration || 0.1;
    });
  }

  /**
   * Play a drum/percussion sound.
   * @param {number} freq - Base frequency
   * @param {number} duration - Length of sound
   * @param {number} gain - Volume
   * @param {number} delay - Delay
   */
  _playDrum(freq, duration, gain, delay = 0) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
    osc.frequency.exponentialRampToValueAtTime(20, this.ctx.currentTime + delay + duration);

    gainNode.gain.setValueAtTime(gain, this.ctx.currentTime + delay);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

    osc.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration + 0.05);
  }

  /**
   * Play a short sweep (for power-ups, combos).
   * @param {number} startFreq - Start frequency
   * @param {number} endFreq - End frequency  
   * @param {number} duration - Length
   * @param {number} gain - Volume
   * @param {string} type - Wave type
   */
  _playSweep(startFreq, endFreq, duration, gain, type = 'sine', delay = 0) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime + delay);
    osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + delay + duration);

    gainNode.gain.setValueAtTime(gain, this.ctx.currentTime + delay);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

    osc.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration + 0.05);
  }

  // ==========================================================
  // PUBLIC SOUND EFFECTS
  // ==========================================================

  /**
   * Correct answer sound - cheerful ascending arpeggio + drum hit.
   */
  playCorrect() {
    this.resume();
    this._playDrum(150, 0.15, 0.3);
    this._playArpeggio([
      { freq: 523.25, duration: 0.12, type: 'sine', gain: 0.3 },
      { freq: 659.25, duration: 0.12, type: 'sine', gain: 0.3 },
      { freq: 783.99, duration: 0.08, type: 'sine', gain: 0.3 },
      { freq: 1046.50, duration: 0.2, type: 'sine', gain: 0.35 },
    ], 0.05);
  }

  /**
   * Wrong answer sound - descending buzz + low drum.
   */
  playWrong() {
    this.resume();
    this._playDrum(80, 0.3, 0.25);
    this._playSweep(400, 120, 0.3, 0.2, 'sawtooth');
  }

  /**
   * Combo milestone sound - exciting power-up sweep.
   * @param {number} combo - 5, 10, or 20
   */
  playCombo(combo) {
    this.resume();
    this._playDrum(200, 0.2, 0.35);
    
    if (combo >= 20) {
      // Epic sweep for PERFECT
      this._playSweep(300, 1200, 0.4, 0.3, 'square');
      this._playChord([523, 659, 784, 1047], 'sine', 0.5, 0.4, 0.1);
    } else if (combo >= 10) {
      // Medium sweep for AWESOME
      this._playSweep(400, 1000, 0.3, 0.3, 'triangle');
      this._playChord([523, 659, 784], 'sine', 0.4, 0.35, 0.05);
    } else {
      // Short sweep for GREAT
      this._playSweep(500, 800, 0.2, 0.3, 'triangle');
      this._playChord([523, 659], 'sine', 0.3, 0.3);
    }
  }

  /**
   * Boss hit sound - heavy impact.
   */
  playBossHit() {
    this.resume();
    this._playDrum(60, 0.4, 0.5);
    this._playTone(80, 'sawtooth', 0.3, 0.3, 0.05);
    this._playSweep(200, 60, 0.3, 0.3, 'square', 0.1);
  }

  /**
   * Level up fanfare - triumphant.
   */
  playLevelUp() {
    this.resume();
    this._playDrum(180, 0.3, 0.4);
    this._playArpeggio([
      { freq: 523.25, duration: 0.15, type: 'sine', gain: 0.3 },
      { freq: 659.25, duration: 0.15, type: 'sine', gain: 0.3 },
      { freq: 783.99, duration: 0.15, type: 'sine', gain: 0.3 },
      { freq: 1046.50, duration: 0.3, type: 'sine', gain: 0.35 },
    ]);
    this._playChord([1047, 1319, 1568], 'sine', 0.5, 0.25, 0.5);
  }

  /**
   * Victory jingle - epic boss defeat.
   */
  playVictory() {
    this.resume();
    this._playDrum(250, 0.5, 0.5);
    this._playChord([392, 494, 587, 784], 'sine', 0.6, 0.4);
    setTimeout(() => {
      this._playChord([523, 659, 784, 1047], 'sine', 0.8, 0.45);
    }, 300);
    setTimeout(() => {
      this._playDrum(100, 0.6, 0.4);
    }, 600);
  }

  /**
   * Button click feedback.
   */
  playClick() {
    this.resume();
    this._playTone(1000, 'sine', 0.04, 0.15);
    this._playDrum(300, 0.05, 0.1);
  }

  /**
   * Heart loss sound - sad descending tone.
   */
  playHeartLoss() {
    this.resume();
    this._playSweep(300, 100, 0.4, 0.25, 'square');
    this._playDrum(50, 0.4, 0.3);
  }

  /**
   * Game over sound - dramatic fall.
   */
  playGameOver() {
    this.resume();
    this._playSweep(500, 50, 1.0, 0.3, 'sawtooth');
    this._playDrum(40, 0.8, 0.4);
  }

  /**
   * Level select sound.
   */
  playLevelSelect() {
    this.resume();
    this._playArpeggio([
      { freq: 440, duration: 0.08, type: 'triangle', gain: 0.25 },
      { freq: 554, duration: 0.08, type: 'triangle', gain: 0.25 },
      { freq: 659, duration: 0.12, type: 'triangle', gain: 0.25 },
    ]);
  }

  /**
   * User switch sound.
   */
  playUserSwitch() {
    this.resume();
    this._playArpeggio([
      { freq: 350, duration: 0.06, type: 'sine', gain: 0.2 },
      { freq: 440, duration: 0.06, type: 'sine', gain: 0.2 },
      { freq: 523, duration: 0.1, type: 'sine', gain: 0.25 },
    ]);
  }

  // ==========================================================
  // TEXT-TO-SPEECH (Pronunciation)
  // ==========================================================

  /**
   * Speak a word using the Web Speech API (browser TTS).
   * Uses an English voice (en-US) if available.
   * @param {string} word - The word to pronounce
   */
  speakWord(word) {
    if (!window.speechSynthesis) {
      console.warn('SpeechSynthesis API not supported in this browser.');
      return;
    }

    // Cancel any ongoing speech to avoid overlapping
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;      // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to find an English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    // Resume audio context in case it was suspended
    this.resume();

    window.speechSynthesis.speak(utterance);
  }
}
