import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FlightSearchComponent } from '../search/flight-search.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule
    ],
    declarations: [
        FlightSearchComponent
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class SharedModule {
}