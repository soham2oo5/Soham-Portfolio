/**
 * ==============================================================================
 * SOHAM DABHOLKAR — PORTFOLIO CENTRAL CONFIGURATION FILE
 * ==============================================================================
 */

export const personalInfo = {
  name: "Soham Dabholkar",
  fullName: "Soham Suhas Dabholkar",
  heroEyebrow: "FOURTH-YEAR CSE • AI & MACHINE LEARNING",
  headline: "With great power comes great responsibility.",
  tagline: "With great power comes great responsibility.",
  bio: [
    "I am a fourth-year Computer Science student specializing in Artificial Intelligence and Machine Learning at JSPM University, Pune. I build software at the intersection of full-stack web development, Python, SQL, and machine learning/NLP.",
    "With a strong engineering foundation from Government Polytechnic Ratnagiri (83.56% Distinction), I bridge low-level data workflows, modern cloud deployments, and multilingual Transformer models with reliable software engineering.",
    "Actively expanding skills in DevOps practices (CI/CD, containerization, cloud deployment) and seeking a Software Development or AI/ML Engineer role to build reliable, real-world applications."
  ],
  location: "Pune, Maharashtra, India",
  college: "JSPM University, Pune",
  degree: "B.Tech in Computer Science & Engineering (AI & ML) — 4th Year",
  expectedGraduation: "2024 – 2027 (Currently Pursuing)",
  
  // Contact & Social Links
  email: "sohamdabholkar2005@gmail.com",
  secondaryEmail: "sohamdabholkar656@gmail.com",
  phone: "+91-9356621799",
  showPhone: false,
  statusPill: "Fourth-Year Student • Open for SDE & AI/ML Roles",
  resumeUrl: "/Soham_Dabholkar_Resume.pdf",
  
  socialLinks: {
    github: "https://github.com/soham2oo5",
    linkedin: "https://www.linkedin.com/in/soham-d-55a1a322b/",
    resume: "/Soham_Dabholkar_Resume.pdf",
    emailMailto: "mailto:sohamdabholkar2005@gmail.com?subject=Opportunity%20Discussion%20with%20Soham"
  }
};

export const stats = [
  { label: "B.Tech CGPA", value: "8.1", detail: "JSPM University (AI & ML)" },
  { label: "Diploma Aggregate", value: "83.56%", detail: "Govt Polytechnic Ratnagiri" },
  { label: "Core Projects", value: "3+", detail: "NLP, Full-Stack & EdTech" },
  { label: "Certifications", value: "4", detail: "AWS, Google Cloud, Apna College" }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "aiml", label: "AI / ML & NLP" },
  { id: "web", label: "Web Development" }
];

