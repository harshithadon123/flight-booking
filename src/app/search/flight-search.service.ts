import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import { ISearchFilter } from './search-filter.model';
import { ISearchResult } from './search-result.model';
import { ConfigService } from '../shared/services/config.service';
//import { IItinerary } from './itinerary.model';

@Injectable()
export class FlightSearchService {

    constructor(private http: Http, private configService: ConfigService) {
    }

    search(filter: ISearchFilter): Observable<ISearchResult> {
        return this.http.get(this.configService.ApiBaseUrl + '/flights', {
            params: filter
        }).map((response: Response) => {
            return <ISearchResult>response.json();
        }).catch(this.handleError);
    }

    // search(filter: ISearchFilter): Observable<IItinerary[]> {
    //     return this.http.get(this.configService.ApiBaseUrl + '/flight', {
    //         params: filter
    //     }).map((response: Response) => {
    //         return <IItinerary[]>response.json();
    //     }).catch(this.handleError);
    // }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
