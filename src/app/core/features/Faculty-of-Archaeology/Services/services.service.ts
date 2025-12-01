import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service, ServiceSection } from '../model/service.model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private serviceSections: ServiceSection[] = [
    {
      id: 'details',
      title: 'Service Details',
      route: 'details',
      icon: 'fas fa-info-circle'
    },
    {
      id: 'requirements',
      title: 'Requirements',
      route: 'requirements',
      icon: 'fas fa-clipboard-list'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      route: 'contact',
      icon: 'fas fa-phone'
    }
  ];

  private services: Service[] = [
    {
      id: 1,
      name: 'Archaeological Consultation Services',
      slug: 'consultation',
      description: [
        'Our Archaeological Consultation Services provide expert advice for construction projects, heritage impact assessments, and cultural resource management.',
        'We offer comprehensive site surveys, artifact identification, and preservation recommendations for both public and private sector clients.',
        'Our team of certified archaeologists ensures compliance with heritage protection laws and international standards.'
      ],
      shortDescription: 'Expert archaeological consultation for construction projects and heritage assessments.',
      image: '/assets/service1.jpg',
      manager: {
        name: 'Dr. Mohamed Farid',
        title: 'Consultation Manager',
        image: '/assets/icon.jpg'
      },
      servicesList: [
        'Site Archaeological Surveys',
        'Heritage Impact Assessments',
        'Cultural Resource Management Plans',
        'Artifact Analysis and Documentation',
        'Preservation Strategy Development',
        'Compliance Consultation',
        'Expert Testimony Services'
      ],
      benefits: [
        'Legal compliance assurance',
        'Cultural heritage preservation',
        'Professional expertise',
        'Timely project delivery',
        'Cost-effective solutions'
      ],
      requirements: [
        'Project documentation',
        'Site access permissions',
        'Clear project timeline',
        'Budget allocation',
        'Stakeholder contact information'
      ],
      contactInfo: {
        email: 'consultation@arch.luxor.edu.eg',
        phone: '+20 95 237 3456',
        office: 'Consultation Office, Ground Floor'
      }
    },
    {
      id: 2,
      name: 'Laboratory Analysis Services',
      slug: 'laboratory',
      description: [
        'Our Laboratory Analysis Services offer comprehensive scientific analysis of archaeological materials using state-of-the-art equipment.',
        'We provide dating services, material composition analysis, provenance studies, and conservation assessments.',
        'Our certified laboratory serves researchers, museums, and institutions across Egypt and the region.'
      ],
      shortDescription: 'Comprehensive scientific analysis of archaeological materials and artifacts.',
      image: '/assets/service2.jpg',
      manager: {
        name: 'Dr. Nadia Hassan',
        title: 'Laboratory Director',
        image: '/assets/icon.jpg'
      },
      servicesList: [
        'Radiocarbon Dating (C-14)',
        'X-Ray Fluorescence (XRF) Analysis',
        'Microscopic Examination',
        'Material Composition Analysis',
        'Provenance Studies',
        'Conservation Assessment',
        'Digital Documentation'
      ],
      benefits: [
        'Accurate dating results',
        'Detailed material analysis',
        'Scientific documentation',
        'Research support',
        'International standards compliance'
      ],
      requirements: [
        'Sample submission forms',
        'Research permits',
        'Analysis fee payment',
        'Sample handling protocols',
        'Results delivery preferences'
      ],
      contactInfo: {
        email: 'laboratory@arch.luxor.edu.eg',
        phone: '+20 95 237 7890',
        office: 'Analysis Laboratory, 2nd Floor'
      }
    },
    {
      id: 3,
      name: 'Educational Outreach Programs',
      slug: 'education',
      description: [
        'Our Educational Outreach Programs bring archaeology and heritage awareness to schools, communities, and the general public.',
        'We design interactive workshops, museum visits, and educational materials that make archaeology accessible to all ages.',
        'Our programs support the Ministry of Education curriculum and promote cultural heritage appreciation.'
      ],
      shortDescription: 'Interactive educational programs promoting archaeology and heritage awareness.',
      image: '/assets/service3.jpg',
      manager: {
        name: 'Prof. Dr. Layla Mahmoud',
        title: 'Education Coordinator',
        image: '/assets/icon.jpg'
      },
      servicesList: [
        'School Visit Programs',
        'Teacher Training Workshops',
        'Community Heritage Events',
        'Museum Educational Tours',
        'Digital Learning Resources',
        'Summer Archaeology Camps',
        'Public Lecture Series'
      ],
      benefits: [
        'Cultural awareness promotion',
        'Educational curriculum support',
        'Community engagement',
        'Heritage appreciation',
        'Career inspiration for students'
      ],
      requirements: [
        'Program booking request',
        'Participant group details',
        'Educational objectives',
        'Venue arrangements',
        'Schedule coordination'
      ],
      contactInfo: {
        email: 'education@arch.luxor.edu.eg',
        phone: '+20 95 237 4567',
        office: 'Education Center, 1st Floor'
      }
    }
  ];

  getServiceSections(): Observable<ServiceSection[]> {
    return of(this.serviceSections);
  }

  getService(id: number): Observable<Service | undefined> {
    return of(this.services.find(s => s.id === id));
  }

  getServices(): Observable<Service[]> {
    return of(this.services);
  }
}