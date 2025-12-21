import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { Objective } from '../../../model/about.model';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit {
  objectives: Objective[] = [];
  isLoading = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadObjectives();
  }

  loadObjectives(): void {
    this.aboutService.getObjectives().subscribe({
      next: (data: Objective[]) => {
        this.objectives = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error loading objectives:', error);
        this.isLoading = false;
      }
    });
  }
}
