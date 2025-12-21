// src/app/Services/news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Post, News, Event, Announcement } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<{ success: boolean; data: Post[] }>(
      `${this.baseUrl}posts/getall`
    ).pipe(map(res => res.data));
  }

 getNews(): Observable<News[]> {
 return this.getAllPosts().pipe(
   map(posts =>
     posts
       .filter(p =>
         p.postCategories.some(c =>
           ['اخبار', 'news'].includes(c.categoryName)
         )
       )
       .map(p => ({
         id: p.id,
         title: p.title,
         image: p.featuredImagePath || p.postAttachments[0]?.url || '',
         date: new Date(p.createdDate).toLocaleDateString('en-US'),
         excerpt: p.content.substring(0, 100) + '...',
         content: p.content
       }))
   )
 );
}

getEvents(): Observable<Event[]> {
  return this.getAllPosts().pipe(
    map(posts =>
      posts
        .filter(p =>
          p.postCategories.some(c =>
            ['فاعليات', 'events'].includes(c.categoryName)
          )
        )
        .map(p => ({
          id: p.id,
          title: p.title,
          image: p.featuredImagePath || p.postAttachments[0]?.url || '',
          date: new Date(p.createdDate).getDate().toString(),
          month: new Date(p.createdDate).toLocaleString('en-US', { month: 'long' }),
          schedule: p.content.substring(0, 80) + '...',
          content: p.content
        }))
    )
  );
}

getAnnouncements(): Observable<Announcement[]> {
  return this.getAllPosts().pipe(
    map(posts =>
      posts
        .filter(p =>
          p.postCategories.some(c =>
            ['اعلانات', 'Announcements'].includes(c.categoryName)
          )
        )
        .map(p => ({
          id: p.id,
          title: p.title,
          image: p.featuredImagePath || p.postAttachments[0]?.url || '',
          date: new Date(p.createdDate).toLocaleDateString('en-US'),
          excerpt: p.content.substring(0, 100) + '...',
          priority: 'high',
          content: p.content
        }))
    )
  );
}



getNewsById(id: string): Observable<News | null> {
  return this.getNews().pipe(
    map(news => news.find(n => n.id === id) || null)
  );
}

getEventById(id: string): Observable<Event | null> {
  return this.getEvents().pipe(
    map(events => events.find(e => e.id === id) || null)
  );
}

getAnnouncementById(id: string): Observable<Announcement | null> {
  return this.getAnnouncements().pipe(
    map(announcements => announcements.find(a => a.id === id) || null)
  );
}

}
