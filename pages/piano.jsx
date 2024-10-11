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

const keyWidth = 40;

const Piano = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [activeNotes, setActiveNotes] = useState(new Set());
  const [sampler, setSampler] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    // Initialize the Sampler with piano samples
    const newSampler = new Tone.Sampler({
      urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    setSampler(newSampler);

    return () => {
      if (newSampler) {
        newSampler.dispose();
      }
    };
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

  const playNote = (note) => {
    if (sampler && sampler.loaded) {
      sampler.triggerAttackRelease(note, "8n");
    }
  };

  const numberOfKeys = windowWidth ? Math.floor(windowWidth / keyWidth) : 12;
  const fullOctaves = Math.floor(numberOfKeys / 12);
  const remainingKeys = numberOfKeys % 12;
  
  const octaves = [
    ...new Array(fullOctaves).fill([...notes]).flat(),
    ...notes.slice(0, remainingKeys + 1)
  ];

  return (
    <div className="piano">
      {octaves.map((item, idx) => {
        const isBlack = item.note.includes("#");
        const octave = Math.floor(idx / 12) + 4;
        const noteWithOctave = `${item.note}${octave}`;
        const isActive = activeNotes.has(noteWithOctave);

        return (
          <div
            key={idx}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId);
              playNote(noteWithOctave);
              setActiveNotes(prev => new Set(prev).add(noteWithOctave));
            }}
            onPointerUp={(e) => {
              e.target.releasePointerCapture(e.pointerId);
              setActiveNotes(prev => {
                const newSet = new Set(prev);
                newSet.delete(noteWithOctave);
                return newSet;
              });
            }}
            onPointerCancel={(e) => {
              setActiveNotes(prev => {
                const newSet = new Set(prev);
                newSet.delete(noteWithOctave);
                return newSet;
              });
            }}
            className={`key ${isBlack ? 'black' : 'white'} ${isActive ? 'active' : ''}`}
            data-note={item.note}
          />
        );
      })}
    </div>
  );
};

export default Piano;
