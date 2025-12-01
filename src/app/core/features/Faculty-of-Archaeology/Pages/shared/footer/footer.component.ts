import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterService } from '../../../Services/footer.service';
import { FooterLink, SocialLink, ContactInfo, FacultyInfo } from '../../../model/footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  quickLinks: FooterLink[] = [];
  contactInfo!: ContactInfo;
  socialLinks: SocialLink[] = [];
  facultyInfo!: FacultyInfo;

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.footerService.getQuickLinks().subscribe(links => this.quickLinks = links);
    this.footerService.getContactInfo().subscribe(info => this.contactInfo = info);
    this.footerService.getSocialLinks().subscribe(links => this.socialLinks = links);
    this.footerService.getFacultyInfo().subscribe(info => this.facultyInfo = info);
  }
}
