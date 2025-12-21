// src/app/components/hero-slider/hero-slider.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionService } from '../../../Services/hero-section.service';
import { HeroSection } from '../../../model/hero-section.model';

interface Slide {
  id: string;
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
  templateUrl:'./hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;
  slides: Slide[] = [];

  constructor(private heroService: HeroSectionService) {}

  ngOnInit() {
    this.heroService.getHeroSections().subscribe({
      next: (res) => {
        this.slides = res.data.map(section => ({
          id: section.id,
          image: section.heroAttachments[0]?.url || '',
          title: section.title,
          description: section.description,
          buttonText: ' Learn more', // ثابت أو ممكن يجي من API لو متوفر
          buttonLink: '/about/vision'
        }));
        this.startAutoSlide();
      },
      error: (err) => {
        console.error('Error fetching hero sections:', err);
      }
    });
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
