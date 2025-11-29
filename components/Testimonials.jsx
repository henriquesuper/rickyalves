"use client";
import React from "react";
import HackerText from "./ui/HackerText";
import TransmissionCard from "./ui/TransmissionCard";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO @ TechStart",
    message: "Ricky's code architecture is cleaner than a sterile lab. He built our MVP in record time. A true master of the digital craft."
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "CTO @ CyberSec",
    message: "We needed a fortress. He built us a vault. Impeccable security standards and a deep understanding of system integrity."
  },
  {
    id: 3,
    name: "Elena Rossi",
    role: "Lead Designer @ Studio",
    message: "He speaks fluent design. The animations he implemented were smoother than reality. Finally, a dev who cares about pixels."
  },
  {
    id: 4,
    name: "David Miller",
    role: "Founder @ AppWorks",
    message: "The 'Unique Punch' app changed our workflow entirely. He is a true alchemist of code, turning ideas into gold."
  },
  {
    id: 5,
    name: "Alex Thompson",
    role: "Product Manager @ Enterprise",
    message: "Unconventional methods, but undeniable results. A weapon of mass creation when it comes to solving complex logic puzzles."
  }
];

const Testimonials = () => {
  return (
    <div className="w-full relative z-10">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 font-mono mb-2">
          <HackerText text="> Intercepted_Comms" />
        </h2>
        <div className="text-xs font-mono text-green-500/60 tracking-widest">
          DECRYPTING_SECURE_CHANNELS...
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {testimonialsData.map((item, index) => (
          <TransmissionCard 
            key={item.id}
            id={item.id}
            name={item.name}
            role={item.role}
            message={item.message}
            delay={index}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Testimonials;
