import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../../../Services/departments.service';
import { Department } from '../../../model/departments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-structure.component.html',
  styleUrls: ['./admin-structure.component.css']
})
export class AdminStructureComponent implements OnInit {
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
