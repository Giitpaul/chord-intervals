import React from 'react';
import { ChordPlayer } from '../ChordPlayer';
import type { ChordInterval } from '../../types';

interface ChordTableRowProps {
  chord: ChordInterval;
  index: number;
  selectedKey: string | null;
  chordNotes: string[];
}

export function ChordTableRow({ chord, index, selectedKey, chordNotes }: ChordTableRowProps) {
  const getIntervalPosition = (colIndex: number) => {
    const interval = chord.intervals[colIndex];
    // Place 2 and 4 in the "3" column since they replace the third
    if ((interval === '2' || interval === '4') && colIndex === 1) {
      return interval;
    }
    return interval || '';
  };

  return (
    <tr className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
      <td className="border px-4 py-2 font-medium text-gray-800">
        {chord.name}
      </td>
      {['1', '3', '5', '7', '9', '11', '13'].map((_, colIndex) => (
        <td key={colIndex} className="border px-4 py-2 text-center text-gray-700">
          {getIntervalPosition(colIndex)}
        </td>
      ))}
      {selectedKey && (
        <>
          <td className="border px-4 py-2 text-center text-gray-700">
            {chordNotes.join(' - ')}
          </td>
          <td className="border px-4 py-2 text-center">
            <ChordPlayer notes={chordNotes} />
          </td>
        </>
      )}
    </tr>
  );
}