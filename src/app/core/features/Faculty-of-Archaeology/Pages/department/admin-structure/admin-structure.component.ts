import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../../../Services/departments.service';
import { DepartmentService } from '../../../model/departments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-structure.component.html',
  styleUrls: ['./admin-structure.component.css']
})
export class AdminStructureComponent implements OnInit {
  services: DepartmentService[] = [];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private deptService: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id']; // خليها string مش number
      this.deptService.getDepartmentServices(id).subscribe({
        next: (data: DepartmentService[]) => {
          this.services = data;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error loading services:', error);
          this.isLoading = false;
        }
      });
    });
  }
}
