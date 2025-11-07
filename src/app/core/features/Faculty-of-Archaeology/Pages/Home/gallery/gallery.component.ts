import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  size?: 'normal' | 'tall' | 'wide';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: GalleryImage[] = [
    {
      id: 1,
      src: './assets/lux4.jpg',
      alt: 'Temple of Luxor',
    },
    
     
    {
      id: 2,
      src: './assets/lux5.jpg',
      alt: 'Ancient Sculpture',
    },
    {
      id: 3,
      src: './assets/lux6.jpg',
      alt: 'Hieroglyphs',
    },
    {
      id: 4,
      src: './assets/lux7.jpg',
      alt: 'Pharaoh Statue',
    },
     {
      id: 5,
      src: './assets/lux10.jpg',
      alt: 'Pharaoh Statue',
    },
  {
      id: 6,
      src: './assets/lux9.jpg',
      alt: 'Pharaoh Statue',
    },
  ];

  selectedImage: GalleryImage | null = null;

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