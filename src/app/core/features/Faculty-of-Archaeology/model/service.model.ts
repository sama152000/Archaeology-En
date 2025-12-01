export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string[];
  shortDescription: string;
  image: string;
  manager: {
    name: string;
    title: string;
    image: string;
  };
  servicesList: string[];
  benefits: string[];
  requirements: string[];
  contactInfo: {
    email: string;
    phone: string;
    office: string;
  };
}

export interface ServiceSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}