export const projects = [
  {
    id: "multilingual-feedback-intelligence",
    title: "Multilingual Transformer for Sarcasm and Onomatopoeia Context Analysis",
    shortTitle: "Multilingual Transformer NLP",
    category: "aiml",
    badge: "Final Year Project",
    status: "Active Research & Build",
    summary: "Designed a multilingual NLP system using a Transformer-based encoder to jointly detect sarcasm, sentiment, and onomatopoeic expressions across English, Hindi, Marathi, and code-mixed text.",
    fullDescription: "Online user reviews and comments across platforms are flooded with sarcasm, slang, and multilingual code-mixed expressions (Hinglish/Marathi-English). Traditional bag-of-words or naive sentiment classifiers fail drastically because sarcastic praise is mistaken for positive feedback. This project implements a contextual Transformer pipeline using XLM-RoBERTa to analyze context-dependent language patterns, including emojis, slang, and repeated characters, to accurately classify polarity, identify ironic nuances, and surface actionable intelligence.",
    keyFeatures: [
      "Designed a multilingual NLP system using a Transformer-based encoder (XLM-RoBERTa)",
      "Jointly detects sarcasm, sentiment, and onomatopoeic expressions in English, Hindi, Marathi, and code-mixed text",
      "Analyzed context-dependent language patterns, including emojis, slang, and repeated characters",
      "Benchmarked traditional ML models against Transformer-based models using accuracy, precision, recall, and F1-score",
      "Planned a deployable web interface with a REST API for real-time analysis"
    ],
    architecture: "Input Text Stream -> Preprocessing & Tokenizer -> XLM-RoBERTa Contextual Encoder -> Multi-Head Classification Layer -> REST API -> Structured Analytics",
    techStack: ["Python", "NLP", "Transformer Models (XLM-RoBERTa)", "Scikit-learn", "REST API", "Pandas", "NumPy"],
    featured: true,
    previewNote: "Final Year Research Project."
  },
  {
    id: "pizza-house",
    title: "Pizza House — Customer Ordering & Engagement Platform",
    shortTitle: "Pizza House Platform",
    category: "web",
    badge: "Full-Stack Web App",
    status: "Completed & Responsive",
    summary: "Built a fully responsive restaurant ordering and promotional website with a mobile-first UI to improve user experience across all devices.",
    fullDescription: "A customer-centric web application built for artisanal dining. Features a fluid mobile-first ordering flow, visual menu browsing, and an interactive integrated chatbot that automates FAQs, streamlines customer queries, and boosts engagement.",
    keyFeatures: [
      "Built a fully responsive restaurant ordering and promotional website with a mobile-first UI",
      "Integrated an interactive chatbot to automate FAQs, streamline customer queries, and boost engagement",
      "Intuitive menu browsing with responsive cart and order interface",
      "Clean UI component design with high-contrast accessibility and smooth transitions"
    ],
    architecture: "HTML5/CSS3/Tailwind UI -> Client Cart Engine -> Interactive FAQ Chatbot Logic",
    techStack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Responsive Web Design"],
    featured: false,
    previewNote: "Customer Ordering & Engagement Platform."
  },
  {
    id: "virtual-lab",
    title: "Virtual Lab — Digital Practical Demonstration Platform",
    shortTitle: "Virtual Lab Platform",
    category: "web",
    badge: "EdTech Web Platform",
    status: "Completed Project",
    summary: "Developed a web-based platform to simulate laboratory experiments and improve accessibility to practical learning resources.",
    fullDescription: "Aiming to solve the physical constraint of laboratory access for engineering students, Virtual Lab provides visual interactive simulations of practical engineering exercises. Built with a responsive, user-friendly interface for structured navigation across interactive modules.",
    keyFeatures: [
      "Developed a web-based platform to simulate laboratory experiments",
      "Improves accessibility to practical learning resources without lab hardware",
      "Designed a responsive, user-friendly interface for structured navigation across interactive modules",
      "Zero installation required — runs directly in standard web browsers"
    ],
    architecture: "Modular Web Interface -> Experiment Logic Engine -> Interactive Parameter Controls",
    techStack: ["HTML5", "CSS3", "JavaScript", "Web UI Design"],
    featured: false,
    previewNote: "Digital Practical Demonstration Platform."
  }
];

export const skillCategories = [
  {
    id: "languages",
    title: "Languages & Core",
    description: "Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), DBMS",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Core", tag: "OOP & Core" },
      { name: "Python", level: "Core", tag: "Scripting & ML" },
      { name: "SQL", level: "Core", tag: "Relational Queries" },
      { name: "JavaScript", level: "Core", tag: "Web & Scripting" },
      { name: "DSA & OOP", level: "Core", tag: "Fundamentals" },
      { name: "DBMS", level: "Core", tag: "Database Systems" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    description: "Responsive Web Design, RESTful API Design, Full Stack Development",
    icon: "Layout",
    skills: [
      { name: "HTML5 & CSS3", level: "Core", tag: "Semantic Web" },
      { name: "Tailwind CSS", level: "Core", tag: "Utility Styling" },
      { name: "Responsive Web Design", level: "Core", tag: "Mobile-First" },
      { name: "RESTful API Design", level: "Core", tag: "APIs" },
      { name: "Full Stack Development", level: "Core", tag: "Architecture" },
      { name: "React & Vite", level: "Core", tag: "Modern SPA" }
    ]
  },
  {
    id: "aiml",
    title: "AI/ML & NLP",
    description: "Transformer Models (XLM-RoBERTa), Scikit-learn, Pandas, NumPy, Data Visualization",
    icon: "Brain",
    skills: [
      { name: "Scikit-learn", level: "Core", tag: "ML Algorithms" },
      { name: "Natural Language Processing (NLP)", level: "Core", tag: "NLP" },
      { name: "Transformer Models (XLM-RoBERTa)", level: "Core", tag: "Deep Learning" },
      { name: "Pandas & NumPy", level: "Core", tag: "Data Analysis" },
      { name: "Machine Learning Algorithms", level: "Core", tag: "ML" },
      { name: "Data Visualization", level: "Core", tag: "Matplotlib/Seaborn" }
    ]
  },
  {
    id: "databases_cloud",
    title: "Databases & Cloud",
    description: "MySQL, AWS Bedrock, Amazon Web Services (AWS), Google Cloud Platform (GCP)",
    icon: "Server",
    skills: [
      { name: "MySQL", level: "Core", tag: "RDBMS" },
      { name: "AWS Bedrock", level: "Foundational", tag: "Generative AI" },
      { name: "Amazon Web Services (AWS)", level: "Core", tag: "Cloud" },
      { name: "Google Cloud Platform (GCP)", level: "Core", tag: "Cloud Analytics" },
      { name: "Generative AI Foundations", level: "Certified", tag: "GenAI" }
    ]
  },
  {
    id: "devops_tools",
    title: "DevOps & Tools",
    description: "Git, GitHub, VS Code, Google Colab, Jupyter Notebook; Docker & CI/CD",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Daily Use", tag: "Version Control" },
      { name: "VS Code", level: "Primary IDE", tag: "Development" },
      { name: "Google Colab & Jupyter", level: "Daily Use", tag: "Notebooks" },
      { name: "Docker (Learning)", level: "In Progress", tag: "Containers" },
      { name: "CI/CD Pipelines (Learning)", level: "In Progress", tag: "Automation" },
      { name: "Cloud Deployment Workflows", level: "In Progress", tag: "DevOps" }
    ]
  }
];

