import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CentersService } from '../../Services/center.service';
import { CenterSection } from '../../model/center.model';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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
  centerId: string = '';

  constructor(
    private centersService: CentersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.centerId = params['id']; // الـ id من الـ route
      this.loadCenterSections(this.centerId);

      // Set default route if on /centers/:id
      if (this.router.url === `/centers/${this.centerId}`) {
        this.router.navigate([`/centers/${this.centerId}/overview`]);
      }
    });

    this.trackActiveSection();
  }

  loadCenterSections(centerId: string): void {
    this.centersService.getCenterSections(centerId).subscribe({
      next: (sections) => {
        this.centerSections = sections;
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