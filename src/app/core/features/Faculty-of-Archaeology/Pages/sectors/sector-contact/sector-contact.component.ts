import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectorsService } from '../../../Services/sectors.service';
import { Sector } from '../../../model/sector.model';
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

  constructor(
    private route: ActivatedRoute,
    private sectorsService: SectorsService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = +params['id'];
      this.sectorsService.getSector(id).subscribe(sector => {
        this.sector = sector;
      });
    });
  }
}