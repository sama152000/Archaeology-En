import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { Department } from '../../../model/departments.model';
import { DepartmentsService } from '../../../Services/departments.service';

@Component({
  selector: 'app-departments-section',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule],
  templateUrl: './departments-section.component.html',
  styleUrls: ['./departments-section.component.css']
})
export class DepartmentsSectionComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (error) => {
        console.error('Error fetching departments:', error);
      }
    });
  }
}
