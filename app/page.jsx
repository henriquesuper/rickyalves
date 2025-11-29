'use client';

import * as React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import PageTransition from './components/PageTransition';
import { Spotlight } from '@/components/ui/Spotlight';
import MatrixRain from '@/components/ui/MatrixRain';

export default function Home() {
  return (
    <main className="w-full bg-black/[0.96] antialiased relative overflow-x-hidden text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MatrixRain />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      <PageTransition>
        <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <Hero />

          <div className="px-8">
            <section id="about" className="py-20">
              <About />
            </section>

            <section id="skills" className="py-10">
              <Skills />
            </section>

            <section id="projects" className="py-20">
              <Projects />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </PageTransition>
    </main>
  );
} 