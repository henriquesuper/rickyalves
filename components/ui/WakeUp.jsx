"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import RainWipe from "./RainWipe";

// The film's opening: the screen goes dark and someone types to you.
// Runs once per session after the home page sits idle, or on demand
// through the terminal's `wake up` command (ricky:wake-up event).
// Clicking "white rabbit" (or ricky:white-rabbit, from the 404) offers the pills;
// the red pill hands over to the terminal through ricky:red-pill.
const IDLE_MS = 45000;
const RABBIT = "white rabbit";
const SEEN_KEY = "ricky:woke-up";
const ACTIVITY_EVENTS = ["mousemove", "keydown", "pointerdown", "scroll", "wheel", "touchstart"];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types into one line of text with a human, irregular rhythm.
// Each screen gets its own typist and cancels it when the screen goes away.
const createTypist = (setText) => {
  const reduced = prefersReducedMotion();
  let current = "";
  let cancelled = false;

  const show = (s) => {
    current = s;
    setText(s);
  };

  // Quick runs, the odd hesitation, a beat after punctuation
  const type = async (s) => {
    if (reduced) return show(current + s);
    for (const ch of s) {
      if (cancelled) return;
      show(current + ch);
      const beat = ".,".includes(ch) ? 220 : 0;
      await wait(beat + (Math.random() > 0.85 ? 140 + Math.random() * 220 : 50 + Math.random() * 80));
    }
  };

  const erase = async (count) => {
    if (reduced) return show(current.slice(0, -count));
    for (let i = 0; i < count; i++) {
      if (cancelled) return;
      show(current.slice(0, -1));
      await wait(45 + Math.random() * 30);
    }
  };

  const run = async (steps) => {
    for (const step of steps) {
      if (cancelled) return;
      await step();
    }
  };

  return { show, type, erase, run, cancel: () => (cancelled = true) };
};

// Two synthesized door knocks: a falling low thump plus a burst of filtered noise.
// Browsers only allow audio after the visitor has clicked or typed on the page.
const playKnocks = () => {
  if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const ctx = new AudioCtx();
  ctx.resume().catch(() => {});

  const knock = (t) => {
    const osc = ctx.createOscillator();
    const thump = ctx.createGain();
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.exponentialRampToValueAtTime(55, t + 0.09);
    thump.gain.setValueAtTime(0.0001, t);
    thump.gain.exponentialRampToValueAtTime(0.9, t + 0.004);
    thump.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    osc.connect(thump).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.15);

    const length = Math.floor(ctx.sampleRate * 0.04);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    const noise = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const crack = ctx.createGain();
    noise.buffer = buffer;
    filter.type = "lowpass";
    filter.frequency.value = 1100;
    crack.gain.value = 0.4;
    noise.connect(filter).connect(crack).connect(ctx.destination);
    noise.start(t);
  };

  const start = ctx.currentTime + 0.05;
  knock(start);
  knock(start + 0.24);
  setTimeout(() => ctx.close(), 1200);
};

