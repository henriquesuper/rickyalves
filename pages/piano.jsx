import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

const KEY_WIDTH = 60;  // Update this to your key's width

// Piano keys data
const keyData = [
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

const Piano = () => {
  const [width] = useWindowSize();
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const numOfKeys = Math.floor(width / KEY_WIDTH);
    const newKeys = new Array(numOfKeys).fill(0).map((_, idx) => keyData[idx % keyData.length]);
    setKeys(newKeys);
  }, [width]);

  return (
    <div className="piano">
      {keys.map((key, idx) => (
        <div key={idx} className={`key ${key.color}`}>
          {key.note}
        </div>
      ))}
    </div>
  );
};

export default Piano;
