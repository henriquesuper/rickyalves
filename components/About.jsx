'use client';

import * as React from 'react';
import { motion } from "framer-motion";
import ScrollAnimation from "../app/components/ScrollAnimation";
import TerminalWindow from "./ui/TerminalWindow";
import GlitchImage from "./ui/GlitchImage";
import HackerText from "./ui/HackerText";
import { getLAStatus, UPLINK_START, UPLINK_END } from "@/lib/la-status";

const STATE_STYLES = {
  uplink: { label: "ONLINE", text: "text-emerald-400", dot: "bg-emerald-500", ping: true },
  async: { label: "ASYNC", text: "text-amber-400", dot: "bg-amber-400", ping: false },
  sabbath: { label: "SABBATH", text: "text-violet-400", dot: "bg-violet-400", ping: false },
};

const Prompt = ({ cmd }) => (
  <div className="text-sm text-neutral-500">
    <span className="text-green-400 mr-2">$</span>{cmd}
  </div>
);

const About = () => {
  const [mode, setMode] = React.useState(null);

  React.useEffect(() => {
    const check = () => setMode(getLAStatus().mode);
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  const state = mode ? STATE_STYLES[mode] : null;

  return (
    <div className="relative z-10 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Terminal Bio */}
        <ScrollAnimation direction="left">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-400 mb-2 font-mono">
              <HackerText text="> Identity_Log" />
            </h2>

            <TerminalWindow title="root@ricky-os:~/identity">
              <div className="space-y-5 text-neutral-300 leading-relaxed font-mono">
                <div className="space-y-1">
                  <Prompt cmd="whoami" />
                  <p>
                    Brazilian-born software engineer in Los Angeles. I build products
                    end to end — <span className="text-white">the mobile app, the web app,
                    and the backend</span> that ties them together.
                  </p>
                </div>
                <div className="space-y-1">
                  <Prompt cmd="cat focus.txt" />
                  <p>
                    These days that means <span className="text-white">Flutter</span> on
                    iOS and Android, and <span className="text-white">React / Next.js</span> on
                    the web. I sweat the details people feel but rarely notice: a fast first
                    load, a smooth animation, an app that speaks their language.
                  </p>
                </div>
                <div className="space-y-1">
                  <Prompt cmd="cat offline.txt" />
                  <p>
                    Away from the keyboard: music at the piano, and the Sabbath. From Friday
                    to Saturday sundown this site switches to{" "}
                    <span className="text-violet-400">SABBATH_MODE</span> and so do I.
                  </p>
                </div>
              </div>
            </TerminalWindow>

            {/* System Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">

              {/* Location Module */}
              <div className="group bg-black/40 border border-white/10 p-3 rounded-lg backdrop-blur-sm hover:border-green-500/30 transition-colors">
                <div className="text-[10px] text-neutral-500 font-mono tracking-widest mb-1">GEO_LOCK</div>
                <div className="text-sm text-green-400 font-mono font-bold truncate">
                  LOS_ANGELES
                </div>
                <div className="text-[10px] text-green-500/50 font-mono mt-1">
                  34.05°N, 118.24°W
                </div>
              </div>

              {/* Languages Module */}
              <div className="group bg-black/40 border border-white/10 p-3 rounded-lg backdrop-blur-sm hover:border-green-500/30 transition-colors">
                <div className="text-[10px] text-neutral-500 font-mono tracking-widest mb-1">LOCALE</div>
                <div className="text-sm text-green-400 font-mono font-bold">
                  EN · PT-BR
                </div>
                <div className="text-[10px] text-green-500/50 font-mono mt-1">
                  English · Portuguese
                </div>
              </div>

              {/* Live availability, same source as the header badge */}
              <div className="group bg-black/40 border border-white/10 p-3 rounded-lg backdrop-blur-sm col-span-2 md:col-span-1 hover:border-green-500/30 transition-colors">
                <div className="text-[10px] text-neutral-500 font-mono tracking-widest mb-1">CURRENT_STATE</div>
                <div className={`text-sm font-mono flex items-center font-bold min-h-5 ${state?.text ?? "text-neutral-500"}`}>
                  {state && (
                    <>
                      <span className="relative flex h-2 w-2 mr-2">
                        {state.ping && <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${state.dot}`}></span>}
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${state.dot}`}></span>
                      </span>
                      {state.label}
                    </>
                  )}
                </div>
                <div className="text-[10px] text-green-500/50 font-mono mt-1">
                  Mon–Fri · {String(UPLINK_START).padStart(2, "0")}–{UPLINK_END}h PT
                </div>
              </div>

            </div>
          </div>
        </ScrollAnimation>

        {/* Right Column: Glitch Image */}
        <ScrollAnimation direction="right" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md mx-auto lg:max-w-full"
          >
            <GlitchImage
              src='/images/about.jpeg'
              alt="Ricky dressed as a wizard, pointing a wand"
              width={500}
              height={600}
              className="shadow-2xl shadow-green-500/10"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-green-500/30 rounded-br-xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-green-500/30 rounded-tl-xl"></div>
          </motion.div>
        </ScrollAnimation>

      </div>
    </div>
  )
};

export default About;
