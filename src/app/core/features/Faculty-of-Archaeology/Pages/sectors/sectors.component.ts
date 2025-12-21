import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet, ActivatedRoute } from '@angular/router';
import { SectorsService } from '../../Services/sectors.service';
import { SectorSection } from '../../model/sector.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css'],
  providers: [SectorsService]
})
export class SectorsComponent implements OnInit {
  sectorSections: SectorSection[] = [];
  activeSection: string = '';

  constructor(
    private sectorsService: SectorsService,
    private router: Router,
    private route: ActivatedRoute   // ✅ أضفنا ActivatedRoute هنا
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const sectorId = params['id'];
      this.loadSectorSections(sectorId);

      if (this.router.url === `/sectors/${sectorId}`) {
        this.router.navigate([`/sectors/${sectorId}/overview`]);
      }
    });

    this.trackActiveSection();
  }

  loadSectorSections(sectorId: string): void {
    this.sectorsService.getSectorSections(sectorId).subscribe({
      next: (sections) => {
        this.sectorSections = sections;
      },
      error: (error) => {
        console.error('Error loading sector sections:', error);
      }
    });
  }

  trackActiveSection(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const section = this.sectorSections.find(s => url.includes(s.id));
        this.activeSection = section ? section.id : '';
      });
  }
}
