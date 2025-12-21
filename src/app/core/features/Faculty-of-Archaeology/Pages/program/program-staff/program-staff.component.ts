import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from '../../../Services/programs.service';
import { Program, ProgramMember } from '../../../model/program.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-staff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-staff.component.html',
  styleUrls: ['./program-staff.component.css']
})
export class ProgramStaffComponent implements OnInit {
  program?: Program;
  members: ProgramMember[] = [];

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

      this.programService.getProgramMembers(id).subscribe(members => {
        this.members = members;
      });
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('');
  }
}
