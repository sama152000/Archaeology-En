import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Center, CenterSection } from '../model/center.model';

@Injectable({ providedIn: 'root' })
export class CentersService {
  private centerSections: CenterSection[] = [
    {
      id: 'overview',
      title: 'Center Overview',
      route: 'overview',
      icon: 'fas fa-info-circle'
    },
    {
      id: 'activities',
      title: 'Activities & Programs',
      route: 'activities',
      icon: 'fas fa-calendar-alt'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      route: 'contact',
      icon: 'fas fa-phone'
    }
  ];

  private centers: Center[] = [
    {
      id: 1,
      name: 'Center for Digital Heritage',
      slug: 'digital-heritage',
      description: [
        'The Center for Digital Heritage is dedicated to the digitization and preservation of archaeological artifacts using cutting-edge technology.',
        'Our mission is to create comprehensive digital archives that ensure the long-term preservation of Egypt\'s cultural heritage for future generations.',
        'We employ advanced 3D scanning, virtual reality, and AI-powered analysis to document and study archaeological finds.'
      ],
      shortDescription: 'Leading center focused on digital preservation of archaeological heritage using advanced technology.',
      image: '/assets/center1.jpg',
      director: {
        name: 'Dr. Amina El-Rashid',
        title: 'Center Director',
        image: '/assets/icon.jpg',
        quote: 'Bridging ancient wisdom with modern technology.'
      },
      goals: [
        'Digitize archaeological collections',
        'Develop virtual museum experiences',
        'Train researchers in digital archaeology',
        'Create accessible online archives'
      ],
      activities: [
        '3D Documentation Projects',
        'Virtual Reality Exhibitions',
        'Digital Restoration Workshops',
        'Online Publication Platform',
        'International Collaboration Programs'
      ],
      history: 'Established in 2018, the center has successfully digitized over 5,000 artifacts and created virtual exhibitions viewed by more than 100,000 visitors worldwide.',
      contactInfo: {
        email: 'digital.heritage@arch.luxor.edu.eg',
        phone: '+20 95 237 1234',
        address: 'Digital Heritage Building, Faculty of Archaeology'
      }
    },
    {
      id: 2,
      name: 'Research Center for Ancient Civilizations',
      slug: 'ancient-civilizations',
      description: [
        'The Research Center for Ancient Civilizations conducts interdisciplinary research on the ancient cultures of Egypt and the broader Mediterranean region.',
        'Our team of international scholars works on projects ranging from linguistic analysis to material culture studies.',
        'The center publishes peer-reviewed research and hosts international conferences on ancient civilization studies.'
      ],
      shortDescription: 'Interdisciplinary research hub studying ancient Egyptian and Mediterranean civilizations.',
      image: '/assets/center2.jpg',
      director: {
        name: 'Prof. Dr. Hassan Al-Masri',
        title: 'Research Director',
        image: '/assets/icon.jpg',
        quote: 'Uncovering the past to understand our future.'
      },
      goals: [
        'Advance ancient civilization research',
        'Foster international collaboration',
        'Publish groundbreaking studies',
        'Train next generation researchers'
      ],
      activities: [
        'Field Excavation Projects',
        'Laboratory Analysis Programs',
        'International Research Conferences',
        'Graduate Student Seminars',
        'Public Lecture Series'
      ],
      history: 'Founded in 2015, the center has published over 200 research papers and hosted 15 international conferences, establishing itself as a leading research institution.',
      contactInfo: {
        email: 'research.center@arch.luxor.edu.eg',
        phone: '+20 95 237 5678',
        address: 'Research Building, 3rd Floor'
      }
    },
    {
      id: 3,
      name: 'Conservation Training Center',
      slug: 'conservation-training',
      description: [
        'The Conservation Training Center provides professional training programs for conservators and restoration specialists.',
        'We offer hands-on workshops, certification courses, and continuing education for museum professionals.',
        'Our state-of-the-art laboratories provide practical training in the latest conservation techniques and materials.'
      ],
      shortDescription: 'Professional training hub for conservation specialists and museum professionals.',
      image: '/assets/center3.jpg',
      director: {
        name: 'Dr. Sarah Ahmed',
        title: 'Training Director',
        image: '/assets/icon.jpg',
        quote: 'Preserving heritage through skilled hands and minds.'
      },
      goals: [
        'Train professional conservators',
        'Develop conservation standards',
        'Promote best practices',
        'Support career development'
      ],
      activities: [
        'Professional Certification Programs',
        'Conservation Workshops',
        'Technical Training Courses',
        'Equipment Training Sessions',
        'Career Development Programs'
      ],
      history: 'Launched in 2020, the center has trained over 500 professionals and established partnerships with museums across Egypt and the Middle East.',
      contactInfo: {
        email: 'training.center@arch.luxor.edu.eg',
        phone: '+20 95 237 9012',
        address: 'Conservation Labs Building'
      }
    }
  ];

  getCenterSections(): Observable<CenterSection[]> {
    return of(this.centerSections);
  }

  getCenter(id: number): Observable<Center | undefined> {
    return of(this.centers.find(c => c.id === id));
  }

  getCenters(): Observable<Center[]> {
    return of(this.centers);
  }
}