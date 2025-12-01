export interface Center {
  id: number;
  name: string;
  slug: string;
  description: string[];
  shortDescription: string;
  image: string;
  director: {
    name: string;
    title: string;
    image: string;
    quote?: string;
  };
  goals: string[];
  activities: string[];
  history: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface CenterSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}