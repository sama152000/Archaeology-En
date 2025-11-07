import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { VisionMission } from '../../../model/about.model';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
  host: {'class': 'vision-component'}
})
export class VisionComponent implements OnInit {
  visionMission: VisionMission | null = null;
  isLoading = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadVisionMission();
  }

  loadVisionMission(): void {
    console.log('Loading vision & mission...');
    this.isLoading = true;
    this.aboutService.getVisionMission().subscribe({
      next: (data) => {
        console.log('Vision & mission loaded:', data);
        this.visionMission = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading vision & mission:', error);
        this.isLoading = false;
      }
    });
  }
}