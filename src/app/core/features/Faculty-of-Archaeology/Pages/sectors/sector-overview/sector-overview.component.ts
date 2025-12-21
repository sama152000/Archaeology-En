import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectorsService } from '../../../Services/sectors.service';
import { Sector, SectorMember } from '../../../model/sector.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sector-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sector-overview.component.html',
  styleUrls: ['./sector-overview.component.css']
})
export class SectorOverviewComponent implements OnInit {
  sector?: Sector;
  leader?: SectorMember;

  constructor(
    private route: ActivatedRoute,
    private sectorsService: SectorsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id'];

      this.sectorsService.getSectors().subscribe(sectors => {
        this.sector = sectors.find(s => s.id === id);
      });

      this.sectorsService.getSectorMembers(id).subscribe(members => {
        this.leader = members.find(m => m.isLeader);
      });
    });
  }
}
