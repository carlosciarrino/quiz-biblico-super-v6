import { useCallback, useRef } from 'react';

type SoundType = 'correct' | 'incorrect' | 'complete' | 'click';
type CategorySound = 'bells' | 'harp' | 'choir' | 'organ' | 'trumpet' | 'shofar';

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

// Biblical category sound configurations
const CATEGORY_SOUNDS: Record<CategorySound, { frequencies: number[]; duration: number; type: OscillatorType; envelope: 'bell' | 'harp' | 'choir' | 'organ' | 'brass' }> = {
  bells: {
    frequencies: [523.25, 659.25, 783.99, 1046.50], // C major chord
    duration: 1.2,
    type: 'sine',
    envelope: 'bell',
  },
  harp: {
    frequencies: [261.63, 329.63, 392.00, 523.25, 659.25], // Arpeggiated C major
    duration: 1.5,
    type: 'triangle',
    envelope: 'harp',
  },
  choir: {
    frequencies: [220, 277.18, 329.63, 440], // A minor harmony
    duration: 2.0,
    type: 'sine',
    envelope: 'choir',
  },
  organ: {
    frequencies: [130.81, 261.63, 392.00, 523.25], // C with octaves
    duration: 1.8,
    type: 'sawtooth',
    envelope: 'organ',
  },
  trumpet: {
    frequencies: [392.00, 493.88, 587.33, 783.99], // G major fanfare
    duration: 0.8,
    type: 'square',
    envelope: 'brass',
  },
  shofar: {
    frequencies: [220, 293.66, 349.23], // Ancient horn sound
    duration: 1.5,
    type: 'sawtooth',
    envelope: 'brass',
  },
};

// Map categories to sounds
const CATEGORY_SOUND_MAP: Record<string, CategorySound> = {
  oldTestament: 'shofar',
  newTestament: 'choir',
  biblicalCharacters: 'harp',
  pentateuch: 'shofar',
  minorProphets: 'trumpet',
  fourGospels: 'choir',
  paulineLetters: 'organ',
  wisdomLiterature: 'harp',
  actsApostles: 'bells',
  revelation: 'trumpet',
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
      console.warn('Audio not available:', error);
    }
  }, [getAudioContext]);

  const playCategorySound = useCallback((categoryKey: string) => {
    try {
      const audioContext = getAudioContext();
      const soundType = CATEGORY_SOUND_MAP[categoryKey] || 'bells';
      const config = CATEGORY_SOUNDS[soundType];
      const startTime = audioContext.currentTime;

      config.frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filterNode = audioContext.createBiquadFilter();

        oscillator.type = config.type;
        oscillator.frequency.setValueAtTime(freq, startTime);

        // Add slight vibrato for choir
        if (config.envelope === 'choir') {
          const vibrato = audioContext.createOscillator();
          const vibratoGain = audioContext.createGain();
          vibrato.frequency.value = 5;
          vibratoGain.gain.value = 3;
          vibrato.connect(vibratoGain);
          vibratoGain.connect(oscillator.frequency);
          vibrato.start(startTime);
          vibrato.stop(startTime + config.duration);
        }

        // Configure filter for warmth
        filterNode.type = 'lowpass';
        filterNode.frequency.value = 2000;
        filterNode.Q.value = 1;

        // Apply envelope based on sound type
        const noteStart = startTime + (config.envelope === 'harp' ? index * 0.12 : 0);
        const noteEnd = noteStart + config.duration;

        switch (config.envelope) {
          case 'bell':
            gainNode.gain.setValueAtTime(0, noteStart);
            gainNode.gain.linearRampToValueAtTime(0.2, noteStart + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.01, noteEnd);
            break;
          case 'harp':
            gainNode.gain.setValueAtTime(0, noteStart);
            gainNode.gain.linearRampToValueAtTime(0.25, noteStart + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.01, noteEnd);
            break;
          case 'choir':
            gainNode.gain.setValueAtTime(0, noteStart);
            gainNode.gain.linearRampToValueAtTime(0.15, noteStart + 0.3);
            gainNode.gain.setValueAtTime(0.15, noteEnd - 0.4);
            gainNode.gain.linearRampToValueAtTime(0.01, noteEnd);
            break;
          case 'organ':
            gainNode.gain.setValueAtTime(0, noteStart);
            gainNode.gain.linearRampToValueAtTime(0.12, noteStart + 0.1);
            gainNode.gain.setValueAtTime(0.12, noteEnd - 0.2);
            gainNode.gain.linearRampToValueAtTime(0.01, noteEnd);
            break;
          case 'brass':
            gainNode.gain.setValueAtTime(0, noteStart);
            gainNode.gain.linearRampToValueAtTime(0.25, noteStart + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, noteEnd);
            break;
        }

        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(noteStart);
        oscillator.stop(noteEnd + 0.1);
      });
    } catch (error) {
      console.warn('Category audio not available:', error);
    }
  }, [getAudioContext]);

  const playCorrect = useCallback(() => playSound('correct'), [playSound]);
  const playIncorrect = useCallback(() => playSound('incorrect'), [playSound]);
  const playComplete = useCallback(() => playSound('complete'), [playSound]);
  const playClick = useCallback(() => playSound('click'), [playSound]);

  // Biblical category sounds
  const playBells = useCallback(() => playCategorySound('actsApostles'), [playCategorySound]);
  const playHarp = useCallback(() => playCategorySound('wisdomLiterature'), [playCategorySound]);
  const playChoir = useCallback(() => playCategorySound('fourGospels'), [playCategorySound]);
  const playOrgan = useCallback(() => playCategorySound('paulineLetters'), [playCategorySound]);
  const playTrumpet = useCallback(() => playCategorySound('revelation'), [playCategorySound]);
  const playShofar = useCallback(() => playCategorySound('oldTestament'), [playCategorySound]);

  return {
    playCorrect,
    playIncorrect,
    playComplete,
    playClick,
    // Biblical sounds
    playBells,
    playHarp,
    playChoir,
    playOrgan,
    playTrumpet,
    playShofar,
    playCategorySound,
  };
};
