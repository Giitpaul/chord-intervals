import React from 'react';
import { getNoteFromInterval } from '../../utils/noteUtils';
import { chordIntervals } from '../../data/chordData';
import { ChordTableHeader } from './ChordTableHeader';
import { ChordTableRow } from './ChordTableRow';

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

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <ChordTableHeader showNotes={!!selectedKey} />
        </thead>
        <tbody>
          {chordIntervals.map((chord, index) => (
            <ChordTableRow
              key={chord.name}
              chord={chord}
              index={index}
              selectedKey={selectedKey}
              chordNotes={getChordNotes(chord.intervals)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}