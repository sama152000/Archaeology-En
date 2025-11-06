import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { HeroSliderComponent } from "./hero-slider/hero-slider.component";
import { AboutFacultyComponent } from "./about-faculty/about-faculty.component";
import { DepartmentsSectionComponent } from "./departments-section/departments-section.component";
import { LatestNewsComponent } from "./latest-news/latest-news.component";
import { UpcomingEventsComponent } from "./upcoming-events/upcoming-events.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FunFactsComponent } from "./fun-facts/fun-facts.component";
import { FooterComponent } from "../shared/footer/footer.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSliderComponent,
    AboutFacultyComponent,
    DepartmentsSectionComponent,
    LatestNewsComponent,
    UpcomingEventsComponent,
    GalleryComponent,
    FunFactsComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private observer?: IntersectionObserver;

  ngOnInit() {}

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in elements
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(el => {
      if (this.observer) {
        this.observer.observe(el);
      }
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}