// src/app/Services/unit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Unit, UnitDetail, UnitMember, UnitAttachment, UnitSection } from '../model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUnits(): Observable<Unit[]> {
    return this.http.get<{ success: boolean; data: Unit[] }>(
      `${this.baseUrl}unit/getall`
    ).pipe(map(res => res.data));
  }

  getUnitDetails(): Observable<UnitDetail[]> {
    return this.http.get<{ success: boolean; data: UnitDetail[] }>(
      `${this.baseUrl}unitdetail/getall`
    ).pipe(map(res => res.data));
  }

  getUnitMembers(unitId: string): Observable<UnitMember[]> {
    return this.http.get<{ success: boolean; data: UnitMember[] }>(
      `${this.baseUrl}unitmember/getall`
    ).pipe(
      map(res => res.data.filter(m => m.unitId === unitId))
    );
  }

  getUnitAttachments(unitId: string): Observable<UnitAttachment[]> {
    return this.http.get<{ success: boolean; data: UnitAttachment[] }>(
      `${this.baseUrl}unitattachment/getall`
    ).pipe(
      map(res => res.data.filter(a => a.unitId === unitId))
    );
  }
  getUnitSections(unitId: string): Observable<UnitSection[]> {
  return of([
    { id: 'overview', title: ' overview', route: `/units/${unitId}/overview`, icon: 'pi pi-info-circle' },
    { id: 'members', title: ' members', route: `/units/${unitId}/contact`, icon: 'pi pi-users' },
    // { id: 'attachments', title: 'المرفقات', route: `/units/${unitId}/attachments`, icon: 'pi pi-paperclip' }
  ]);
}

}
