import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentersService } from '../../../Services/center.service';
import { Center } from '../../../model/center.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './center-overview.component.html',
  styleUrls: ['./center-overview.component.css']
})
export class CenterOverviewComponent implements OnInit {
  center?: Center;

  constructor(
    private route: ActivatedRoute,
    private centersService: CentersService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id']; // خليها string مش number
      this.centersService.getCenters().subscribe(centers => {
        this.center = centers.find(c => c.id === id);
      });
    });
  }
}
