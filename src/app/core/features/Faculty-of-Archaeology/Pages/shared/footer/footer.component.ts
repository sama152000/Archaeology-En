import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  url: string;
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks: FooterLink[] = [
    { label: 'About', url: '/about' },
    { label: 'History', url: '/history' },
    { label: 'Departments', url: '/departments' },
    { label: 'Events', url: '/events' },
    { label: 'Contact', url: '/contact' }
  ];

  contactInfo = {
    address: 'Cairo, Egypt',
    phone: '+20 123 456 789',
    email: 'info@pharaohacademy.edu'
  };

  socialLinks: SocialLink[] = [
    { icon: 'pi pi-facebook', url: '#', label: 'Facebook' },
    { icon: 'pi pi-instagram', url: '#', label: 'Instagram' },
    { icon: 'pi pi-twitter', url: '#', label: 'Twitter' },
    { icon: 'pi pi-youtube', url: '#', label: 'YouTube' }
  ];
}