import React from 'react';

interface ChordTableHeaderProps {
  showNotes: boolean;
}

export function ChordTableHeader({ showNotes }: ChordTableHeaderProps) {
  return (
    <tr className="bg-blue-600">
      <th className="px-4 py-2 text-white">Chords</th>
      <th className="px-4 py-2 text-white">1</th>
      <th className="px-4 py-2 text-white">3</th>
      <th className="px-4 py-2 text-white">5</th>
      <th className="px-4 py-2 text-white">7</th>
      <th className="px-4 py-2 text-white">9</th>
      <th className="px-4 py-2 text-white">11</th>
      <th className="px-4 py-2 text-white">13</th>
      {showNotes && (
        <>
          <th className="px-4 py-2 text-white">Notes</th>
          <th className="px-4 py-2 text-white">Play</th>
        </>
      )}
    </tr>
  );
}