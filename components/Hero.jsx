'use client';

/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { motion } from "framer-motion";
import ScrollAnimation from "../app/components/ScrollAnimation";
import HoverAnimation from "../app/components/HoverAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HackerText from "./ui/HackerText";
import CyberGlitchImage from "./ui/CyberGlitchImage";
import HumanTypewriter from "./ui/HumanTypewriter";

const Hero = () => {
  return (
    <div className="h-[45rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-transparent relative overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-4 max-w-7xl mx-auto z-10 w-full pt-20 md:pt-0">
        <ScrollAnimation direction="left">
          <div className="relative flex justify-center md:justify-start md:col-span-1">
            <CyberGlitchImage 
              src='/images/profile.jpeg' 
              width={350} 
              height={350} 
              alt="Ricky's personal headshot"
              className="border border-white/10 shadow-2xl shadow-black/50" 
            />
          </div>
        </ScrollAnimation>
        
        <div className="text-left md:col-span-2 md:text-left relative z-10">
          <ScrollAnimation direction="right" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold pb-4 font-mono tracking-tighter min-h-[5rem]">
              <HumanTypewriter 
                text="RICKY ALVES" 
                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
              />
              <br />
              <span className="text-2xl md:text-4xl font-normal text-green-400 font-mono mt-2 block tracking-normal">
                <HackerText text="> The Digital Alchemist" />
              </span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg leading-relaxed font-mono">
              <span className="text-green-500/50 mr-2">01</span>
              I'm a software wizard from Los Angeles.
              <br/>
              <span className="text-green-500/50 mr-2">02</span>
              Conjuring exceptional digital magic.
              <br/>
              <span className="text-green-500/50 mr-2">03</span>
              Weaving the matrix, one line at a time.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="social-icons flex flex-wrap justify-center md:justify-start items-center gap-4 mt-10">
              
              {/* Twitter / X Data Cartridge */}
              <a
                href="https://twitter.com/henriquesuper"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-3 bg-black/20 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-500 rounded-sm overflow-hidden"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-green-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-green-500 transition-colors duration-300"></div>
                
                <FaXTwitter className="text-xl text-neutral-500 group-hover:text-green-400 transition-colors duration-300 relative z-10" />
                
                <div className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out">
                  <span className="whitespace-nowrap pl-2 pr-2 text-xs font-mono text-green-500 tracking-widest border-l border-green-500/30">
                    :: UPLINK_X
                  </span>
                </div>
              </a>
              
              {/* GitHub Data Cartridge */}
              <a
                href="https://github.com/henriquesuper"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-3 bg-black/20 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-500 rounded-sm overflow-hidden delay-75"
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-green-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-green-500 transition-colors duration-300"></div>
                
                <FaGithub className="text-xl text-neutral-500 group-hover:text-green-400 transition-colors duration-300 relative z-10" />
                
                <div className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out">
                  <span className="whitespace-nowrap pl-2 pr-2 text-xs font-mono text-green-500 tracking-widest border-l border-green-500/30">
                    :: SRC_CODE
                  </span>
                </div>
              </a>
              
              {/* LinkedIn Data Cartridge */}
              <a
                href="https://linkedin.com/in/rickyalves/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-3 bg-black/20 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-500 rounded-sm overflow-hidden delay-150"
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-green-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-green-500 transition-colors duration-300"></div>
                
                <FaLinkedin className="text-xl text-neutral-500 group-hover:text-green-400 transition-colors duration-300 relative z-10" />
                
                <div className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out">
                  <span className="whitespace-nowrap pl-2 pr-2 text-xs font-mono text-green-500 tracking-widest border-l border-green-500/30">
                    :: NET_LINK
                  </span>
                </div>
              </a>

            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Hero;