"use client";
import React, { useEffect, useRef } from 'react';

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

    const COL_WIDTH = 20;
    const columns = Math.floor(width / COL_WIDTH);
    const drops = [];
    const chars = "0123456789ABCDEF$#@%&";
    const randomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

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

    const stepDrops = (floorY, bursting) => {
      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * COL_WIDTH;

        // Varying opacity for depth; brighter during a burst
        const alpha = bursting ? 0.5 + Math.random() * 0.5 : Math.random();
        ctx.fillStyle = `rgba(0, 255, 70, ${alpha})`;
        ctx.fillText(randomChar(), i * COL_WIDTH, y);

        if (y >= floorY) {
          // Impact: hand the drop over to a bounce particle
          if (bouncers.length < MAX_BOUNCERS) {
            bouncers.push({
              x: i * COL_WIDTH,
              y: floorY,
              vx: (Math.random() - 0.5) * 2.5,
              vy: -(2 + Math.random() * 3.5),
              char: randomChar(),
              life: 1,
              bounces: 0,
            });
          }
          // Staggered restart so columns don't sync into a single wave
          drops[i] = -Math.floor(Math.random() * 40);
        } else if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
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
          ctx.fillStyle = `rgba(134, 255, 160, ${b.life})`;
          ctx.fillText(b.char, b.x, b.y);
          return true;
        });
      }
    };

    const draw = () => {
      const bursting = Date.now() < burstUntil;

      // Lighter fade during a burst leaves longer trails
      ctx.fillStyle = `rgba(0, 0, 0, ${bursting ? 0.04 : 0.05})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = '15px monospace';
      const floorY = getFloorY();

      stepDrops(floorY, bursting);
      if (bursting) stepDrops(floorY, true); // double speed
      stepBouncers(floorY);
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
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
