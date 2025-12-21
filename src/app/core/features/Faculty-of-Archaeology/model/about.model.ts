// src/app/model/about.model.ts


export interface AboutResponse {
  id: string;
  content: string;
  mission: string;
  vision: string;
  history: string;
  goals: Goal[];
  pageId: string;
  pageType: string;
  pageName: string;
}

export interface Goal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface AboutSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}



export interface DeanSpeechAttachment {
  id: string;
  fileName: string;
  url: string;
}
// src/app/model/about.model.ts

export interface DeanMessage {
  id: string;
  memberName: string;
  memberPosition: string;
  speech: string;
  deanSpeechAttachments: DeanSpeechAttachment[];
}

// src/app/model/member.model.ts
export interface MemberAttachment {
  id: string;
  fileName: string;
  url: string;
}

export interface Member {
  id: string;
  fullName: string;
  position: string;
  specialization: string;
  memberType: 'President' | 'Sector' | 'Department' | 'Program' | 'Center';
  memberAttachments: MemberAttachment[];
}
export interface AdministrativeStructure {
  dean: Member;
  viceDeans: Member[];
  departmentHeads: Member[];}
export interface Objective {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
export interface HistoryItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}
