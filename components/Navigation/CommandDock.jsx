"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { FaTerminal } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { getLAStatus } from "@/lib/la-status";

const MODE_LABELS = {
  uplink: "UPLINK_OPEN",
  sabbath: "OBSERVING_SABBATH",
  async: "ASYNC_MODE",
};

const MODE_NOTES = {
  uplink: "operator online — expect a fast reply.",
  sabbath: "sabbath in progress — replies resume after sundown.",
  async: "async hours — reply lands on the next uplink window.",
};

const PROJECTS = [
  { name: "unique-punch", desc: "GPS time clock & attendance app", href: "https://www.uniquepunch.app" },
  { name: "react-piano", desc: "Web Audio piano built with Tone.js", href: "https://github.com/henriquesuper/piano" },
];

const SKILLS = ["JavaScript", "React", "Node", "Python", "Swift", "Flutter", "HTML", "CSS"];

const COMMANDS = [
  "help",
  "whoami",
  "neofetch",
  "status",
  "cd ./bio",
  "cat skills.json",
  "ls ./work",
  "ssh uplink",
  "run ./piano.exe",
  "sudo hire_ricky",
  "matrix",
  "ping",
  "history",
  "clear",
  "exit",
];

const CommandDock = () => {
  const [activeSection, setActiveSection] = useState("");
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { id: "about", cmd: "cd ./bio" },
    { id: "skills", cmd: "cat skills.json" },
    { id: "projects", cmd: "ls ./work" },
    { id: "contact", cmd: "ssh uplink" },
    { id: "piano", cmd: "run ./piano.exe", type: "link", path: "/piano" },
  ];

  const scrollToSection = useCallback((id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  }, [pathname, router]);

  const handleNav = (item) => {
    if (item.type === "link") {
      router.push(item.path);
      return;
    }
    scrollToSection(item.id);
  };

  // Command interpreter. Returns an array of output lines.
  // A line is a string, or { text, href } for links.
  const execute = (raw) => {
    const trimmed = raw.trim();
    const cmd = trimmed.toLowerCase().replace(/\s+/g, " ");

    if (cmd.startsWith("echo ")) {
      return [trimmed.replace(/^\s*\S+\s+/, "")];
    }

    if (cmd.startsWith("sudo rm")) {
      return [
        "rm: cannot remove '/': Permission denied",
        "COUNTERMEASURES DEPLOYED :: visitor traced to [REDACTED]",
        "Nice try, though. I respect the audacity.",
      ];
    }

    switch (cmd) {
      case "help":
      case "?":
        return [
          "AVAILABLE PROTOCOLS:",
          "  help              this manual",
          "  whoami            identify current user",
          "  neofetch          system information",
          "  status            availability + local time",
          "  cd ./bio          jump to identity log",
          "  cat skills.json   dump loaded modules",
          "  ls ./work         list deployed constructs",
          "  ssh uplink        open a secure channel",
          "  run ./piano.exe   execute audio subroutine",
          "  sudo hire_ricky   escalate privileges",
          "  matrix            [REDACTED]",
          "  clear / exit      housekeeping",
          "",
          "hint: the filesystem hides things. try 'ls -la'.",
        ];

      case "neofetch": {
        const la = getLAStatus();
        return [
          "visitor@ricky-os",
          "────────────────────────────",
          "OS........ RICKY_OS v2.0 LTS",
          "KERNEL.... matrix-6.7.4-neo",
          "HOST...... Los Angeles, CA",
          `STATUS.... ${MODE_LABELS[la.mode]}`,
          `CLOCK..... ${la.time} PT`,
          "UPTIME.... since 'Hello, World!'",
          "SHELL..... alchemy.sh",
          "PKGS...... react next node swift flutter",
          "THEME..... phosphor-green [locked]",
          "CPU....... caffeine @ 12 cores",
          "MEM....... 99% music / 1% var names",
        ];
      }

      case "status":
      case "uptime": {
        const la = getLAStatus();
        return [
          `UPLINK STATUS :: ${MODE_LABELS[la.mode]}`,
          `LOCAL TIME... LOS_ANGELES ${la.time} PT`,
          "WINDOW....... Mon-Fri 08:00-18:00 PT",
          "SABBATH...... Friday sundown -> Saturday sundown (system rests)",
          `NOTE......... ${MODE_NOTES[la.mode]}`,
        ];
      }

      case "ls -la":
      case "ls -a":
        return [
          "total 5",
          "drwxr-xr-x  visitor  bio/",
          "drwxr-xr-x  visitor  work/",
          "-rw-r--r--  visitor  skills.json",
          "-rwx------  root     piano.exe",
          "-rw-------  root     .secret",
        ];

      case "cat .secret":
      case "cat secret": {
        const lines = [
          "DECRYPTING... ACCESS GRANTED.",
          "You actually explored. That's the whole point of this site.",
          { text: "Mention \"ricky-os\" in your message — it gets priority routing.", href: "mailto:hello@rickyalves.com?subject=ricky-os" },
        ];
        if (getLAStatus().mode === "sabbath") {
          lines.push("(sabbath in progress — your message is safe; the reply comes after sundown.)");
        }
        return lines;
      }

      case "ping":
        return [
          "PING rickyalves.com (34.0522°N, 118.2437°W): time=12ms",
          "PONG — uplink healthy.",
        ];

      case "pwd":
        return ["/home/visitor/rickyalves.com"];

      case "date":
        return [new Date().toUTCString()];

      case "history":
        return cmdHistory.length
          ? cmdHistory.map((c, i) => `  ${String(i + 1).padStart(3)}  ${c}`)
          : ["history: empty. make some."];

      case "coffee":
      case "brew install coffee":
        return ["brewing... ERROR: coffee.exe already consumed by developer.", "Try again tomorrow at 06:00 PST."];

      case "whoami":
        return [
          "visitor",
          "...but the interesting one is the sysadmin:",
          "RICKY ALVES — The Digital Alchemist. Software wizard based in Los Angeles.",
        ];

      case "cd ./bio":
      case "cd bio":
      case "about":
        scrollToSection("about");
        return ["Navigating to ~/identity ..."];

      case "cat skills.json":
      case "skills":
        scrollToSection("skills");
        return [
          "{",
          `  "modules": [${SKILLS.map((s) => `"${s}"`).join(", ")}],`,
          '  "status": "OPTIMIZED",',
          '  "learning": "always"',
          "}",
        ];

      case "ls ./work":
      case "ls work":
      case "ls":
      case "projects":
        scrollToSection("projects");
        return [
          "total 2 constructs deployed:",
          ...PROJECTS.map((p) => ({ text: `  ${p.name.padEnd(16)} ${p.desc}`, href: p.href })),
        ];

      case "ssh uplink":
      case "contact":
        scrollToSection("contact");
        return [
          "Establishing encrypted tunnel... OK",
          { text: "  hello@rickyalves.com  [click to transmit]", href: "mailto:hello@rickyalves.com" },
          `note: ${MODE_NOTES[getLAStatus().mode]}`,
        ];

      case "run ./piano.exe":
      case "run piano.exe":
      case "piano":
        router.push("/piano");
        return ["Loading audio subroutine... stand by."];

      case "sudo hire_ricky":
      case "hire_ricky":
      case "hire":
        return [
          "[sudo] password for visitor: ********",
          "ACCESS GRANTED :: PRIVILEGE ESCALATION SUCCESSFUL",
          "> Initiating recruitment protocol...",
          { text: "> Transmit offer to hello@rickyalves.com", href: "mailto:hello@rickyalves.com?subject=Recruitment%20Protocol" },
        ];

      case "sudo":
        return ["usage: sudo hire_ricky"];

      case "matrix":
        window.dispatchEvent(new Event("ricky:matrix-burst"));
        return [
          "Wake up, Neo...",
          "Reality recalibrated :: rain intensity boosted for 8 seconds.",
          "There is no spoon. Look behind the glass.",
        ];

      case "github":
        return [{ text: "github.com/henriquesuper", href: "https://github.com/henriquesuper" }];

      case "clear":
        setHistory([]);
        return null;

      case "exit":
      case "logout":
        setTerminalOpen(false);
        return null;

      case "":
        return [];

      default:
        return [`command not found: ${raw.trim()}`, "try 'help' for available protocols"];
    }
  };

  const submit = () => {
    const raw = input;
    setInput("");
    setHistIndex(-1);
    if (raw.trim()) setCmdHistory((prev) => [...prev, raw]);
    const lines = execute(raw);
    if (lines !== null) {
      setHistory((prev) => [...prev, { cmd: raw, lines }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const next = histIndex === -1 ? cmdHistory.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(next);
      setInput(cmdHistory[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex === -1) return;
      const next = histIndex + 1;
      if (next >= cmdHistory.length) {
        setHistIndex(-1);
        setInput("");
      } else {
        setHistIndex(next);
        setInput(cmdHistory[next]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.toLowerCase();
      if (!partial) return;
      const match = COMMANDS.find((c) => c.startsWith(partial));
      if (match) setInput(match);
    } else if (e.key === "Escape") {
      setTerminalOpen(false);
    }
  };

  // Global "/" shortcut opens the terminal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "/") return;
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || document.activeElement?.isContentEditable) return;
      e.preventDefault();
      setTerminalOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus input and greet when the terminal opens
  useEffect(() => {
    if (terminalOpen) {
      inputRef.current?.focus();
      setHistory((prev) => {
        if (prev.length > 0) return prev;
        const greeting = ["RICKY_OS v2.0 :: unauthorized access detected... just kidding, welcome."];
        if (getLAStatus().mode === "sabbath") {
          greeting.push(":: system observing sabbath — everything still works, replies resume after sundown ::");
        }
        greeting.push("type 'help' to see available protocols");
        return [{ cmd: null, lines: greeting }];
      });
    }
  }, [terminalOpen]);

  // Keep scrolled to bottom as output grows
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pb-4 px-4 pointer-events-none">

      {/* Terminal Panel */}
      <AnimatePresence>
        {terminalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-2xl mb-3 pointer-events-auto"
          >
            <div
              className="bg-black/90 backdrop-blur-xl border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10 overflow-hidden font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2 group/lights">
                  <button
                    onClick={(e) => { e.stopPropagation(); setTerminalOpen(false); }}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 flex items-center justify-center text-black/60 text-[8px] font-bold leading-none transition-colors"
                    aria-label="Close terminal"
                  >
                    <span className="opacity-0 group-hover/lights:opacity-100 transition-opacity">×</span>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setHistory([]); inputRef.current?.focus(); }}
                    className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 flex items-center justify-center text-black/60 text-[8px] font-bold leading-none transition-colors"
                    aria-label="Clear terminal"
                  >
                    <span className="opacity-0 group-hover/lights:opacity-100 transition-opacity">−</span>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); inputRef.current?.focus(); }}
                    className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 flex items-center justify-center text-black/60 text-[8px] font-bold leading-none transition-colors"
                    aria-label="Toggle terminal size"
                  >
                    <span className="opacity-0 group-hover/lights:opacity-100 transition-opacity">+</span>
                  </button>
                </div>
                <span className="text-[10px] text-neutral-500 tracking-widest">visitor@ricky-os: ~/secure_shell</span>
                <span className="w-9"></span>
              </div>

              {/* Output */}
              <div ref={scrollRef} className={cn("overflow-y-auto px-4 py-3 space-y-2 transition-all duration-300", expanded ? "max-h-[60vh]" : "max-h-64")}>
                {history.map((entry, i) => (
                  <div key={i}>
                    {entry.cmd !== null && (
                      <div className="text-neutral-400">
                        <span className="text-green-500 mr-2">$</span>
                        {entry.cmd}
                      </div>
                    )}
                    {entry.lines.map((line, j) =>
                      typeof line === "string" ? (
                        <div key={j} className="text-green-300/90 whitespace-pre-wrap pl-4 leading-relaxed">{line}</div>
                      ) : (
                        <a
                          key={j}
                          href={line.href}
                          target={line.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="block text-green-400 underline decoration-green-500/40 hover:decoration-green-400 whitespace-pre-wrap pl-4 leading-relaxed"
                        >
                          {line.text}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>

              {/* Input line */}
              <form
                className="flex items-center gap-2 px-4 py-2 border-t border-white/10"
                onSubmit={(e) => { e.preventDefault(); submit(); }}
              >
                <span className="text-green-500">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-green-300 placeholder-neutral-600 caret-green-400"
                  placeholder="type 'help' and press Enter"
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dock */}
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 md:px-6 py-3 shadow-2xl shadow-green-500/5 pointer-events-auto flex items-center gap-3 md:gap-8 max-w-full overflow-x-auto">

        {/* Terminal Toggle / Prompt */}
        <button
          onClick={() => setTerminalOpen((v) => !v)}
          className={cn(
            "flex items-center gap-2 font-mono text-sm transition-colors rounded px-2 py-1",
            terminalOpen ? "text-green-400 bg-green-500/10" : "text-green-500 opacity-70 hover:opacity-100 hover:bg-white/5"
          )}
          aria-label="Toggle terminal"
        >
          <FaTerminal className="text-xs" />
          <span className="hidden md:inline">visitor@ricky-os:~$</span>
          <span className="hidden md:inline text-[9px] text-neutral-600 border border-white/10 rounded px-1">/</span>
        </button>

        {/* Commands */}
        <div className="flex items-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              className={cn(
                "font-mono text-xs md:text-sm transition-all duration-300 px-3 py-1.5 rounded hover:bg-white/10 whitespace-nowrap",
                activeSection === item.id
                  ? "text-green-400 bg-green-500/10 border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]"
                  : "text-neutral-400 hover:text-green-300"
              )}
            >
              <span className="opacity-50 mr-1">{">"}</span>
              {item.cmd}
            </button>
          ))}

          <div className="w-2 h-4 bg-green-500 animate-pulse ml-2 hidden md:block"></div>
        </div>

      </div>
    </div>
  );
};

export default CommandDock;
