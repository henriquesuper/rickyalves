'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import HackerText from "./ui/HackerText";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass = "px-3 py-2 text-sm font-mono font-medium text-neutral-400 hover:text-green-400 transition-colors duration-200";

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 shadow-lg shadow-green-900/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold font-mono">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="tracking-tight text-white hover:text-green-400 transition-colors duration-300"
            >
              <span className="text-green-500 mr-2">{">"}</span>
              <HackerText text="Ricky's_Code_Chronicles" />
              <span className="animate-pulse text-green-500">_</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-2 items-center">
            <Link href="#about" className={linkClass}>
              <HackerText text="~/about" />
            </Link>
            <Link href="#skills" className={linkClass}>
              <HackerText text="~/skills" />
            </Link>
            <Link href="#projects" className={linkClass}>
              <HackerText text="~/projects" />
            </Link>
            <Link href="#contact" className={linkClass}>
              <HackerText text="~/contact" />
            </Link>
            
            <Link href="/piano" className="ml-6 group relative inline-flex h-9 overflow-hidden rounded-none border border-green-500/50 bg-black/50 hover:bg-green-500/10 focus:outline-none transition-all">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <span className="font-mono text-xs">Let's_Jam</span>
              </span>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-green-400 duration-300 group-hover:translate-x-full ease">
                <span className="font-mono text-xs">./play_piano.sh</span>
              </span>
              <span className="relative invisible font-mono text-xs px-4 py-2">./play_piano.sh</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button Placeholder - sticking to simple md:flex for now as per request focus on style */}
          <div className="md:hidden text-white font-mono text-xs">
            [MENU]
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;