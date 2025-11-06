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
      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/events/egypt-exhibition'
    },
    {
      id: 2,
      title: 'Pharaoh\'s Legacy Seminar',
      schedule: 'Monday: 2 PM – 6 PM',
      date: '12',
      month: 'Jun',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/events/pharaoh-seminar'
    },
    {
      id: 3,
      title: 'Hieroglyph Workshop',
      schedule: 'Wednesday to Friday: 9 AM – 4 PM',
      date: '28',
      month: 'Jun',
      image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/events/hieroglyph-workshop'
    }
  ];
}