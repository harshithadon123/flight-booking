import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { searchRoutes } from './search.routs';
import { SearchResultsComponent } from './search-results.component';
import { SearchSummaryComponent } from './search-summary.component';
import { ItineraryListComponent } from './itinerary-list.component';
import { ItineraryComponent } from './itinerary.component';
import { FlightSearchService } from './flight-search.service';
import { FlightSearchResolver } from './flight-search-resolver.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(searchRoutes)
    ],
    declarations: [
        SearchResultsComponent,
        SearchSummaryComponent,
        ItineraryListComponent,
        ItineraryComponent
    ],
    providers: [
        FlightSearchService,
        FlightSearchResolver
    ]
})
export class SearchModule { }

