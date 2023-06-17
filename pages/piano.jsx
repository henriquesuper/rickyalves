import { useEffect, useState } from 'react';

const notes = [
  { note: 'C', color: 'white' },
  { note: 'C#', color: 'black' },
  { note: 'D', color: 'white' },
  { note: 'D#', color: 'black' },
  { note: 'E', color: 'white' },
  { note: 'F', color: 'white' },
  { note: 'F#', color: 'black' },
  { note: 'G', color: 'white' },
  { note: 'G#', color: 'black' },
  { note: 'A', color: 'white' },
  { note: 'A#', color: 'black' },
  { note: 'B', color: 'white' },
];

function Piano() {
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    setAudioContext(new (window.AudioContext || window.webkitAudioContext)());
  }, []);

  const playNote = (frequency) => {
    const oscillator = audioContext.createOscillator();

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(audioContext.destination);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const calculateFrequency = (noteIndex) => {
    const middleA = 440;
    return middleA * Math.pow(2, (noteIndex - 9) / 12);
  };

  return (
    <div className="piano">
      {notes.map((noteObj, index) => (
        <button
          className={`key ${noteObj.color === 'black' ? 'black' : ''}`}
          key={noteObj.note}
          onClick={() => playNote(calculateFrequency(index))}
        >
          {noteObj.note}
        </button>
      ))}
    </div>
  );
}

export default Piano;
