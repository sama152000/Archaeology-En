import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from '../../../Services/programs.service';
import { Program } from '../../../model/program.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-about.component.html',
  styleUrls: ['./program-about.component.css']
})
export class ProgramAboutComponent implements OnInit {
  program?: Program;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id'];
      this.programService.getPrograms().subscribe(programs => {
        this.program = programs.find(p => p.id === id);
      });
    });
  }
}
