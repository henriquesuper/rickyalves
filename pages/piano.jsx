import React, { useEffect, useState } from "react";

const notes = [
  "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
];

const keyWidth = 60; // The width of each key in pixels.

const Piano = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeNote, setActiveNote] = useState(null);

  // This function will run whenever the window is resized.
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add the event listener when the component is mounted, and remove it when it's unmounted.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate how many keys can fit on the screen.
  const numberOfKeys = Math.floor(windowWidth / keyWidth);

  // Create an array of notes that will fit on the screen.
  // This assumes that the 'notes' array contains one octave, and copies it as many times as needed.
  const keys = new Array(numberOfKeys)
    .fill([...notes])
    .flat()
    .slice(0, numberOfKeys); // We slice the array to ensure that we don't end up with partial octaves.

  return (
    <div className="piano">
      {keys.map((note, idx) => (
        <div
          key={idx}
          onMouseDown={() => setActiveNote(note)}
          onMouseUp={() => setActiveNote(null)}
          className={`key ${note.includes("#") && "black"}`}
        >
          {note}
        </div>
      ))}
    </div>
  );
};

export default Piano;