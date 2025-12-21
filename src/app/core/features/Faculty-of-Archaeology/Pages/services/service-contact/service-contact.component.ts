import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../../Services/services.service';
import { Service } from '../../../model/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-contact.component.html',
  styleUrls: ['./service-contact.component.css']
})
export class ServiceContactComponent implements OnInit {
  service?: Service;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const id = params['id']; // ✅ خليها string مش number
      this.servicesService.getService(id).subscribe(service => {
        this.service = service;
      });
    });
  }
}
