import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { News, Event, Announcement } from '../../../model/news.model';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postType: string = '';
  postId: string = '';
  currentPost: News | Event | Announcement | null = null;
  allPosts: (News | Event | Announcement)[] = [];
  isVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postType = params['type'];
      this.postId = params['id']; // string UUID من الـ API
      this.loadPost();
    });
  }

  loadPost() {
    switch (this.postType) {
      case 'news':
        this.newsService.getNewsById(this.postId).subscribe(post => {
          this.currentPost = post || null;
          this.isVisible = true;
        });
        this.newsService.getNews().subscribe(posts => this.allPosts = posts);
        break;

      case 'events':
        this.newsService.getEventById(this.postId).subscribe(post => {
          this.currentPost = post || null;
          this.isVisible = true;
        });
        this.newsService.getEvents().subscribe(posts => this.allPosts = posts);
        break;

      case 'announcements':
        this.newsService.getAnnouncementById(this.postId).subscribe(post => {
          this.currentPost = post || null;
          this.isVisible = true;
        });
        this.newsService.getAnnouncements().subscribe(posts => this.allPosts = posts);
        break;
    }
  }

  getTitle(): string {
    return this.currentPost?.title || 'Post Not Found';
  }

  getContent(): string {
    return (this.currentPost as any)?.content || 'لا يوجد محتوى متاح.';
  }

  getDate(): string {
    return (this.currentPost as any)?.date || '';
  }

  getImage(): string {
    return (this.currentPost as any)?.image || '';
  }

  getAuthor(): string {
    return (this.currentPost as any)?.author || 'Faculty of Archaeology';
  }

  getLocation(): string {
    return (this.currentPost as any)?.location || '';
  }

  getDepartment(): string {
    return (this.currentPost as any)?.department || '';
  }

  getPriority(): string {
    return (this.currentPost as any)?.priority || '';
  }

  getSchedule(): string {
    return (this.currentPost as any)?.schedule || '';
  }

  getPreviousPost(): any {
    const currentIndex = this.allPosts.findIndex(post => post.id === this.postId);
    return currentIndex > 0 ? this.allPosts[currentIndex - 1] : null;
  }

  getNextPost(): any {
    const currentIndex = this.allPosts.findIndex(post => post.id === this.postId);
    return currentIndex < this.allPosts.length - 1 ? this.allPosts[currentIndex + 1] : null;
  }

  navigateToPost(post: any) {
    this.router.navigate(['/posts', this.postType, post.id]);
  }

  goBack() {
    this.router.navigate(['/posts', this.postType]);
  }
}
