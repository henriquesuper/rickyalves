export const projectData = [
    {
      id: 1,
      title: 'Unique Punch',
      tagline: 'Location-verified time clock for hourly teams.',
      description:
        'A time clock and attendance app for businesses whose staff move between sites and roles. Workers punch in from their phone, and the app checks they are actually at the workplace. Architected, designed and engineered solo, from the mobile apps to the marketing site.',
      highlights: [
        'GPS location verification on every punch',
        'Switch positions mid-shift without punching out',
        'Shipped on the App Store and Google Play, in English, Spanish and Portuguese',
      ],
      tags: ['Flutter', 'iOS', 'Android', 'Geolocation', 'i18n'],
      image: '/images/projects/unique-punch.jpg',
      imageAlt: 'Unique Punch landing page with an interactive phone demo of the punch-in screen',
      links: { live: 'https://www.uniquepunch.app' },
      testimonial: {
        quote: 'Clean interface, reliable performance, and excellent service tracking feature. Makes workforce management really simple.',
        name: 'Abner Almeida',
        role: 'Chief of Operations',
      },
    },
    {
      id: 2,
      title: 'RICKY_OS',
      tagline: 'This site — a portfolio you can type into.',
      description:
        'A terminal-themed portfolio where the command dock is a real shell: navigation, easter eggs and live system status all run through it. The availability badge follows Los Angeles time and switches to Sabbath mode from Friday to Saturday sundown.',
      highlights: [
        'Working terminal with history and tab completion (press / anywhere)',
        'Live LA-time availability with Sabbath mode',
        'Canvas Matrix rain that lands and bounces on the footer',
      ],
      tags: ['Next.js', 'React', 'Tailwind', 'Framer Motion', 'Canvas'],
      image: '/images/projects/ricky-os.jpg',
      imageAlt: 'The RICKY_OS terminal open over the portfolio home page, showing neofetch output',
      links: { source: 'https://github.com/henriquesuper/rickyalves' },
    },
    {
      id: 3,
      title: 'Sonic Synthesis Terminal',
      tagline: 'A playable piano that guesses the song you are playing.',
      description:
        'A browser piano built on the Web Audio API through Tone.js. It plays real piano samples, falls back to a synth if they fail to load, and listens to what you play to recognize songs from its library.',
      highlights: [
        'Sampled piano with a synth fallback',
        'Fuzzy melody matching tolerates near-miss notes',
        'Built-in song library to play along with',
      ],
      tags: ['React', 'Tone.js', 'Web Audio'],
      image: '/images/projects/piano.jpg',
      imageAlt: 'Sonic Synthesis Terminal: a full-width piano keyboard above a terminal log and pattern match panel',
      links: { live: '/piano', source: 'https://github.com/henriquesuper/piano' },
    },
  ];
