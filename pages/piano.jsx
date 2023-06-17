import React, { useEffect, useState } from "react";
import * as Tone from 'tone';

const notes = [
  { note: "C", octave: 4, frequency: 261.63 },
  { note: "C#", octave: 4, frequency: 277.18 },
  { note: "D", octave: 4, frequency: 293.66 },
  { note: "D#", octave: 4, frequency: 311.13 },
  { note: "E", octave: 4, frequency: 329.63 },
  { note: "F", octave: 4, frequency: 349.23 },
  { note: "F#", octave: 4, frequency: 369.99 },
  { note: "G", octave: 4, frequency: 392.00 },
  { note: "G#", octave: 4, frequency: 415.30 },
  { note: "A", octave: 4, frequency: 440.00 },
  { note: "A#", octave: 4, frequency: 466.16 },
  { note: "B", octave: 4, frequency: 493.88 }
];

const keyWidth = 60; // The width of each key in pixels.

const Piano = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  // This function will run whenever the window is resized.
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!windowWidth) {
    return null;
  }

  const numberOfKeys = Math.floor(windowWidth / keyWidth);
  const keys = new Array(numberOfKeys)
    .fill([...notes])
    .flat()
    .slice(0, numberOfKeys);

  // Tone.js part
  const synth = new Tone.Synth().toDestination();

  const playNote = (frequency) => {
    synth.triggerAttackRelease(frequency, "8n");
  };

  return (
    <div className="piano">
      {keys.map((key, idx) => (
        <div
          key={idx}
          onMouseDown={() => playNote(key.frequency)}
          className={`key ${key.note.includes("#") ? "black" : "white"}`}
        >
          {key.note}
        </div>
      ))}
    </div>
  );
};

export default Piano;
