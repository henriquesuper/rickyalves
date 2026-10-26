import Image from "next/image";
import { projectData } from './data.js';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import HackerText from "./ui/HackerText";
import { cn } from "@/lib/utils";

const isExternal = (href) => href.startsWith('http');

const ProjectLink = ({ href, label, Icon }) => (
  <a
    href={href}
    {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="inline-flex items-center gap-2 h-10 px-4 border border-white/15 text-neutral-300 font-mono text-xs tracking-wider rounded-sm hover:border-green-500/50 hover:text-green-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    <Icon className="text-sm" aria-hidden="true" />
    {label}
  </a>
);

const CaseStudy = ({ project, index, total }) => {
  const { title, tagline, description, highlights, tags, image, imageAlt, links, testimonial } = project;
  const primaryHref = links.live || links.source;
  const flipped = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

      {/* Screenshot in a CRT frame */}
      <a
        href={primaryHref}
        {...(isExternal(primaryHref) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={`Open ${title}`}
        className={cn(
          "group relative block lg:col-span-7 rounded-lg border border-white/10 bg-black overflow-hidden hover:border-green-500/50 transition-colors",
          flipped && "lg:order-2"
        )}
      >
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 min-w-0 truncate font-mono text-[10px] text-neutral-500">
            {primaryHref.replace(/^https?:\/\/(www\.)?/, '')}
          </span>
        </div>
        <div className="relative aspect-16/10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 680px, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Faint scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px]" />
        </div>
      </a>

      {/* Write-up */}
      <div className={cn("lg:col-span-5", flipped && "lg:order-1")}>
        <div className="font-mono text-xs text-green-500/70 tracking-widest mb-3">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
        <h3 className="font-mono text-2xl md:text-3xl font-bold text-neutral-100 tracking-tight">
          {title}
        </h3>
        <p className="mt-2 font-mono text-sm text-green-400">{tagline}</p>
        <p className="mt-4 text-neutral-400 leading-relaxed">{description}</p>

        <ul className="mt-5 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-neutral-300">
              <span className="font-mono text-green-500" aria-hidden="true">›</span>
              {item}
            </li>
          ))}
        </ul>

        {testimonial && (
          <figure className="mt-6 border-l-2 border-green-500/40 pl-4">
            <blockquote className="text-sm text-neutral-300 italic leading-relaxed">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-2 font-mono text-[11px] tracking-wider">
              <span className="text-green-400">{testimonial.name}</span>
              <span className="text-neutral-500"> :: {testimonial.role}</span>
            </figcaption>
          </figure>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[11px] text-neutral-400 border border-white/10 rounded-sm px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {links.live && <ProjectLink href={links.live} label="./open_live" Icon={FaExternalLinkAlt} />}
          {links.source && <ProjectLink href={links.source} label="./view_source" Icon={FaGithub} />}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <div className="relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-400 font-mono mb-2">
          <HackerText text="> Deployed_Constructs" />
        </h2>
        <div className="text-xs font-mono text-green-500/60 tracking-widest">
          SELECTED_WORK :: {projectData.length} FILES
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-20 md:space-y-28">
        {projectData.map((project, i) => (
          <CaseStudy key={project.id} project={project} index={i} total={projectData.length} />
        ))}
      </div>
    </div>
  )
}

export default Projects;
