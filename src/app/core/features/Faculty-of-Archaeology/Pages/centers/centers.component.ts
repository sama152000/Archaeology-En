import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CentersService } from '../../Services/center.service';
import { CenterSection } from '../../model/center.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-centers',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css'],
  providers: [CentersService]
})
export class CentersComponent implements OnInit {
  centerSections: CenterSection[] = [];
  activeSection: string = '';

  constructor(
    private centersService: CentersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCenterSections();
    this.trackActiveSection();

    // Set default route if on /centers
    if (this.router.url === '/centers') {
      this.router.navigate(['/centers/overview']);
    }
  }

  loadCenterSections(): void {
    this.centersService.getCenterSections().subscribe({
      next: (sections) => {
        this.centerSections = sections;
        console.log('Loaded center sections:', sections);
      },
      error: (error) => {
        console.error('Error loading center sections:', error);
      }
    });
  }

  trackActiveSection(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const section = this.centerSections.find(s => url.includes(s.id));
        this.activeSection = section ? section.id : '';
      });
  }
}