import { Routes } from '@angular/router';

//import { FlightSearchResolver } from './flight-search-resolver.service';
import { SearchResultsComponent } from './search-results.component';

export const searchRoutes: Routes = [
  { path: 'results', component: SearchResultsComponent/*, resolve: { itineraryList: FlightSearchResolver }*/ },
  { path: '', redirectTo: 'results', pathMatch: 'full' }
];
