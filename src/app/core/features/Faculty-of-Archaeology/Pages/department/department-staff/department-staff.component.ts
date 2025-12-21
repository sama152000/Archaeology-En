import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { DepartmentsService } from '../../../Services/departments.service';
import { Department, DepartmentMember, DepartmentProgram } from '../../../model/departments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-staff',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './department-staff.component.html',
  styleUrls: ['./department-staff.component.css']
})
export class DepartmentStaffComponent implements OnInit {
  department?: Department;
  members: DepartmentMember[] = [];
  programs: DepartmentProgram[] = [];

  constructor(
    private route: ActivatedRoute,
    private deptService: DepartmentsService,
        private router: Router

  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id']; // خليها string مش number
      this.deptService.getDepartment(id).subscribe(dept => {
        this.department = dept;
      });

      this.deptService.getDepartmentMembers(id).subscribe(members => {
        this.members = members;
      });

      this.deptService.getDepartmentPrograms(id).subscribe(programs => {
        this.programs = programs;
      });
    });
  }

    viewProgram (ProgramId:string):void{
        this.router.navigate(['/program', ProgramId]);
  }
}
