import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { UnitsService } from '../../Services/units.service';
import { UnitSection } from '../../model/unit.model';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
  providers: [UnitsService]
})
export class UnitsComponent implements OnInit {
  unitSections: UnitSection[] = [];
  activeSection: string = '';
  unitId: string = '';

  constructor(
    private unitsService: UnitsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.unitId = params['id']; // الـ id من الـ route
      this.loadUnitSections(this.unitId);

      // Set default route if on /units/:id
      if (this.router.url === `/units/${this.unitId}`) {
        this.router.navigate([`/units/${this.unitId}/overview`]);
      }
    });

    this.trackActiveSection();
  }

  loadUnitSections(unitId: string): void {
    this.unitsService.getUnitSections(unitId).subscribe({
      next: (sections) => {
        this.unitSections = sections;
      },
      error: (error) => {
        console.error('Error loading unit sections:', error);
      }
    });
  }

  trackActiveSection(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const section = this.unitSections.find(s => url.includes(s.id));
        this.activeSection = section ? section.id : '';
      });
  }
}