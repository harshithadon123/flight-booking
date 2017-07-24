import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', loadChildren: '/app/search/search.module#SearchModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
