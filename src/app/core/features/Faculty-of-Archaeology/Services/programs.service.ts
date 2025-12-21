// src/app/Services/program.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Program, ProgramDetail, ProgramMember, ProgramAttachment, ProgramSection } from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPrograms(): Observable<Program[]> {
    return this.http.get<{ success: boolean; data: Program[] }>(
      `${this.baseUrl}program/getall`
    ).pipe(map(res => res.data));
  }

  getProgramDetails(): Observable<ProgramDetail[]> {
    return this.http.get<{ success: boolean; data: ProgramDetail[] }>(
      `${this.baseUrl}programdetail/getall`
    ).pipe(map(res => res.data));
  }

  getProgramMembers(programId: string): Observable<ProgramMember[]> {
    return this.http.get<{ success: boolean; data: ProgramMember[] }>(
      `${this.baseUrl}programmember/getall`
    ).pipe(
      map(res => res.data.filter(m => m.programId === programId))
    );
  }

  getProgramAttachments(programId: string): Observable<ProgramAttachment[]> {
    return this.http.get<{ success: boolean; data: ProgramAttachment[] }>(
      `${this.baseUrl}programattachment/getall`
    ).pipe(
      map(res => res.data.filter(a => a.programId === programId))
    );
  }

  getProgramSections(programId: string): Observable<ProgramSection[]> {
  return of([
    { id: 'overview', title: 'About the Program', route: `/program/${programId}/about`, icon: 'pi pi-info-circle' },
    { id: 'members', title: 'Program Members', route: `/program/${programId}/staff`, icon: 'pi pi-users' },
    // { id: 'attachments', title: 'Attachments', route: `/program/${programId}/attachments`, icon: 'pi pi-paperclip' }
  ]);
}

}
