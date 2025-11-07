import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { DepartmentsService } from '../../Services/departments.service';
import { DepartmentSection } from '../../model/departments.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentsService]
})
export class DepartmentComponent implements OnInit {
  departmentSections: DepartmentSection[] = [];
  activeSection: string = '';

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartmentSections();
    this.trackActiveSection();

    // Set default route if on /department
    if (this.router.url === '/department') {
      this.router.navigate(['/department/about']);
    }
  }

  loadDepartmentSections(): void {
    this.departmentsService.getDepartmentSections().subscribe({
      next: (sections) => {
        this.departmentSections = sections;
        console.log('Loaded sections:', sections);
      },
      error: (error) => {
        console.error('Error loading department sections:', error);
      }
    });
  }

  trackActiveSection(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        const section = this.departmentSections.find(s => url.includes(s.id));
        this.activeSection = section ? section.id : '';
      });
  }
}
