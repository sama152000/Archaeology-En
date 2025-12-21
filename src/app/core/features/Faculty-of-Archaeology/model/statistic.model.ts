// src/app/models/statistic.model.ts

export interface Statistic {
  id: string;
  title: string;
  value: string;     // القيمة جاية من الـ API كـ string
  iconPath: string;
  isActive: boolean;
}
