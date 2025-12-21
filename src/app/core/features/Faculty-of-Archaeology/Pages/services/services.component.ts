import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ServicesService } from '../../Services/services.service';
import { ServiceSection } from '../../model/service.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServicesService]
})
export class ServicesComponent implements OnInit {
  serviceSections: ServiceSection[] = [];
  activeSection: string = '';

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadServiceSections();
    this.trackActiveSection();

    // Set default route if on /services
    if (this.router.url === '/services') {
      this.router.navigate(['/services/contact']);
    }
  }

  loadServiceSections(): void {
    this.servicesService.getServiceSections().subscribe({
      next: (sections) => {
        this.serviceSections = sections;
        console.log('Loaded service sections:', sections);
      },
      error: (error) => {
        console.error('Error loading service sections:', error);
      }
    });
  }

  trackActiveSection(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const section = this.serviceSections.find(s => url.includes(s.id));
        this.activeSection = section ? section.id : '';
      });
  }
}