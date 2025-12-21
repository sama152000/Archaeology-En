// src/app/Services/center.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Center, CenterDetail, CenterMember, CenterAttachment, CenterSection } from '../model/center.model';

@Injectable({
  providedIn: 'root'
})
export class CentersService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCenters(): Observable<Center[]> {
    return this.http.get<{ success: boolean; data: Center[] }>(
      `${this.baseUrl}center/getall`
    ).pipe(map(res => res.data));
  }

  getCenterDetails(): Observable<CenterDetail[]> {
    return this.http.get<{ success: boolean; data: CenterDetail[] }>(
      `${this.baseUrl}centerdetail/getall`
    ).pipe(map(res => res.data));
  }

  getCenterMembers(centerId: string): Observable<CenterMember[]> {
    return this.http.get<{ success: boolean; data: CenterMember[] }>(
      `${this.baseUrl}centermember/getall`
    ).pipe(
      map(res => res.data.filter(m => m.centerId === centerId))
    );
  }

  getCenterAttachments(centerId: string): Observable<CenterAttachment[]> {
    return this.http.get<{ success: boolean; data: CenterAttachment[] }>(
      `${this.baseUrl}centerattachment/getall`
    ).pipe(
      map(res => res.data.filter(a => a.centerId === centerId))
    );
  }
 

 getCenterSections(centerId: string): Observable<CenterSection[]> {
  return of([
    { id: 'overview', title: 'About the Center', route: `/centers/${centerId}/overview`, icon: 'pi pi-info-circle' },
    { id: 'contact', title: 'Contact Us', route: `/centers/${centerId}/contact`, icon: 'pi pi-envelope' }
  ]);
}


}
