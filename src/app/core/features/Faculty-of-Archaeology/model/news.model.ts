// src/app/model/news.model.ts

export interface PostCategory {
  id: string;
  postId: string;
  categoryId: string;
  categoryName: string; // "news" or "events" or "announcements"
}

export interface PostAttachment {
  id: string;
  fileName: string;
  isPublic: boolean;
  relativePath: string;
  folderName: string;
  url: string;
  postId: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  status: string;
  featuredImagePath: string;
  createdDate: string;
  pageTittle: string;
  postCategories: PostCategory[];
  postAttachments: PostAttachment[];
}

// نماذج مخصصة للـ UI
export interface News {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
    content?: string;   // محتوى كامل للخبر
  author?: string;
  featured?: boolean
}

export interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  month: string;
  schedule: string;
   content?: string;   // محتوى كامل للفعالية
  location?: string;
}

export interface Announcement {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
   content?: string;   // محتوى كامل للإعلان
  department?: string;
  priority?: 'high' | 'medium';
}
