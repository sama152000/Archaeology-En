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
      src: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Temple of Luxor',
      size: 'normal'
    },
     {
      id: 1,
      src: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Temple of Luxor',
      size: 'normal'
    },
     {
      id: 1,
      src: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Temple of Luxor',
      size: 'normal'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      alt: 'Ancient Sculpture',
      size: 'tall'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop',
      alt: 'Hieroglyphs',
      size: 'wide'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Pharaoh Statue',
      size: 'normal'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      alt: 'Pyramids',
      size: 'normal'
    }
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