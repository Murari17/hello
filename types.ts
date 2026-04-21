export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
}

export interface Competition {
  name: string;
  organizer: string;
  year: string;
}