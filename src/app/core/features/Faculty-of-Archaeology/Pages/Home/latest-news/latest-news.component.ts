import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  featured?: boolean;
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {
  featuredNews: NewsItem = {
    id: 1,
    title: 'Major Discovery in Giza: Newly Found Pharaoh\'s Tomb',
    excerpt: 'Archaeologists at the Giza plateau have unearthed a previously unknown tomb believed to belong to a 5th Dynasty pharaoh. The discovery sheds light on ancient Egyptian funerary practices and architecture.',
    date: 'October 10, 2025',
    image: './assets/lux6.jpg',
    link: '/news/giza-discovery',
    featured: true
  };

  newsItems: NewsItem[] = [
    {
      id: 2,
      title: 'Annual Cultural Festival Celebrates Ancient Arts',
      excerpt: 'The faculty hosted a vibrant event featuring traditional performances, ancient crafts, and student-led exhibitions.',
      date: 'September 20, 2025',
    image: './assets/lux10.jpg',
      link: '/news/cultural-festival'
    },
    {
      id: 3,
      title: 'New Partnership with the Egyptian Museum',
      excerpt: 'The Department of Archaeology announced a research collaboration with the Egyptian Museum to preserve rare artifacts.',
      date: 'August 15, 2025',
    image: './assets/lux5.jpg',
      link: '/news/museum-partnership'
    },
    {
      id: 4,
      title: 'Students Join Summer Research Program in Luxor',
      excerpt: 'Archaeology students gain hands-on experience in excavation and artifact documentation at the Luxor site.',
      date: 'July 5, 2025',
    image: './assets/lux2.jpg',
      link: '/news/luxor-program'
    }
  ];
}