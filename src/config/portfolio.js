// src/config/portfolio.js

export const globalMeta = {
  name: "Alex Developer",
  title: "Full Stack Engineer",
  email: "hello@example.com",
  description: "Senior Software Engineer with 10+ years of experience specializing in building scalable web applications and AI tools.",
};

export const socialLinks = {
  github: "https://github.com/alex-developer",
  linkedin: "https://www.linkedin.com/in/alex-developer",
  twitter: "https://twitter.com/alex-developer",
};

export const heroAndBio = {
  greeting: "Hi, my name is",
  name: "Alex Developer",
  title: "Full Stack Engineer",
  description: "Senior Software Engineer with 10+ years of experience specializing in building scalable web applications, real-time analytics, and platform architecture. Recently focusing on autonomous AI agents, prompt-chaining workflows, and rapid full-stack application prototyping."
};

export const professionalExperience = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    date: "Jan 2018 - Present",
    bullets: [
      "Architected and deployed microservices architecture handling 1M+ daily active users.",
      "Led the transition from monolithic legacy systems to scalable containerized deployments using Docker and Kubernetes.",
      "Mentored junior engineers and drove best practices for CI/CD pipelines."
    ]
  },
  {
    role: "Software Engineer",
    company: "Global Solutions Corp.",
    date: "Jun 2013 - Dec 2017",
    bullets: [
      "Developed key features for the core platform using React and Node.js.",
      "Optimized database queries, reducing load times by 40%.",
      "Integrated third-party APIs for seamless payment processing."
    ]
  }
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "State University",
    date: "2011 - 2013"
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Tech Academy",
    date: "2007 - 2011"
  }
];

export const technicalSkills = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go", "Java", "C++"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "FastAPI", "Spring Boot"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Terraform"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["OpenAI API", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  }
];

export const projects = [
  {
    id: "ai-task-manager",
    name: "AI Task Manager",
    description: "An intelligent productivity app that categorizes and prioritizes your tasks using natural language processing.",
    features: [
      "Smart Categorization — Automatically tags tasks based on context",
      "Priority Scoring — Uses machine learning to suggest what to do next",
      "Seamless Integrations — Connects with Google Calendar and Notion"
    ],
    tags: ["React", "Python", "OpenAI"],
    githubUrl: "https://github.com/alex-developer/ai-task-manager",
    liveUrl: "https://ai-task-manager.example.com"
  },
  {
    id: "autonomous-trading-bot",
    name: "Autonomous Trading Bot",
    description: "A highly concurrent trading system executing algorithmic strategies across multiple cryptocurrency exchanges.",
    features: [
      "Real-time Data Pipeline — Processes millions of trades per second",
      "Strategy Engine — Backtests and executes custom Python strategies",
      "Risk Management — Built-in circuit breakers and exposure limits"
    ],
    tags: ["Go", "Kafka", "PostgreSQL"],
    githubUrl: "https://github.com/alex-developer/autonomous-trading-bot",
    liveUrl: null
  }
];
