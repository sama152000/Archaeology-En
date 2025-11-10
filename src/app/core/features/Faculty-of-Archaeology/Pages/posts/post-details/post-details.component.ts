import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { News, Event,Announcement } from '../../../model/news.model';


@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postType: string = '';
  postId: number = 0;
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
      this.postId = +params['id'];
      this.loadPost();
    });
  }

  loadPost() {
    switch (this.postType) {
      case 'news':
        this.newsService.getNewsById(this.postId).subscribe(post => {
          console.log('PostDetails loadPost news id=', this.postId, 'found=', post);
          this.currentPost = post || null;
          this.isVisible = true;
        });
        this.newsService.getNews().subscribe(posts => {
          this.allPosts = posts;
        });
        break;
      case 'events':
        this.newsService.getEventById(this.postId).subscribe(post => {
          console.log('PostDetails loadPost event id=', this.postId, 'found=', post);
          this.currentPost = post || null;
          this.isVisible = true;
        });
        this.newsService.getEvents().subscribe(posts => {
          this.allPosts = posts;
        });
        break;
      case 'announcements':
        this.newsService.getAnnouncementById(this.postId).subscribe(post => {
          console.log('PostDetails loadPost announcement id=', this.postId, 'found=', post);
          this.currentPost = post || null;
          this.isVisible = true;
        });
        this.newsService.getAnnouncements().subscribe(posts => {
          this.allPosts = posts;
        });
        break;
    }
  }

  getTitle(): string {
    return this.currentPost?.title || 'Post Not Found';
  }

  getContent(): string {
    if (this.currentPost && 'content' in this.currentPost) {
      return this.currentPost.content || 'No content available.';
    }
    return 'No content available.';
  }

  getDate(): string {
    return this.currentPost?.date || '';
  }

  getImage(): string {
    return this.currentPost?.image || '';
  }

  getAuthor(): string {
    if (this.currentPost && 'author' in this.currentPost) {
      return (this.currentPost as News).author || 'Faculty of Archaeology';
    }
    return 'Faculty of Archaeology';
  }

  getLocation(): string {
    if (this.currentPost && 'location' in this.currentPost) {
      return (this.currentPost as Event).location || '';
    }
    return '';
  }

  getDepartment(): string {
    if (this.currentPost && 'department' in this.currentPost) {
      return (this.currentPost as Announcement).department || '';
    }
    return '';
  }

  getPriority(): string {
    if (this.currentPost && 'priority' in this.currentPost) {
      return (this.currentPost as Announcement).priority || '';
    }
    return '';
  }

  getSchedule(): string {
    if (this.currentPost && 'schedule' in this.currentPost) {
      return (this.currentPost as Event).schedule || '';
    }
    return '';
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