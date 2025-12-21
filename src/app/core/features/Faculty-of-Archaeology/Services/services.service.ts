// src/app/Services/services.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Service, ServiceSection } from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // جلب كل الخدمات
  getServices(): Observable<Service[]> {
    return this.http.get<{ success: boolean; data: Service[] }>(
      `${this.baseUrl}services/getall`
    ).pipe(map(res => res.data));
  }

  // جلب أقسام السايدبار
  getServiceSections(): Observable<ServiceSection[]> {
    return of([
      { id: 'contact', title: 'Services Details', route: `/services`, icon: 'pi pi-envelope' }
    ]);
  }

  // جلب خدمة واحدة بالـ id
  getService(id: string): Observable<Service | undefined> {
    return this.getServices().pipe(
      map(services => services.find(s => s.id === id))
    );
  }
}
