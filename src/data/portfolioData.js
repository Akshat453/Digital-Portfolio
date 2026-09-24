// ─── Profile ────────────────────────────────────────────────────────────────
export const profile = {
  name: "Akshat Singh",
  tagline:
    "I build full-stack applications, RAG systems, and real-time data pipelines.",
  description:
    "I've worked on production RAG at Indium Tech, contributed to CloudCV through Google Summer of Code, and built projects across full-stack development and data engineering.",
  email: "akshat.singh11123@gmail.com",
  github: "https://github.com/Akshat453",
  linkedin: "https://www.linkedin.com/in/akshatsingh12",
  location: "India",
  resumePath: "/Akshat_Singh_Resume.pdf",
};

// ─── Experiences ─────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: "indium",
    primaryTitle: "Software Developer Intern · Indium Tech",
    secondaryRole: null,
    date: "May 2026 — Jul 2026",
    description:
      "Worked on a production Retrieval-Augmented Generation platform for ingesting and searching information across documents and code sources. My work covered the Django backend, document processing and retrieval pipeline, Qdrant and PostgreSQL storage, and a React analytics interface for understanding search and feedback data.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Qdrant",
      "RAG",
      "React",
    ],
  },
  {
    id: "gsoc",
    primaryTitle: "Google Summer of Code 2025",
    secondaryRole: "Open Source Contributor · CloudCV",
    date: "May 2025 — Sep 2025",
    description:
      "Contributed to EvalAI, CloudCV's open-source platform for evaluating machine-learning challenges. I worked across product improvements, leaderboard and navigation features, analytics functionality, backend reliability, and automated testing within the existing Django codebase.",
    technologies: [
      "Python",
      "Django",
      "Testing",
      "GitHub",
      "Open Source",
    ],
  },
];

// ─── Projects (Order: Applauz → CommunityCollab → QuantEdge) ─────────────────
export const projects = [
  {
    slug: "applauz",
    name: "Applauz",
    subtitle: "Rewards & Recognition Platform",
    date: "May 2026 — Jul 2026",
    description:
      "A rewards and recognition platform for employees to recognize contributions, manage recognition workflows, and interact with a shared rewards system.",
    technologies: [
      "React",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://github.com/Akshat453/Applauz",
    live: "",
  },
  {
    slug: "community-collab",
    name: "CommunityCollab",
    subtitle: "Community Collaboration Platform",
    date: "",
    description:
      "A community collaboration platform that brings resource sharing, skill exchange, events, group buying, assistance, and real-time communication into one place.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    github: "https://github.com/Akshat453/CommunityCollab",
    live: "https://community-collab-sandy.vercel.app/",
  },
  {
    slug: "quantedge",
    name: "QuantEdge",
    subtitle: "Real-Time Stock Market Analytics",
    date: "Mar 2026 — Jul 2026",
    description:
      "A real-time stock analytics platform that processes streaming market data with Kafka and Spark and presents market insights through an interactive dashboard.",
    technologies: [
      "Kafka",
      "Spark",
      "Python",
      "Streamlit",
      "Parquet",
      "Docker",
    ],
    github: "https://github.com/Akshat453/QuantEdge",
    live: "",
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = {
  university: "Pandit Deendayal Energy University",
  degree: "B.Tech · Computer Engineering",
  period: "2023 — 2027",
  cgpa: "8.31 / 10",
};

// ─── Achievements ────────────────────────────────────────────────────────────
export const achievements = [
  {
    title: "Google Summer of Code 2025",
    organization: "CloudCV · EvalAI",
    role: "Open Source Contributor",
    year: "2025",
    description:
      "Selected as an open-source contributor with CloudCV, contributing to the EvalAI platform.",
  },
];

// ─── Leadership ──────────────────────────────────────────────────────────────
export const leadership = {
  role: "Public Relations Core",
  organization: "Anirveda Techno-Economics Club",
  description:
    "Worked on public relations, outreach, partnerships, and event promotion as part of Anirveda Techno-Economics Club, collaborating across teams to support the club's events and community initiatives.",
};

// ─── Skills / Technical Toolkit ──────────────────────────────────────────────
export const skillCategories = [
  {
    title: "Programming Languages",
    items: ["C++", "Python", "JavaScript", "SQL", "Streamlit", "Plotly"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "Django"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Parquet"],
  },
  {
    title: "AI / GenAI",
    items: ["Retrieval-Augmented Generation (RAG)", "Qdrant", "LLMs"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "CI/CD",
      "Docker",
      "Apache Kafka",
      "Apache Spark",
    ],
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Communication", "Leadership"],
  },
];

// ─── Section labels ──────────────────────────────────────────────────────────
export const sectionLabels = {
  about: { number: "01", title: "ABOUT" },
  experience: { number: "02", title: "EXPERIENCE" },
  work: { number: "03", title: "SELECTED WORK" },
  toolkit: { number: "04", title: "TOOLKIT" },
  education: { number: "05", title: "EDUCATION" },
  achievements: { number: "06", title: "ACHIEVEMENTS" },
  leadership: { number: "07", title: "LEADERSHIP" },
  contact: { number: "08", title: "CONTACT" },
};