export const educationTimeline = [
  {
    institution: "JSPM University, Pune, MH",
    degree: "B.Tech, Computer Science (AI & ML)",
    period: "2024 – 2027",
    score: "CGPA: 8.1",
    scoreLabel: "Currently Pursuing (4th Year)",
    location: "Pune, Maharashtra",
    highlights: [
      "Specialization in Artificial Intelligence and Machine Learning",
      "Final Year Project on Multilingual Transformer for Sarcasm and Onomatopoeia Analysis",
      "Active coursework in Deep Learning, NLP, Cloud Computing, and DBMS"
    ],
    status: "Currently Pursuing",
    isCurrent: true
  },
  {
    institution: "Government Polytechnic, Ratnagiri, MH",
    degree: "Diploma in Computer Engineering",
    period: "2021 – 2024",
    score: "Aggregate: 83.56%",
    scoreLabel: "First Class with Distinction",
    location: "Ratnagiri, Maharashtra",
    highlights: [
      "Strong foundation in OOP, Java, C/C++, Data Structures, and Database Management",
      "Built native Android applications and responsive web prototypes",
      "Consistently performed in top academic percentile"
    ],
    status: "Completed",
    isCurrent: false
  },
  {
    institution: "Maharashtra State Board, MH",
    degree: "Secondary School Certificate (SSC)",
    period: "2021",
    score: "Percentage: 77.00%",
    scoreLabel: "State Board",
    location: "Maharashtra",
    highlights: [
      "Completed secondary education with strong focus in Mathematics and Sciences"
    ],
    status: "Completed",
    isCurrent: false
  }
];

export const experience = [
  {
    role: "Web Developer Intern / Trainee",
    company: "Emirate Solutions",
    location: "Ratnagiri, Maharashtra",
    period: "Diploma Internship",
    description: "Gained hands-on practical web development exposure. Collaborated on designing responsive webpage layouts, structuring modular HTML/CSS/JavaScript components, and testing cross-browser layout consistency.",
    skillsLearned: ["Responsive Web Design", "HTML5 & CSS3", "JavaScript UI Components", "Client Communication"]
  }
];

export const certifications = [
  {
    title: "AWS Academy Generative AI Foundations",
    issuer: "EduSkills / AWS",
    topics: ["Prompt Engineering", "Foundation Models", "Amazon Bedrock", "Responsible AI"],
    date: "Certified"
  },
  {
    title: "Google Cloud Data Analytics Virtual Internship",
    issuer: "Google Cloud / SmartBridge",
    topics: ["Cloud Data Pipelines", "BigQuery / Processing", "Data Visualization"],
    date: "Certified"
  },
  {
    title: "Full Stack Web Development (Sigma 9.0)",
    issuer: "Apna College",
    topics: ["Frontend Engineering", "Backend Architecture", "Database Systems"],
    date: "Certified"
  },
  {
    title: "Basics of Python & Presentation Skills",
    issuer: "Infosys Springboard",
    topics: ["Core Python Scripting", "Data Structures", "Professional Tech Communication"],
    date: "Certified"
  }
];

export const currentlyExploring = [
  {
    title: "DevOps & CI/CD Pipelines",
    detail: "Currently learning Docker, CI/CD pipelines, containerization, and cloud deployment workflows."
  },
  {
    title: "Cloud Infrastructure (AWS & GCP)",
    detail: "Hands-on experience with AWS Bedrock, AWS cloud services, and Google Cloud Platform analytics."
  },
  {
    title: "AI / ML & Transformer Models",
    detail: "Natural Language Processing (NLP), Transformer Models (XLM-RoBERTa), Scikit-learn, and Machine Learning Algorithms."
  },
  {
    title: "Data Analytics & Full Stack",
    detail: "Pandas, NumPy, Data Visualization, MySQL, RESTful API Design, and responsive web applications."
  }
];
