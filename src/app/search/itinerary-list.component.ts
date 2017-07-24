import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MdSelectChange, MdPaginator } from '@angular/material';

import { ISearchResult } from './search-result.model';
import { SortEvent } from '../shared/models/SortEvent';
import { ConfigService } from '../shared/services/config.service';

@Component({
    selector: 'itinerary-list',
    templateUrl: './itinerary-list.component.html',
    styleUrls: ['./itinerary-list.component.css']
})
export class ItineraryListComponent {
    @Input() itineraryListResult: ISearchResult[];
    @Output() pageChange = new EventEmitter<PageEvent>();
    @Output() sortChange = new EventEmitter<SortEvent>();

    pageSize: number;
    pageSizeOptions: number[];

    sortBy: string;
    sortOrder: number;

    @ViewChild('itineraryListPager') itineraryListPager: MdPaginator;

    constructor(private configService: ConfigService) {
        this.pageSize = configService.DefaultPageSize;
        this.pageSizeOptions = configService.PageSizeOptions;
    }

    handlePage(event: PageEvent) {
        this.pageChange.emit(event);
    };

    handleSortByChange(event: MdSelectChange) {
        this.sortChange.emit({
            SortBy: event.value,
            SortDirection: this.sortOrder
        });
    }

    handleSortDirectionChange(event: MdSelectChange) {
        this.sortChange.emit({
            SortBy: this.sortBy,
            SortDirection: event.value
        });
    }
}
