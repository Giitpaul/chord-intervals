import type { Language } from '../types';
import { FrenchFlag, BritishFlag } from './icons';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex gap-4 mb-4">
      <button
        onClick={() => onLanguageChange('fr')}
        className={`flex items-center gap-2 px-4 py-2 rounded ${
          currentLanguage === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        <FrenchFlag /> Français
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`flex items-center gap-2 px-4 py-2 rounded ${
          currentLanguage === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        <BritishFlag /> English
      </button>
    </div>
  );
}