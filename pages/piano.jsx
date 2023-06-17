import { useEffect, useState } from 'react';

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C#', 'D#', 'F#', 'G#', 'A#'];

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
    <div>
      {notes.map((note, index) => (
        <button key={note} onClick={() => playNote(calculateFrequency(index))}>
          {note}
        </button>
      ))}
    </div>
  );
}

export default Piano;
