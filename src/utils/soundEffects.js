// ==========================================================================
// PROCEDURAL AUDIO SYNTHESIZER (Web Audio API - No External Audio Files)
// ==========================================================================

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.ambientOsc1 = null;
    this.ambientOsc2 = null;
    this.ambientGain = null;
    this.isAmbientPlaying = false;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }
    return this.isMuted;
  }

  startAmbient() {
    if (this.isMuted || this.isAmbientPlaying) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      // Tanpura/Singing Bowl Warm Drone (C# / G# resonant frequencies)
      this.ambientGain = this.audioCtx.createGain();
      this.ambientGain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);

      this.ambientOsc1 = this.audioCtx.createOscillator();
      this.ambientOsc2 = this.audioCtx.createOscillator();

      // Frequencies corresponding to peaceful Indian meditative tones (136.1 Hz - Om Frequency)
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(136.1, this.audioCtx.currentTime);

      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(204.15, this.audioCtx.currentTime); // Perfect fifth harmonic

      // Filter for warm soft ambient feel
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, this.audioCtx.currentTime);

      this.ambientOsc1.connect(this.ambientGain);
      this.ambientOsc2.connect(this.ambientGain);
      this.ambientGain.connect(filter);
      filter.connect(this.audioCtx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
      this.isAmbientPlaying = true;
    } catch (err) {
      console.warn('Audio ambient synthesis warning:', err);
    }
  }

  stopAmbient() {
    if (this.ambientOsc1) {
      try { this.ambientOsc1.stop(); } catch(e) {}
      this.ambientOsc1 = null;
    }
    if (this.ambientOsc2) {
      try { this.ambientOsc2.stop(); } catch(e) {}
      this.ambientOsc2 = null;
    }
    this.isAmbientPlaying = false;
  }

  // Crisp Temple Chime on Card Flip
  playCardFlipSFX() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5 note
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.15); // Pentatonic sweep up

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn('SFX error:', e);
    }
  }

  // Soft Wooden Card Shuffle SFX
  playShuffleSFX() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;
      // White noise burst filtered for card paper rustle
      const bufferSize = this.audioCtx.sampleRate * 0.15;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(1.5, now);

      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      whiteNoise.start(now);
    } catch (e) {
      console.warn('Shuffle SFX error:', e);
    }
  }
}

export const soundFx = new SoundManager();
