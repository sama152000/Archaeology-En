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
import { PostsComponent } from './core/features/Faculty-of-Archaeology/Pages/posts/posts.component';
import { PostDetailsComponent } from './core/features/Faculty-of-Archaeology/Pages/posts/post-details/post-details.component';
import { CentersComponent } from './core/features/Faculty-of-Archaeology/Pages/centers/centers.component';
import { ServicesComponent } from './core/features/Faculty-of-Archaeology/Pages/services/services.component';
import { SectorsComponent } from './core/features/Faculty-of-Archaeology/Pages/sectors/sectors.component';
import { ContactUsComponent } from './core/features/Faculty-of-Archaeology/Pages/contact-us/contact-us.component';
import { CenterOverviewComponent } from './core/features/Faculty-of-Archaeology/Pages/centers/center-overview/center-overview.component';
import { CenterContactComponent } from './core/features/Faculty-of-Archaeology/Pages/centers/center-contact/center-contact.component';
import { CenterActivitiesComponent } from './core/features/Faculty-of-Archaeology/Pages/centers/center-activities/center-activities.component';
import { ServiceRequirementsComponent } from './core/features/Faculty-of-Archaeology/Pages/services/service-requirements/service-requirements.component';
import { ServiceDetailsComponent } from './core/features/Faculty-of-Archaeology/Pages/services/service-details/service-details.component';
import { ServiceContactComponent } from './core/features/Faculty-of-Archaeology/Pages/services/service-contact/service-contact.component';
import { SectorOverviewComponent } from './core/features/Faculty-of-Archaeology/Pages/sectors/sector-overview/sector-overview.component';
import { SectorProjectsComponent } from './core/features/Faculty-of-Archaeology/Pages/sectors/sector-projects/sector-projects.component';
import { SectorContactComponent } from './core/features/Faculty-of-Archaeology/Pages/sectors/sector-contact/sector-contact.component';
import { HistoryComponent } from './core/features/Faculty-of-Archaeology/Pages/about/history/history.component';
import { AdministrativeStructureComponent } from './core/features/Faculty-of-Archaeology/Pages/about/administrative-structure/administrative-structure.component';
import { StrategicPlanComponent } from './core/features/Faculty-of-Archaeology/Pages/about/strategic-plan/strategic-plan.component';

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
      { path: 'history', component: HistoryComponent },
      { path: 'administrative', component: AdministrativeStructureComponent },
      { path: 'strategic', component: StrategicPlanComponent }
    ]
  },
      {
        path: 'departments/:id',
        component: DepartmentComponent,
        children: [
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'about', component: DepartmentAboutComponent },
          { path: 'staff', component: DepartmentStaffComponent },
          { path: 'admin', component: AdminStructureComponent }
        ]
      },
  { path: 'posts/:type/:id', component: PostDetailsComponent },
  { path: 'posts/:type', component: PostsComponent },
       // Centers routes
  {
    path: 'centers/:id',
    component: CentersComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: CenterOverviewComponent },
      { path: 'activities', component: CenterActivitiesComponent },
      { path: 'contact', component: CenterContactComponent }
    ]
  },
  
  // Services routes
  {
    path: 'services/:id',
    component: ServicesComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: ServiceDetailsComponent },
      { path: 'requirements', component: ServiceRequirementsComponent },
      { path: 'contact', component: ServiceContactComponent }
    ]
  },
  
  // Sectors routes
  {
    path: 'sectors/:id',
    component: SectorsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: SectorOverviewComponent },
      { path: 'projects', component: SectorProjectsComponent },
      { path: 'contact', component: SectorContactComponent }
    ]
  },
  
  // Contact Us route
  { path: 'contact', component: ContactUsComponent },
    ]
  }
];
