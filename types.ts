export interface User {
  id: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
}

export interface Partner {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  location: string;
  imageUrl: string;
  bio: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string; // e.g., "Finance", "Legal", "Operations"
  description: string;
  downloadCount: number;
  format: string; // "PDF", "XLSX", "DOCX"
}

export enum PageView {
  LANDING,
  LOGIN,
  FEED,
  PARTNERS,
  RESOURCES
}