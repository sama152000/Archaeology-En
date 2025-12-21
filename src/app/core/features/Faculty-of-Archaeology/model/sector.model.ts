// src/app/model/sector.model.ts

export interface SectorGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface SectorAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
  isFeatured: boolean;
  sectorId: string;
}

export interface SectorSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}


export interface Sector {
  id: string;
  name: string;
  subTitle: string;
  pageId: string;
  pageTitle: string;
  aboutId: string;
  about: string;
  mission: string;
  vision: string;
  goals: SectorGoal[];
  sectorAttachments: SectorAttachment[];
}

export interface SectorDetail {
  id: string;
  content: string;
  title: string;
  sectorId: string;
  sectorName: string;
}

export interface SectorMember {
  id: string;
  isLeader: boolean;
  sectorId: string;
  sectorName: string;
  memberId: string;
  memberName: string;
}

export interface SectorPost {
  id: string;
  sectorId: string;
  sectorName: string;
  postId: string;
  postName: string;
}

export interface SectorProgram {
  id: string;
  name: string;
  sectorId: string;
  sectorName: string;
  programId: string;
  programName: string | null;
}

export interface SectorService {
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
  sectorId: string;
  sectorName: string;
}
