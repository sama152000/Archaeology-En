import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSectorSections();
    this.trackActiveSection();

    // Set default route if on /sectors
    if (this.router.url === '/sectors') {
      this.router.navigate(['/sectors/overview']);
    }
  }

  loadSectorSections(): void {
    this.sectorsService.getSectorSections().subscribe({
      next: (sections) => {
        this.sectorSections = sections;
        console.log('Loaded sector sections:', sections);
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