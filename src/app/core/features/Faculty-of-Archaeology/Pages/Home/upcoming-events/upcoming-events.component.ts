import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { Event } from '../../../model/news.model';



@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getEvents().subscribe(events => {
      this.events = events.slice(0, 3);
    });
  }
}
