import { useState, useCallback, useRef } from 'react';

export function useSoundFX() {
  const [enabled, setEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('sound_fx_enabled');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current?.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const toggleSound = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('sound_fx_enabled', String(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  // Subtle 1200Hz tactile click (similar to mechanical trackpad/Apple dial)
  const playClick = useCallback(() => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // AudioContext policy fallback
    }
  }, [enabled, getAudioContext]);

  // Micro-hover tick (ultra-quiet 900Hz blip)
  const playHover = useCallback(() => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(850, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch {
      // ignore
    }
  }, [enabled, getAudioContext]);

  // Success two-tone chime (for copy email, command palette actions)
  const playSuccess = useCallback(() => {
    if (!enabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      [
        { freq: 523.25, time: now },       // C5
        { freq: 659.25, time: now + 0.08 } // E5
      ].forEach(({ freq, time }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);

        gain.gain.setValueAtTime(0.05, time);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + 0.16);
      });
    } catch {
      // ignore
    }
  }, [enabled, getAudioContext]);

  return {
    enabled,
    toggleSound,
    playClick,
    playHover,
    playSuccess,
  };
}
