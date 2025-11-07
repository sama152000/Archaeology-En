import { Routes } from '@angular/router';
import { FacultyOfArchaeologyComponent } from './core/features/Faculty-of-Archaeology/Faculty-of-Archaeology.component';
import { HomeComponent } from './core/features/Faculty-of-Archaeology/Pages/Home/home.component';
import { AboutComponent } from './core/features/Faculty-of-Archaeology/Pages/about/about.component';
import { VisionComponent } from './core/features/Faculty-of-Archaeology/Pages/about/vision/vision.component';
import { DeanMessageComponent } from './core/features/Faculty-of-Archaeology/Pages/about/dean-message/dean-message.component';
import { ObjectivesComponent } from './core/features/Faculty-of-Archaeology/Pages/about/objectives/objectives.component';
import { DepartmentComponent } from './core/features/Faculty-of-Archaeology/Pages/department/department.component';
import { DepartmentAboutComponent } from './core/features/Faculty-of-Archaeology/Pages/department/department-about/department-about.component';
import { DepartmentStaffComponent } from './core/features/Faculty-of-Archaeology/Pages/department/department-staff/department-staff.component';
import { AdminStructureComponent } from './core/features/Faculty-of-Archaeology/Pages/department/admin-structure/admin-structure.component';

export const routes: Routes = [
  {
    path: '',
    component: FacultyOfArchaeologyComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          { path: '', redirectTo: 'dean-message', pathMatch: 'full' },
          { path: 'dean-message', component: DeanMessageComponent },
          { path: 'vision', component: VisionComponent },
          { path: 'objectives', component: ObjectivesComponent },
          { path: 'history', component: VisionComponent }, // Placeholder
          { path: 'administrative', component: VisionComponent }, // Placeholder
          { path: 'strategic', component: VisionComponent } // Placeholder
        ]
      },
      // routes.ts
{
  path: 'departments/:id',
  component: DepartmentComponent,
  children: [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: DepartmentAboutComponent },
    { path: 'staff', component: DepartmentStaffComponent },
    { path: 'admin', component: AdminStructureComponent }
  ]
}
    ]
  }
];
