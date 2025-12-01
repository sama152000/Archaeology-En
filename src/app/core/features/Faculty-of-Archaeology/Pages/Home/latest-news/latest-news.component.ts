import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { NewsService } from '../../../Services/news.service';
import { News } from '../../../model/news.model';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  featuredNews!: News;
  newsItems: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getFeaturedNews().subscribe(news => {
      this.featuredNews = news;
    });

    this.newsService.getNews().subscribe(news => {
      this.newsItems = news.filter(item => !item.featured);
    });
  }
}
