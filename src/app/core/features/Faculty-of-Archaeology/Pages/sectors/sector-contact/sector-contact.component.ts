import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectorsService } from '../../../Services/sectors.service';
import { Sector, SectorService, SectorMember } from '../../../model/sector.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sector-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sector-contact.component.html',
  styleUrls: ['./sector-contact.component.css']
})
export class SectorContactComponent implements OnInit {
  sector?: Sector;
  firstService?: SectorService;
  members: SectorMember[] = [];
  leader?: SectorMember;

  constructor(
    private route: ActivatedRoute,
    private sectorsService: SectorsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id'];

      // القطاع نفسه
      this.sectorsService.getSectors().subscribe(sectors => {
        this.sector = sectors.find(s => s.id === id);
      });

      // أول خدمة فقط
      this.sectorsService.getSectorServices(id).subscribe(services => {
        if (services.length > 0) {
          this.firstService = services[0];
        }
      });

      // الأعضاء
      this.sectorsService.getSectorMembers(id).subscribe(members => {
        this.members = members;
        this.leader = members.find(m => m.isLeader);
      });
    });
  }
}
