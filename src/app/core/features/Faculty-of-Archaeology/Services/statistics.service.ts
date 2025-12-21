// src/app/services/statistics.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistic } from '../model/statistic.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStatistics(): Observable<{ success: boolean; data: Statistic[] }> {
    return this.http.get<{ success: boolean; data: Statistic[] }>(
      `${this.baseUrl}statistics/getall`
    );
  }
}
