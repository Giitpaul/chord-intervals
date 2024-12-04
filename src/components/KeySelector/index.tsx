import { NOTES, type Note } from '../../data/notes';

interface KeySelectorProps {
  selectedKey: Note | null;
  onKeyChange: (key: Note | null) => void;
}

export function KeySelector({ selectedKey, onKeyChange }: KeySelectorProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <label htmlFor="keySelect" className="font-medium text-gray-700">
        Select Key:
      </label>
      <select
        id="keySelect"
        value={selectedKey || ''}
        onChange={(e) => onKeyChange(e.target.value as Note || null)}
        className="rounded border border-gray-300 px-3 py-1.5 focus:border-blue-500 focus:outline-none"
      >
        <option value="">Choose a key...</option>
        {NOTES.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
    </div>
  );
}