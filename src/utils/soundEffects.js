// Web Audio API Synthesized Sound Effects
// No external mp3 files required, works 100% offline & instantaneously

let audioCtx = null;
let isAudioMuted = false;

// Initialize or resume AudioContext on first user interaction
function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const getMutedState = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('soham_portfolio_muted') === 'true';
};

export const setMutedState = (muted) => {
  isAudioMuted = muted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('soham_portfolio_muted', muted ? 'true' : 'false');
  }
};

// Web-Shooter "THWIP!" synthetic sound
export const playThwipSound = () => {
  if (getMutedState()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.14);

    // Rapid pitch sweep downwards
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.14);

    // Envelope
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.16);
  } catch (e) {
    console.debug('Audio not allowed yet:', e);
  }
};

// Spider-Sense tingling chime
export const playSpiderSenseSound = () => {
  if (getMutedState()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    [440, 659.25, 880].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.05);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.05 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.05 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.05);
      osc.stop(ctx.currentTime + i * 0.05 + 0.38);
    });
  } catch (e) {
    console.debug('Spider sense audio failed:', e);
  }
};

// Clean UI Click Sound
export const playClickSound = () => {
  if (getMutedState()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {
    // Ignore audio restrictions
  }
};
