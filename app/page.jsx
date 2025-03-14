'use client';

import * as React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import PageTransition from './components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="font-inter text-base leading-normal bg-white text-gray-800 max-w-6xl mx-auto px-8 shadow-lg rounded-lg my-8">
        <Hero />
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </PageTransition>
  );
} 