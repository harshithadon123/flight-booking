import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ISearchFilter } from './search-filter.model';
import { ISearchResult } from './search-result.model';
import { ConfigService } from '../shared/services/config.service';

@Injectable()
export class FlightSearchService {

    constructor(private http: HttpClient, private configService: ConfigService) {
    }

    search(filter: ISearchFilter): Observable<ISearchResult> {
        const params = new HttpParams()
            .append('departureAirportCode', filter.departureAirportCode)
            .append('returnAirportCode', filter.returnAirportCode)
            .append('departureDate', filter.departureDate.toDateString())
            .append('returnDate', filter.returnDate.toDateString())
            .append('pageIndex', filter.pageIndex.toString())
            .append('pageSize', filter.pageSize.toString())
            .append('sortBy', filter.sortBy)
            .append('sortOrder', filter.sortOrder.toString());

        return this.http.get<ISearchResult>(this.configService.ApiBaseUrl + '/flights', {
            params: params
        });
    }
}
