"use client";

import * as React from "react";
import HackerText from "./ui/HackerText";
import TerminalWindow from "./ui/TerminalWindow";
import ScrollAnimation from "../app/components/ScrollAnimation";
import { skillsData } from "./data";

const groups = Object.entries(skillsData);
const moduleCount = groups.reduce((sum, [, items]) => sum + items.length, 0);

const Skills = () => {
  return (
    <div className="relative flex flex-col antialiased items-center justify-center z-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-400 font-mono mb-2">
          <HackerText text="> Neural_Extensions" />
        </h2>
        <div className="text-xs font-mono text-green-500/60 tracking-widest">
          MODULES_LOADED: {moduleCount}
        </div>
      </div>

      <div className="w-full max-w-4xl px-4">
      <ScrollAnimation direction="up">
        <TerminalWindow title="visitor@ricky-os:~$ cat skills.json">
          {/* Rendered as JSON so it reads exactly like the terminal command's output */}
          <div className="text-sm md:text-base leading-relaxed">
            <div className="text-neutral-500">{"{"}</div>
            {groups.map(([group, items], i) => (
              <div key={group} className="pl-10 md:pl-12 -indent-6 py-0.5">
                <span className="text-green-400">&quot;{group}&quot;</span>
                <span className="text-neutral-500">: </span>
                {/* Brackets and commas stick to their item; the space between items is where lines may wrap */}
                {items.map((item, j) => (
                  <React.Fragment key={item}>
                    <span className="whitespace-nowrap">
                      {j === 0 && <span className="text-neutral-500">[</span>}
                      <span className="text-neutral-100">&quot;{item}&quot;</span>
                      <span className="text-neutral-500">
                        {j < items.length - 1 ? "," : `]${i < groups.length - 1 ? "," : ""}`}
                      </span>
                    </span>
                    {j < items.length - 1 && " "}
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div className="text-neutral-500">{"}"}</div>
          </div>
        </TerminalWindow>
      </ScrollAnimation>
      </div>
    </div>
  )
}

export default Skills;
