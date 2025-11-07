import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

interface Department {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-departments-section',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './departments-section.component.html',
  styleUrls: ['./departments-section.component.css']
})
export class DepartmentsSectionComponent {
  departments: Department[] = [
    {
      id: 1,
      name: 'Egyptology Department',
      description: 'Dedicated to field research and excavation, uncovering the secrets of ancient Egypt and its timeless heritage.',
      image: './assets/dep1.jpg',
      link: '/departments/egyptology'
    },
    {
      id: 2,
      name: 'Restoration Department',
      description: 'Focusing on artifact restoration, conservation, and preservation of historical treasures.',
      image: './assets/dep2.jpg',
      link: '/departments/restoration'
    },
    {
      id: 3,
      name: 'Islamic Archaeology Department',
      description: 'Exploring Islamic art, architecture, and cultural heritage across centuries.',
      image: './assets/dep3.jpg',
      link: '/departments/islamic'
    }
  ];
}