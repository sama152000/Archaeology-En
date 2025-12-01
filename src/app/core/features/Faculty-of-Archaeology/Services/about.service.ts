import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { 
  AboutSection, 
  VisionMission, 
  DeanMessage, 
  Objective, 
  HistoryItem, 
  StrategicPlan, 
  AdministrativeStructure 
} from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutSections: AboutSection[] = [
    { id: 'vision', title: "Vision & Mission", route: '/about/vision', icon: 'pi pi-eye' },
    { id: 'dean-message', title: "Dean's Word", route: '/about/dean-message', icon: 'pi pi-user' },
    { id: 'history', title: "History", route: '/about/history', icon: 'pi pi-clock' },
    { id: 'objectives', title: "Objectives", route: '/about/objectives', icon: 'pi pi-flag' },
    { id: 'administrative', title: "Administrative Structure", route: '/about/administrative', icon: 'pi pi-sitemap' },
    { id: 'strategic', title: "Strategic Plan", route: '/about/strategic', icon: 'pi pi-chart-line' }
  ];

  private visionMission: VisionMission = {
    vision: {
      title: "Our Vision",
      description: "To be a leading academic institution in the field of archaeology, heritage, and cultural studies — achieving excellence in education, research, and community service on both national and global levels.",
      icon: "fa-solid fa-eye"
    },
    mission: {
      title: "Our Mission", 
      description: "The Faculty of Archaeology aims to prepare distinguished graduates capable of preserving and promoting Egypt's rich archaeological and cultural heritage. The faculty also seeks to encourage innovation, research, and active participation in advancing archaeological knowledge.",
      icon: "fa-solid fa-bullseye"
    }
  };

  private deanMessage: DeanMessage = {
    name: "Prof. Dr. Khaled Abdel-Naeem Mohamedin",
    title: "Dean of the Faculty",
    image: "./assets/dean.png",
    message: [
      "My dear students of the Faculty of Archaeology, Luxor University, with the new beginnings of our distinguished faculty, I extend to you, on my own behalf... and based on the directives, noble sentiments, and kind care of Her Excellency, Professor Dr., the President of Luxor University... and with the cooperation of our partners in success, including the Faculty's Vice-Deans, Heads of Academic Departments, Faculty Members, Supporting Staff, Administrative Staff, and the Faculty's Student Union.",
      "My sincere greetings and best wishes that your new academic year will be one filled with activity and vitality, and that you will achieve the highest grades. May your studies at the faculty be fruitful, successful, and filled with happy memories. Dear students, Egypt's promising youth, I urge you to be serious about your studies and learning, and to make the most of your time, whether you devote it to studying or student activities.",
      "Student activities, in all their cultural, athletic, and social diversity, hone your experiences, broaden your horizons, and provide you with the opportunity to meet and interact with your peers within your college or from other colleges.",
      "Dear students, before being a place for acquiring knowledge, university is a place for nurturing minds, refining morals, and character. Therefore, I hope you will utilize your years of university studies to deepen dialogue, continue friendships, and collaborate fruitfully with your colleagues and professors on all academic, life, and social topics.",
      "Dear Students, I promise to provide you with all the support we can to solve all problems and confront any difficulties you may encounter within the college. I expect from you a great deal of diligence, discipline, and energy. We, as administrators, academics, and educators, will be extremely happy when the school year ends, having achieved with us, and with you, everything we hoped for.",
      "Dear Students, the hope of the future and the spirit of the present. You are the future generation of our beloved Egypt. You are the ones who will bear the responsibility of professional, societal, and national work. You are the children of a great civilization spanning 7,000 years, and so you are called upon to walk the path to bring our beloved Egypt to the forefront, advancement, and vision of its future among nations.",
      "We urge ourselves, and you, to participate and strengthen the spirit of belonging and patriotic sentiments through the national and societal events, situations, and occasions you will experience within your college and your distinguished university. My dear students, we meet on the path of goodness, we strive for guidance, and we meet in the love of Egypt. Within your college and university, we expect from you a lot of giving and loyalty. We trust in your commitment to the covenants of work and university life."
    ],
    signature: "Best regards,\nProf. Dr. Khaled Abdel-Naeem Mohamedin\nDean of the Faculty"
  };

  private objectives: Objective[] = [
    {
      id: '1',
      title: "Academic Excellence",
      description: "Provide high-quality education in archaeology and heritage studies, preparing graduates for successful careers in the field.",
      icon: "pi pi-graduation-cap"
    },
    {
      id: '2', 
      title: "Research Innovation",
      description: "Conduct cutting-edge research in archaeological sciences, contributing to the global understanding of ancient civilizations.",
      icon: "pi pi-search"
    },
    {
      id: '3',
      title: "Heritage Preservation",
      description: "Preserve and protect Egypt's rich archaeological heritage for future generations through scientific methods and community engagement.",
      icon: "pi pi-shield"
    },
    {
      id: '4',
      title: "Community Service",
      description: "Serve the local and international community through archaeological expertise, cultural programs, and educational outreach.",
      icon: "pi pi-users"
    },
    {
      id: '5',
      title: "International Collaboration",
      description: "Foster partnerships with international institutions to advance archaeological knowledge and cultural exchange.",
      icon: "pi pi-globe"
    },
    {
      id: '6',
      title: "Technology Integration",
      description: "Integrate modern technology and digital methods in archaeological research and heritage documentation.",
      icon: "pi pi-desktop"
    }
  ];

  private history: HistoryItem[] = [
    {
      year: "2019",
      title: "Faculty Establishment",
      description: "The Faculty of Archaeology was established as part of Luxor University, marking a new era in archaeological education in Upper Egypt.",
      image: "assets/history-1.jpg"
    },
    {
      year: "2020",
      title: "First Academic Programs",
      description: "Launch of undergraduate programs in Egyptology, Islamic Archaeology, and Conservation & Restoration.",
      image: "assets/history-2.jpg"
    },
    {
      year: "2021",
      title: "Research Center Opening",
      description: "Inauguration of the Archaeological Research Center with state-of-the-art laboratories and equipment.",
      image: "assets/history-3.jpg"
    },
    {
      year: "2022",
      title: "International Partnerships",
      description: "Establishment of partnerships with leading international universities and archaeological institutions.",
      image: "assets/history-4.jpg"
    },
    {
      year: "2023",
      title: "Graduate Programs Launch",
      description: "Introduction of Master's and PhD programs in various archaeological specializations.",
      image: "assets/history-5.jpg"
    },
    {
      year: "2024",
      title: "Digital Archive Project",
      description: "Launch of the comprehensive digital archive project for documenting Luxor's archaeological heritage.",
      image: "assets/history-6.jpg"
    }
  ];

  private strategicPlan: StrategicPlan = {
    title: "Strategic Plan 2024-2030",
    description: "Our comprehensive strategic plan outlines the faculty's vision for the next six years, focusing on academic excellence, research innovation, and community engagement.",
    timeline: "2024-2030",
    goals: [
      {
        id: '1',
        title: "Academic Excellence",
        description: "Enhance the quality of education and academic programs",
        targets: [
          "Achieve international accreditation for all programs",
          "Increase student satisfaction rates to 95%",
          "Develop 3 new specialized programs",
          "Establish exchange programs with 10 international universities"
        ],
        icon: "pi pi-star"
      },
      {
        id: '2',
        title: "Research Leadership",
        description: "Become a leading center for archaeological research",
        targets: [
          "Publish 100+ research papers annually",
          "Secure 20 major research grants",
          "Establish 5 new research centers",
          "Host 2 international conferences annually"
        ],
        icon: "pi pi-search"
      },
      {
        id: '3',
        title: "Infrastructure Development",
        description: "Modernize facilities and technological capabilities",
        targets: [
          "Build new archaeological laboratory complex",
          "Establish digital documentation center",
          "Upgrade library and information systems",
          "Create virtual reality learning spaces"
        ],
        icon: "pi pi-building"
      },
      {
        id: '4',
        title: "Community Engagement",
        description: "Strengthen ties with local and international communities",
        targets: [
          "Launch public archaeology programs",
          "Establish community heritage centers",
          "Develop cultural tourism initiatives",
          "Create educational outreach programs"
        ],
        icon: "pi pi-users"
      }
    ]
  };

  private administrativeStructure: AdministrativeStructure = {
    dean: {
      id: 'dean',
      name: "Prof. Dr. Khaled Abdel-Naeem Mohamedin",
      title: "Dean of the Faculty",
      image: "./assets/dean.png",
      email: "dean@arch.luxor.edu.eg",
      office: "Administration Building - 3rd Floor",
      description: "Leading the faculty with over 20 years of experience in archaeological research and academic administration."
    },
    viceDeans: [
      {
        id: 'vice-dean-academic',
        name: "Prof. Dr. Amira Hassan Mohamed",
        title: "Vice Dean for Academic Affairs",
        image: "/assets/icon.jpg",
        email: "academic@arch.luxor.edu.eg",
        office: "Administration Building - 2nd Floor"
      },
      {
        id: 'vice-dean-postgrad',
        name: "Prof. Dr. Ahmed Mahmoud Ali",
        title: "Vice Dean for Postgraduate Studies",
        image: "/assets/icon.jpg", 
        email: "postgrad@arch.luxor.edu.eg",
        office: "Administration Building - 2nd Floor"
      },
      {
        id: 'vice-dean-community',
        name: "Assoc. Prof. Dr. Fatma Ibrahim",
        title: "Vice Dean for Community Service",
        image: "/assets/icon.jpg",
        email: "community@arch.luxor.edu.eg",
        office: "Administration Building - 1st Floor"
      }
    ],
    departmentHeads: [
      {
        id: 'head-egyptology',
        name: "Prof. Dr. Mohamed Saleh",
        title: "Head of Egyptology Department",
        image: "/assets/icon.jpg",
        email: "egyptology@arch.luxor.edu.eg",
        office: "Egyptology Building - 2nd Floor"
      },
      {
        id: 'head-islamic',
        name: "Prof. Dr. Nadia Farouk",
        title: "Head of Islamic Archaeology Department", 
        image: "/assets/icon.jpg",
        email: "islamic@arch.luxor.edu.eg",
        office: "Islamic Studies Building - 3rd Floor"
      },
      {
        id: 'head-restoration',
        name: "Assoc. Prof. Dr. Hany Mostafa",
        title: "Head of Restoration Department",
        image: "/assets/icon.jpg",
        email: "restoration@arch.luxor.edu.eg",
        office: "Conservation Lab Building - 1st Floor"
      }
    ]
  };

  getAboutSections(): Observable<AboutSection[]> {
    return of(this.aboutSections);
  }

  getVisionMission(): Observable<VisionMission> {
    return of(this.visionMission);
  }

  getDeanMessage(): Observable<DeanMessage> {
    return of(this.deanMessage);
  }

  getObjectives(): Observable<Objective[]> {
    return of(this.objectives);
  }

  getHistory(): Observable<HistoryItem[]> {
    return of(this.history);
  }

  getStrategicPlan(): Observable<StrategicPlan> {
    return of(this.strategicPlan);
  }

  getAdministrativeStructure(): Observable<AdministrativeStructure> {
    return of(this.administrativeStructure);
  }
}