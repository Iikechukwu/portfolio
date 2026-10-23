/**
 * All copy for the site lives in this file.
 */

export type Project = {
  name: string;
  year: string;
  status: "live" | "wip" | "done" | "archived";
  description: string;
  stack: string[];
  href?: string; // live site
  repo?: string; // source code
};

export type Job = {
  period: string;
  role: string;
  company: string;
  href?: string;
  points: string[];
};

export const site = {
  name: "Ikechukwu Iyke-Ogbo",
  handle: "ikechukwu",
  role: "Machine Learning / Data Science",
  tagline: "Computer vision, NLP, and continual learning.",
  intro:
    "I build applied machine learning systems across computer vision, NLP, and embedded hardware, and I’m developing independent research on why neural networks lose the ability to keep learning. I’m currently working toward graduate study in AI/ML.",
  availability: "Open to freelance, contract, and full-time ML roles",
  location: "Abuja, Nigeria",
  timeZone: "Africa/Lagos", // IANA zone, drives the clock in the status bar
  email: "iykeogboikechukwu@gmail.com",
  resume: "/resume.pdf",
  avatar: null as string | null, // e.g. "/avatar.jpg" (put the file in /public)
  initials: "II",
  socials: {
    github: "https://github.com/Iikechukwu/",
    linkedin: "https://www.linkedin.com/in/iiikechukwu",
  },
} as const;

/** Order here = order in the nav and the status bar. `id` must match a section id. */
export const nav = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "research", label: "research" },
  { id: "contact", label: "contact" },
] as const;

export const about = {
  paragraphs: [
    "I’m a Computer Science graduate with an applied machine learning background spanning computer vision, deep learning system integration, and NLP. I built and evaluated a speech-to-speech translation pipeline (ASR, neural machine translation, TTS) and led system integration on a real-time, multi-model computer vision capstone covering face recognition, object detection, and tracking.",
    "I like applying technology to real-world problems. Right now I’m deepening my NLP and applied ML skills ahead of graduate study in AI/ML, and developing an independent research project on diagnosing and preserving neural plasticity in continual learning.",
  ],
  facts: [
    { key: "focus", value: "Computer vision, NLP, continual learning" },
    { key: "stack", value: "Python, OpenCV, YOLOv8, Whisper, scikit-learn" },
    { key: "based", value: "Abuja, Nigeria (remote friendly)" },
    { key: "now", value: "Researching neural plasticity; preparing for a master’s in AI/ML" },
  ],
};

export const education = [
  {
    period: "2021 – 2025",
    school: "Covenant University",
    degree: "B.Sc. Computer Science",
    place: "Ogun State, Nigeria",
    thesis:
      "Development of an Optimal Study Planner Using Hierarchical Task Networks and Constraint Satisfaction",
    coursework:
      "Software Engineering, Object Oriented Programming, Algorithms and Data Structures, Programming Languages, Graphics and Animation, Human-Computer Interaction, Computer Security, Artificial Intelligence",
  },
];

export const skills = [
  { group: "languages", items: ["Python", "NumPy", "Pandas", "Jupyter", "Google Colab", "Git/GitHub"] },
  {
    group: "ml",
    items: ["scikit-learn", "Transfer Learning", "Continual Learning", "Model Evaluation (WER, BLEU, mAP)", "Hugging Face Transformers"],
  },
  { group: "vision", items: ["OpenCV", "YOLOv8", "ArcFace", "ByteTrack", "Roboflow"] },
  { group: "nlp", items: ["Whisper (ASR)", "Neural Machine Translation", "gTTS", "Gradio"] },
  { group: "systems", items: ["PyQt5", "Multithreading (QThread)", "Arduino", "Sensor Integration", "Closed-Loop Control"] },
  { group: "other", items: ["AI Automation", "Product Design"] },
];

export const experience: Job[] = [
  {
    period: "Dec 2025 – Oct 2026",
    role: "Engineering Intern",
    company: "National Centre for Artificial Intelligence and Robotics (NCAIR)",
    points: [
      "Built FlowPOS, a cashierless retail system combining ArcFace face recognition, a custom YOLOv8 detector (~88% mAP@50), and ByteTrack tracking, and owned its system integration and PyQt5 desktop UI.",
      "Co-built two embedded prototypes: a self-balancing robot on an Arduino Uno and an infrared-sensor smart room with a live web dashboard.",
      "Fine-tuned MobileNetV2 on the Intel Image Classification dataset and built scikit-learn regression and classification pipelines on the Titanic and house price datasets.",
      "Contributed to a group analysis of Nigerian hospital performance using NMIS and GRID3 facility data.",
    ],
  },
];

