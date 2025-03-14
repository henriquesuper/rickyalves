'use client';

/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimation from "../app/components/ScrollAnimation";
import HoverAnimation from "../app/components/HoverAnimation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-16 px-8">
      <ScrollAnimation direction="left">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image src='/images/profile.jpeg' className="profile-img justify-self-center md:col-span-1" width={300} height={300} alt="Ricky's personal headshot" />
        </motion.div>
      </ScrollAnimation>
      
      <div className="text-left md:col-span-2 md:text-left">
        <ScrollAnimation direction="right" delay={0.2}>
          <div className="text-5xl font-extrabold mb-12 mt-12">
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              Hey, I'm Ricky
            </motion.span>
            <motion.span 
              className="inline-block ml-2"
              animate={{ 
                rotate: [0, 20, 0, 20, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            >
              👋
            </motion.span>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.4}>
          <p>
            I'm a software wizard hailing from the world of palm trees
            and traffic, Los Angeles. I'm skilled at conjuring exceptional
            websites, applications, and all sorts of digital magic in
            between. They don't call it "coding" here, it's more like
            weaving the matrix. And occasionally, I moonlight as a pixel
            Picasso, designing sleek interfaces that even Leonardo da
            Vinci would double-tap on Instagram.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.6}>
          <div className="social-icons flex justify-center md:justify-start items-center gap-4 mt-6">
            <HoverAnimation rotate={10}>
              <a
                href="https://twitter.com/henriquesuper"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </HoverAnimation>
            
            <HoverAnimation rotate={-10}>
              <a
                href="https://github.com/henriquesuper"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-700 transition-colors"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </HoverAnimation>
            
            <HoverAnimation rotate={10}>
              <a
                href="https://linkedin.com/in/rickyalves/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600 transition-colors"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </HoverAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Hero;