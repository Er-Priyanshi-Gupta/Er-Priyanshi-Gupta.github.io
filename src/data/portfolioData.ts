export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI & ML' | 'Computer Vision';
  shortDescription: string;
  problemStatement: string;
  motivation: string;
  features: string[];
  technicalImplementation: string;
  techStack: string[];
  languages: string[];
  frameworks: string[];
  database: string;
  apis: string[];
  individualContribution: string;
  architecture: string;
  challenges: string;
  howSolved: string;
  learnings: string;
  githubUrl: string;
  liveUrl?: string;
  isFeatured: boolean;
  coverGradient: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'AI & ML' | 'Tools & Cloud' | 'Core CS';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced';
  frequency: string;
  icon: string;
  description: string;
  relatedProjectIds: string[];
}

export interface Experience {
  company: string;
  title: string;
  employmentType: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  coursework: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  highlight: string;
  description: string;
  badgeType: 'rank' | 'contest' | 'rating';
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  tags: string[];
  verificationUrl?: string;
}

export const portfolioData = {
  personalInfo: {
    fullName: "Priyanshi Gupta",
    roleTitles: ["Software Engineer", "AI/ML Engineer", "Full-Stack Developer"],
    headline: "Engineering Intelligent Systems at the Intersection of AI/ML & Full-Stack Architecture",
    shortBio: "Computer Science Engineer specializing in Applied Machine Learning, Real-Time Computer Vision, and modern Full-Stack web architecture. Passionate about building robust, high-impact products with algorithmic precision.",
    aboutLong: [
      "I am a Computer Science Engineering student (B.Tech '26 at PSIT Kanpur) specializing in Applied Artificial Intelligence, Machine Learning pipelines, and scalable Web Engineering. My engineering philosophy centers on bridging theoretical algorithms with reliable, user-centric software.",
      "My hands-on experience includes developing real-time computer vision interfaces (AI Virtual Mouse), building clinical decision-support models (Kidney Disease Prediction), and architecting multi-modal web platforms (Tourist Reservation System). During my internship with Infosys Springboard, I designed an end-to-end ML pipeline classifying exoplanet habitability from large-scale astronomical data.",
      "With a high problem-solving velocity, I actively engage in competitive programming—ranking in the Top 9.67% globally on LeetCode (Rating: 1546), securing 87th globally in TCS CodeVita Round 2, and participating in the Adobe Smart India Hackathon 2025."
    ],
    location: "Kanpur, UP, India",
    relocationStatus: "Open to Relocation & Remote",
    targetCities: ["Bengaluru", "Pune", "Hyderabad", "Noida", "Gurugram", "Remote"],
    targetCountries: ["India", "United States", "Australia", "Europe", "East Asia (excl. China)"],
    email: "er.priyanshi.gupta.14@gmail.com",
    phone: "+91 7317677085",
    resumeUrl: "/Priyanshi_Gupta.pdf",
    avatarUrl: "/avatar.svg",
    socialLinks: {
      github: "https://github.com/Er-Priyanshi-Gupta",
      linkedin: "https://www.linkedin.com/in/priyanshi-gupta1430",
      leetcode: "https://leetcode.com/u/Er_Priyanshi_Gupta/",
      hackerrank: "https://www.hackerrank.com/profile/Er_priyanshi",
      geeksforgeeks: "https://www.geeksforgeeks.org/user/erpriyanshxi23/",
      certificationsDrive: "https://drive.google.com/drive/folders/1fth00J0ic-zEks0Ug6Y-w0N6NMryhKko?usp=sharing",
    }
  },

  skills: [
    // Programming Languages
    {
      id: "python",
      name: "Python",
      category: "Languages",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "Code2",
      description: "Primary language for ML modeling, computer vision pipelines, and algorithmic problem solving.",
      relatedProjectIds: ["ai-virtual-mouse", "kidney-disease-prediction", "exoplanet-habitability"]
    },
    {
      id: "java",
      name: "Java",
      category: "Languages",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Coffee",
      description: "Object-oriented backend architectures and system design foundations.",
      relatedProjectIds: []
    },
    {
      id: "cpp",
      name: "C / C++",
      category: "Languages",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "Cpu",
      description: "Low-level optimization, competitive coding (TCS CodeVita & LeetCode), and data structures.",
      relatedProjectIds: []
    },
    {
      id: "sql",
      name: "SQL",
      category: "Languages",
      proficiency: "Intermediate",
      frequency: "Frequent",
      icon: "Database",
      description: "Relational data modeling, complex query joins, indexing, and normalization.",
      relatedProjectIds: ["tourist-reservation-system"]
    },

    // Frontend Development
    {
      id: "react",
      name: "React.js",
      category: "Frontend",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "Atom",
      description: "Modern component-driven web interfaces, state management, hooks, and responsive UX.",
      relatedProjectIds: ["tourist-reservation-system"]
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "Frontend",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Globe",
      description: "Full-stack React framework with SSR, SSG, routing, and API endpoints.",
      relatedProjectIds: ["tourist-reservation-system"]
    },
    {
      id: "javascript",
      name: "JavaScript (ES6+)",
      category: "Frontend",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "FileCode",
      description: "Modern asynchronous workflows, DOM manipulation, closures, and browser APIs.",
      relatedProjectIds: ["tourist-reservation-system"]
    },
    {
      id: "html-css",
      name: "HTML5 & CSS3",
      category: "Frontend",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "Palette",
      description: "Semantic markup, modern layout techniques (Flexbox, Grid), and responsive styling.",
      relatedProjectIds: ["tourist-reservation-system"]
    },

    // Backend & APIs
    {
      id: "nodejs",
      name: "Node.js",
      category: "Backend",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Server",
      description: "Event-driven runtime for scalable microservices and backend services.",
      relatedProjectIds: ["tourist-reservation-system"]
    },
    {
      id: "rest-apis",
      name: "RESTful APIs",
      category: "Backend",
      proficiency: "Intermediate",
      frequency: "Frequent",
      icon: "Network",
      description: "API design, endpoint documentation, authentication, and HTTP request handling.",
      relatedProjectIds: ["tourist-reservation-system"]
    },

    // Databases
    {
      id: "mysql",
      name: "MySQL",
      category: "Databases",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Database",
      description: "Relational database schema architecture, transaction management, and query optimization.",
      relatedProjectIds: ["tourist-reservation-system"]
    },
    {
      id: "oracle",
      name: "Oracle DB",
      category: "Databases",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Layers",
      description: "Enterprise relational database design, stored procedures, and triggers.",
      relatedProjectIds: []
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Databases",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Box",
      description: "Document-oriented NoSQL storage, aggregation pipelines, and flexible document modeling.",
      relatedProjectIds: ["tourist-reservation-system"]
    },

    // AI & Machine Learning
    {
      id: "opencv",
      name: "OpenCV",
      category: "AI & ML",
      proficiency: "Advanced",
      frequency: "Regular",
      icon: "Eye",
      description: "Real-time computer vision, frame capture, landmark detection, and gesture tracking.",
      relatedProjectIds: ["ai-virtual-mouse"]
    },
    {
      id: "scikit-learn",
      name: "Scikit-Learn & ML Algorithms",
      category: "AI & ML",
      proficiency: "Advanced",
      frequency: "Frequent",
      icon: "Brain",
      description: "Supervised and unsupervised learning, XGBoost, Random Forest, Logistic Regression, model evaluation.",
      relatedProjectIds: ["kidney-disease-prediction", "exoplanet-habitability"]
    },
    {
      id: "numpy-pandas",
      name: "NumPy & Pandas",
      category: "AI & ML",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "Binary",
      description: "Vectorized computations, high-performance data wrangling, cleaning, and preprocessing.",
      relatedProjectIds: ["kidney-disease-prediction", "exoplanet-habitability", "ai-virtual-mouse"]
    },
    {
      id: "matplotlib",
      name: "Matplotlib & Data Viz",
      category: "AI & ML",
      proficiency: "Advanced",
      frequency: "Regular",
      icon: "BarChart3",
      description: "ROC-AUC curves, precision-recall visual analytics, distribution plots, and correlation heatmaps.",
      relatedProjectIds: ["kidney-disease-prediction", "exoplanet-habitability"]
    },

    // Tools & Cloud
    {
      id: "aws",
      name: "AWS Cloud",
      category: "Tools & Cloud",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Cloud",
      description: "Certified AWS Cloud Practitioner Essentials covering compute, storage, security, and networking.",
      relatedProjectIds: []
    },
    {
      id: "git-github",
      name: "Git & GitHub",
      category: "Tools & Cloud",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "GitBranch",
      description: "Version control workflows, branch protection, pull requests, and CI/CD pipelines.",
      relatedProjectIds: ["tourist-reservation-system", "ai-virtual-mouse", "kidney-disease-prediction"]
    },
    {
      id: "postman",
      name: "Postman",
      category: "Tools & Cloud",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Send",
      description: "API testing, automated request collections, and mock environment configuration.",
      relatedProjectIds: ["tourist-reservation-system"]
    },

    // Core Computer Science
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      category: "Core CS",
      proficiency: "Advanced",
      frequency: "Daily",
      icon: "Workflow",
      description: "Algorithmic problem-solving: trees, graphs, dynamic programming, sorting, and greedy algorithms.",
      relatedProjectIds: []
    },
    {
      id: "dbms-os",
      name: "DBMS & Operating Systems",
      category: "Core CS",
      proficiency: "Advanced",
      frequency: "Regular",
      icon: "HardDrive",
      description: "ACID properties, indexing, process scheduling, concurrency, memory management, and paging.",
      relatedProjectIds: []
    },
    {
      id: "cn-networks",
      name: "Computer Networks",
      category: "Core CS",
      proficiency: "Intermediate",
      frequency: "Regular",
      icon: "Radio",
      description: "TCP/IP suite, HTTP/HTTPS protocols, OSI model layers, routing, and DNS resolution.",
      relatedProjectIds: []
    }
  ] as Skill[],

  projects: [
    {
      id: "tourist-reservation-system",
      title: "Tourist Reservation System",
      category: "Full-Stack",
      shortDescription: "A unified smart travel platform enabling seamless search, comparison, and booking for flights, trains, buses, and hotels from a single interface.",
      problemStatement: "Travelers frequently experience booking fatigue from navigating fragmented, disconnected websites for different legs of their itinerary, leading to coordination errors and price discrepancies.",
      motivation: "Built to provide a unified single-window experience where end users can discover travel routes, compare real-time pricing across transit modes, and manage hotel reservations with automated recommendations.",
      features: [
        "Unified search across multiple transit modes: flights, trains, intercity buses, and hotel accommodations.",
        "Secure user authentication and token-based profile management.",
        "Scalable backend REST API architecture designed for high concurrent search queries.",
        "AI-driven itinerary recommendation logic matching user budget and travel preferences.",
        "Integrated real-time transit status tracking support."
      ],
      technicalImplementation: "Engineered with a responsive React/Next.js frontend, an Express/Node.js API service layer, and a relational schema optimized for multi-criteria travel availability queries. Utilizes modular controllers and middleware for authentication, input validation, and rate-limiting.",
      techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Tailwind CSS"],
      languages: ["JavaScript", "SQL", "HTML5", "CSS3"],
      frameworks: ["React", "Next.js", "Express"],
      database: "MySQL / MongoDB",
      apis: ["Transit Aggregation REST APIs", "Geocoding API"],
      individualContribution: "Designed end-to-end database schemas, developed user flow pages in React, and architected REST API endpoints for unified schedule searches and booking records.",
      architecture: "Client-Server architecture with decoupled React frontend consuming authenticated REST API endpoints backed by a relational data model.",
      challenges: "Handling heterogeneous data models for disparate travel modes (train schedules, airline seats, hotel room types) within a consistent search query response.",
      howSolved: "Abstracted data structures into canonical itinerary schemas on the server layer before dispatching to client components.",
      learnings: "Mastered full-stack state management, API design contracts, and multi-entity relational database design.",
      githubUrl: "https://github.com/Er-Priyanshi-Gupta/Tourist-Reservation-System",
      liveUrl: undefined,
      isFeatured: true,
      coverGradient: "from-purple-900/60 via-violet-800/40 to-slate-900/80"
    },
    {
      id: "ai-virtual-mouse",
      title: "AI Virtual Mouse",
      category: "Computer Vision",
      shortDescription: "A real-time hand-gesture controlled interface allowing users to navigate and control PC cursor actions touch-free using computer vision.",
      problemStatement: "Physical hardware peripherals can be limiting in sterile environments (e.g. medical clinics), public interactive kiosks, or for individuals with temporary physical accessibility constraints.",
      motivation: "Created to explore human-computer interaction (HCI) through deep vision models and provide an intuitive, zero-touch peripheral alternative using standard webcams.",
      features: [
        "Real-time webcam hand tracking and 21-point landmark detection.",
        "Precise gesture mapping for cursor navigation, left click, right click, and two-finger scrolling.",
        "Noise reduction and cursor smoothing algorithms to mitigate natural hand tremors.",
        "Dynamic screen bounding box mapping for comfortable, low-fatigue hand motion.",
        "Visual feedback overlay showing active gesture states in real-time."
      ],
      technicalImplementation: "Developed in Python using OpenCV for video capture and frame processing. Leveraged MediaPipe Hands framework for high-fidelity hand landmark detection and mapped index/thumb coordinates to screen dimensions via PyAutoGUI with exponential moving average (EMA) smoothing.",
      techStack: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI"],
      languages: ["Python"],
      frameworks: ["MediaPipe", "OpenCV"],
      database: "N/A (Client-side real-time stream)",
      apis: ["Camera Hardware API"],
      individualContribution: "Implemented the end-to-end vision pipeline: frame pre-processing, landmark coordinate calculation, gesture state machine, and jitter-filtering math.",
      architecture: "Continuous frame-loop pipeline: Video Capture -> RGB Transform -> MediaPipe Inference -> Landmark Extraction -> Smoothing Filter -> OS Cursor Event Dispatch.",
      challenges: "Eliminating cursor jitter and false-positive click triggers caused by hand wobble and webcam noise.",
      howSolved: "Implemented exponential smoothing filter on coordinate vectors and set minimum distance thresholds between landmark points before firing click events.",
      learnings: "Deep understanding of real-time computer vision latency constraints, coordinate normalization, and HCI design.",
      githubUrl: "https://github.com/Er-Priyanshi-Gupta/AI-VIRTUAL-MOUSE",
      liveUrl: undefined,
      isFeatured: true,
      coverGradient: "from-fuchsia-900/60 via-purple-800/40 to-slate-900/80"
    },
    {
      id: "kidney-disease-prediction",
      title: "Kidney Disease Prediction System",
      category: "AI & ML",
      shortDescription: "A machine learning decision-support tool predicting Chronic Kidney Disease (CKD) risk from multi-parametric patient clinical test records.",
      problemStatement: "Chronic Kidney Disease is frequently detected only in late stages due to subtle early symptoms, putting heavy strain on diagnostic labs and clinical staff.",
      motivation: "To engineer a low-cost, automated decision-support pipeline that analyzes clinical blood and urine markers to flag early-stage kidney disease risk quickly.",
      features: [
        "Automated clinical data preprocessing including median imputation and outlier detection.",
        "Categorical feature encoding and normalization for complex medical datasets.",
        "Comparative benchmark evaluation across multiple classification models.",
        "High sensitivity model tuning to minimize dangerous false negatives.",
        "Clear feature importance ranking identifying key clinical biomarkers (e.g., specific gravity, albumin, serum creatinine)."
      ],
      technicalImplementation: "Built an end-to-end scikit-learn workflow. Carried out exploratory data analysis with Pandas and Matplotlib, handled skewed distributions, engineered target encoders, and validated performance through stratified cross-validation and ROC-AUC curve analysis.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      languages: ["Python"],
      frameworks: ["Scikit-Learn"],
      database: "Tabular Clinical Dataset",
      apis: [],
      individualContribution: "Conducted exploratory data analysis, built data imputation and preprocessing pipelines, trained classification models, and tuned decision thresholds.",
      architecture: "Tabular Clinical Data -> Preprocessing & Imputation -> Feature Encoding & Scaling -> Model Inference -> Risk Score & Biomarker Contribution Output.",
      challenges: "Handling missing clinical test values and severe class imbalance without overfitting the predictive model.",
      howSolved: "Employed domain-informed median imputation for lab indicators and utilized balanced class weighting along with precision-recall prioritization.",
      learnings: "Pragmatic application of medical ML ethics, metric trade-offs (Recall vs Precision in healthcare), and reliable cross-validation techniques.",
      githubUrl: "https://github.com/Er-Priyanshi-Gupta/Kidney_Disease_Prediction",
      liveUrl: undefined,
      isFeatured: true,
      coverGradient: "from-violet-950/70 via-indigo-900/40 to-slate-900/80"
    },
    {
      id: "exoplanet-habitability",
      title: "Exoplanet Habitability Classification Pipeline",
      category: "AI & ML",
      shortDescription: "End-to-end astronomical data pipeline built at Infosys Springboard to identify habitable exoplanet candidates from space telescope datasets.",
      problemStatement: "Space missions like Kepler and TESS generate massive volumes of celestial transit data, making manual candidate vetting prohibitively slow for astrophysicists.",
      motivation: "Engineered as an industry internship project to apply modern ensemble machine learning to astrophysics and identify prime candidate worlds capable of supporting life.",
      features: [
        "Processed large-scale astronomical datasets containing planetary radii, stellar temperatures, and orbital periods.",
        "Rigorous feature engineering calculating insolation flux, planetary equilibrium temperature, and habitable zone boundaries.",
        "Comparative model benchmarking: Logistic Regression vs Random Forest vs XGBoost.",
        "Thorough model diagnostics utilizing ROC-AUC curves, precision-recall trade-offs, and confusion matrices.",
        "Prioritization ranking of top candidate exoplanets for further observational spectroscopy."
      ],
      technicalImplementation: "Built with Python, Pandas, and Scikit-Learn/XGBoost. Engineered domain-specific astrophysical features, resolved extreme class imbalance in candidate labels, and tuned hyperparameters using randomized grid search.",
      techStack: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas", "Matplotlib"],
      languages: ["Python"],
      frameworks: ["XGBoost", "Scikit-Learn"],
      database: "NASA Exoplanet Archive Dataset",
      apis: [],
      individualContribution: "Designed data preparation pipelines, developed planetary equilibrium feature transformations, trained ensemble models, and drafted evaluation reports.",
      architecture: "Astronomical Transit Telemetry -> Feature Engineering (Habitable Zone Calculation) -> Model Training (XGBoost/Random Forest) -> Habitability Probability Ranking.",
      challenges: "Massive class imbalance (habitability candidate ratio < 1%) and high multicollinearity between stellar and planetary metrics.",
      howSolved: "Applied feature collinearity filtering, synthetic minority techniques, and prioritized PR-AUC over standard accuracy.",
      learnings: "Production ML pipelines on high-dimensional scientific data and communicating ML findings through clear visualization.",
      githubUrl: "https://github.com/Er-Priyanshi-Gupta",
      liveUrl: undefined,
      isFeatured: false,
      coverGradient: "from-blue-950/70 via-purple-900/40 to-slate-900/80"
    }
  ] as Project[],

  experience: [
    {
      company: "Infosys Springboard",
      title: "Project Intern",
      employmentType: "Internship",
      period: "2024",
      location: "Virtual / India",
      description: "Spearheaded machine learning research and pipeline engineering on large-scale astronomical datasets.",
      bullets: [
        "Architected an end-to-end ML pipeline to classify exoplanet habitability using planetary and stellar features from high-volume astrophysical datasets.",
        "Conducted extensive data preprocessing, domain-specific feature engineering, and model optimization; benchmarked Logistic Regression, Random Forest, and XGBoost for superior generalization.",
        "Evaluated classification performance using accuracy, precision-recall, and ROC-AUC metrics to reliably prioritize high-potential exoplanet candidates for astronomical exploration."
      ],
      technologies: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas", "Data Science"]
    }
  ] as Experience[],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Pranveer Singh Institute of Technology (PSIT), Kanpur",
      period: "Dec. 2022 – Jun. 2026",
      score: "8.92",
      scoreType: "CGPA",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks",
        "Object Oriented Programming"
      ]
    },
    {
      degree: "Higher Secondary Education – Science Stream (PCM)",
      institution: "St. Dominic Savio English Medium School",
      period: "Apr. 2019 – Jul. 2021",
      score: "88%",
      scoreType: "Percentage",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science Foundations"
      ]
    }
  ] as Education[],

  achievements: [
    {
      title: "TCS CodeVita Global Competitor",
      issuer: "Tata Consultancy Services",
      highlight: "87th Globally (Round 2) & 255th (Round 1)",
      description: "Ranked among the top 100 competitive coders globally out of hundreds of thousands of participants in the prestigious international coding contest.",
      badgeType: "rank"
    },
    {
      title: "Top 9.67% Globally on LeetCode",
      issuer: "LeetCode",
      highlight: "Max Rating: 1546",
      description: "Consistently solved complex algorithmic challenges spanning Dynamic Programming, Graphs, and Advanced Trees.",
      badgeType: "rating",
      link: "https://leetcode.com/u/Er_Priyanshi_Gupta/"
    },
    {
      title: "5-Star Problem Solver",
      issuer: "HackerRank",
      highlight: "5-Star Gold Badge",
      description: "Demonstrated strong mastery in foundational problem solving, data structures, and implementation accuracy.",
      badgeType: "rating",
      link: "https://www.hackerrank.com/profile/Er_priyanshi"
    },
    {
      title: "Adobe Smart India Hackathon 2025",
      issuer: "Ministry of Education & Adobe",
      highlight: "National Hackathon Competitor",
      description: "Collaborated on designing technology-driven solutions for real-world government and industry problem statements.",
      badgeType: "contest"
    }
  ] as Achievement[],

  certifications: [
    {
      name: "Salesforce AI with Agentforce Champion",
      issuer: "Salesforce",
      tags: ["Artificial Intelligence", "Autonomous Agents", "Cloud"],
      verificationUrl: "https://drive.google.com/drive/folders/1fth00J0ic-zEks0Ug6Y-w0N6NMryhKko?usp=sharing"
    },
    {
      name: "Amazon ML Summer School 2025",
      issuer: "Amazon",
      tags: ["Deep Learning", "Supervised ML", "Model Architecture"],
      verificationUrl: "https://drive.google.com/drive/folders/1fth00J0ic-zEks0Ug6Y-w0N6NMryhKko?usp=sharing"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      tags: ["Cloud Infrastructure", "Security", "Scalability"],
      verificationUrl: "https://drive.google.com/drive/folders/1fth00J0ic-zEks0Ug6Y-w0N6NMryhKko?usp=sharing"
    },
    {
      name: "Full Stack & Core Development Certifications",
      issuer: "Infosys Springboard",
      tags: ["C/C++", "Python", "HTML", "React", "MongoDB", "DBMS"],
      verificationUrl: "https://drive.google.com/drive/folders/1fth00J0ic-zEks0Ug6Y-w0N6NMryhKko?usp=sharing"
    },
    {
      name: "Data Science & AI Professional Track",
      issuer: "365 DataScience",
      tags: ["Git & GitHub", "Data Science", "Artificial Intelligence"],
      verificationUrl: "https://drive.google.com/drive/folders/1fth00J0ic-zEks0Ug6Y-w0N6NMryhKko?usp=sharing"
    }
  ] as Certification[]
};

