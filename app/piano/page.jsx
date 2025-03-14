'use client';

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
];

export default function Piano() {
  const [synth, setSynth] = useState(null);
  const [playedNotes, setPlayedNotes] = useState([]);
  const [guessedSong, setGuessedSong] = useState("");
  const [pianoWidth, setPianoWidth] = useState(0);
  const [keyWidth, setKeyWidth] = useState(0);

  useEffect(() => {
    // Initialize Tone synth
    const newSynth = new Tone.Synth().toDestination();
    setSynth(newSynth);

    // Set piano width based on window size
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      newSynth.dispose();
    };
  }, []);

  const handleResize = () => {
    // Responsive sizing for the piano
    const screenWidth = window.innerWidth;
    const maxWidth = Math.min(screenWidth - 40, 800);
    setPianoWidth(maxWidth);
    setKeyWidth(maxWidth / notes.length);
  };

  const playNote = (note) => {
    if (!synth) return;
    
    synth.triggerAttackRelease(note, "8n");
    
    const updatedNotes = [...playedNotes, note];
    setPlayedNotes(updatedNotes);
    
    // Check if the played notes match a song
    guessSong(updatedNotes);
  };

  const guessSong = (notes) => {
    if (notes.length < 5) return; // Need at least 5 notes to guess
    
    for (const song of sampleSongs) {
      // Check if the last n played notes match the beginning of any song
      const songNotesToCheck = song.notes.slice(0, Math.min(notes.length, song.notes.length));
      const playedNotesToCheck = notes.slice(-songNotesToCheck.length);
      
      let match = true;
      for (let i = 0; i < songNotesToCheck.length; i++) {
        if (!areNotesClose(playedNotesToCheck[i], songNotesToCheck[i])) {
          match = false;
          break;
        }
      }
      
      if (match && songNotesToCheck.length >= 5) {
        setGuessedSong(`I think you're playing: ${song.name}`);
        return;
      }
    }
    
    setGuessedSong("");
  };
  
  const areNotesClose = (playedNote, songNote) => {
    // Simple exact match
    return playedNote === songNote;
  };

  const clearNotes = () => {
    setPlayedNotes([]);
    setGuessedSong("");
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Virtual Piano</h1>
      
      <div className="relative" style={{ width: `${pianoWidth}px` }}>
        <div className="flex relative">
          {notes.map((note, index) => (
            <React.Fragment key={note.note}>
              <div
                className={`white-key border border-gray-300 bg-white hover:bg-gray-100 cursor-pointer flex items-end justify-center pb-2 font-medium text-sm`}
                style={{ width: `${keyWidth}px`, height: '180px' }}
                onClick={() => playNote(note.note)}
              >
                {note.note.length === 1 ? note.note : ''}
              </div>
              {note.note.includes('#') && (
                <div
                  className="black-key absolute bg-gray-800 hover:bg-gray-700 cursor-pointer flex items-end justify-center pb-1 font-medium text-xs text-white"
                  style={{
                    width: `${keyWidth * 0.6}px`,
                    height: '100px',
                    left: `${keyWidth * index + keyWidth * 0.7}px`,
                    zIndex: 1
                  }}
                  onClick={() => playNote(note.note)}
                >
                  {note.note}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-xl mb-2">Notes Played:</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {playedNotes.map((note, index) => (
            <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-md">
              {note}
            </span>
          ))}
          {playedNotes.length === 0 && <span className="text-gray-500">Play some notes to see them here</span>}
        </div>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          onClick={clearNotes}
        >
          Clear Notes
        </button>
      </div>
      
      {guessedSong && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
          {guessedSong}
        </div>
      )}
      
      <div className="mt-8 text-center max-w-md">
        <h2 className="text-xl mb-2">Sample Songs:</h2>
        <div className="grid grid-cols-2 gap-2">
          {sampleSongs.slice(0, 6).map((song, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded-md">
              {song.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 