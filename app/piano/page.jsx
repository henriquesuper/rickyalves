'use client';

import React, { useEffect, useState, useCallback, useRef } from "react";

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

export default function Piano() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [activeNotes, setActiveNotes] = useState(new Set());
  const [sampler, setSampler] = useState(null);
  const [playedNotes, setPlayedNotes] = useState([]);
  const [guessedSong, setGuessedSong] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const samplerRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    // Initialize the Sampler with piano samples
    const initSampler = async () => {
      try {
        // Import specific classes from Tone.js
        const { Sampler, Synth } = await import('tone');

        const newSampler = new Sampler({
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

        newSampler.loaded.then(() => {
          setIsLoading(false);
        });

        setSampler(newSampler);
        samplerRef.current = newSampler;
      } catch (error) {
        console.error('Error initializing sampler:', error);
        try {
          // Fallback to basic synth if sampler fails
          const { Synth } = await import('tone');
          const newSynth = new Synth().toDestination();
          setSampler(newSynth);
          samplerRef.current = newSynth;
          setIsLoading(false);
        } catch (fallbackError) {
          console.error('Fallback synth also failed:', fallbackError);
          // Last resort: create a simple oscillator
          createSimpleOscillator();
        }
      }
    };

    initSampler();

    return () => {
      if (samplerRef.current && typeof samplerRef.current.dispose === 'function') {
        samplerRef.current.dispose();
      }
    };
  }, []);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const playNote = useCallback((note) => {
    if (!sampler) return;

    try {
      // Check if it's a Sampler (has loaded property), Synth, or simple oscillator
      if (sampler.loaded !== undefined) {
        // It's a Sampler
        if (sampler.loaded) {
          sampler.triggerAttackRelease(note, "8n");
        }
      } else if (typeof sampler.triggerAttackRelease === 'function') {
        // It's a Synth or simple oscillator
        sampler.triggerAttackRelease(note, "8n");
      }

      // Add the played note to the sequence
      setPlayedNotes(prev => {
        const newNotes = [...prev, note.slice(0, -1)]; // Remove octave number
        guessSong(newNotes);
        return newNotes.slice(-20); // Keep only the last 20 notes
      });
    } catch (error) {
      console.error('Error playing note:', error);
    }
  }, [sampler]);

  const guessSong = useCallback((playedNotes) => {
    // Minimum notes needed to start guessing
    if (playedNotes.length < 4) {
      setGuessedSong(null);
      return;
    }

    let bestMatch = null;
    let bestMatchPercentage = 0;

    // Define note order for comparison
    const noteOrder = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    // Helper function to check if notes are close (including same note or adjacent notes)
    const areNotesClose = (playedNote, songNote) => {
      if (playedNote === songNote) return true;

      const playedIndex = noteOrder.indexOf(playedNote);
      const songIndex = noteOrder.indexOf(songNote);

      if (playedIndex === -1 || songIndex === -1) return false;

      // Check if notes are adjacent (within 1 semitone)
      return Math.abs(playedIndex - songIndex) <= 1;
    };

    sampleSongs.forEach(song => {
      const sequenceLength = Math.min(playedNotes.length, song.notes.length);
      let matches = 0;

      // Compare the last played notes with the song
      for (let i = 0; i < sequenceLength; i++) {
        const playedNote = playedNotes[playedNotes.length - sequenceLength + i];
        const songNote = song.notes[i];

        if (areNotesClose(playedNote, songNote)) {
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
  }, []);

  const clearNotes = () => {
    setPlayedNotes([]);
    setGuessedSong(null);
  };

  // Last resort: simple oscillator fallback
  const createSimpleOscillator = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      oscillator.start();

      const simpleSynth = {
        triggerAttackRelease: (note, duration) => {
          // Convert note name to frequency
          const noteToFreq = {
            'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23,
            'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
            'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46,
            'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77
          };

          const frequency = noteToFreq[note] || 440;
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        },
        dispose: () => {
          try {
            oscillator.stop();
            audioContext.close();
          } catch (e) {
            // Already stopped or closed
          }
        }
      };

      setSampler(simpleSynth);
      samplerRef.current = simpleSynth;
      setIsLoading(false);
    } catch (error) {
      console.error('Even simple oscillator failed:', error);
      setIsLoading(false);
    }
  };

  // Responsive key sizing
  const getKeyWidth = () => {
    if (!windowWidth) return 45;
    if (windowWidth < 640) return 35; // Mobile
    if (windowWidth < 1024) return 40; // Tablet
    return 45; // Desktop
  };

  const keyWidth = getKeyWidth();
  const numberOfKeys = windowWidth ? Math.floor((windowWidth - 32) / keyWidth) : 12; // Account for padding
  const fullOctaves = Math.floor(numberOfKeys / 12);
  const remainingKeys = numberOfKeys % 12;

  const octaves = [
    ...new Array(fullOctaves).fill([...notes]).flat(),
    ...notes.slice(0, remainingKeys + 1)
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading piano samples...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Virtual Piano
          </h1>
          <p className="text-gray-300 text-lg">Play beautiful melodies and discover magical songs</p>
        </div>

        {/* Piano */}
        <div className="flex justify-center mb-8">
          <div className="piano relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="flex relative">
              {octaves.map((item, idx) => {
                const isBlack = item.note.includes("#");
                const octave = Math.floor(idx / 12) + 4;
                const noteWithOctave = `${item.note}${octave}`;
                const isActive = activeNotes.has(noteWithOctave);

                return (
                  <div
                    key={idx}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      e.target.setPointerCapture(e.pointerId);
                      playNote(noteWithOctave);
                      setActiveNotes(prev => new Set(prev).add(noteWithOctave));
                    }}
                    onPointerUp={(e) => {
                      e.preventDefault();
                      e.target.releasePointerCapture(e.pointerId);
                      setActiveNotes(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(noteWithOctave);
                        return newSet;
                      });
                    }}
                    onPointerCancel={(e) => {
                      e.preventDefault();
                      setActiveNotes(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(noteWithOctave);
                        return newSet;
                      });
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      playNote(noteWithOctave);
                      setActiveNotes(prev => new Set(prev).add(noteWithOctave));
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      setActiveNotes(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(noteWithOctave);
                        return newSet;
                      });
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      playNote(noteWithOctave);
                      setActiveNotes(prev => new Set(prev).add(noteWithOctave));
                    }}
                    onMouseUp={(e) => {
                      e.preventDefault();
                      setActiveNotes(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(noteWithOctave);
                        return newSet;
                      });
                    }}
                    onMouseLeave={(e) => {
                      e.preventDefault();
                      setActiveNotes(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(noteWithOctave);
                        return newSet;
                      });
                    }}
                    className={`key ${isBlack ? 'black' : 'white'} ${isActive ? 'active' : ''} select-none touch-manipulation`}
                    data-note={item.note}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      userSelect: 'none'
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Song Recognition */}
        {guessedSong && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-auto min-w-[320px] z-50">
            <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 shadow-lg shadow-black/50 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4">
                <div className="animate-pulse">
                  <svg
                    className="w-8 h-8 text-white"
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
                  <span className="text-gray-300 text-sm font-medium">
                    🎵 A magical melody appears...
                  </span>
                  <span className="text-white font-bold text-xl">
                    {guessedSong}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notes History */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Notes</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {playedNotes.map((note, index) => (
              <span key={index} className="px-3 py-1 bg-gray-700/80 text-gray-200 rounded-full text-sm font-medium border border-gray-500/50">
                {note}
              </span>
            ))}
            {playedNotes.length === 0 && (
              <span className="text-gray-400 italic">Play some notes to see them here...</span>
            )}
          </div>
          <button
            onClick={clearNotes}
            className="px-4 py-2 bg-gray-600/80 hover:bg-gray-600 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            Clear Notes
          </button>
        </div>

        {/* Sample Songs */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">Try These Songs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sampleSongs.slice(0, 12).map((song, index) => (
              <div key={index} className="p-3 bg-gradient-to-r from-gray-700/40 to-gray-800/40 rounded-lg border border-gray-500/30 hover:border-gray-400/60 transition-all duration-200">
                <span className="text-gray-200 font-medium text-sm">{song.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 