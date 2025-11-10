 export class News {
   constructor(
     public id: number,
     public title: string,
     public excerpt: string,
     public date: string,
     public image: string,
     public link: string,
    public featured?: boolean,
    public content?: string,
    public author?: string
   ) {}
 }

 export class Event {
   constructor(
     public id: number,
     public title: string,
     public schedule: string,
     public date: string,
     public month: string,
     public image: string,
   public link: string,
      public content?: string,
    public location?: string
   ) {}
}



export class Announcement {
  constructor(
    public id: number,
    public title: string,
    public excerpt: string,
    public date: string,
    public image: string,
    public link: string,
    public content?: string,
    public priority?: 'high' | 'medium' | 'low',
    public department?: string
  ) {}
}