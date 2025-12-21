// src/app/Services/contacts.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<{ success: boolean; data: Contact[] }>(
      `${this.baseUrl}contacts/getall`
    ).pipe(map(res => res.data));
  }

  getContact(): Observable<Contact | undefined> {
    return this.getContacts().pipe(
      map(contacts => contacts.length > 0 ? contacts[0] : undefined)
    );
  }

   getMainContact(): Observable<Contact | undefined> {
    return this.getContacts().pipe(
      map(contacts => contacts.length > 0 ? contacts[0] : undefined)
    );
  }
}
