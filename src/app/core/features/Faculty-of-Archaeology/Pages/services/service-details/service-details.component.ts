import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../../Services/services.service';
import { Service } from '../../../model/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  service?: Service;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = +params['id'];
      this.servicesService.getService(id).subscribe(service => {
        this.service = service;
      });
    });
  }
}