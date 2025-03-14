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

const sampleSongs = [
  { name: "Twinkle Twinkle Little Star", notes: ["C", "C", "G", "G", "A", "A", "G", "F", "F", "E", "E", "D", "D", "C"] },
  { name: "Happy Birthday", notes: ["C", "C", "D", "C", "F", "E", "C", "C", "D", "C", "G", "F"] },
  { name: "Ode to Joy", notes: ["E", "E", "F", "G", "G", "F", "E", "D", "C", "C", "D", "E", "E", "D", "D"] },
  { name: "Mary Had a Little Lamb", notes: ["E", "D", "C", "D", "E", "E", "E", "D", "D", "D", "E", "G", "G"] },
  { name: "Jingle Bells", notes: ["E", "E", "E", "E", "E", "E", "E", "G", "C", "D", "E", "F", "F", "F", "F", "F", "E", "E", "E", "E", "E", "D", "D", "E", "D", "G"] },
  { name: "Row Row Row Your Boat", notes: ["C", "C", "C", "D", "E", "E", "D", "E", "F", "G", "C", "C", "C", "G", "G", "G", "E", "E", "E", "C", "C", "C"] },
  { name: "Frère Jacques", notes: ["C", "D", "E", "C", "C", "D", "E", "C", "E", "F", "G", "E", "F", "G"] },
  { name: "London Bridge", notes: ["G", "A", "G", "F", "E", "F", "G", "D", "E", "F", "E", "F", "G"] },
  { name: "Old MacDonald", notes: ["G", "G", "G", "D", "E", "E", "D", "B", "B", "A", "A", "G"] },
  { name: "Yankee Doodle", notes: ["C", "C", "D", "E", "C", "E", "D", "G", "C", "C", "D", "E", "C", "B", "C"] },
  { name: "Itsy Bitsy Spider", notes: ["G", "C", "C", "C", "D", "E", "E", "E", "D", "C", "D", "E", "C"] },
  { name: "Baa Baa Black Sheep", notes: ["G", "G", "D", "D", "E", "E", "D", "C", "C", "B", "B", "A", "A", "G"] },
  { name: "Hot Cross Buns", notes: ["B", "A", "G", "B", "A", "G", "G", "G", "G", "A", "A", "A"] },
  { name: "Three Blind Mice", notes: ["E", "D", "C", "E", "D", "C", "G", "G", "F", "F", "E", "E"] },
  { name: "Hickory Dickory Dock", notes: ["C", "D", "E", "C", "D", "E", "G", "E", "C", "D", "E", "C"] },
  { name: "Pop Goes the Weasel", notes: ["C", "F", "G", "A", "G", "F", "E", "C", "D", "E", "F"] },
  { name: "If You're Happy", notes: ["G", "G", "A", "G", "C", "B", "G", "G", "A", "G", "D", "C"] },
  { name: "This Old Man", notes: ["G", "E", "G", "E", "C", "D", "E", "C", "D", "E", "C"] },
  { name: "Ring Around the Rosie", notes: ["E", "G", "G", "A", "G", "F", "E", "D", "C", "D", "E", "E"] },
  { name: "Hey Diddle Diddle", notes: ["C", "D", "E", "F", "G", "G", "A", "G", "F", "E", "D", "C"] }
];

const keyWidth = 40;

const Piano = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [activeNotes, setActiveNotes] = useState(new Set());
  const [sampler, setSampler] = useState(null);
  const [playedNotes, setPlayedNotes] = useState([]);
  const [guessedSong, setGuessedSong] = useState(null);

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
      
      // Add the played note to the sequence
      setPlayedNotes(prev => {
        const newNotes = [...prev, note.slice(0, -1)]; // Remove octave number
        guessSong(newNotes);
        return newNotes.slice(-20); // Keep only the last 20 notes
      });
    }
  };

  const guessSong = (notes) => {
    // Minimum notes needed to start guessing
    if (notes.length < 4) {
      setGuessedSong(null);
      return;
    }

    let bestMatch = null;
    let bestMatchPercentage = 0;

    // Helper function to check if notes are close (including same note or adjacent notes)
    const areNotesClose = (playedNote, songNote) => {
      const noteIndex = notes.findIndex(n => n === playedNote);
      const songNoteIndex = notes.findIndex(n => n === songNote);
      return Math.abs(noteIndex - songNoteIndex) <= 1 || playedNote === songNote;
    };

    sampleSongs.forEach(song => {
      const sequenceLength = Math.min(notes.length, song.notes.length);
      let matches = 0;

      // Compare the last played notes with the song
      for (let i = 0; i < sequenceLength; i++) {
        if (areNotesClose(notes[notes.length - sequenceLength + i], song.notes[i])) {
          matches++;
        }
      }

      const matchPercentage = (matches / sequenceLength) * 100;
      if (matchPercentage > bestMatchPercentage) {
        bestMatchPercentage = matchPercentage;
        bestMatch = song.name;
      }
    });

    // Lower threshold to 60% for more lenient matching
    if (bestMatchPercentage >= 60) {
      setGuessedSong(bestMatch);
    } else {
      setGuessedSong(null);
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
    <div className="relative">
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
      {guessedSong && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-auto min-w-[300px]">
          <div className="bg-indigo-900/80 backdrop-blur-sm border-2 border-indigo-300/50 rounded-2xl p-6 shadow-lg shadow-indigo-500/30">
            <div className="flex items-center gap-3">
              <div className="animate-pulse">
                <svg 
                  className="w-6 h-6 text-indigo-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" 
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-indigo-300 text-sm font-medium">
                  A magical melody appears...
                </span>
                <span className="text-white font-semibold">
                  {guessedSong}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Piano;