/** Newest first. */
export const projects: Project[] = [
  {
    name: "Smart Room Automation System",
    year: "Oct 2026",
    status: "done",
    description:
      "A prototype smart room that cuts power to appliances when it becomes empty and restores it when someone arrives. Infrared sensors count people for occupancy, a DHT sensor tracks temperature, and a web frontend shows live status. Built at NCAIR.",
    stack: ["Infrared sensors", "DHT sensor", "Web frontend"],
  },
  {
    name: "Self-Balancing Robot",
    year: "Sep 2026",
    status: "done",
    description:
      "A two-wheeled robot on an Arduino Uno that stays upright by reading tilt from a gyroscope and driving dual DC motors in a closed feedback loop. Built at NCAIR.",
    stack: ["Arduino Uno", "Gyroscope", "DC motors"],
  },
  {
    name: "Speech-to-Speech Translation Pipeline",
    year: "Jul 2026",
    status: "done",
    description:
      "A Spanish→English pipeline chaining Whisper, a Helsinki-NLP translation model, and gTTS behind a Gradio interface, with a Yoruba→English track to study low-resource failure modes such as ASR hallucination. Spanish WER ≈ 8%, BLEU ≈ 11.5.",
    stack: ["Whisper", "Helsinki-NLP", "gTTS", "Gradio", "Google Colab"],
  },
  {
    name: "Financial Insight Application",
    year: "Jul 2026",
    status: "wip",
    description:
      "An app that analyzes Nigerian bank statements (GTBank, Access Bank, UBA) to generate spending insights. I chose an LLM-API approach over fine-tuning, using anonymized transaction data to cut cost and meet NDPR data-privacy requirements.",
    stack: ["LLM API", "Data privacy (NDPR)"],
  },
  {
    name: "FlowPOS: Smart Inventory Surveillance",
    year: "Jun 2026",
    status: "done",
    description:
      "A cashierless retail system with ArcFace face recognition, a custom YOLOv8s snack detector (8 classes, ~88% mAP@50), ByteTrack tracking, and OpenCV tripwire logic for pickup and return events. I owned integration and the multithreaded PyQt5 UI, and led testing and the faculty defense. Built at NCAIR.",
    stack: ["ArcFace", "YOLOv8", "ByteTrack", "OpenCV", "PyQt5"],
  },
  {
    name: "Image Classification with Transfer Learning",
    year: "Jun 2026",
    status: "done",
    description:
      "A MobileNetV2 model fine-tuned on the Intel Image Classification dataset, with the full workflow documented in a notebook and report. Built at NCAIR.",
    stack: ["MobileNetV2", "Transfer learning", "Jupyter"],
  },
  {
    name: "Classic ML & Data Analysis",
    year: "May 2026",
    status: "done",
    description:
      "Regression and classification pipelines on the Titanic and house price datasets, plus a group analysis of Nigerian hospital performance from NMIS and GRID3 facility data. Built at NCAIR.",
    stack: ["Python", "scikit-learn", "Pandas"],
  },
];

export const research = {
  interests: [
    "Continual Learning",
    "Neural Plasticity",
    "Representation Learning",
    "Learning Dynamics & Optimization",
    "Deep Learning Theory",
    "Interpretability of Neural Representations",
    "NLP for Low-Resource African Languages",
    "Applied Machine Learning",
  ],
  project: {
    title: "Temporal Representation Geometry for Neural Plasticity",
    year: "Ongoing",
    status: "wip" as const,
    question:
      "Can temporal changes in layer-wise representation geometry predict a network’s future trainability beyond established diagnostics, and guide targeted interventions that disrupt fewer parameters than reset-based methods?",
    points: [
      "Studying whether temporal, layer-wise changes in representation geometry (effective rank, CKA, representation drift) predict future trainability in continual learning, beyond dormant-neuron and optimization-based diagnostics.",
      "Planning staged experiments on MLPs and small CNNs (Permuted MNIST, Split MNIST, Sequential CIFAR-10) to reproduce plasticity loss and test layer-specific interventions against ReDo and Continual Backpropagation baselines.",
      "Currently building the theoretical foundation and the measurement pipeline.",
    ],
    stack: ["Continual learning", "Effective rank", "CKA", "ReDo"],
  },
};
