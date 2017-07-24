import { IItinerary } from './itinerary.model';

export interface ISearchResult {
    TotalCount: number;
    ItineraryPage: IItinerary[];
}
