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
        const params = new HttpParams();
        params.append('departureAirportCode', filter.departureAirportCode);
        params.append('returnAirportCode', filter.returnAirportCode);
        params.append('departureDate', filter.departureDate.toDateString());
        params.append('returnDate', filter.returnDate.toDateString());
        params.append('pageIndex', filter.pageIndex.toString());
        params.append('pageSize', filter.pageSize.toString());
        params.append('sortBy', filter.sortBy);
        params.append('sortOrder', filter.sortOrder.toString());

        return this.http.get<ISearchResult>(this.configService.ApiBaseUrl + '/flights', {
            params: params
        });
    }
}
