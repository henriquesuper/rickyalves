import { projectData } from './data.js';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { FaFolderOpen, FaGithub, FaCode, FaTerminal } from "react-icons/fa";
import HackerText from "./ui/HackerText";

const Projects = () => {
  return (
    <div className="py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 font-mono mb-2">
          <HackerText text="> Deployed_Constructs" />
        </h2>
        <div className="text-xs font-mono text-green-500/60 tracking-widest">
          ACCESSING_SECURE_ARCHIVES...
        </div>
      </div>

      <BentoGrid className="max-w-6xl mx-auto px-4">
        {projectData && projectData.map((project, i) => (
          <BentoGridItem
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            header={
              <div className="flex flex-col items-center justify-center gap-2 text-neutral-500 group-hover/bento:text-green-400 transition-colors">
                 <FaTerminal className="text-5xl mb-2 opacity-50 group-hover/bento:opacity-100 transition-opacity" />
                 <div className="text-[10px] font-mono border-t border-white/10 pt-2 group-hover/bento:border-green-500/50">
                    FILE_ID: SEC-{project.id.toString().padStart(3, '0')}-X
                 </div>
              </div>
            }
            icon={
              <a 
                href={project.gitHubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group/link"
              >
                 <FaGithub className="text-xl" />
                 <span className="text-xs font-mono hidden group-hover/link:inline-block text-green-400">./view_source</span>
              </a>
            }
            className={i === 1 || i === 2 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default Projects;