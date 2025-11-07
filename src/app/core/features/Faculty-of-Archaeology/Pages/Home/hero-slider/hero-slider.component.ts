import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;

  slides: Slide[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Welcome to Egypt',
      description: 'Discover the ancient land of pharaohs and wonders.',
      buttonText: 'Explore',
      buttonLink: '#'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
      title: 'Discover History',
      description: 'Walk through centuries of civilization and culture.',
      buttonText: 'Learn More',
      buttonLink: '#'
    },
    {
      id: 3,
      image: './assets/lux2.jpg',
      title: 'Visit the Museum',
      description: 'See treasures that tell Egypt\'s timeless story.',
      buttonText: 'Get Tickets',
      buttonLink: '#'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  onMouseEnter() {
    this.stopAutoSlide();
  }

  onMouseLeave() {
    this.startAutoSlide();
  }
}