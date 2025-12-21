// src/app/model/center.model.ts

export interface CenterGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface CenterAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
  centerId: string;
}

export interface Center {
  id: string;
  subTitle: string;
  place: string;
  pageId: string;
  centerName: string;
  centerNameEn: string;
  aboutId: string;
  about: string;
  mission: string;
  vision: string;
  goals: CenterGoal[];
  centerAttachments: CenterAttachment[];
}

export interface CenterDetail {
  id: string;
  title: string;
  description: string;
  content: string;
  centerId: string;
  center: string;
}

export interface CenterMember {
  id: string;
  isLeader: boolean;
  centerId: string;
  centerName: string;
  memberId: string;
  memberName: string;
}
export interface CenterSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}

export interface CenterService {
  id: string;
  name: string;
  details: string;
  duration: string;
  applicationUrl: string;
  downloadUrl: string;
  isOnline: boolean;
  category: string;
  fees: number;
  contactPerson: string;
  contactPhone: string;
  centerId: string;
  centerName: string;
}
