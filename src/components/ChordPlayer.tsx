import React from 'react';
import { usePianoSound } from '../hooks/usePianoSound';

interface ChordPlayerProps {
  notes: string[];
}

export function ChordPlayer({ notes }: ChordPlayerProps) {
  const { isLoading, isPlaying, playChord } = usePianoSound();

  return (
    <button
      onClick={() => playChord(notes)}
      disabled={isPlaying || isLoading}
      className={`p-2 rounded-full transition-colors ${
        isPlaying || isLoading
          ? 'bg-gray-300 cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
      title="Play chord"
    >
      {isLoading ? (
        <LoadingIcon />
      ) : isPlaying ? (
        <PauseIcon />
      ) : (
        <PlayIcon />
      )}
    </button>
  );
}

function LoadingIcon() {
  return (
    <svg className="h-5 w-5 text-gray-600 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );
}