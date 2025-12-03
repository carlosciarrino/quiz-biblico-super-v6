import { useCallback, useRef } from 'react';

type SoundType = 'correct' | 'incorrect' | 'complete' | 'click';

// Simple tone frequencies for different sounds
const SOUNDS: Record<SoundType, { frequency: number; duration: number; type: OscillatorType }[]> = {
  correct: [
    { frequency: 523.25, duration: 0.1, type: 'sine' },  // C5
    { frequency: 659.25, duration: 0.1, type: 'sine' },  // E5
    { frequency: 783.99, duration: 0.15, type: 'sine' }, // G5
  ],
  incorrect: [
    { frequency: 311.13, duration: 0.15, type: 'sine' }, // Eb4
    { frequency: 277.18, duration: 0.2, type: 'sine' },  // Db4
  ],
  complete: [
    { frequency: 523.25, duration: 0.1, type: 'sine' },
    { frequency: 659.25, duration: 0.1, type: 'sine' },
    { frequency: 783.99, duration: 0.1, type: 'sine' },
    { frequency: 1046.50, duration: 0.2, type: 'sine' },
  ],
  click: [
    { frequency: 800, duration: 0.05, type: 'sine' },
  ],
};

export const useSoundEffects = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playSound = useCallback((type: SoundType) => {
    try {
      const audioContext = getAudioContext();
      const sounds = SOUNDS[type];
      let startTime = audioContext.currentTime;

      sounds.forEach((sound) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = sound.type;
        oscillator.frequency.setValueAtTime(sound.frequency, startTime);

        gainNode.gain.setValueAtTime(0.3, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + sound.duration);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + sound.duration);

        startTime += sound.duration * 0.8;
      });
    } catch (error) {
      // Silently fail if audio is not available
      console.warn('Audio not available:', error);
    }
  }, [getAudioContext]);

  const playCorrect = useCallback(() => playSound('correct'), [playSound]);
  const playIncorrect = useCallback(() => playSound('incorrect'), [playSound]);
  const playComplete = useCallback(() => playSound('complete'), [playSound]);
  const playClick = useCallback(() => playSound('click'), [playSound]);

  return {
    playCorrect,
    playIncorrect,
    playComplete,
    playClick,
  };
};
