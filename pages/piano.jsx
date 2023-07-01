import React, { useEffect, useState } from "react";
import * as Tone from 'tone';

const notes = [
  { note: "C", frequency: 261.63 },
  { note: "C#", frequency: 277.18 },
  { note: "D", frequency: 293.66 },
  { note: "D#", frequency: 311.13 },
  { note: "E", frequency: 329.63 },
  { note: "F", frequency: 349.23 },
  { note: "F#", frequency: 369.99 },
  { note: "G", frequency: 392.00 },
  { note: "G#", frequency: 415.30 },
  { note: "A", frequency: 440.00 },
  { note: "A#", frequency: 466.16 },
  { note: "B", frequency: 493.88 }
];

const keyWidth = 60;

const Piano = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const playNote = (frequency) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(frequency, "8n");
  };

  const numberOfKeys = windowWidth ? Math.floor(windowWidth / keyWidth) : 12;
  const octaves = new Array(Math.ceil(numberOfKeys / 12)).fill([...notes]).flat();

  return (
    <div className="piano">
      {octaves.map((item, idx) => {
        const isBlack = item.note.includes("#");
        const isActive = activeNote === `${item.note}${idx}`;
        const frequency = item.frequency * (Math.floor(idx / 12) + 1);

        return (
          <div
            key={idx}
            onPointerDown={() => {
              playNote(frequency);
              setActiveNote(`${item.note}${idx}`);
            }}
            onPointerUp={() => setActiveNote(null)}
            className={`key ${isBlack ? 'black' : 'white'} ${isActive ? 'active' : ''}`}
          >
            {item.note}
          </div>

        );
      })}
    </div>
  );
};

export default Piano;
