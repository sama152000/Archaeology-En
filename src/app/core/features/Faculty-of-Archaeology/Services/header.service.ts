import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from '../model/header.model';
import { CentersService } from './center.service';
import { ServicesService } from './services.service';
import { SectorsService } from './sectors.service';
import { DepartmentsService } from './departments.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(
    private centersService: CentersService,
    private servicesService: ServicesService,
    private sectorsService: SectorsService,
    private departmentsService: DepartmentsService
  ) {}

  getMenuItems(): Observable<MenuItem[]> {
    return combineLatest([
      this.departmentsService.getDepartments(),
      this.centersService.getCenters(),
      this.servicesService.getServices(),
      this.sectorsService.getSectors()
    ]).pipe(
      map(([departments, centers, services, sectors]) => {
        const menuItems: MenuItem[] = [
          { label: 'Home', link: '/home', active: true },
          {
            label: 'About',
            hasSubmenu: true,
            submenu: [
              { label: "Dean's Word", link: '/about/dean-message' },
              { label: 'Vision & Mission', link: '/about/vision' },
              { label: 'History', link: '/about/history' },
              { label: 'Objectives', link: '/about/objectives' },
              { label: 'Administrative Structure', link: '/about/administrative' },
              { label: 'Strategic Plan', link: '/about/strategic' }
            ]
          },
          {
            label: 'Departments',
            hasSubmenu: true,
            submenu: departments.map(dept => ({
              label: dept.name.replace('Department of ', ''),
              link: `/departments/${dept.id}`
            }))
          },
          {
            label: 'Centers',
            hasSubmenu: true,
            submenu: centers.map(center => ({
              label: center.name.replace('Center for ', '').replace('Research Center for ', ''),
              link: `/centers/${center.id}`
            }))
          },
          {
            label: 'Services',
            hasSubmenu: true,
            submenu: services.map(service => ({
              label: service.name.replace(' Services', ''),
              link: `/services/${service.id}`
            }))
          },
          { label: 'News', link: '/posts/news' },
          {
            label: 'Sectors',
            hasSubmenu: true,
            submenu: sectors.map(sector => ({
              label: sector.name.replace(' Sector', ''),
              link: `/sectors/${sector.id}`
            }))
          },
          { label: 'Contact Us', link: '/contact' }
        ];
        return menuItems;
      })
    );
  }
}