'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = `px-3 py-2 rounded-md text-sm font-medium ${
    isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-gray-800 hover:bg-gray-200"
  }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white bg-opacity-90"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <Link href="/" className="font-sans tracking-tight text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Ricky's Code Chronicles
            </Link>
          </div>
          <div className="flex space-x-1 items-center">
            <Link href="/#about" className={linkClass}>About</Link>
            <Link href="/#skills" className={linkClass}>Skills</Link>
            <Link href="/#projects" className={linkClass}>Projects</Link>
            <Link href="/#contact" className={linkClass}>Contact</Link>
            <Link href="/piano" className={`ml-4 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 ${isScrolled ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
              Cast a Musical Spell
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;