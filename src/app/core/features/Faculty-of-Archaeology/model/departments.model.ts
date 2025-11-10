export interface DepartmentSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}

// src/app/model/department.model.ts
export interface StaffMember {
  name: string;
  position: string;
  email: string;
  image: string;
}
// model/department.model.ts
export interface Department {
  id: number;
  name: string;
  slug: string; // للـ routing
  description: string[];
  shortDescription: string;
  image: string;
  hod: {
    name: string;
    title: string;
    image: string;
    quote?: string;
  };
  staff: StaffMember[];
}

export interface StaffMember {
  name: string;
  position: string;
  email: string;
  image: string;
}
