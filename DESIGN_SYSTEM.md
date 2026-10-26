# 🟢 The Digital Alchemist: Design System & Theme Bible

**Version:** 1.1.0  
**System:** RICKY_ALVES_OS  
**Status:** ONLINE

---

## 👁️ The Vision
This is not a portfolio; it is a **Secure Cyber-Deck Interface**. 
The user is not "visiting a website"; they are **establishing a neural uplink** to Ricky Alves' digital construct.

The aesthetic is **"High-Fidelity Cyberpunk"**. It blends the raw, terminal-based nostalgia of the Matrix with modern, polished UI patterns (Aceternity/Shadcn). It balances "Chaos" (glitches, rain) with "Order" (grids, terminal windows).

## 🎨 Visual Language

### 1. Color Palette
*   **Background:** `Deep Void Black` (#000000) to `Dark Grid` (#0a0a0a).
*   **Primary Accent:** `Matrix Green` / `Emerald` (Tailwind `green-500`, `emerald-400`). Used for success states, active links, and terminal prompts.
*   **Secondary Accent:** `System Purple` (Tailwind `purple-500`). Used for magical/alchemist elements.
*   **Glitch Accents:** `Cyber Cyan` & `Plasma Red` (Standard chromatic aberration split).
*   **Text:** `Neutral-300/400` for body (readable), `White` for headers.

### 2. Typography
*   **Headers & Data:** **Monospace** (`font-mono`). Used for titles, stats, buttons, and navigation.
    *   *Style:* `tracking-widest`, `uppercase`, `>_` prefixes.
*   **Body Content:** **Sans-Serif** (`Inter`). Used for long-form reading (About section) to ensure legibility despite the heavy theme.

---

## 🧩 Core Components (The "Constructs")

### 1. Navigation: "The Terminal"
*   **SystemHeader** (`components/Navigation/SystemHeader.jsx`): fixed `~/RICKY_ALVES` home button and the live availability badge (`UPLINK_OPEN` / `ASYNC_MODE` / `SABBATH_MODE`) with the Los Angeles clock. Sits on a black-to-transparent fade so content never bleeds through.
*   **CommandDock** (`components/Navigation/CommandDock.jsx`): bottom dock of section shortcuts, plus a real shell (press `/` anywhere) with history and tab completion. `whoami`, `cat skills.json` and `ls ./work` print from `components/data.js`, so the terminal and the page never disagree.

### 2. Hero: "The Matrix"
*   **Background:** Full-screen canvas Matrix rain (`MatrixRain.jsx`) behind everything; drops land and bounce on the footer.
*   **Avatar:** `CyberGlitchImage` — grayscale with a phosphor tint at rest, signal corruption on hover.
*   **Text:** `RICKY ALVES_` typewriter, `> The Digital Alchemist`, then three numbered lines (`01`/`02`/`03`) in a fixed-width number gutter: role, platforms, stack.
*   **Actions:** primary `> ssh uplink` (solid green → contact) and secondary `> ls ./work` (outline → projects), then a row of social icons.

### 3. About: "Identity Log"
*   **Container:** `TerminalWindow` with `$ whoami`, `$ cat focus.txt`, `$ cat offline.txt` blocks. Emphasis is white, not rainbow syntax colors.
*   **Stats:** three modules with real data only — `GEO_LOCK` (LA), `LOCALE` (EN · PT-BR), `CURRENT_STATE` (live, from `getLAStatus()`).

### 4. Skills: "Neural Extensions"
*   **Design:** a static `cat skills.json` terminal window, grouped (`mobile`, `web`, `backend`, `also`). Arrays wrap between items with a hanging indent.
*   **Data:** `skillsData` in `components/data.js`.

### 5. Projects: "Deployed Constructs"
*   **Design:** alternating case-study rows. Screenshot in a browser/CRT frame (URL bar, faint scanlines) on one side; index (`01 / 03`), title, tagline, write-up, highlights, optional client quote, tags and `./open_live` / `./view_source` links on the other.
*   **Data:** `projectData` in `components/data.js`. Screenshots live in `public/images/projects/` (1440×900 JPEG).

### 6. Contact: "Secure Uplink"
*   **Visuals:** HUD frame with corner brackets, spinning-border `INITIATE_TRANSMISSION` button (mono), and the email address in plain sight. Shows a Sabbath note while `SABBATH_MODE` is active.

### 7. Footer: "Kernel Status"
*   **Content:** `$ uptime` year-progress bar, `$ logout` with social links, "Connection to ricky-os closed."

---

## 🕹️ Interaction Guidelines

1.  **Real data over fake HUD:** the theme is the costume, not the content. Prefer live, true readouts (LA clock, Sabbath mode, year progress, actual projects) over decorative fakes like simulated latency, "AES-256" or clearance levels.
2.  **One title pattern:** section headings are `> Name` in mono, white-to-neutral gradient, `text-2xl md:text-4xl` so they fit one line on phones.
3.  **Hover Everything:** the system should feel reactive — borders glow, text scrambles, images glitch.
4.  **Deterministic Chaos:** use `Math.random()` sparingly to avoid hydration errors.
5.  **Performance:** animations (Matrix rain, glitch) must run on canvas or CSS transforms at 60fps; respect `prefers-reduced-motion`.

## 📁 File Structure Map

*   `components/ui/` -> **The Atomic Elements**
    *   `HackerText.jsx`: scramble text effect.
    *   `HumanTypewriter.jsx`: typed hero name.
    *   `MatrixRain.jsx`: canvas background.
    *   `TerminalWindow.jsx`: glass terminal container.
    *   `CyberGlitchImage.jsx` / `GlitchImage.jsx`: glitch photos (hero / about).
    *   `NeuralCursor.jsx`: custom cursor.
*   `components/` -> **The Sections**
    *   `Hero.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, `Contact.jsx`, `Footer.jsx`.
    *   `data.js`: projects and skills, shared by the page and the terminal.
*   `components/Navigation/` -> `SystemHeader.jsx`, `CommandDock.jsx`.

---

**"Weaving the matrix, one line at a time."**
