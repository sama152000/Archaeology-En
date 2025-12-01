import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { StrategicPlan } from '../../../model/about.model';

@Component({
  selector: 'app-strategic-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strategic-plan.component.html',
  styleUrls: ['./strategic-plan.component.css']
})
export class StrategicPlanComponent implements OnInit {
  strategicPlan: StrategicPlan | null = null;
  isLoading = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadStrategicPlan();
  }

  loadStrategicPlan(): void {
    this.isLoading = true;
    this.aboutService.getStrategicPlan().subscribe({
      next: (data) => {
        this.strategicPlan = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading strategic plan:', error);
        this.isLoading = false;
      }
    });
  }
}