"use client";
import React, { useEffect, useRef } from 'react';

const CELL = 20;
// Glyphs traced from the film's code by Rezmason (MIT, see public/fonts/Matrix-Code.LICENSE.txt).
// The font's shapes are already mirrored; CHARS follows its Reloaded/Revolutions glyph order.
const FONT_FAMILY = 'Matrix-Code';
const FONT_URL = '/fonts/Matrix-Code.ttf';
const CHARS = 'モエヤキオカ7ケサスz152ヨタワ4ネヌナ98ヒ0ホア3ウセ¦:"꞊ミラリ╌ツテニハソ▪ー<>0|+*コシマムメ';
const GREEN = '0, 255, 70';
const HEAD_COLOR = 'rgba(220, 255, 225, 1)';
const FADE = 0.05;

const randomChar = () => CHARS.charAt(Math.floor(Math.random() * CHARS.length));
// Each column falls at its own pace (cells per frame), capped at 1 so no row is skipped
const randomSpeed = () => 0.45 + Math.random() * 0.55;

const createColumn = (startRow) => ({
  y: startRow,
  row: Math.floor(startRow),
  char: null,
  speed: randomSpeed(),
});

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Staggered start so the first screen isn't a single flat wave
    const columns = [];
    const fitColumns = () => {
      const count = Math.floor(width / CELL);
      while (columns.length < count) columns.push(createColumn(-Math.random() * 20));
      columns.length = count;
    };
    fitColumns();

    // Until the font loads the canvas falls back to monospace, so the rain starts right away
    if (![...document.fonts].some((f) => f.family === FONT_FAMILY)) {
      const face = new FontFace(FONT_FAMILY, `url(${FONT_URL})`);
      document.fonts.add(face);
      face.load().catch(() => {});
    }

    // Glyphs are centered in their cell; y is the baseline
    const drawGlyph = (char, x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillText(char, x + CELL / 2, y);
    };

    const clearCell = (col, row) => {
      ctx.fillStyle = '#000';
      ctx.fillRect(col * CELL, row * CELL - CELL + 5, CELL, CELL);
    };

    const trailColor = () => `rgba(${GREEN}, ${0.75 + Math.random() * 0.25})`;

    // The footer is the rain's "floor": drops landing on its top edge
    // bounce as short-lived particles instead of falling through.
    const footer = document.querySelector('footer');
    const MAX_BOUNCERS = 80;
    let bouncers = [];

    // The terminal's `matrix` command boosts the rain for a few seconds
    let burstUntil = 0;
    const handleBurst = () => {
      burstUntil = Date.now() + 8000;
    };
    window.addEventListener('ricky:matrix-burst', handleBurst);

    const getFloorY = () => {
      if (!footer) return Infinity;
      const top = footer.getBoundingClientRect().top;
      return top > 0 && top < height ? top : Infinity;
    };

    const resetColumn = (c, startRow) => {
      c.y = startRow;
      c.row = Math.floor(startRow);
      c.char = null;
      c.speed = randomSpeed();
    };

    // Moves a column's head down one row, restarting it at the floor or offscreen
    const advanceRow = (c, i, floorY) => {
      // The old head becomes part of the green trail
      if (c.char && c.row > 0) {
        clearCell(i, c.row);
        drawGlyph(c.char, i * CELL, c.row * CELL, trailColor());
      }

      c.row++;
      const y = c.row * CELL;

      if (y >= floorY) {
        // Impact: hand the drop over to a bounce particle
        if (bouncers.length < MAX_BOUNCERS) {
          bouncers.push({
            x: i * CELL,
            y: floorY,
            vx: (Math.random() - 0.5) * 2.5,
            vy: -(2 + Math.random() * 3.5),
            char: randomChar(),
            life: 1,
            bounces: 0,
          });
        }
        // Staggered restart so columns don't sync into a single wave
        resetColumn(c, -Math.floor(Math.random() * 40));
        return;
      }
      if (y > height) {
        if (Math.random() > 0.975) resetColumn(c, 0);
        c.char = null;
        return;
      }

      c.char = randomChar();
      if (c.row > 0) {
        ctx.shadowColor = `rgba(${GREEN}, 0.9)`;
        ctx.shadowBlur = 8;
        drawGlyph(c.char, i * CELL, y, HEAD_COLOR);
        ctx.shadowBlur = 0;
      }
    };

    const stepDrops = (floorY, bursting) => {
      for (let i = 0; i < columns.length; i++) {
        const c = columns[i];
        c.y += bursting ? c.speed * 2 : c.speed;
        // A restart rewinds c.y, so the condition is re-read every row
        while (c.row < Math.floor(c.y)) advanceRow(c, i, floorY);
      }
    };

    // Glyphs already in a trail occasionally change in place, as in the film
    const mutateTrails = () => {
      const attempts = Math.ceil(columns.length / 8);
      for (let n = 0; n < attempts; n++) {
        const i = Math.floor(Math.random() * columns.length);
        const c = columns[i];
        const dist = 1 + Math.floor(Math.random() * 25);
        const row = c.row - dist;
        if (row < 1 || row * CELL > height) continue;

        // Match the brightness the fade has left at that distance from the head
        const alpha = Math.pow(1 - FADE, dist / c.speed);
        if (alpha < 0.08) continue;

        clearCell(i, row);
        drawGlyph(randomChar(), i * CELL, row * CELL, `rgba(${GREEN}, ${alpha})`);
      }
    };

    const stepBouncers = (floorY) => {
      if (bouncers.length > 0) {
        bouncers = bouncers.filter((b) => {
          b.vy += 0.35; // gravity
          b.x += b.vx;
          b.y += b.vy;

          if (b.y >= floorY && b.vy > 0) {
            b.y = floorY;
            b.vy = -b.vy * 0.45;
            b.bounces++;
          }

          b.life -= 0.025;
          if (b.life <= 0 || b.bounces > 2 || floorY === Infinity) return false;

          // Brighter than the rain: impacts should read as "hitting ground"
          drawGlyph(b.char, b.x, b.y, `rgba(134, 255, 160, ${b.life})`);
          return true;
        });
      }
    };

    const draw = () => {
      const bursting = Date.now() < burstUntil;

      // Lighter fade during a burst leaves longer trails
      ctx.fillStyle = `rgba(0, 0, 0, ${bursting ? 0.04 : FADE})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `15px "${FONT_FAMILY}", monospace`;
      ctx.textAlign = 'center';
      const floorY = getFloorY();

      stepDrops(floorY, bursting);
      mutateTrails();
      stepBouncers(floorY);
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      fitColumns();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('ricky:matrix-burst', handleBurst);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixRain;
