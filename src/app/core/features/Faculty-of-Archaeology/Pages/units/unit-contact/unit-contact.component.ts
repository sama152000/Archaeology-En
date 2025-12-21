import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitsService } from '../../../Services/units.service';
import { Unit, UnitMember } from '../../../model/unit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unit-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unit-contact.component.html',
  styleUrls: ['./unit-contact.component.css']
})
export class UnitContactComponent implements OnInit {
  unit?: Unit;
  leader?: UnitMember;

  constructor(
    private route: ActivatedRoute,
    private unitsService: UnitsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id']; // string GUID
      this.unitsService.getUnits().subscribe(units => {
        this.unit = units.find(u => u.id === id);
      });

      this.unitsService.getUnitMembers(id).subscribe(members => {
        this.leader = members.find(m => m.isLeader);
      });
    });
  }
}
