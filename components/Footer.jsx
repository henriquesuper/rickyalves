import { useState, useEffect } from "react";

const TOTAL_BLOCKS = 20;

const YearProgressLine = () => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 1);
      const end = new Date(now.getFullYear() + 1, 0, 1);
      setProgress(((now - start) / (end - start)) * 100);
    };

    updateProgress();
    const timer = setInterval(updateProgress, 1000);
    return () => clearInterval(timer);
  }, []);

  if (progress === null) return null;

  let statusColor = "text-green-500";
  let statusText = "OPTIMAL";

  if (progress > 95) {
    statusColor = "text-red-500";
    statusText = "CRITICAL";
  } else if (progress > 85) {
    statusColor = "text-yellow-500";
    statusText = "WARNING";
  }

  const filled = Math.floor((progress / 100) * TOTAL_BLOCKS);

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className="text-neutral-500 whitespace-nowrap">CYCLE_{new Date().getFullYear()}</span>
      <span aria-hidden="true" className="whitespace-nowrap">
        <span className={statusColor}>{"▮".repeat(filled)}</span>
        <span className="text-neutral-700">{"░".repeat(TOTAL_BLOCKS - filled)}</span>
      </span>
      <span className="whitespace-nowrap">
        <span className={`${statusColor} tabular-nums`}>{progress.toFixed(6)}%</span>
        <span className="text-neutral-600"> :: </span>
        <span className={statusColor}>{statusText}</span>
      </span>
    </span>
  );
};

const socialLinks = [
  { label: "X", href: "https://twitter.com/henriquesuper" },
  { label: "GITHUB", href: "https://github.com/henriquesuper" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/rickyalves/" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-10 bg-black border-t border-white/10 font-mono text-xs md:text-sm pt-8 pb-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-8 space-y-3">

        {/* $ uptime */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <span className="text-neutral-500">
            <span className="text-green-500 mr-2">$</span>uptime
          </span>
          <YearProgressLine />
        </div>

        {/* $ logout + uplinks */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span className="text-neutral-500">
            <span className="text-green-500 mr-2">$</span>logout
            <span className="text-neutral-600"> — SYSTEM_ID: RICKY_ALVES · © {currentYear}</span>
          </span>

          <nav aria-label="Social links" className="flex items-center gap-4">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-green-400 transition-colors tracking-widest"
              >
                [{label}]
              </a>
            ))}
          </nav>
        </div>

        {/* credits */}
        <div className="text-neutral-600">
          rain glyphs: Matrix-Code font by{" "}
          <a
            href="https://github.com/Rezmason/matrix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-green-400 transition-colors"
          >
            Rezmason
          </a>{" "}
          (
          <a
            href="/fonts/Matrix-Code.LICENSE.txt"
            className="text-neutral-500 hover:text-green-400 transition-colors"
          >
            MIT
          </a>
          )
        </div>

        {/* session end */}
        <div className="text-neutral-600">
          Connection to ricky-os closed.
          <span className="animate-pulse text-green-500 ml-1">_</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
