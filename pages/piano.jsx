// We first import the necessary dependencies. useEffect and useState are React hooks, which allow us to use
// state and other React features in functional components. 

import React, { useEffect, useState } from "react";

// This is an array of objects where each object represents a piano key. 
// Each object has a "note" property (e.g., "C", "C#", "D", etc.) and a "frequency" property (the pitch of the note in Hz).

const notes = [
  { note: "C",  frequency: 261.63 },
  { note: "C#", frequency: 277.18 },
  { note: "D",  frequency: 293.66 },
  { note: "D#", frequency: 311.13 },
  { note: "E",  frequency: 329.63 },
  { note: "F",  frequency: 349.23 },
  { note: "F#", frequency: 369.99 },
  { note: "G",  frequency: 392.00 },
  { note: "G#", frequency: 415.30 },
  { note: "A",  frequency: 440.00 },
  { note: "A#", frequency: 466.16 },
  { note: "B",  frequency: 493.88 }
];

// The width of each key in pixels.

const keyWidth = 60;

// This is our main component, the Piano.

const Piano = () => {

  // useState is a React hook that allows us to add state to our functional components.
  // In this case, we are keeping track of the window's width, the currently active note, and the audio context.

  const [windowWidth, setWindowWidth] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  const [audioContext, setAudioContext] = useState(null);

  // useEffect is a React hook that allows us to perform side effects in our function components.
  // We use it to set the initial value of the window width and to initialize the audio context.
  // We also make sure to clean up and disconnect the audio context when the component is unmounted.

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setAudioContext(new (window.AudioContext || window.webkitAudioContext)());
  }, []);

  // This function updates the windowWidth state whenever the window is resized.

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Here we add an event listener to the window resize event, which triggers our handleResize function whenever the window is resized.
  // We also make sure to remove the event listener when the component is unmounted to avoid memory leaks.

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // This function plays a note. It does this by creating an oscillator, which generates a tone, and a gain node, which controls the volume of the tone.
  // It then applies an ADSR envelope to the gain node to make the note sound more natural.

  const playNote = (frequency) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = "square";
    oscillator.frequency.value = frequency; // value in hertz
  
    // ADSR envelope
    const attack = 0.1; // in seconds
    const decay = 0.3; // in seconds
    const sustain = 0.5; // volume level
    const release = 0.8; // in seconds
    
    const currentTime = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, currentTime);
    gainNode.gain.linearRampToValueAtTime(1, currentTime + attack);
    gainNode.gain.linearRampToValueAtTime(sustain, currentTime + attack + decay);
    gainNode.gain.linearRampToValueAtTime(0, currentTime + attack + decay + release);
  
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
  
    oscillator.start();
    oscillator.stop(currentTime + attack + decay + release);
  };
  

  // Here we calculate the number of keys that can fit in the window and create an array of octaves accordingly.

  const numberOfKeys = windowWidth ? Math.floor(windowWidth / keyWidth) : 12;
  const octaves = new Array(Math.ceil(numberOfKeys / 12)).fill([...notes]).flat();

  // The render function of our component. This is what gets displayed on the screen.
  // We loop through our array of octaves and create a div for each key. Each div gets an onMouseDown and onMouseUp event handler,
  // which triggers the playNote function and updates the activeNote state.

  return (
    <div className="piano">
      {octaves.map((item, idx) => {
        const isBlack = item.note.includes("#");
        const isActive = activeNote === `${item.note}${idx}`;
        const frequency = item.frequency * (Math.floor(idx / 12) + 1);
  
        return (
          <div
            key={idx}
            // Add touch event handlers in addition to mouse event handlers.
            onTouchStart={() => {
              playNote(frequency);
              setActiveNote(`${item.note}${idx}`);
            }}
            onTouchEnd={() => setActiveNote(null)}
            onMouseDown={() => {
              playNote(frequency);
              setActiveNote(`${item.note}${idx}`);
            }}
            onMouseUp={() => setActiveNote(null)}
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
