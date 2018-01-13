import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ISearchFilter } from './search-filter.model';

@Component({
    selector: 'app-search-summary',
    templateUrl: './search-summary.component.html',
    styleUrls: ['./search-summary.component.css']
})
export class SearchSummaryComponent {
    @Input() searchFilter: ISearchFilter;
    @Output() editClick = new EventEmitter();

    handleEdit() {
        this.editClick.emit();
    }
}
