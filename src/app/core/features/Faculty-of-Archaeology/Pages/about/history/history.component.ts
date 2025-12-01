import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../../Services/about.service';
import { HistoryItem } from '../../../model/about.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyItems: HistoryItem[] = [];
  isLoading = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.isLoading = true;
    this.aboutService.getHistory().subscribe({
      next: (data) => {
        this.historyItems = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading history:', error);
        this.isLoading = false;
      }
    });
  }
}