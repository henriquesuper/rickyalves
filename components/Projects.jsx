import { projectData } from './data.js';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { FaGithub, FaTerminal, FaExternalLinkAlt } from "react-icons/fa";
import HackerText from "./ui/HackerText";

const Projects = () => {
  return (
    <div className="relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-400 font-mono mb-2">
          <HackerText text="> Deployed_Constructs" />
        </h2>
        <div className="text-xs font-mono text-green-500/60 tracking-widest">
          ACCESSING_SECURE_ARCHIVES...
        </div>
      </div>

      <BentoGrid className="max-w-6xl mx-auto px-4">
        {projectData && projectData.map((project) => {
          const isSource = project.gitHubLink.includes('github.com');
          return (
          <BentoGridItem
            key={project.id}
            title={project.title}
            description={project.description}
            header={
              project.testimonial ? (
                <figure className="flex flex-col justify-center gap-3 p-4 text-left w-full">
                  <blockquote className="font-mono text-xs md:text-sm leading-relaxed text-neutral-300">
                    <span className="text-green-500 mr-1">&gt;</span>
                    {project.testimonial.quote}
                  </blockquote>
                  <figcaption className="text-[10px] font-mono tracking-widest">
                    <span className="text-green-400">{project.testimonial.name}</span>
                    <span className="text-neutral-500"> :: {project.testimonial.role}</span>
                  </figcaption>
                </figure>
              ) : (
              <div className="flex flex-col items-center justify-center gap-2 text-neutral-500 group-hover/bento:text-green-400 transition-colors">
                 <FaTerminal className="text-5xl mb-2 opacity-50 group-hover/bento:opacity-100 transition-opacity" />
                 <div className="text-[10px] font-mono border-t border-white/10 pt-2 group-hover/bento:border-green-500/50">
                    FILE_ID: SEC-{project.id.toString().padStart(3, '0')}-X
                 </div>
              </div>
              )
            }
            icon={
              <a 
                href={project.gitHubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`${project.title} — ${isSource ? 'source code' : 'live site'}`}
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group/link"
              >
                 {isSource ? <FaGithub className="text-xl" /> : <FaExternalLinkAlt className="text-lg" />}
                 <span className="text-xs font-mono hidden group-hover/link:inline-block text-green-400">
                   {isSource ? './view_source' : './open_live'}
                 </span>
              </a>
            }
            className={project.featured ? "md:col-span-2" : ""}
          />
          );
        })}
      </BentoGrid>
    </div>
  )
}

export default Projects;