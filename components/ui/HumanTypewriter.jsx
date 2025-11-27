"use client";
import React, { useState, useEffect, useRef } from "react";

const KEYBOARD_LAYOUT = {
  'Q': 'WA', 'W': 'QE', 'E': 'WR', 'R': 'ET', 'T': 'RY', 'Y': 'TU', 'U': 'YI', 'I': 'UO', 'O': 'IP', 'P': 'O[',
  'A': 'QS', 'S': 'AD', 'D': 'SF', 'F': 'DG', 'G': 'FH', 'H': 'GJ', 'J': 'HK', 'K': 'JL', 'L': 'K;',
  'Z': 'AX', 'X': 'ZC', 'C': 'XV', 'V': 'CB', 'B': 'VN', 'N': 'BM', 'M': 'N,',
  ' ': '  '
};

const HumanTypewriter = ({ text = "RICKY ALVES", className }) => {
  const [display, setDisplay] = useState("");
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    let currentString = "";
    
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const typeChar = async (char) => {
      if (!isMounted.current) return;
      currentString += char;
      setDisplay(currentString);
      // Random typing speed: fast bursts mixed with slow hesitations
      const speed = Math.random() > 0.8 ? Math.random() * 200 + 100 : Math.random() * 80 + 30;
      await wait(speed);
    };

    const deleteChar = async () => {
      if (!isMounted.current) return;
      currentString = currentString.slice(0, -1);
      setDisplay(currentString);
      // Backspace is usually faster and more consistent
      await wait(Math.random() * 50 + 30);
    };

    const simulateTyping = async () => {
      while (isMounted.current) {
        // 1. Clear deck if needed (rarely happens in loop, but good for reset)
        if (currentString.length > 0) {
           while (currentString.length > 0) await deleteChar();
           await wait(500);
        }

        // 2. Type the target text
        for (let i = 0; i < text.length; i++) {
          if (!isMounted.current) return;
          
          const targetChar = text[i];
          const isLastChar = i === text.length - 1;

          // CHANCE OF TYPO (10%)
          // Don't typo spaces usually, looks weird
          if (Math.random() < 0.1 && targetChar !== ' ') {
            // Pick a "wrong" key near the target
            const nearbyKeys = KEYBOARD_LAYOUT[targetChar.toUpperCase()] || "X";
            const wrongChar = nearbyKeys[Math.floor(Math.random() * nearbyKeys.length)];
            
            await typeChar(wrongChar);
            
            // Reaction time: "Oh shoot, I messed up"
            await wait(Math.random() * 300 + 150);
            
            await deleteChar();
            i--; // Retry this index
            continue;
          }

          await typeChar(targetChar);
        }

        // 3. Finished? Wait and admire.
        await wait(Math.random() * 3000 + 2000);

        // 4. The "Perfectionist" Phase
        // Decide to randomly delete a chunk and re-type it differently
        const action = Math.random();
        
        if (action < 0.4) {
          // ACTION: Delete last name and retype
          const spaceIndex = text.lastIndexOf(' ');
          if (spaceIndex > -1) {
             const charsToDelete = currentString.length - spaceIndex;
             for(let k=0; k<charsToDelete; k++) await deleteChar();
             
             await wait(400); // Think

             // Sometimes accidentally add double space
             if (Math.random() < 0.5) {
                await typeChar(' ');
                await wait(200); // Notice the double space
                await deleteChar();
             }

             // Retype remainder
             for (let j = spaceIndex; j < text.length; j++) {
                await typeChar(text[j]);
             }
          }
        } else if (action < 0.6) {
           // ACTION: Delete everything and start over
           // (Handled by the loop restarting)
           continue; 
        } else {
           // ACTION: Do nothing, just wait longer then maybe tiny fix
           // Maybe delete 1 char and put it back
           await deleteChar();
           await wait(150);
           await typeChar(text[text.length - 1]);
        }
      }
    };

    simulateTyping();

    return () => {
      isMounted.current = false;
    };
  }, [text]);

  return (
    <span className={className}>
      {display}
      <span className="text-green-500 animate-pulse">_</span>
    </span>
  );
};

export default HumanTypewriter;