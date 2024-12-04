const chordIntervals = [
    { name: 'Major', intervals: ['1', '3', '5'] },
    { name: 'Minor', intervals: ['1', 'b3', '5'] },
    { name: 'Diminished', intervals: ['1', 'b3', 'b5'] },
    { name: 'Augmented', intervals: ['1', '3', '#5'] },
    { name: 'Major 6th', intervals: ['1', '3', '5', '6'] },
    { name: 'Minor 6th', intervals: ['1', 'b3', '5', '6'] },
    { name: '7th', intervals: ['1', '3', '5', 'b7'] },
    { name: 'Major 7th', intervals: ['1', '3', '5', '7'] },
    { name: 'Minor 7th', intervals: ['1', 'b3', '5', 'b7'] },
    { name: '7th with b5', intervals: ['1', 'b3', 'b5', 'b7'] },
    { name: '7th with #5', intervals: ['1', '3', '#5', 'b7'] },
    { name: 'Diminished 7th', intervals: ['1', 'b3', 'b5', 'bb7'] },
    { name: '9th', intervals: ['1', '3', '5', 'b7', '9'] },
    { name: '7th with b9', intervals: ['1', '3', '5', 'b7', 'b9'] },
    { name: '7th with #9', intervals: ['1', '3', '5', 'b7', '#9'] },
    { name: 'Major 7th with 9th', intervals: ['1', '3', '5', '7', '9'] },
    { name: '9th with b5', intervals: ['1', 'b3', 'b5', 'b7', '9'] },
    { name: '11th', intervals: ['1', '3', '5', 'b7', '9', '11'] },
    { name: 'Augmented 11th', intervals: ['1', '3', '5', 'b7', '9', '#11'] },
    { name: '13th', intervals: ['1', '3', '5', 'b7', '9', '', '13'] },
    { name: '13th with b9', intervals: ['1', '3', '5', 'b7', 'b9', '', '13'] }
];

const INTERVAL_POSITIONS = ['1', '3', '5', '7', '9', '11', '13'];

function createChordTable() {
    const tableBody = document.getElementById('chordTableBody');
    
    chordIntervals.forEach(chord => {
        const row = document.createElement('tr');
        
        // Add chord name
        const nameCell = document.createElement('td');
        nameCell.textContent = chord.name;
        row.appendChild(nameCell);
        
        // Add intervals
        INTERVAL_POSITIONS.forEach((position, index) => {
            const cell = document.createElement('td');
            cell.textContent = chord.intervals[index] || '';
            row.appendChild(cell);
        });
        
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', createChordTable);