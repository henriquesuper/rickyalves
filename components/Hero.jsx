'use client';

import * as React from 'react';
import ScrollAnimation from "../app/components/ScrollAnimation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HackerText from "./ui/HackerText";
import CyberGlitchImage from "./ui/CyberGlitchImage";
import HumanTypewriter from "./ui/HumanTypewriter";

const STACK = ["React", "Next.js", "Node", "Swift", "Flutter"];

const SOCIALS = [
  { href: "https://github.com/henriquesuper", label: "GitHub", Icon: FaGithub },
  { href: "https://linkedin.com/in/rickyalves/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://twitter.com/henriquesuper", label: "X", Icon: FaXTwitter },
];

const Hero = () => {
  return (
    <div className="min-h-svh w-full rounded-md flex items-center justify-center antialiased bg-transparent relative overflow-hidden py-16 md:py-24">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-4 max-w-7xl mx-auto z-10 w-full">
        <ScrollAnimation direction="left">
          <div className="relative flex justify-center md:justify-start md:col-span-1">
            <CyberGlitchImage
              src='/images/profile.jpeg'
              width={350}
              height={350}
              alt="Ricky's personal headshot"
              className="shadow-2xl shadow-black/50 w-full max-w-[240px] md:max-w-none"
            />
          </div>
        </ScrollAnimation>

        <div className="text-left md:col-span-2 relative z-10">
          <ScrollAnimation direction="right" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold pb-4 font-mono tracking-tighter min-h-20">
              <span className="sr-only">Ricky Alves — full-stack engineer in Los Angeles building web and mobile apps</span>
              <span aria-hidden="true">
                <HumanTypewriter
                  text="RICKY ALVES"
                  className="bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-400"
                />
                <br />
                <span className="text-2xl md:text-4xl font-normal text-green-400 font-mono mt-2 block tracking-normal">
                  <HackerText text="> The Digital Alchemist" />
                </span>
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.4}>
            <div className="mt-4 max-w-xl font-mono space-y-2">
              <p className="text-lg md:text-xl text-neutral-100 leading-snug">
                <span className="text-green-500/50 mr-2 text-base">01</span>
                Full-stack engineer based in Los Angeles.
              </p>
              <p className="text-base md:text-lg text-neutral-300 leading-snug">
                <span className="text-green-500/50 mr-2">02</span>
                Building web &amp; mobile apps — iOS and Android.
              </p>
              <p className="text-sm md:text-base text-neutral-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-green-500/50">03</span>
                {STACK.map((tech, i) => (
                  <React.Fragment key={tech}>
                    {i > 0 && <span className="text-green-500/40" aria-hidden="true">·</span>}
                    <span>{tech}</span>
                  </React.Fragment>
                ))}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.6}>
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 h-12 px-5 bg-green-500 text-black font-mono text-sm font-bold tracking-wider rounded-sm hover:bg-green-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                <span aria-hidden="true">&gt;</span>
                ssh uplink
                <span className="sr-only">— get in touch</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 h-12 px-5 border border-white/15 text-neutral-200 font-mono text-sm tracking-wider rounded-sm hover:border-green-500/50 hover:text-green-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                <span aria-hidden="true" className="text-green-500">&gt;</span>
                ls ./work
                <span className="sr-only">— see projects</span>
              </a>

              <nav aria-label="Social links" className="flex items-center gap-1 sm:ml-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 text-neutral-500 hover:text-green-400 transition-colors"
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </nav>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Hero;
