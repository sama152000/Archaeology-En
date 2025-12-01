import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterLink, SocialLink, ContactInfo, FacultyInfo } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private quickLinks: FooterLink[] = [
    { label: 'About', url: '/about' },
    { label: 'History', url: '/about/history' },
    { label: 'Departments', url: '/departments/1' },
    { label: 'Events', url: '/posts/events/1' },
    { label: 'Contact', url: '/contact' }
  ];

  private contactInfo: ContactInfo = {
    address: 'Cairo, Egypt',
    phone: '+20 123 456 789',
    email: 'info@pharaohacademy.edu'
  };

  private socialLinks: SocialLink[] = [
    { icon: 'pi pi-facebook', url: '#', label: 'Facebook' },
    { icon: 'pi pi-instagram', url: '#', label: 'Instagram' },
    { icon: 'pi pi-twitter', url: '#', label: 'Twitter' },
    { icon: 'pi pi-youtube', url: '#', label: 'YouTube' }
  ];

  private facultyInfo: FacultyInfo = {
    title: 'Faculty of Archaeology',
    description: 'Preserving and sharing humanity\'s most valuable heritage through education, innovation, and discovery for over 100 years.'
  };

  getQuickLinks(): Observable<FooterLink[]> {
    return of(this.quickLinks);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getSocialLinks(): Observable<SocialLink[]> {
    return of(this.socialLinks);
  }

  getFacultyInfo(): Observable<FacultyInfo> {
    return of(this.facultyInfo);
  }
}
