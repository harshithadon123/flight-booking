import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MOMENT_TOKEN } from '../shared/services/moment.service';
import { ISearchFilter } from './search-filter.model';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
    @Input() searchFilter?: ISearchFilter;
    @Input() showClose: boolean = false;
    @Output() closeClick = new EventEmitter();
    @Output() searchClick = new EventEmitter();

    private searchForm: FormGroup;
    private departureAirportCode: FormControl;
    private returnAirportCode: FormControl;
    private departureDate: FormControl;
    private returnDate: FormControl;

    private defaultMinDate: Date;

    constructor(@Inject(MOMENT_TOKEN) private moment: any){
    }

    ngOnInit() {
        this.departureAirportCode = new FormControl(this.searchFilter ? this.searchFilter.departureAirportCode : '',
            [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
        this.returnAirportCode = new FormControl(this.searchFilter ? this.searchFilter.returnAirportCode : '',
            [Validators.required, Validators.minLength(3), Validators.maxLength(3)]);
        this.departureDate = new FormControl(this.searchFilter ? new Date(this.searchFilter.departureDate) : '',
            [Validators.required]);
        this.returnDate = new FormControl(this.searchFilter ? new Date(this.searchFilter.returnDate) : '',
            [Validators.required]);

        this.defaultMinDate = this.moment().toDate();

        this.searchForm = new FormGroup({
            departureAirportCode: this.departureAirportCode,
            returnAirportCode: this.returnAirportCode,
            departureDate: this.departureDate,
            returnDate: this.returnDate
        });
    }

    handleClose() {
        this.closeClick.emit();
    }

    handleSearch(formValues: any) {
        if (this.searchForm.valid) {
            this.searchClick.emit(formValues);
        }
    }
}
