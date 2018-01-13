import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './search/flight-search.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'search', component: FlightSearchComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
