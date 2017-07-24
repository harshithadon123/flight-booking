"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { FlightSearchResolver } from './flight-search-resolver.service';
var search_results_component_1 = require("./search-results.component");
exports.searchRoutes = [
    { path: 'results', component: search_results_component_1.SearchResultsComponent /*, resolve: { itineraryList: FlightSearchResolver }*/ },
    { path: '', redirectTo: 'results', pathMatch: 'full' }
];
//# sourceMappingURL=search.routs.js.map