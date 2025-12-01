import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sector, SectorSection } from '../model/sector.model';

@Injectable({ providedIn: 'root' })
export class SectorsService {
  private sectorSections: SectorSection[] = [
    {
      id: 'overview',
      title: 'Sector Overview',
      route: 'overview',
      icon: 'fas fa-building'
    },
    {
      id: 'projects',
      title: 'Current Projects',
      route: 'projects',
      icon: 'fas fa-tasks'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      route: 'contact',
      icon: 'fas fa-phone'
    }
  ];

  private sectors: Sector[] = [
    {
      id: 1,
      name: 'Archaeological Fieldwork Sector',
      slug: 'fieldwork',
      description: [
        'The Archaeological Fieldwork Sector coordinates and manages all field excavation projects undertaken by the Faculty of Archaeology.',
        'We oversee excavation permits, site management, and collaboration with international archaeological missions.',
        'Our sector ensures that all fieldwork adheres to international archaeological standards and Egyptian antiquities laws.'
      ],
      shortDescription: 'Manages and coordinates all archaeological excavation projects and fieldwork activities.',
      image: '/assets/sector1.jpg',
      head: {
        name: 'Dr. Khaled Abdel-Rahman',
        title: 'Sector Head',
        image: '/assets/icon.jpg',
        quote: 'Every excavation tells a story waiting to be discovered.'
      },
      objectives: [
        'Coordinate archaeological excavations',
        'Ensure compliance with antiquities laws',
        'Facilitate international collaborations',
        'Train students in fieldwork methods',
        'Document archaeological discoveries'
      ],
      achievements: [
        '25 active excavation sites managed',
        '15 international partnerships established',
        'Over 10,000 artifacts documented',
        '200+ students trained annually',
        '50+ research publications produced'
      ],
      projects: [
        'Valley of the Kings Excavation Project',
        'Temple Complex Documentation Initiative',
        'Urban Archaeology in Historic Luxor',
        'Underwater Archaeology Program',
        'Desert Survey and Mapping Project'
      ],
      contactInfo: {
        email: 'fieldwork@arch.luxor.edu.eg',
        phone: '+20 95 237 2345',
        location: 'Fieldwork Coordination Office, Ground Floor'
      }
    },
    {
      id: 2,
      name: 'Museum and Collections Sector',
      slug: 'museum',
      description: [
        'The Museum and Collections Sector manages the faculty\'s extensive collection of archaeological artifacts and oversees the university museum.',
        'We are responsible for acquisitions, cataloging, conservation, and public exhibition of the collection.',
        'Our sector works closely with national and international museums to facilitate loans and collaborative exhibitions.'
      ],
      shortDescription: 'Manages university museum collections and coordinates public exhibitions.',
      image: '/assets/sector2.jpg',
      head: {
        name: 'Dr. Yasmin Al-Shazly',
        title: 'Collections Director',
        image: '/assets/icon.jpg',
        quote: 'Preserving the past, inspiring the future.'
      },
      objectives: [
        'Manage archaeological collections',
        'Organize public exhibitions',
        'Facilitate research access',
        'Develop educational programs',
        'Maintain conservation standards'
      ],
      achievements: [
        '15,000 artifacts in permanent collection',
        '12 major exhibitions organized annually',
        '50,000+ annual museum visitors',
        '25 traveling exhibitions created',
        '100% digital catalog completion'
      ],
      projects: [
        'Digital Collections Database',
        'Interactive Museum Experience',
        'Community Outreach Program',
        'Conservation Laboratory Upgrade',
        'Virtual Reality Exhibition Platform'
      ],
      contactInfo: {
        email: 'museum@arch.luxor.edu.eg',
        phone: '+20 95 237 6789',
        location: 'University Museum, Main Building'
      }
    },
    {
      id: 3,
      name: 'Research and Publications Sector',
      slug: 'research',
      description: [
        'The Research and Publications Sector supports faculty research activities and manages the dissemination of academic work.',
        'We coordinate research grants, facilitate publication processes, and organize academic conferences and seminars.',
        'Our sector maintains partnerships with leading academic publishers and research institutions worldwide.'
      ],
      shortDescription: 'Supports faculty research activities and manages academic publications.',
      image: '/assets/sector3.jpg',
      head: {
        name: 'Prof. Dr. Mahmoud El-Sherbiny',
        title: 'Research Coordinator',
        image: '/assets/icon.jpg',
        quote: 'Research today shapes tomorrow\'s understanding.'
      },
      objectives: [
        'Support faculty research initiatives',
        'Facilitate academic publications',
        'Organize scientific conferences',
        'Manage research grants',
        'Promote international collaboration'
      ],
      achievements: [
        '150+ peer-reviewed publications annually',
        '25 research grants secured',
        '8 international conferences hosted',
        '40+ collaborative research projects',
        '95% publication success rate'
      ],
      projects: [
        'Digital Archaeology Research Initiative',
        'Ancient Technologies Study Program',
        'Climate Change Impact Assessment',
        'Heritage Tourism Development Research',
        'Archaeological Site Management Studies'
      ],
      contactInfo: {
        email: 'research@arch.luxor.edu.eg',
        phone: '+20 95 237 8901',
        location: 'Research Office, 3rd Floor, Academic Building'
      }
    }
  ];

  getSectorSections(): Observable<SectorSection[]> {
    return of(this.sectorSections);
  }

  getSector(id: number): Observable<Sector | undefined> {
    return of(this.sectors.find(s => s.id === id));
  }

  getSectors(): Observable<Sector[]> {
    return of(this.sectors);
  }
}