import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { AdministrativeStructure } from '../../../model/about.model';

@Component({
  selector: 'app-administrative-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administrative-structure.component.html',
  styleUrls: ['./administrative-structure.component.css']
})
export class AdministrativeStructureComponent implements OnInit {
  administrativeStructure: AdministrativeStructure | null = null;
  isLoading = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadAdministrativeStructure();
  }

  loadAdministrativeStructure(): void {
    this.isLoading = true;
    this.aboutService.getAdministrativeStructure().subscribe({
      next: (data) => {
        this.administrativeStructure = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading administrative structure:', error);
        this.isLoading = false;
      }
    });
  }
}