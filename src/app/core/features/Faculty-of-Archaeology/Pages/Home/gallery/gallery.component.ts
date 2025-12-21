import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../Services/news.service';
import { News } from '../../../model/news.model';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  size?: 'normal' | 'tall' | 'wide';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [NewsService]
})
export class GalleryComponent implements OnInit {
  images: GalleryImage[] = [];
  selectedImage: GalleryImage | null = null;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(newsList => {
      this.images = newsList.map((news, index) => ({
        id: news.id,
        src: news.image,
        alt: news.title,
        size: index % 3 === 0 ? 'wide' : 'normal' // مجرد توزيع شكلي
      }));
    });
  }

  openLightbox(image: GalleryImage) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

  nextImage() {
    if (!this.selectedImage) return;
    const currentIndex = this.images.findIndex(img => img.id === this.selectedImage!.id);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[nextIndex];
  }

  prevImage() {
    if (!this.selectedImage) return;
    const currentIndex = this.images.findIndex(img => img.id === this.selectedImage!.id);
    const prevIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.selectedImage = this.images[prevIndex];
  }
}
