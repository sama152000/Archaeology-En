// src/app/services/hero-section.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroSection } from '../model/hero-section.model';
import { environment } from '../../../../../environments/environment'; // استدعاء الـ environment

@Injectable({
  providedIn: 'root'
})
export class HeroSectionService {
  private baseUrl = environment.apiUrl; // استخدام الـ apiUrl من environment

  constructor(private http: HttpClient) {}

  getHeroSections(): Observable<{ success: boolean; data: HeroSection[] }> {
    return this.http.get<{ success: boolean; data: HeroSection[] }>(
      `${this.baseUrl}herosections/getall`
    );
  }
}
