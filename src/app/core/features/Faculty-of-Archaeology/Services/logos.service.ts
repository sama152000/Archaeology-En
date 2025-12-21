import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Logo } from '../model/logo.model';

@Injectable({
  providedIn: 'root'
})
export class LogosService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLogos(): Observable<Logo[]> {
    return this.http.get<{ success: boolean; data: Logo[] }>(
      `${this.baseUrl}logos/getall`
    ).pipe(map(res => res.data));
  }

  getMainLogo(): Observable<Logo | undefined> {
    return this.getLogos().pipe(
      map(logos => logos.length > 0 ? logos[0] : undefined)
    );
  }
}
