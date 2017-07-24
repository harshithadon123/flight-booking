import { Component, Input } from '@angular/core';

import { IItinerary } from './itinerary.model';

@Component({
    selector: 'itinerary',
    templateUrl: './itinerary.component.html',
    styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent {
    @Input() data: IItinerary;
}