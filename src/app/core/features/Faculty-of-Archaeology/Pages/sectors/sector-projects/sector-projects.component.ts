import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorsService } from '../../../Services/sectors.service';
import { SectorPost, SectorProgram } from '../../../model/sector.model';
import { CommonModule } from '@angular/common';
import { Program } from '../../../model/program.model';

@Component({
  selector: 'app-sector-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sector-projects.component.html',
  styleUrls: ['./sector-projects.component.css']
})
export class SectorProjectsComponent implements OnInit {
  posts: SectorPost[] = [];
  programs: SectorProgram[] = [];

  constructor(
    private route: ActivatedRoute,
    private sectorsService: SectorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id'];

      this.sectorsService.getSectorPosts(id).subscribe(posts => {
        this.posts = posts;
      });

      this.sectorsService.getSectorPrograms(id).subscribe(programs => {
        this.programs = programs;
      });
    });
  }

  viewPost(postId: string): void {
    this.router.navigate(['/posts', 'news', postId]);
  }
  viewProgram (ProgramId:string):void{
        this.router.navigate(['/program', ProgramId]);
  }
}
