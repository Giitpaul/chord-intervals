export const noteToLatin: { [key: string]: string } = {
  'C': 'Do',
  'C#': 'Do#',
  'D': 'Ré',
  'D#': 'Ré#',
  'E': 'Mi',
  'F': 'Fa',
  'F#': 'Fa#',
  'G': 'Sol',
  'G#': 'Sol#',
  'A': 'La',
  'A#': 'La#',
  'B': 'Si'
};

export function convertToLatin(note: string): string {
  return noteToLatin[note] || note;
}