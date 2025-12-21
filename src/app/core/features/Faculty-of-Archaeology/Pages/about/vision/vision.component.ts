// src/app/components/about/vision/vision.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { AboutResponse } from '../../../model/about.model';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
  host: {'class': 'vision-component'}
})
export class VisionComponent implements OnInit {
  aboutData: AboutResponse | null = null;
  isLoading = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadVisionMission();
  }

  loadVisionMission(): void {
    this.isLoading = true;
    this.aboutService.getAbout().subscribe({
      next: (data) => {
        this.aboutData = data[0]; // أول عنصر من الـ API
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading vision & mission:', error);
        this.isLoading = false;
      }
    });
  }
}
