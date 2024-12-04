import React from 'react';
import { getNoteFromInterval } from '../utils/noteUtils';
import { ChordPlayer } from './ChordPlayer';
import { chordIntervals } from '../data/chordData';

interface ChordTableProps {
  selectedKey: string | null;
}

export function ChordTable({ selectedKey }: ChordTableProps) {
  const getChordNotes = (intervals: string[]): string[] => {
    if (!selectedKey) return [];
    return intervals
      .filter(interval => interval)
      .map(interval => getNoteFromInterval(selectedKey, interval));
  };

  const getIntervalPosition = (chord: typeof chordIntervals[0], colIndex: number) => {
    const interval = chord.intervals[colIndex];
    // Place 2 and 4 in the "3" column since they replace the third
    if ((interval === '2' || interval === '4') && colIndex === 1) {
      return interval;
    }
    return interval || '';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-600">
            <th className="px-4 py-2 text-white">Chords</th>
            <th className="px-4 py-2 text-white">1</th>
            <th className="px-4 py-2 text-white">3</th>
            <th className="px-4 py-2 text-white">5</th>
            <th className="px-4 py-2 text-white">7</th>
            <th className="px-4 py-2 text-white">9</th>
            <th className="px-4 py-2 text-white">11</th>
            <th className="px-4 py-2 text-white">13</th>
            {selectedKey && (
              <>
                <th className="px-4 py-2 text-white">Notes</th>
                <th className="px-4 py-2 text-white">Play</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {chordIntervals.map((chord, index) => {
            const chordNotes = getChordNotes(chord.intervals);
            return (
              <tr key={chord.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border px-4 py-2 font-medium text-gray-800">{chord.name}</td>
                {['1', '3', '5', '7', '9', '11', '13'].map((_, colIndex) => (
                  <td key={colIndex} className="border px-4 py-2 text-center text-gray-700">
                    {getIntervalPosition(chord, colIndex)}
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
          })}
        </tbody>
      </table>
    </div>
  );
}