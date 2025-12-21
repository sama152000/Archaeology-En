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
  featuredNews?: News;
  newsItems: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(newsList => {
      if (newsList.length > 0) {
        // أول خبر أو الخبر اللي عليه flag featured
        this.featuredNews = newsList.find(n => n.featured) || newsList[0];

        // باقي الأخبار (آخر 3 غير المميز)
        this.newsItems = newsList
          .filter(item => item.id !== this.featuredNews?.id)
          .slice(0, 3);
      }
    });
  }
}
