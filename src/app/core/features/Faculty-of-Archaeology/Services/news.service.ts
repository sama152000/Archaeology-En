 import { Injectable } from '@angular/core';
 import { Observable, of } from 'rxjs';
 import { News, Event } from '../model/news.model';
import { Announcement } from '../model/news.model';

 @Injectable({
   providedIn: 'root'
 })
 export class NewsService {
   private newsItems: News[] = [
     new News(
       1,
       'Major Discovery in Giza: Newly Found Pharaoh\'s Tomb',
       'Archaeologists at the Giza plateau have unearthed a previously unknown tomb believed to belong to a 5th Dynasty pharaoh. The discovery sheds light on ancient Egyptian funerary practices and architecture.',
       'October 10, 2025',
      './assets/lux6.jpg',
       '/news/giza-discovery',
      true,
      `<p>Researchers from the Faculty of Archaeology at Cairo University have uncovered a collection of ancient statues in Luxor dating back to the Middle Kingdom. This remarkable find sheds new light on religious rituals and burial practices in ancient Egypt.</p>
      <p>The excavation team, led by Prof. Dr. Noura El-Masry, discovered the artifacts near the site of Deir el-Bahari. The statues were remarkably well-preserved and include depictions of deities and royal figures.</p>
      <p>This discovery marks an important step in ongoing efforts to document and preserve Egypt's heritage. It also highlights the Faculty's commitment to fostering academic excellence and advancing archaeological research at both national and international levels.</p>
      <p>The findings will be displayed in the Egyptian Museum later this year, accompanied by a series of public lectures and workshops organized by the Faculty's Department of Egyptology.</p>`,
      'Faculty of Archaeology'
     ),
     new News(
       2,
       'Annual Cultural Festival Celebrates Ancient Arts',
       'The faculty hosted a vibrant event featuring traditional performances, ancient crafts, and student-led exhibitions.',
       'September 20, 2025',
      './assets/lux10.jpg',
      '/news/cultural-festival',
      false,
      `<p>The Faculty of Archaeology hosted its annual cultural festival, bringing together students, faculty, and the local community to celebrate ancient arts and traditions.</p>
      <p>The event featured traditional music performances, craft demonstrations, and student-led exhibitions showcasing their research projects.</p>
      <p>Visitors had the opportunity to participate in hands-on workshops including pottery making, hieroglyph writing, and ancient textile techniques.</p>`,
      'Dr. Ahmed Hassan'
     ),
     new News(
       3,
       'New Partnership with the Egyptian Museum',
       'The Department of Archaeology announced a research collaboration with the Egyptian Museum to preserve rare artifacts.',
       'August 15, 2025',
      './assets/lux5.jpg',
      '/news/museum-partnership',
      false,
      `<p>The Faculty has established a groundbreaking partnership with the Egyptian Museum to advance archaeological research and artifact preservation.</p>
      <p>This collaboration will provide students with unprecedented access to the museum's collections for research purposes.</p>
      <p>Joint research projects will focus on digital documentation and conservation techniques for ancient artifacts.</p>`,
      'Prof. Dr. Sarah Mohamed'
     ),
     new News(
       4,
       'Students Join Summer Research Program in Luxor',
       'Archaeology students gain hands-on experience in excavation and artifact documentation at the Luxor site.',
       'July 5, 2025',
      './assets/lux2.jpg',
      '/news/luxor-program',
      false,
      `<p>Twenty undergraduate students from the Faculty participated in an intensive summer research program in Luxor, working alongside international archaeologists.</p>
      <p>The program provided hands-on experience in excavation techniques, artifact documentation, and site preservation methods.</p>
      <p>Students contributed to significant discoveries including pottery fragments and inscribed stones dating to the New Kingdom period.</p>`,
      'Dr. Mahmoud Ali'
     )
   ];

   private events: Event[] = [
     new Event(
       1,
       'Ancient Egypt Exhibition',
       'Friday to Sunday: 10 AM – 5 PM',
       '26',
       'May',
      './assets/lux11.jpg',
      '/events/egypt-exhibition',
      `<p>Join us for a comprehensive exhibition showcasing the latest archaeological discoveries from ancient Egypt.</p>
      <p>The exhibition features artifacts from recent excavations, interactive displays, and guided tours by faculty experts.</p>
      <p>Special presentations will be held each day at 2 PM covering different aspects of ancient Egyptian civilization.</p>`,
      'Faculty Exhibition Hall'
     ),
     new Event(
       2,
       'Pharaoh\'s Legacy Seminar',
       'Monday: 2 PM – 6 PM',
       '12',
       'Jun',
      './assets/lux12.jpg',
      '/events/pharaoh-seminar',
      `<p>An intensive seminar exploring the lasting impact of pharaonic rule on modern Egyptian culture and society.</p>
      <p>Leading experts will discuss recent research findings and their implications for our understanding of ancient Egyptian governance.</p>
      <p>The seminar includes interactive sessions and Q&A opportunities with renowned archaeologists.</p>`,
      'Main Auditorium'
     ),
     new Event(
       3,
       'Hieroglyph Workshop',
       'Wednesday to Friday: 9 AM – 4 PM',
       '28',
       'Jun',
      './assets/lux13.jpg',
      '/events/hieroglyph-workshop',
      `<p>Learn the ancient art of hieroglyphic writing in this hands-on workshop designed for students and enthusiasts.</p>
      <p>Participants will learn to read and write basic hieroglyphs, understand their historical context, and create their own inscriptions.</p>
      <p>All materials are provided, and participants will take home their own hieroglyphic artwork.</p>`,
      'Workshop Room A'
     )
   ];

  private announcements: Announcement[] = [
    new Announcement(
      1,
      'New Academic Year Registration Opens',
      'Registration for the 2025-2026 academic year is now open for all undergraduate and graduate programs.',
      'November 15, 2025',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      '/announcements/registration-2025',
     `<p>The Faculty of Archaeology is pleased to announce that registration for the 2025-2026 academic year is now open.</p>
      <p>All prospective students are encouraged to submit their applications early as spaces are limited.</p>
     <p>For more information about admission requirements and application procedures, please visit our admissions office.</p>`,
      'high',
      'Admissions Office'
   ),
    new Announcement(
     2,
      'Library Extended Hours During Exam Period',
     'The faculty library will extend its operating hours during the final examination period to support student research.',
      'November 10, 2025',
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      '/announcements/library-hours',
      `<p>To support students during the upcoming examination period, the faculty library will extend its operating hours.</p>
      <p>New hours: Monday-Friday: 7 AM - 11 PM, Saturday-Sunday: 9 AM - 9 PM</p>
      <p>Additional study spaces and computer terminals will be available during peak hours.</p>`,
      'medium',
     'Library Services'
    ),
    new Announcement(
      3,
      'Research Grant Applications Due December 1st',
      'Faculty members and graduate students are reminded that research grant applications are due by December 1st.',
      'November 5, 2025',
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
     '/announcements/research-grants',
     `<p>The deadline for submitting research grant applications is approaching. All faculty members and graduate students are encouraged to apply.</p>
      <p>Grants are available for various research areas including field excavations, laboratory analysis, and publication support.</p>
     <p>Application forms and guidelines are available at the Research Office.</p>`,
      'high',
      'Research Office'
    )
  ];

   getNews(): Observable<News[]> {
     return of(this.newsItems);
   }

  getNewsById(id: number): Observable<News | undefined> {
    const news = this.newsItems.find(item => item.id === id);
    return of(news);
  }

   getFeaturedNews(): Observable<News> {
     const featured = this.newsItems.find(news => news.featured) || this.newsItems[0];
     return of(featured);
   }

   getEvents(): Observable<Event[]> {
     return of(this.events);
   }

  getEventById(id: number): Observable<Event | undefined> {
    const event = this.events.find(item => item.id === id);
    return of(event);
  }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }

  getAnnouncementById(id: number): Observable<Announcement | undefined> {
    const announcement = this.announcements.find(item => item.id === id);
    return of(announcement);
  }
 }