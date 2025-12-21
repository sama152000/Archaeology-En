// src/app/components/about/dean-message/dean-message.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { DeanMessage } from '../../../model/about.model';

@Component({
  selector: 'app-dean-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dean-message.component.html',
  styleUrls: ['./dean-message.component.css']
})
export class DeanMessageComponent implements OnInit {
  deanMessage: DeanMessage | null = null;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadDeanMessage();
  }

  loadDeanMessage(): void {
    this.aboutService.getDeanMessage().subscribe({
      next: (data) => {
        this.deanMessage = data;
      },
      error: (error) => {
        console.error('Error loading dean message:', error);
      }
    });
  }
}
