// src/app/Services/department.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { 
  Department, 
  DepartmentDetail, 
  DepartmentMember, 
  DepartmentProgram, 
  DepartmentSection, 
  DepartmentService 
} from '../model/departments.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<{ success: boolean; data: Department[] }>(
      `${this.baseUrl}departments/getall`
    ).pipe(map(res => res.data));
  }

  getDepartment(id: string): Observable<Department | undefined> {
  return this.getDepartments().pipe(
    map(depts => depts.find(d => d.id === id))
  );
}

  getDepartmentDetails(): Observable<DepartmentDetail[]> {
    return this.http.get<{ success: boolean; data: DepartmentDetail[] }>(
      `${this.baseUrl}departmentdetails/getall`
    ).pipe(map(res => res.data));
  }

getDepartmentMembers(departmentId: string): Observable<DepartmentMember[]> {
  return this.http.get<{ success: boolean; data: DepartmentMember[] }>(
    `${this.baseUrl}departmentmembers/getall`
  ).pipe(
    map(res => res.data.filter(m => m.departmentId === departmentId))
  );
}

getDepartmentPrograms(departmentId: string): Observable<DepartmentProgram[]> {
  return this.http.get<{ success: boolean; data: DepartmentProgram[] }>(
    `${this.baseUrl}departmentprograms/getall`
  ).pipe(
    map(res => res.data.filter(p => p.departmentId === departmentId))
  );
}


  getDepartmentServices(departmentId: string): Observable<DepartmentService[]> {
  return this.http.get<{ success: boolean; data: DepartmentService[] }>(
    `${this.baseUrl}departmentservices/getall`
  ).pipe(
    map(res => res.data.filter(s => s.departmentId === departmentId))
  );
}
getDepartmentSections(departmentId: string): Observable<DepartmentSection[]> {
  return of([
    { id: 'about', title: 'About the Department', route: `/department/${departmentId}/about`, icon: 'pi pi-info-circle' },
    { id: 'staff', title: 'Faculty Members', route: `/department/${departmentId}/staff`, icon: 'pi pi-users' },
    { id: 'services', title: 'Services', route: `/department/${departmentId}/services`, icon: 'pi pi-briefcase' }
  ]);
}



}
