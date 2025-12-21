// src/app/model/program.model.ts

export interface ProgramGoal {
  id: string;
  index: number;
  goalName: string;
  aboutId: string;
}

export interface ProgramAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
  programId: string;
}

export interface Program {
  id: string;
  pageId: string;
  pageTitle: string;
  aboutId: string;
  about: string;
  mission: string;
  vision: string;
  goals: ProgramGoal[];
  programAttachments: ProgramAttachment[];
}

export interface ProgramDetail {
  id: string;
  title: string;
  content: string;
  programCategory: string;
  facultyId: string;
  facultyName: string;
  programId: string;
  programName: string;
}

export interface ProgramMember {
  id: string;
  isLeader: boolean;
  programId: string;
  programName: string;
  memberId: string;
  memberName: string;
}

export interface ProgramSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}
