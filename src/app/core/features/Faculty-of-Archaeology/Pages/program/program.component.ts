import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet, ActivatedRoute, Params } from '@angular/router';
import { ProgramsService } from '../../Services/programs.service';
import { ProgramSection } from '../../model/program.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
  providers: [ProgramsService]
})
export class ProgramComponent implements OnInit {
  programSections: ProgramSection[] = [];
  activeSection: string = '';

  constructor(
    private programsService: ProgramsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.loadProgramSections(id);
      this.trackActiveSection();
      if (this.router.url === `/program/${id}`) {
        this.router.navigate([`/program/${id}/about`]);
      }
    });
  }

  loadProgramSections(programId: string): void {
    this.programsService.getProgramSections(programId).subscribe({
      next: (sections) => {
        this.programSections = sections;
      },
      error: (error) => {
        console.error('Error loading program sections:', error);
      }
    });
  }

  trackActiveSection(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const section = this.programSections.find(s => url.includes(s.id));
        this.activeSection = section ? section.id : '';
      });
  }
}