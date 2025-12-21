// src/app/Services/sector.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {
  Sector,
  SectorDetail,
  SectorMember,
  SectorAttachment,
  SectorPost,
  SectorProgram,
  SectorService,
  SectorSection
} from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSectors(): Observable<Sector[]> {
    return this.http.get<{ success: boolean; data: Sector[] }>(
      `${this.baseUrl}sectors/getall`
    ).pipe(map(res => res.data));
  }

  getSectorDetails(): Observable<SectorDetail[]> {
    return this.http.get<{ success: boolean; data: SectorDetail[] }>(
      `${this.baseUrl}sectordetails/getall`
    ).pipe(map(res => res.data));
  }

  getSectorMembers(sectorId: string): Observable<SectorMember[]> {
    return this.http.get<{ success: boolean; data: SectorMember[] }>(
      `${this.baseUrl}sectormember/getall`
    ).pipe(
      map(res => res.data.filter(m => m.sectorId === sectorId))
    );
  }

  getSectorAttachments(sectorId: string): Observable<SectorAttachment[]> {
    return this.http.get<{ success: boolean; data: SectorAttachment[] }>(
      `${this.baseUrl}sectorattachments/getall`
    ).pipe(
      map(res => res.data.filter(a => a.sectorId === sectorId))
    );
  }

  getSectorPosts(sectorId: string): Observable<SectorPost[]> {
    return this.http.get<{ success: boolean; data: SectorPost[] }>(
      `${this.baseUrl}sectorposts/getall`
    ).pipe(
      map(res => res.data.filter(p => p.sectorId === sectorId))
    );
  }

  getSectorPrograms(sectorId: string): Observable<SectorProgram[]> {
    return this.http.get<{ success: boolean; data: SectorProgram[] }>(
      `${this.baseUrl}sectorprograms/getall`
    ).pipe(
      map(res => res.data.filter(pr => pr.sectorId === sectorId))
    );
  }

  getSectorServices(sectorId: string): Observable<SectorService[]> {
    return this.http.get<{ success: boolean; data: SectorService[] }>(
      `${this.baseUrl}sectorservices/getall`
    ).pipe(
      map(res => res.data.filter(s => s.sectorId === sectorId))
    );
  }

 getSectorSections(sectorId: string): Observable<SectorSection[]> {
  return of([
    { id: 'overview', title: 'About the Sector', route: `/sectors/${sectorId}/overview`, icon: 'pi pi-info-circle' },
    { id: 'members', title: 'Sector News & Programs', route: `/sectors/${sectorId}/projects`, icon: 'pi pi-users' },
    { id: 'news', title: 'Sector Services', route: `/sectors/${sectorId}/contact`, icon: 'pi pi-book' },
  ]);
}


}
