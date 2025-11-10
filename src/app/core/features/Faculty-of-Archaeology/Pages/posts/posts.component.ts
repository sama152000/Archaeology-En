import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import { News, Event } from '../../model/news.model';
import { Announcement } from '../../model/news.model';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  currentType: string = 'news';
  newsItems: News[] = [];
  events: Event[] = [];
  announcements: Announcement[] = [];
  isVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentType = params['type'] || 'news';
      console.log('PostsComponent ngOnInit type=', this.currentType);
      this.loadData();
    });
  }

  loadData() {
    this.newsService.getNews().subscribe(news => this.newsItems = news);
    this.newsService.getEvents().subscribe(events => this.events = events);
    this.newsService.getAnnouncements().subscribe(announcements => this.announcements = announcements);
    // small delay to log after subscriptions complete
    setTimeout(() => {
      console.log('PostsComponent data loaded:', {
        type: this.currentType,
        newsCount: this.newsItems.length,
        eventsCount: this.events.length,
        announcementsCount: this.announcements.length
      });
      this.isVisible = true;
    }, 50);
  }

  getCurrentItems() {
    switch (this.currentType) {
      case 'events':
        return this.events;
      case 'announcements':
        return this.announcements;
      default:
        return this.newsItems;
    }
  }

  getTitle() {
    switch (this.currentType) {
      case 'events':
        return 'Upcoming Events';
      case 'announcements':
        return 'Latest Announcements';
      default:
        return 'Latest News & Articles';
    }
  }

  getIntroText() {
    switch (this.currentType) {
      case 'events':
        return 'Discover upcoming events, workshops, and seminars at the Faculty of Archaeology.';
      case 'announcements':
        return 'Stay informed with the latest announcements and important updates from the faculty.';
      default:
        return 'Stay updated with the latest events, achievements, and research activities at the Faculty of Archaeology.';
    }
  }

  navigateToDetails(item: any) {
    this.router.navigate(['/posts', this.currentType, item.id]);
  }

  isActive(type: string): boolean {
    return this.currentType === type;
  }
}