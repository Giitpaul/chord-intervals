import type { Note } from '../data/notes';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { noteToLatin } from '../data/latinNotes';

export function formatChordNotes(notes: Note[], language: Language): string {
  const formatNote = language === 'fr' ? (note: Note) => noteToLatin[note] || note : (note: Note) => note;
  return notes.filter(Boolean).map(formatNote).join(' - ');
}

export function getChordDisplayName(chordName: string, language: Language): string {
  return translations[language].chordNames[chordName] || chordName;
}