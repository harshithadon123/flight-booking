import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { FlightSearchService } from './flight-search.service';
import { ISearchFilter } from './search-filter.model';

@Injectable()
export class FlightSearchResolver implements Resolve<any> {

    constructor(private flightSearchService: FlightSearchService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.flightSearchService.search(<ISearchFilter>route.queryParams);
    }
}