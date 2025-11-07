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

  constructor(private aboutService: AboutService) {
    console.log('DeanMessageComponent constructed');
  }

  ngOnInit(): void {
    this.loadDeanMessage();
  }

  loadDeanMessage(): void {
    console.log('Loading dean message...');
    this.aboutService.getDeanMessage().subscribe({
      next: (data) => {
        console.log('Dean message loaded:', data);
        this.deanMessage = data;
      },
      error: (error) => {
        console.error('Error loading dean message:', error);
      }
    });
  }

  formatSignature(signature: string): string {
    return signature.replace(/\n/g, '<br>');
  }
}