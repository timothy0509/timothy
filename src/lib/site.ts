export const site = {
  name: "Timothy Wong",
  title: "Timothy Wong — Information Technology, Economics & Accounting",
  description:
    "IT student in Hong Kong. I build web apps, run servers, and compete in CTFs.",
  email: "timothy@hkjc.uk",
  links: {
    github: "https://github.com/timothy0509",
    linkedin: "https://www.linkedin.com/in/timothy-wong-531a6b2ba/",
    instagram: "https://www.instagram.com/timothy0509/",
  },
  websites: [
    { name: "TimoDrive", url: "https://drive.hkjc.uk" },
    { name: "TimoETA", url: "https://eta.hkjc.uk" },
    { name: "TimoForums", url: "https://forums.hkjc.uk" },
    { name: "TimoJournal", url: "https://journal.hkjc.uk" },
  ],
} as const;

export const sections = [
  { id: "home", href: "#home", label: "Home", number: null },
  { id: "about", href: "#about", label: "About", number: "01" },
  { id: "projects", href: "#projects", label: "Projects", number: "02" },
  { id: "ctfs", href: "#ctfs", label: "CTFs", number: "03" },
  { id: "aspirations", href: "#aspirations", label: "Aspirations", number: "04" },
  { id: "contact", href: "#contact", label: "Contact", number: "05" },
] as const;

export type ProjectEntry = {
  title: string;
  year: string;
  tags: string[];
  subtitle?: string;
  description: string;
  href?: string;
};

export const projects: ProjectEntry[] = [
  {
    title: "Hong Kong Public Transport Real-Time ETA",
    year: "2024",
    tags: ["Web"],
    subtitle: "KMB · MTR · Light Rail",
    description:
      "A web app that pulls live arrival times from multiple Hong Kong transport services and shows them in one place.",
    href: "https://eta.hkjc.uk",
  },
  {
    title: "Minecraft server",
    year: "2023",
    tags: ["Hardware", "Ops"],
    subtitle: "Hardware + ops",
    description:
      "Turned a 10-year-old all-in-one PC into a dedicated Minecraft server for friends. Setup, troubleshooting, and keeping it running.",
  },
  {
    title: "Shared subscriptions",
    year: "2024",
    tags: ["Web"],
    subtitle: "Cost tracking",
    description:
      "Tracks shared streaming, music, and cloud subscriptions across friends and family to keep costs fair.",
  },
];
