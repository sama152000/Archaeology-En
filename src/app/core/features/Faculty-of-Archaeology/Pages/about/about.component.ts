import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { AboutService } from '../../Services/about.service';
import { AboutSection } from '../../model/about.model';
import { filter } from 'rxjs/operators';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  aboutSections: AboutSection[] = [];
  activeSection: string = '';

  constructor(
    private aboutService: AboutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAboutSections();
    this.trackActiveSection();
    
    // Set default route if on /about
    if (this.router.url === '/about') {
      this.router.navigate(['/about/dean-message']);
    }
  }

  loadAboutSections(): void {
    this.aboutService.getAboutSections().subscribe({
      next: (sections) => {
        this.aboutSections = sections;
        console.log('Loaded sections:', sections);
      },
      error: (error) => {
        console.error('Error loading about sections:', error);
      }
    });
  }

  trackActiveSection(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const section = this.aboutSections.find(s => url.includes(s.id));
        this.activeSection = section ? section.id : '';
      });
  }
}