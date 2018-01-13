import { Routes } from '@angular/router';

import { SearchResultsComponent } from './search-results.component';

export const searchRoutes: Routes = [
  { path: 'results', component: SearchResultsComponent },
  { path: '', redirectTo: 'results', pathMatch: 'full' }
];
