"use client";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaSwift } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import HackerText from "./ui/HackerText";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="group-hover:text-[#E34F26] transition-colors" />, name: 'HTML' },
    { icon: <FaCss3Alt className="group-hover:text-[#1572B6] transition-colors" />, name: 'CSS' },
    { icon: <FaJsSquare className="group-hover:text-[#F7DF1E] transition-colors" />, name: 'JavaScript' },
    { icon: <FaReact className="group-hover:text-[#61DAFB] transition-colors" />, name: 'React' },
    { icon: <FaNodeJs className="group-hover:text-[#339933] transition-colors" />, name: 'Node' },
    { icon: <FaPython className="group-hover:text-[#3776AB] transition-colors" />, name: 'Python' },
    { icon: <FaSwift className="group-hover:text-[#F05138] transition-colors" />, name: 'Swift' },
    { icon: <SiFlutter className="group-hover:text-[#02569B] transition-colors" />, name: 'Flutter' }, 
  ];

  return (
    <div className="py-20 relative flex flex-col antialiased items-center justify-center overflow-hidden z-10">
       <div className="text-center mb-10">
         <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 font-mono mb-2">
          <HackerText text="> Neural_Extensions" />
        </h2>
        <div className="text-xs font-mono text-green-500/60 tracking-widest">
          MODULES_LOADED: {skills.length}/{skills.length} | SYSTEM: OPTIMIZED
        </div>
       </div>
       
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="normal"
      />
    </div>
  )
}

export default Skills;