import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-custom h-100" [class]="customClass">
      <div *ngIf="imageUrl" class="card-image">
        <img [src]="imageUrl" [alt]="imageAlt" class="w-100" [style.height]="imageHeight" style="object-fit: cover;">
        <div *ngIf="showOverlay" class="overlay"></div>
      </div>
      <div class="card-body p-3">
        <div *ngIf="badge" class="badge bg-primary-custom mb-2">{{ badge }}</div>
        <h5 *ngIf="title" class="card-title">{{ title }}</h5>
        <p *ngIf="description" class="card-text text-muted">{{ description }}</p>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card-image {
      position: relative;
      overflow: hidden;
    }
    
    .card-image img {
      transition: transform 0.6s ease;
    }
    
    .card-custom:hover .card-image img {
      transform: scale(1.05);
    }
    
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.2);
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    
    .card-custom:hover .overlay {
      opacity: 1;
    }
    
    .card-title {
      color: var(--text-primary);
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
  `]
})
export class CardComponent {
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() imageHeight: string = '200px';
  @Input() title?: string;
  @Input() description?: string;
  @Input() badge?: string;
  @Input() showOverlay: boolean = true;
  @Input() customClass?: string;
}