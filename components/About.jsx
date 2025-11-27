'use client';

import * as React from 'react';
import { motion } from "framer-motion";
import ScrollAnimation from "../app/components/ScrollAnimation";
import TerminalWindow from "./ui/TerminalWindow";
import GlitchImage from "./ui/GlitchImage";
import HackerText from "./ui/HackerText";

const About = () => {
  return (
    <div className="relative z-10 py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Terminal Bio */}
        <ScrollAnimation direction="left">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-2 font-mono">
              <HackerText text="Identity_Log_v1.0" />
            </h2>
            
            <TerminalWindow title="root@ricky-os:~/identity">
              <div className="space-y-4 text-neutral-300 leading-relaxed font-mono">
                <p>
                  <span className="text-green-400 mr-2">$</span>
                  Donning my developer cape, I function as a <span className="text-yellow-400">Cyber_Sherlock_Holmes</span>, 
                  sleuthing out elegant solutions for cryptic digital conundrums.
                </p>
                <p>
                  <span className="text-green-400 mr-2">$</span>
                  My stack is fueled by <span className="text-blue-400">HTML</span>, <span className="text-blue-400">CSS</span>, 
                  and the mystical arts of <span className="text-yellow-400">JavaScript</span>. 
                  I seamlessly toggle between front-end aesthetics and back-end logic like a 
                  <span className="text-purple-400"> code-wielding_ballerina</span>.
                </p>
                <p>
                  <span className="text-green-400 mr-2">$</span>
                  Current Quest: Brewing up a storm in the realm of <span className="text-orange-400">Swift</span>. 
                  Brace yourselves, system update imminent...
                </p>
              </div>
            </TerminalWindow>

            {/* System Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-black/40 border border-white/10 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-xs text-neutral-500 font-mono mb-1">LOCATION</div>
                <div className="text-sm text-green-400 font-mono">Los Angeles, CA</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-xs text-neutral-500 font-mono mb-1">CLASS</div>
                <div className="text-sm text-purple-400 font-mono">Full Stack Wizard</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-3 rounded-lg backdrop-blur-sm col-span-2 md:col-span-1">
                <div className="text-xs text-neutral-500 font-mono mb-1">STATUS</div>
                <div className="text-sm text-emerald-400 font-mono flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
                  Online / Creating
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
              alt="Ricky's Secure ID" 
              width={500} 
              height={600}
              className="border-2 border-white/5 shadow-2xl shadow-green-500/10"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-green-500/30 rounded-br-xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-green-500/30 rounded-tl-xl"></div>
          </motion.div>
        </ScrollAnimation>
        
      </div>
    </div>
  )
}

export default About;