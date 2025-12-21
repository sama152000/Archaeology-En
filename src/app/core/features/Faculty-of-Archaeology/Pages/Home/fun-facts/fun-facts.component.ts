// src/app/components/fun-facts/fun-facts.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsService } from '../../../Services/statistics.service';

interface Fact {
  id: string;
  icon: string;
  count: number;
  label: string;
  currentCount: number;
}

@Component({
  selector: 'app-fun-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.css']
})
export class FunFactsComponent implements OnInit, OnDestroy {
  private animationStarted = false;
  private observer?: IntersectionObserver;

  facts: Fact[] = [];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.statisticsService.getStatistics().subscribe({
      next: (res) => {
        this.facts = res.data.map(stat => ({
          id: stat.id,
          icon: stat.iconPath,
          count: Number(stat.value), // تحويل القيمة من string إلى number
          label: stat.title,
          currentCount: 0
        }));
        this.setupIntersectionObserver();
      },
      error: (err) => {
        console.error('Error fetching statistics:', err);
      }
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.animationStarted = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.5 });

    const element = document.querySelector('.fun-facts');
    if (element) {
      this.observer.observe(element);
    }
  }

  private animateCounters() {
    this.facts.forEach(fact => {
      this.animateCounter(fact);
    });
  }

  private animateCounter(fact: Fact) {
    const duration = 2000; // 2 ثوانٍ
    const steps = 60;
    const increment = fact.count / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      fact.currentCount = Math.min(Math.floor(increment * currentStep), fact.count);
      
      if (currentStep >= steps) {
        fact.currentCount = fact.count;
        clearInterval(timer);
      }
    }, stepDuration);
  }
}
