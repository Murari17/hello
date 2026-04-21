import { Project, Experience, SkillCategory, Certification, Competition } from './types';

export const PERSONAL_INFO = {
  name: "Murari Prasad Samal",
  title: "Computer Science & Engineering",
  subtitle: "DevOps | Machine Learning | Full-Stack Developer",
  email: "muraripsamal@gmail.com",
  phone: "+91 7681005509",
  location: "Bhubaneswar",
  summary: "Versatile developer with hands-on experience in DevOps, machine learning, and full-stack development. Skilled in building scalable applications, deploying cloud-native solutions, and optimizing ML models. Strong problem-solving and teamwork abilities, committed to delivering impactful technology solutions.",
  socials: {
    github: "https://github.com/Murari17",
    linkedin: "https://www.linkedin.com/in/murari-samal/",
    twitter: "https://x.com/murari_samal"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Intern - DevOps",
    company: "Silicon University",
    period: "June 2025 - July 2025",
    description: [
      "Deployed and managed cloud-native applications using Docker and Kubernetes on AWS.",
      "Built CI/CD pipelines and automated workflows to improve deployment efficiency.",
      "Managed container orchestration and monitored system performance."
    ]
  },
  {
    role: "Intern - Mobile App Development (React Native)",
    company: "Silicon University",
    period: "June 2024 - August 2024",
    description: [
      "Developed cross-platform mobile apps with React Native, focusing on UI/UX.",
      "Built reusable components and managed complex state logic for scalability.",
      "Integrated APIs to enhance app functionality and user engagement."
    ]
  },
  {
    role: "Intern - Machine Learning (Python)",
    company: "Silicon University",
    period: "June 2023 - August 2023",
    description: [
      "Built and optimized machine learning models using Python and TensorFlow.",
      "Performed data preprocessing, feature engineering, and model evaluation.",
      "Implemented ML pipelines for predictive analytics and automation."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "C"]
  },
  {
    title: "Frontend",
    skills: ["React Native", "HTML", "CSS", "UI/UX"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"]
  },
  {
    title: "ML & Data Science",
    skills: ["TensorFlow", "scikit-learn", "Pandas", "NLP", "LLMs"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Secure DevSecOps Pipeline",
    description: "Built a DevSecOps pipeline with GitHub Actions, Docker, Terraform, Kubernetes, and security scanning tools.",
    tags: ["DevOps", "Kubernetes", "Security"]
  },
  {
    title: "Blog Generation LLM App",
    description: "Developed an AI-powered blogging assistant generating human-like content.",
    tags: ["AI", "LLM", "Python"]
  },
  {
    title: "Video Streaming App",
    description: "Built a full-stack video streaming solution using the MERN Stack.",
    tags: ["MERN", "React", "Node.js"]
  },
  {
    title: "AI Document Semantic Search",
    description: "Built a semantic search engine to improve information retrieval.",
    tags: ["AI", "Search", "NLP"]
  },
  {
    title: "AWS CI/CD Pipeline",
    description: "Implemented an automated CI/CD pipeline using Terraform and CodeDeploy on AWS.",
    tags: ["AWS", "CI/CD", "Terraform"]
  },
  {
    title: "YouTube Video Summarizer",
    description: "Developed an AI tool for automatic summarization of YouTube content.",
    tags: ["AI", "NLP", "API"]
  },
  {
    title: "NLP Chatbot",
    description: "Designed a chatbot for natural interactions and query handling.",
    tags: ["NLP", "Chatbot", "AI"]
  },
  {
    title: "Real-time Chat Application",
    description: "Implemented a chat system with instant messaging capabilities.",
    tags: ["Real-time", "WebSockets", "UI"]
  }
];

export const COMPETITIONS: Competition[] = [
  { name: "Build-a-thon 2024", organizer: "Silicon University", year: "2024" },
  { name: "Smart India Hackathon 2023", organizer: "Government of India", year: "2023" }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Python for Data Science and AI", 
    issuer: "Coursera, IBM" 
  },
  {
    name: "Claude with Google Cloud's Vertex AI",
    issuer: "Anthropic",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
  }
];
