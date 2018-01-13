import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material';

import { ConfigService } from '../shared/services/config.service';
import { ISearchFilter } from './search-filter.model';
import { FlightSearchService } from './flight-search.service';
import { ISearchResult } from './search-result.model';
import { SortEvent } from '../shared/models/SortEvent';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
    searchFilter: ISearchFilter;
    searchResult: ISearchResult;
    editMode: boolean;

    private paramsSubscription: any;

    constructor(private router: Router, private route: ActivatedRoute,
        private flightSearchService: FlightSearchService, private configService: ConfigService) {
    }

    ngOnInit() {
        this.paramsSubscription = this.route.queryParams.subscribe(params => {
            this.searchFilter = {
                departureAirportCode: params['departureAirportCode'],
                returnAirportCode: params['returnAirportCode'],
                departureDate: new Date(params['departureDate']),
                returnDate: new Date(params['returnDate']),
                pageIndex: +params['pageIndex'] || 0,
                pageSize: +params['pageSize'] || this.configService.DefaultPageSize,
                sortBy: params['sortBy'],
                sortOrder: +params['sortOrder'] || 1
            };

            // Search for flights
            this.flightSearchService.search(this.searchFilter).subscribe(result => {
                this.searchResult = result;
            },
            (error: HttpErrorResponse) => {
                if (error.error instanceof Error) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.log('An error occurred:', error.error.message);
                  } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
                  }
            });
        });
    }

    handleEditClick() {
        this.editMode = true;
    }

    handleCloseClick() {
        this.editMode = false;
    }

    handleSearchClick(filter: ISearchFilter) {
        this.searchFilter.departureAirportCode = filter.departureAirportCode;
        this.searchFilter.returnAirportCode = filter.returnAirportCode;
        this.searchFilter.departureDate = filter.departureDate;
        this.searchFilter.returnDate = filter.returnDate;

        this.router.navigate(['/search'], {
            queryParams: this.searchFilter
        });
        this.editMode = false;
    }

    handlePageChange(event: PageEvent) {
        this.searchFilter.pageIndex = event.pageIndex;
        this.searchFilter.pageSize = event.pageSize;

        this.router.navigate(['/search'], {
            queryParams: this.searchFilter
        });
    }

    handleSortChange(event: SortEvent) {
        this.searchFilter.sortBy = event.SortBy;
        this.searchFilter.sortOrder = event.SortDirection;

        this.router.navigate(['/search'], {
            queryParams: this.searchFilter
        });
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}
