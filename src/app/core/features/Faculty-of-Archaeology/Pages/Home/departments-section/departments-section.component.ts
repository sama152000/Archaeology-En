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
      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/departments/egyptology'
    },
    {
      id: 2,
      name: 'Restoration Department',
      description: 'Focusing on artifact restoration, conservation, and preservation of historical treasures.',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/departments/restoration'
    },
    {
      id: 3,
      name: 'Islamic Archaeology Department',
      description: 'Exploring Islamic art, architecture, and cultural heritage across centuries.',
      image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/departments/islamic'
    }
  ];
}