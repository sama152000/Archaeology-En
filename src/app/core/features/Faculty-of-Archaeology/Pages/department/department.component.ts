import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterOutlet, ActivatedRoute, Params } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    const id = params['id']; // string GUID
    this.loadDepartmentSections(id);
    this.trackActiveSection();
    if (this.router.url === `/department/${id}`) {
      this.router.navigate([`/department/${id}/about`]);
    }
  });
}

loadDepartmentSections(departmentId: string): void {
  this.departmentsService.getDepartmentSections(departmentId).subscribe({
    next: (sections) => {
      this.departmentSections = sections;
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
