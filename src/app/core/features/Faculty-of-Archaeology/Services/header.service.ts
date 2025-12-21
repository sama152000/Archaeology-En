import { Injectable, Inject } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from '../model/header.model';
import { CentersService } from './center.service';
import { ServicesService } from './services.service';
import { SectorsService } from './sectors.service';
import { DepartmentsService } from './departments.service';
import { ProgramsService } from './programs.service';
import { UnitsService } from './units.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(
    private centersService: CentersService,
    private servicesService: ServicesService,
    private sectorsService: SectorsService,
    private departmentsService: DepartmentsService,
    @Inject(ProgramsService) private programsService: ProgramsService,
    private unitsService: UnitsService
  ) {}

  getMenuItems(): Observable<MenuItem[]> {
    return combineLatest([
      this.departmentsService.getDepartments(),
      this.centersService.getCenters(),
      this.servicesService.getServices(),
      this.sectorsService.getSectors(),
      this.programsService.getPrograms(),
      this.unitsService.getUnits()
    ]).pipe(
      map(([departments, centers, services, sectors, programs, units]) => {
        const menuItems: MenuItem[] = [
          { label: 'Home', link: '/home', active: true },
          {
            label: 'About',
            hasSubmenu: true,
            submenu: [
              { label: 'Dean’s Message', link: '/about/dean-message' },
              { label: 'Vision & Mission', link: '/about/vision' },
              { label: 'Faculty History', link: '/about/history' },
              { label: 'Objectives', link: '/about/objectives' },
              { label: 'Administrative Structure', link: '/about/administrative' }
            ]
          },
          {
            label: 'Departments',
            hasSubmenu: true,
            submenu: (departments || []).map(dept => ({
              label: dept.name.replace('Department of ', '').replace('قسم ', ''),
              link: `/department/${dept.id}`
            }))
          },
          {
            label: 'Centers',
            hasSubmenu: true,
            submenu: (centers || []).map(center => ({
              label: center.centerName
                .replace('Center for ', '')
                .replace('Research Center for ', '')
                .replace('مركز ', ''),
              link: `/centers/${center.id}`
            }))
          },
          {
            label: 'Services',
            hasSubmenu: true,
            submenu: (services || []).map(service => ({
              label: service.title.replace(' Services', '').replace('الخدمات', ''),
              link: `/services/${service.id}`
            }))
          },
          { label: 'News', link: '/posts/news' },
          {
            label: 'Programs',
            hasSubmenu: true,
            submenu: (programs || []).map(prog => ({
              label: prog.pageTitle,
              link: `/program/${prog.id}`
            }))
          },
          {
            label: 'Units',
            hasSubmenu: true,
            submenu: (units || []).map(unit => ({
              label: unit.unitTitle,
              link: `/units/${unit.id}`
            }))
          },
          {
            label: 'Sectors',
            hasSubmenu: true,
            submenu: (sectors || []).map(sector => ({
              label: sector.name.replace(' Sector', '').replace('قطاع ', ''),
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
