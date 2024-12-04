import { useState, useEffect, useCallback, useRef } from 'react';
import * as Tone from 'tone';

interface UsePianoSoundReturn {
  isLoading: boolean;
  isPlaying: boolean;
  playChord: (notes: string[]) => Promise<void>;
}

export function usePianoSound(): UsePianoSoundReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pianoRef = useRef<Tone.Sampler | null>(null);

  useEffect(() => {
    const initPiano = async () => {
      try {
        await Tone.start();
        
        const newPiano = new Tone.Sampler({
          urls: {
            C4: "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            A4: "A4.mp3",
          },
          release: 1,
          baseUrl: "https://tonejs.github.io/audio/salamander/",
          onload: () => setIsLoading(false)
        }).toDestination();

        pianoRef.current = newPiano;
      } catch (error) {
        console.error('Error initializing piano:', error);
        setIsLoading(false);
      }
    };

    initPiano();

    return () => {
      if (pianoRef.current) {
        pianoRef.current.dispose();
      }
    };
  }, []);

  const playChord = useCallback(async (notes: string[]) => {
    if (isPlaying || !pianoRef.current || isLoading || !notes.length) return;

    try {
      setIsPlaying(true);
      const formattedNotes = notes.map(note => `${note}4`);
      pianoRef.current.triggerAttackRelease(formattedNotes, "2n", undefined, 0.5);

      // Wait for the sound to finish before allowing another play
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error playing chord:', error);
    } finally {
      setIsPlaying(false);
    }
  }, [isPlaying, isLoading]);

  return { isLoading, isPlaying, playChord };
}