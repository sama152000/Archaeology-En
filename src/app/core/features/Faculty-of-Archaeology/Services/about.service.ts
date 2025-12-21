// src/app/Services/about.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AboutResponse, AboutSection, DeanMessage, Member ,AdministrativeStructure , Objective , HistoryItem} from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAbout(): Observable<AboutResponse[]> {
    return this.http.get<{ success: boolean; data: AboutResponse[] }>(
      `${this.baseUrl}about/getall`
    ).pipe(map(res => res.data));
  }

 // src/app/Services/about.service.ts
getDeanMessage(): Observable<DeanMessage> {
  return this.http.get<{ success: boolean; data: DeanMessage[] }>(
    `${this.baseUrl}deanspeechs/getall`
  ).pipe(
    map(res => res.data[0]) // أول عنصر من الـ response
  );
}

getHistory(): Observable<HistoryItem[]> {
  return this.getAbout().pipe(
    map((data: AboutResponse[]) => {
      const historyText = data[0]?.history || '';
      // الـ history جاي كسطر نصي فيه السنوات والعناوين والوصف
      // هنا نعمل parsing بسيط: كل سنة تبدأ بسطر جديد
      const lines = historyText.split('\n').filter(l => l.trim() !== '');
      const items: HistoryItem[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (/^\d{4}$/.test(line.trim())) {
          const year = line.trim();
          const title = lines[i + 1] || '';
          const description = lines[i + 2] || '';
          items.push({ year, title, description });
          i += 2; // نعدي العنوان والوصف
        }
      }
      return items;
    })
  );
}
getObjectives(): Observable<Objective[]> {
  return this.getAbout().pipe(
    map(data => {
      const goals = data[0]?.goals || [];
      return goals.map(g => ({
        id: g.id,
        title: g.goalName.split(' ')[0], // أول كلمة كعنوان
        description: g.goalName,         // النص الكامل كـ description
        icon: 'pi pi-flag'               // أيقونة افتراضية
      }));
    })
  );
}
// src/app/Services/about.service.ts
getMembers(): Observable<Member[]> {
  return this.http.get<{ success: boolean; data: Member[] }>(
    `${this.baseUrl}member/getall`
  ).pipe(map(res => res.data));
}

getAdministrativeStructure(): Observable<AdministrativeStructure> {
  return this.getMembers().pipe(
    map(members => ({
      dean: members.find(m => m.memberType === 'President')!,
      viceDeans: members.filter(m => m.memberType === 'Sector'),
      departmentHeads: members.filter(m => m.memberType === 'Department')
    }))
  );
}

   getAboutSections(): Observable<AboutSection[]> {
    // مثال لو API بيرجع الأقسام
    // return this.http.get<{ success: boolean; data: AboutSection[] }>(
    //   `${this.baseUrl}about/getsections`
    // ).pipe(map(res => res.data));

    // أو تسيبها static لو مش موجود API
    return of([
  { id: 'vision', title: 'Vision & Mission', route: '/about/vision', icon: 'pi pi-eye' },
  { id: 'dean-message', title: 'Dean’s Message', route: '/about/dean-message', icon: 'pi pi-user' },
  { id: 'history', title: 'College History', route: '/about/history', icon: 'pi pi-clock' },
  { id: 'objectives', title: 'Objectives', route: '/about/objectives', icon: 'pi pi-flag' },
  { id: 'administrative', title: 'Administrative Structure', route: '/about/administrative', icon: 'pi pi-sitemap' }
]);

  }
}
