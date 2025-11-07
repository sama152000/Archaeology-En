import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../../../Services/departments.service';
import { Department } from '../../../model/departments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-staff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-staff.component.html',
  styleUrls: ['./department-staff.component.css']
})
export class DepartmentStaffComponent implements OnInit {
  department?: Department;

  constructor(
    private route: ActivatedRoute,
    private deptService: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = +params['id'];
      this.deptService.getDepartment(id).subscribe(dept => {
        this.department = dept;
      });
    });
  }
}
