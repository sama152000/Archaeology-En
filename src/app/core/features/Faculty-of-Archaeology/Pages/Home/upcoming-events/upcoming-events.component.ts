import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  id: number;
  title: string;
  schedule: string;
  date: string;
  month: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent {
  events: Event[] = [
    {
      id: 1,
      title: 'Ancient Egypt Exhibition',
      schedule: 'Friday to Sunday: 10 AM – 5 PM',
      date: '26',
      month: 'May',
      image: './assets/lux11.jpg',
      link: '/events/egypt-exhibition'
    },
    {
      id: 2,
      title: 'Pharaoh\'s Legacy Seminar',
      schedule: 'Monday: 2 PM – 6 PM',
      date: '12',
      month: 'Jun',
      image: './assets/lux12.jpg',
      link: '/events/pharaoh-seminar'
    },
    {
      id: 3,
      title: 'Hieroglyph Workshop',
      schedule: 'Wednesday to Friday: 9 AM – 4 PM',
      date: '28',
      month: 'Jun',
      image: './assets/lux13.jpg',
      link: '/events/hieroglyph-workshop'
    }
  ];
}