"use client";
import React, { useLayoutEffect, useRef } from "react";
import { CHARS, FONT_FAMILY } from "./MatrixRain";

const CELL = 20;
const TRAIL = 6;

// Full-screen transition made of falling code. "in" lets each column's
// raindrop paint the screen black behind it; "out" starts black and the
// drops wash it away, revealing the page underneath.
const RainWipe = ({ direction, onDone }) => {
  const canvasRef = useRef(null);
  const onDoneRef = useRef(onDone);
  useLayoutEffect(() => {
    onDoneRef.current = onDone;
  });

  // Layout effect so the "out" wipe is black before the first paint
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDoneRef.current();
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const covering = direction === "in";

    const columns = Array.from({ length: Math.ceil(width / CELL) }, () => ({
      y: -Math.random() * height * 0.5,
      // px per frame: roughly 0.8-1.2s for a drop to cross the screen
      speed: height / (covering ? 50 + Math.random() * 25 : 40 + Math.random() * 20),
    }));

    if (!covering) {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
    }

    // Stable glyph per grid cell so trails read as code, not noise
    const glyphAt = (col, row) => CHARS.charAt(Math.abs(col * 7 + row * 13) % CHARS.length);

    let raf;
    const frame = () => {
      ctx.font = `15px "${FONT_FAMILY}", monospace`;
      ctx.textAlign = "center";
      let done = true;

      columns.forEach((c, i) => {
        c.y += c.speed;
        if (c.y < height + CELL * TRAIL) done = false;
        if (c.y <= 0) return;

        const x = i * CELL;
        if (covering) {
          ctx.fillStyle = "#000";
          ctx.fillRect(x, 0, CELL, c.y);
        } else {
          ctx.clearRect(x, 0, CELL, c.y);
        }

        // Fading green trail behind a bright head
        const headRow = Math.floor(c.y / CELL);
        for (let k = TRAIL; k >= 1; k--) {
          ctx.fillStyle = `rgba(0, 255, 70, ${(1 - k / (TRAIL + 1)) * 0.85})`;
          ctx.fillText(glyphAt(i, headRow - k), x + CELL / 2, c.y - k * CELL);
        }
        ctx.fillStyle = "rgba(220, 255, 225, 1)";
        ctx.fillText(glyphAt(i, headRow), x + CELL / 2, c.y);
      });

      if (done) {
        onDoneRef.current();
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(raf);
  }, [direction]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 pointer-events-none" />;
};

export default RainWipe;
