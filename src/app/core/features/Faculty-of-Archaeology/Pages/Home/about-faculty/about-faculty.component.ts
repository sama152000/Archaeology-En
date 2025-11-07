import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-faculty.component.html',
  styleUrls: ['./about-faculty.component.css']
})
export class AboutFacultyComponent {
  facultyImage = './assets/faculty.png';
  
  aboutContent = {
    title: 'About Our Faculty',
    paragraphs: [
      'The Faculty of History and Archeology has been a center of excellence for more than 100 years, shaping generations of historians and explorers. Our professors combine research and field experience to uncover the untold stories of human civilization.',
      'From the sands of ancient Egypt to the ruins of the Mediterranean, our mission is to preserve and share humanity\'s most valuable heritage through education, innovation, and discovery.'
    ],
    buttonText: 'Learn More',
    buttonLink: '/about'
  };
}