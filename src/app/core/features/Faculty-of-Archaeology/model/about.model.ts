export interface AboutSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
}

export interface VisionMission {
  vision: {
    title: string;
    description: string;
    icon: string;
  };
  mission: {
    title: string;
    description: string;
    icon: string;
  };
}

export interface DeanMessage {
  name: string;
  title: string;
  image: string;
  message: string[];
  signature: string;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface StrategicPlan {
  title: string;
  description: string;
  goals: StrategicGoal[];
  timeline: string;
}

export interface StrategicGoal {
  id: string;
  title: string;
  description: string;
  targets: string[];
  icon: string;
}

export interface AdministrativeStructure {
  dean: AdminPerson;
  viceDeans: AdminPerson[];
  departmentHeads: AdminPerson[];
}

export interface AdminPerson {
  id: string;
  name: string;
  title: string;
  image: string;
  email?: string;
  office?: string;
  description?: string;
}