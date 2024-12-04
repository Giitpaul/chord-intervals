export const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;
export type Note = typeof NOTES[number];

const INTERVALS_TO_SEMITONES: Record<string, number> = {
  '1': 0,
  '2': 2,
  '3': 4,
  '4': 5,
  '5': 7,
  '6': 9,
  '7': 11,
  '9': 14,
  '11': 17,
  '13': 21,
};

export function getNoteFromInterval(rootNote: Note, interval: string): Note {
  const rootIndex = NOTES.indexOf(rootNote);
  let semitones = INTERVALS_TO_SEMITONES[interval.replace(/[b#]/, '')] || 0;

  // Adjust for flats and sharps
  if (interval.startsWith('b')) semitones--;
  if (interval.startsWith('#')) semitones++;
  if (interval.startsWith('bb')) semitones -= 2;

  // Calculate the new note index
  let noteIndex = (rootIndex + semitones) % 12;
  if (noteIndex < 0) noteIndex += 12;

  return NOTES[noteIndex];
}