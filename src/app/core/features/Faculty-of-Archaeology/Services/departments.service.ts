import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department, DepartmentSection } from '../model/departments.model';

@Injectable({ providedIn: 'root' })
export class DepartmentsService {
  private departmentSections: DepartmentSection[] = [
    {
      id: 'about',
      title: 'About Department',
      route: 'about',
      icon: 'fas fa-info-circle'
    },
    {
      id: 'staff',
      title: 'Academic Staff',
      route: 'staff',
      icon: 'fas fa-users'
    },
    {
      id: 'admin',
      title: 'Administrative Structure',
      route: 'admin',
      icon: 'fas fa-sitemap'
    }
  ];

  private departments: Department[] = [
    {
      id: 1,
      name: 'Department of Egyptology',
      slug: 'egyptology',
      description: [
        ' is one of the leading departments at the Faculty of Archaeology, focusing on the study of ancient Egyptian civilization — its language, history, art, religion, and culture.',
        'Our faculty members are recognized experts in their fields and collaborate with national and international institutions to promote the documentation and preservation of Egypt’s archaeological treasures.'
      ],
      image: '/assets/dep1.jpg',
      hod: {
        name: 'Prof. Dr. Noura El-Masry',
        title: 'Head of the Department',
        image: '/assets/icon.jpg',
        quote: 'Preserving the past to enlighten the future.'
      },
      staff: [
        { name: 'Prof. Dr. Ahmed Hassan', position: 'Professor', email: 'ahmed@arch.edu', image: '/assets/icon.jpg' },
        { name: 'Dr. Salma Youssef', position: 'Associate Professor', email: 'salma@arch.edu', image: '/assets/icon.jpg' },
        { name: 'Dr. Mahmoud Ali', position: 'Lecturer', email: 'mahmoud@arch.edu', image: '/assets/icon.jpg' },
        { name: 'Dr. Laila Ibrahim', position: 'Assistant Lecturer', email: 'laila@arch.edu', image: '/assets/icon.jpg' }
      ]
    },
    {
      id: 2,
      name: 'Department of Restoration',
      slug: 'restoration',
      description: [
        'The Restoration Department specializes in the conservation and restoration of archaeological artifacts, ensuring their longevity for future generations.',
        'Students gain hands-on experience with advanced techniques in material analysis, conservation ethics, and museum preservation.'
      ],
      image: '/assets/dep2.jpg',
      hod: {
        name: 'Prof. Dr. Omar Farouk',
        title: 'Head of the Department',
        image: '/assets/icon.jpg'
      },
      staff: [
        { name: 'Prof. Dr. Fatima Zaki', position: 'Professor', email: 'fatima@arch.edu', image: '/assets/icon.jpg' },
        { name: 'Dr. Youssef Kamal', position: 'Associate Professor', email: 'youssef@arch.edu', image: '/assets/icon.jpg' }
      ]
    },
    {
      id: 3,
      name: 'Department of Islamic Archaeology',
      slug: 'islamic',
      description: [
        'Dedicated to the study of Islamic art, architecture, and material culture from the early Islamic period to the Ottoman era.',
        'The department conducts field surveys, excavation projects, and publishes research on Islamic heritage sites across Egypt and the region.'
      ],
      image: '/assets/dep3.jpg',
      hod: {
        name: 'Prof. Dr. Aisha Mahmoud',
        title: 'Head of the Department',
        image: '/assets/icon.jpg'
      },
      staff: [
        { name: 'Prof. Dr. Tarek Salem', position: 'Professor', email: 'tarek@arch.edu', image: '/assets/icon.jpg' },
        { name: 'Dr. Hana Mostafa', position: 'Lecturer', email: 'hana@arch.edu', image: '/assets/icon.jpg' }
      ]
    }
  ];

  getDepartmentSections(): Observable<DepartmentSection[]> {
    return of(this.departmentSections);
  }

  getDepartment(id: number): Observable<Department | undefined> {
    return of(this.departments.find(d => d.id === id));
  }

  getDepartments(): Observable<Department[]> {
    return of(this.departments);
  }
}
