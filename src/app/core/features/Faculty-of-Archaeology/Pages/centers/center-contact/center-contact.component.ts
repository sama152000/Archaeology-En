import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentersService } from '../../../Services/center.service';
import { Center, CenterMember } from '../../../model/center.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './center-contact.component.html',
  styleUrls: ['./center-contact.component.css']
})
export class CenterContactComponent implements OnInit {
  center?: Center;
  leader?: CenterMember;

  constructor(
    private route: ActivatedRoute,
    private centersService: CentersService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id']; // string GUID
      this.centersService.getCenters().subscribe(centers => {
        this.center = centers.find(c => c.id === id);
      });

      this.centersService.getCenterMembers(id).subscribe(members => {
        this.leader = members.find(m => m.isLeader);
      });
    });
  }
}