const WakeUp = () => {
  // Which screen is up: null (site visible) | "sequence" | "pills" | "blue"
  const [stage, setStage] = useState(null);
  // Rain transition running: "in" (site → black) | "out" (black → site) | null
  const [wipe, setWipe] = useState(null);
  const [text, setText] = useState("");
  const [pillsReady, setPillsReady] = useState(false);
  const afterWipeRef = useRef(null);
  const pathname = usePathname();
  const active = stage !== null;

  // Screens inside the black change with a hard cut, like a terminal
  const cut = useCallback((next) => {
    setText("");
    setPillsReady(false);
    setStage(next);
  }, []);

  // Code rain covers the site, then the screen starts
  const open = useCallback((next) => {
    cut(next);
    setWipe("in");
  }, [cut]);

  // Code rain washes the black away, then `after` runs
  const close = useCallback((after) => {
    afterWipeRef.current = after;
    setText("");
    setPillsReady(false);
    setWipe("out");
  }, []);

  const onWipeDone = () => {
    if (wipe === "out") {
      setStage(null);
      afterWipeRef.current?.();
      afterWipeRef.current = null;
    }
    setWipe(null);
  };

  // Terminal and 404 triggers
  useEffect(() => {
    if (active) return;
    const onWake = () => open("sequence");
    const onRabbit = () => open("pills");
    window.addEventListener("ricky:wake-up", onWake);
    window.addEventListener("ricky:white-rabbit", onRabbit);
    return () => {
      window.removeEventListener("ricky:wake-up", onWake);
      window.removeEventListener("ricky:white-rabbit", onRabbit);
    };
  }, [active, open]);

  // Idle trigger: home page only, once per session. If the tab is hidden
  // when the timer fires, the screen goes dark the moment the visitor returns.
  useEffect(() => {
    if (pathname !== "/" || active) return;
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {}

    let timer;
    const onVisible = () => {
      if (!document.hidden) open("sequence");
    };
    const fire = () => {
      if (document.hidden) {
        document.addEventListener("visibilitychange", onVisible, { once: true });
        return;
      }
      open("sequence");
    };
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(fire, IDLE_MS);
    };

    ACTIVITY_EVENTS.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    reset();
    return () => {
      clearTimeout(timer);
      ACTIVITY_EVENTS.forEach((e) => window.removeEventListener(e, reset));
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [pathname, active, open]);

  // The film's messages. Any key or click wakes the site up early,
  // except a click on the rabbit, which leads to the pills.
  useEffect(() => {
    if (stage !== "sequence" || wipe) return;
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}

    const t = createTypist(setText);
    const finish = () => {
      t.cancel();
      close(() => window.dispatchEvent(new Event("ricky:matrix-burst")));
    };

    t.run([
      () => wait(900),
      () => t.type("Wake up, Neo..."),
      () => wait(1000),
      () => t.erase("Neo...".length),
      () => wait(500),
      () => t.type("visitor..."),
      () => wait(2400),
      () => t.show(""),
      () => wait(900),
      () => t.type("The Matrix has you..."),
      () => wait(2600),
      () => t.show(""),
      () => wait(900),
      () => t.type(`Follow the ${RABBIT}.`),
      () => wait(5000), // long enough to notice the rabbit can be clicked
      () => t.show(""),
      () => wait(1100),
      () => t.type("Knock, knock, Neo."),
      () => wait(350),
      () => playKnocks(),
      () => wait(2200),
      finish,
    ]);

    window.addEventListener("keydown", finish);
    window.addEventListener("pointerdown", finish);
    return () => {
      t.cancel();
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
    };
  }, [stage, wipe, close]);

  // The choice. Escape counts as the blue pill.
  useEffect(() => {
    if (stage !== "pills" || wipe) return;
    const t = createTypist(setText);
    t.run([
      () => wait(400),
      () => t.type("This is your last chance."),
      () => wait(600),
      () => setPillsReady(true),
    ]);

    const onKey = (e) => {
      if (e.key === "Escape") cut("blue");
    };
    window.addEventListener("keydown", onKey);
    return () => {
      t.cancel();
      window.removeEventListener("keydown", onKey);
    };
  }, [stage, wipe, cut]);

  // The blue pill lingers a moment, then lets go of the visitor
  useEffect(() => {
    if (stage !== "blue" || wipe) return;
    const t = createTypist(setText);
    t.run([
      () => wait(400),
      () => t.type("The story ends. You wake up in your bed."),
      () => wait(1800),
      () => close(),
    ]);
    return () => t.cancel();
  }, [stage, wipe, close]);

  const takeRedPill = () =>
    close(() => {
      window.dispatchEvent(new Event("ricky:matrix-burst"));
      window.dispatchEvent(new Event("ricky:red-pill"));
    });

  if (!active) return null;

  const rabbitAt = stage === "sequence" ? text.indexOf(RABBIT) : -1;
  const cursor = <span className="inline-block w-[0.6em] h-[1.1em] ml-0.5 align-text-bottom bg-current animate-pulse" />;

  return (
    <div
      className={`fixed inset-0 z-[200] font-mono text-lg md:text-2xl text-green-400 ${wipe ? "" : "bg-black"}`}
      style={{ textShadow: "0 0 8px rgba(74, 222, 128, 0.55)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Wake up"
    >
      {wipe && <RainWipe key={wipe} direction={wipe} onDone={onWipeDone} />}

      {!wipe && (
        <div className="p-6 md:p-12 space-y-8">
          {stage === "sequence" && (
            <>
              <p className="whitespace-pre-wrap">
                {rabbitAt === -1 ? (
                  <span aria-hidden="true">{text}</span>
                ) : (
                  <>
                    {text.slice(0, rabbitAt)}
                    <button
                      type="button"
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={() => cut("pills")}
                      className="underline decoration-green-500/40 underline-offset-4 hover:text-green-200 hover:decoration-green-200 cursor-pointer"
                    >
                      {RABBIT}
                    </button>
                    {text.slice(rabbitAt + RABBIT.length)}
                  </>
                )}
                {cursor}
              </p>
              <p aria-hidden="true" className="absolute bottom-6 right-6 text-[10px] tracking-widest text-neutral-800">
                press any key
              </p>
            </>
          )}

          {stage === "pills" && (
            <>
              <p className="whitespace-pre-wrap">
                {text}
                {!pillsReady && cursor}
              </p>
              {pillsReady && (
                <div className="flex flex-col sm:flex-row gap-4 text-base md:text-lg">
                  <button
                    type="button"
                    autoFocus
                    onClick={takeRedPill}
                    className="text-left px-4 py-3 border border-red-500/40 text-red-400 hover:bg-red-500/10 hover:border-red-400 focus-visible:outline focus-visible:outline-red-400 rounded transition-colors"
                    style={{ textShadow: "0 0 8px rgba(248, 113, 113, 0.5)" }}
                  >
                    [ red pill ]
                    <span className="block text-xs md:text-sm text-red-300/60 mt-1">see how deep the rabbit hole goes</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => cut("blue")}
                    className="text-left px-4 py-3 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 focus-visible:outline focus-visible:outline-blue-400 rounded transition-colors"
                    style={{ textShadow: "0 0 8px rgba(96, 165, 250, 0.5)" }}
                  >
                    [ blue pill ]
                    <span className="block text-xs md:text-sm text-blue-300/60 mt-1">the story ends</span>
                  </button>
                </div>
              )}
            </>
          )}

          {stage === "blue" && (
            <p className="whitespace-pre-wrap text-blue-400" style={{ textShadow: "0 0 8px rgba(96, 165, 250, 0.5)" }}>
              {text}
              {cursor}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default WakeUp;
