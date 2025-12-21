// src/app/model/service.model.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  isActive: boolean;
}

export interface ServiceSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}
