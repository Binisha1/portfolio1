export const SKILL_DATA = [
  { name: "Next.js",      slug: "nextdotjs",          col: "e2e8f0", short: "React framework for production" },
  { name: "React",        slug: "react",               col: "61dafb", short: "UI component library" },
  { name: "Node.js",      slug: "nodedotjs",           col: "6cc24a", short: "JavaScript server runtime" },
  { name: "FastAPI",      slug: "fastapi",             col: "009688", short: "High-performance Python APIs" },
  { name: "AWS",          slug: "amazonwebservices",   col: "ff9900", short: "Cloud infrastructure & services" },
  { name: "Python",       slug: "python",              col: "4584b6", short: "Scripting and backend logic" },
  { name: "TypeScript",   slug: "typescript",          col: "3178c6", short: "Type-safe JavaScript" },
  { name: "PostgreSQL",   slug: "postgresql",          col: "699eca", short: "Relational database" },
  { name: "Docker",       slug: "docker",              col: "2496ed", short: "Container platform" },
  { name: "Tailwind CSS", slug: "tailwindcss",         col: "38bdf8", short: "Utility-first styling" },
];

export const PROJECTS = [
  {
    id: 0,
    name: "Ascend",
    tagline: "Productivity & goal tracking app",
    logo: "/ascendLogo.png",
    desc: "Productivity app with goal tracking, task scheduling, calendar, vision boards, and note-taking features, including affirmation audio playback. Implemented a serverless backend using AWS Lambda, deployed the frontend on Vercel, and utilized Supabase for database management and S3 for storage.",
    tech: ["Python", "Next.js", "FastAPI", "PostgreSQL", "S3", "React", "React Native", "Tailwind CSS"],
    year: "2024",
    gh: "#",
    live: "https://ascend-roan-one.vercel.app/",
  },
  {
    id: 1,
    name: "NEPSE Portfolio Tracker",
    tagline: "Stock analytics for Nepal investors",
    logo: "/nepselogo.png",
    desc: "Portfolio analytics dashboard for Nepal Stock Exchange (NEPSE) investors. Investors upload their TMS Trade Book (Excel) and MeroShare CDSC Holdings (CSV) to get an instant breakdown of their portfolio. Implemented a serverless backend using AWS Lambda, deployed the frontend on Vercel.",
    tech: ["React", "FastAPI", "AWS Lambda", "Recharts", "Docker", "Tailwind CSS"],
    year: "2024",
    gh: "#",
    live: "https://stock-portfolio-frontend-rouge.vercel.app/",
  },
  {
    id: 2,
    name: "Sudoku",
    tagline: "puzzle game ",
    logo: "/sudoku.png",
    platforms: ["Web", "Android"],
    images: undefined as string[] | undefined,
    video: undefined as string | undefined,
    desc: "Sudoku game for Web and Android with multiple difficulty levels, daily challenges, achievements.\n\nSkia canvas renders the 9×9 grid instead of React Native Views, GPU-accelerated drawing with zero layout overhead per cell tap.\n\nPuzzle generation moved off-device to a pre-built JSON bank, cutting cold-start from 3–11 s to near-instant. MMKV replaces AsyncStorage for persistence, synchronous reads, ~10× faster.\n\nMonetised with AdMob.",
    tech: ["React Native", "TypeScript", "Expo Router", "Zustand", "MMKV", "Skia Canvas", "Reanimated 4", "Gesture Handler", "AdMob"],
    techGroups: [
      { label: "Platform", items: ["React Native", "Expo SDK 56", "TypeScript", "React 19", "Expo Router"] },
      { label: "State & Storage", items: ["Zustand", "react-native-mmkv"] },
      { label: "UI & Animation", items: ["Skia Canvas (GPU rendering)", "Reanimated 4", "Gesture Handler", "Expo Haptics", "Expo Audio"] },
      { label: "Monetisation", items: ["AdMob (react-native-google-mobile-ads)"] },
    ],
    year: "2025",
    gh: "#",
    live: "https://soduko-five.vercel.app/",
    mobile: "https://expo.dev/accounts/binisha9/projects/sudoku/builds/44de5f3a-d654-461a-9322-6562805fa1d3",
  },
  {
    id: 3,
    name: "Chess",
    tagline: "Cross-platform chess app with AI & multiplayer",
    logo: "/chess.png",
    desc: "Cross-platform chess app built from a single codebase with all game logic, UI, and animations shared across platforms. Implemented 4 game modes: local pass-and-play with Fischer clocks, vs AI with 8 difficulty levels (powered by on-device Stockfish engine via native FFI reaching ~400 Elo), 29-lesson interactive learn mode, and real-time online multiplayer.\n\nDesigned serverless AWS backend: AppSync GraphQL + WebSocket subscriptions, 14 Lambda functions for server-authoritative move validation, DynamoDB, and Cognito guest auth. Implemented optimistic UI for online moves with server reconciliation and clean rollback on rejection.\n\nBuilt full in-game action suite: resign, draw offers, takeback requests, and rematch. Added in-game coach with real-time eval bar, blunder detection, hints, and post-game per-move quality grading with accuracy score. Wrote 50+ unit tests covering game logic and online state machine using in-memory fakes.",
    tech: ["Flutter", "Dart", "AWS AppSync", "AWS Lambda", "DynamoDB", "Cognito", "Riverpod", "Stockfish", "WebSocket"],
    year: "2024",
    gh: "#",
    live: "https://main.d1gvdb6tl6ncy7.amplifyapp.com/",
  },
  {
    id: 4,
    name: "Linear App Clone",
    tagline: "Faithful recreation of Linear's landing page",
    logo: "/linearlogo.png",
    desc: "A pixel-faithful recreation of the Linear project management landing page, built to practice advanced CSS techniques, animation, and responsive design with React and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    year: "2023",
    gh: "#",
    live: "https://linearclonebini.netlify.app/",
  },
  

];

export const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    company: "Blys",
    period: "June 2025 — Present",
    desc: "Building and maintaining full-stack features across web and mobile platforms.",
  },
  {
    role: "Full Stack Engineer",
    company: "Dhimay Tech",
    period: "July 2024 — May 2025",
    desc: "Developed scalable web applications and APIs, collaborated across the full product lifecycle.",
  },
];

export const CONTACT_LINKS = [
  {
    label: "Email",
    sub: "binisha4200@gmail.com",
    href: "mailto:binisha4200@gmail.com",
    icon: "https://cdn.simpleicons.org/gmail/8a8f98",
  },
  {
    label: "GitHub",
    sub: "Binisha1",
    href: "https://github.com/Binisha1",
    icon: "https://cdn.simpleicons.org/github/8a8f98",
  },
  {
    label: "LinkedIn",
    sub: "binisha-naga",
    href: "https://www.linkedin.com/in/binisha-naga-ab93b1294/",
    icon: null,
  },
  {
    label: "Resume",
    sub: "Download PDF",
    href: "/binisha-resume.pdf",
    icon: null,
    download: true,
  },
];
