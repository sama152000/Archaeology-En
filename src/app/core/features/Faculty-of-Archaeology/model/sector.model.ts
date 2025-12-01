export interface Sector {
  id: number;
  name: string;
  slug: string;
  description: string[];
  shortDescription: string;
  image: string;
  head: {
    name: string;
    title: string;
    image: string;
    quote?: string;
  };
  objectives: string[];
  achievements: string[];
  projects: string[];
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
}

export interface SectorSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}