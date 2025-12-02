import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News, Event, Announcement } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: News[] = [
    // Featured News - Aswan Field Trip
    new News(
      1,
      'Field Study Trip for Faculty of Archaeology Students to Aswan',
      'As part of the Faculty’s continuous efforts to enhance the educational process by closely linking theoretical study with practical application, the Faculty of Archaeology, Luxor University, organized a scientific field trip for students to the most important archaeological landmarks in the city of Aswan on Saturday, 29 November 2025.',
      'November 29, 2025',
      './assets/new1.jpg',
      '/news/aswan-field-trip',
      true,
      `<p>As part of the Faculty’s continuous efforts to enhance the educational process by closely linking theoretical study with practical application, the Faculty of Archaeology, Luxor University, organized a scientific field trip for students to the most important archaeological landmarks in the city of Aswan on Saturday, 29 November 2025.</p>
      <p>The visit began with an exploration of the Qubbet el-Hawa archaeological area, where students examined the rock-cut tombs dating to the Old and Middle Kingdoms. Among the most prominent tombs were those of Harkhuf, Sabni, and Mekhu (Old Kingdom) and Sarenput (Middle Kingdom), in addition to early Christian church remains and the Islamic dome attributed to Sheikh Ali Abu el-Hawa.</p>
      <p>The students then proceeded to Agilkia Island (the current location of Philae), studying the Ptolemaic and Roman monuments, particularly the Temple of Isis. The visit highlighted the last known hieroglyphic inscription (394 AD), Trajan’s Kiosk, and UNESCO’s 1960s rescue operation to relocate the temples after the construction of the Aswan High Dam.</p>
      <p>The day concluded with recreational visits to traditional Nubian houses in Gharb Sehel and the “Bakkar” amusement park, combining academic enrichment with cultural enjoyment.</p>`,
      'Faculty of Archaeology'
    ),

    // New: Scientific Seminar - Egyptian Archaeology Department
    new News(
      2,
      'Scientific Seminar on Master’s and PhD Research Plans',
      'Under the chairmanship of Prof. Dr. Khaled Abdel-Naeem Mohamadeen, Dean of the Faculty, a scientific seminar was held to discuss research plans for Master’s and PhD degrees in the Egyptian Archaeology Department.',
      'November 2025',
      './assets/new2.jpg',
      '/news/egyptian-archaeology-seminar',
      false,
      `<p>Under the patronage of Prof. Dr. Khaled Abdel-Naeem Mohamadeen, Dean of the Faculty, and in the presence of former Dean Prof. Dr. Mansour El-Nubi Mansour, Assoc. Prof. Dr. Shaimaa Abdel-Sattar (Head of Egyptian Archaeology Department), faculty members, assistants, researchers, and students, a scientific seminar was held to review and discuss proposed research plans for Master’s and PhD registration.</p>
      <p>The seminar provided a valuable platform for academic guidance and constructive feedback, reflecting the Faculty’s commitment to advancing high-quality postgraduate research in Egyptology.</p>`,
      'Egyptian Archaeology Department'
    ),

    // New: Lecture - Imiut Emblem
    new News(
      3,
      'Scientific Lecture: The Imiut Emblem and Its Role in Ancient Egyptian Belief',
      'Dr. Reda Attallah delivered the second scientific lecture of the academic year titled "The Imiut Emblem and Its Role in Ancient Egyptian Religious Thought".',
      'November 2025',
      './assets/new3.jpg',
      '/news/imiut-lecture',
      false,
      `<p>Under the patronage of Prof. Dr. Sabreen Jaber Abdel-Gelil (President of Luxor University), Prof. Dr. Khaled Abdel-Naeem Mohamadeen (Dean), and Assoc. Prof. Dr. Shaimaa Abdel-Sattar (Head of Department), Dr. Reda Attallah, Assistant Professor of Egyptian Archaeology and Religion, delivered a distinguished lecture on the Imiut fetish.</p>
      <p>The lecture covered the linguistic meaning, historical development, material composition, contents (water, milk, wine, blood), and religious associations with Osiris, Anubis, and Seth. The session concluded with an innovative cryptographic reading of the emblem’s symbolism.</p>`,
      'Egyptian Archaeology Department'
    ),

    // New: Islamic Archaeology Field Training in Qus
    new News(
      4,
      'Field Training Program in Islamic Archaeology – Qus City',
      'The Department of Islamic Archaeology organized a field training trip to the historic city of Qus under the supervision of department faculty.',
      'November 2025',
      './assets/new4.jpg',
      '/news/qus-field-training',
      false,
      `<p>Under the supervision of Prof. Dr. Khaled Abdel-Naeem Mohamadeen (Dean), Assoc. Prof. Dr. Salama Hamed (Vice Dean for Education and Students & Head of Islamic Archaeology), and Assoc. Prof. Dr. Farag Hussein Farag, students participated in a field training program in Qus.</p>
      <p>The program included detailed study of the Omari Mosque, the Basilica of Qus, and Ottoman-period house façades, providing hands-on experience in Islamic architectural documentation and preservation.</p>`,
      'Islamic Archaeology Department'
    ),

    // New: International Workshop - Day 2
    new News(
      5,
      'Second International Workshop: Rewriting History – New Technologies in Egyptological Documentation',
      'The second day of the international workshop concluded successfully with presentations from the Thutmose III Temple Project team.',
      'November 11, 2025',
      './assets/event3jpg.jpg',
      '/news/thutmose-workshop-day2',
      false,
      `<p>The second day of the international workshop "Rewriting History: New Technologies and Advances in Visual Documentation in Egyptology" concluded successfully on 11 November 2025.</p>
      <p>Manuel Abilleira, Inmaculada Delage, Victoria Peña, and Miguel Ángel Fernández from the Thutmose III Temple Project delivered lectures on cutting-edge documentation techniques to over 90 participants.</p>
      <p>The Faculty extends its sincere thanks to Luxor University, the Egyptian Ministry of Tourism and Antiquities, and the Spanish Cooperation Office in Cairo (AECID-APERCA Program) for their support and excellent organization.</p>`,
      'International Cooperation Office'
    ),

    // Existing older news (kept as fallback)
    new News(
      6,
      'Annual Cultural Festival Celebrates Ancient Arts',
      'The faculty hosted a vibrant event featuring traditional performances, ancient crafts, and student-led exhibitions.',
      'September 20, 2025',
      './assets/event4jpg.jpg',
      '/news/cultural-festival',
      false,
      `<p>The Faculty of Archaeology hosted its annual cultural festival, bringing together students, faculty, and the local community to celebrate ancient arts and traditions.</p>`
    )
  ];

  private events: Event[] = [
    new Event(
      1,
      'Scientific Lecture: The Rosetta Stone and Stages of Its Discovery in Antiquity',
      'Upcoming lecture on one of the most important discoveries in Egyptology',
      'December',
      '15',
      './assets/event1jpg.jpg',
      '/events/rosetta-stone-lecture',
      `<p>Join us for a detailed lecture on the Rosetta Stone, its discovery, decipherment journey, and its revolutionary impact on understanding ancient Egyptian writing.</p>`,
      'Main Auditorium'
    ),
    new Event(
      2,
      'Scientific Lecture: The Imiut Emblem and Its Relation to Ancient Egyptian Belief',
      'Dr. Reda Attallah explores the religious and symbolic significance of the Imiut fetish',
      'December',
      '20',
      './assets/event2jpg.jpg',
      '/events/imiut-emblem-lecture',
      `<p>An in-depth exploration of the Imiut emblem, its evolution, materials, contents, and deep connections with Osiris, Anubis, and ancient Egyptian afterlife beliefs.</p>`,
      'Lecture Hall 3'
    ),
        new Event(
      3,
      'Scientific Lecture: The Rosetta Stone and Stages of Its Discovery in Antiquity',
      'Upcoming lecture on one of the most important discoveries in Egyptology',
      'December',
      '15',
      './assets/event4jpg.jpg',
      '/events/rosetta-stone-lecture',
      `<p>Join us for a detailed lecture on the Rosetta Stone, its discovery, decipherment journey, and its revolutionary impact on understanding ancient Egyptian writing.</p>`,
      'Main Auditorium'
    ),
    new Event(
      4,
      'Scientific Lecture: The Imiut Emblem and Its Relation to Ancient Egyptian Belief',
      'Dr. Reda Attallah explores the religious and symbolic significance of the Imiut fetish',
      'December',
      '20',
      './assets/event3jpg.jpg',
      '/events/imiut-emblem-lecture',
      `<p>An in-depth exploration of the Imiut emblem, its evolution, materials, contents, and deep connections with Osiris, Anubis, and ancient Egyptian afterlife beliefs.</p>`,
      'Lecture Hall 3'
    ),

  ];

  private announcements: Announcement[] = [
    new Announcement(
      1,
      'The Third International Conference of the Faculty of Archaeology, Luxor University',
      'Call for Papers and Registration Now Open',
      'Coming in 2026',
      './assets/ann1.jpg',
      '/announcements/third-international-conference',
      `<p>The Faculty of Archaeology is pleased to announce its Third International Conference. Scholars and researchers are invited to submit abstracts on all aspects of archaeological research.</p>`,
      'high',
      'Conference Committee'
    ),
    new Announcement(
      2,
      'Distinguished Lecture: Glimpses of Ancient Egyptian Civilization',
      'Monthly public lecture series continues',
      'Every last Wednesday of the month',
      './assets/ann2.jpg',
      '/announcements/glimpses-lecture-series',
      `<p>Join us for our ongoing public lecture series exploring key aspects of ancient Egyptian culture, art, religion, and daily life.</p>`,
      'medium',
      'Public Relations Office'
    )
  ];

  getNews(): Observable<News[]> {
    return of(this.newsItems);
  }

  getNewsById(id: number): Observable<News | undefined> {
    return of(this.newsItems.find(item => item.id === id));
  }

  getFeaturedNews(): Observable<News> {
    const featured = this.newsItems.find(n => n.featured) || this.newsItems[0];
    return of(featured);
  }

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  getEventById(id: number): Observable<Event | undefined> {
    return of(this.events.find(e => e.id === id));
  }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }

  getAnnouncementById(id: number): Observable<Announcement | undefined> {
    return of(this.announcements.find(a => a.id === id));
  }
}