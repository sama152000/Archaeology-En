import { Routes } from '@angular/router';
import { FacultyOfArchaeologyComponent } from './core/features/Faculty-of-Archaeology/Faculty-of-Archaeology.component';
import { HomeComponent } from './core/features/Faculty-of-Archaeology/Pages/Home/home.component';

export const routes: Routes = [


 {
    path: '',
    component: FacultyOfArchaeologyComponent,
    children: [
      { path: 'home', component: HomeComponent },
    
    
        { path: '', redirectTo: 'home', pathMatch: 'full' }

    ]
    }
];
