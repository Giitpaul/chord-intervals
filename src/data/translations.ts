import type { Translation } from '../types';

export const translations: Record<'en' | 'fr', Translation> = {
  en: {
    chordNames: {
      'Major': 'Major',
      'Minor': 'Minor',
      'Diminished': 'Diminished',
      'Augmented': 'Augmented',
      'Sus2': 'Sus2',
      'Sus4': 'Sus4',
      'Major 6th': 'Major 6th',
      'Minor 6th': 'Minor 6th',
      '7th': '7th',
      'Major 7th': 'Major 7th',
      'Minor 7th': 'Minor 7th',
      '7th with b5': '7th with b5',
      '7th with #5': '7th with #5',
      'Diminished 7th': 'Diminished 7th',
      '9th': '9th',
      '7th with b9': '7th with b9',
      '7th with #9': '7th with #9',
      'Major 7th with 9th': 'Major 7th with 9th',
      '9th with b5': '9th with b5',
      '11th': '11th',
      'Augmented 11th': 'Augmented 11th',
      '13th': '13th',
      '13th with b9': '13th with b9'
    },
    tableHeaders: {
      chords: 'Chords',
      notes: 'Notes',
      play: 'Play'
    },
    keySelector: {
      label: 'Select Key',
      placeholder: 'Choose a key...'
    }
  },
  fr: {
    chordNames: {
      'Major': 'Majeur',
      'Minor': 'Mineur',
      'Diminished': 'Diminué',
      'Augmented': 'Augmenté',
      'Sus2': 'Sus2',
      'Sus4': 'Sus4',
      'Major 6th': 'Majeur 6',
      'Minor 6th': 'Mineur 6',
      '7th': '7',
      'Major 7th': 'Majeur 7',
      'Minor 7th': 'Mineur 7',
      '7th with b5': '7 avec b5',
      '7th with #5': '7 avec #5',
      'Diminished 7th': 'Diminué 7',
      '9th': '9',
      '7th with b9': '7 avec b9',
      '7th with #9': '7 avec #9',
      'Major 7th with 9th': 'Majeur 7 avec 9',
      '9th with b5': '9 avec b5',
      '11th': '11',
      'Augmented 11th': 'Augmenté 11',
      '13th': '13',
      '13th with b9': '13 avec b9'
    },
    tableHeaders: {
      chords: 'Accords',
      notes: 'Notes',
      play: 'Jouer'
    },
    keySelector: {
      label: 'Sélectionner la tonalité',
      placeholder: 'Choisir une tonalité...'
    }
  }
};