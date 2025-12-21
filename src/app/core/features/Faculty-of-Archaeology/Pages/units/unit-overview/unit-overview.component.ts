import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitsService } from '../../../Services/units.service';
import { Unit } from '../../../model/unit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unit-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unit-overview.component.html',
  styleUrls: ['./unit-overview.component.css']
})
export class UnitOverviewComponent implements OnInit {
  unit?: Unit;

  constructor(
    private route: ActivatedRoute,
    private unitsService: UnitsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id']; // خليها string مش number
      this.unitsService.getUnits().subscribe(units => {
        this.unit = units.find(u => u.id === id);
      });
    });
  }
}