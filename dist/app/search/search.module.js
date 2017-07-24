"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var material_module_1 = require("../material.module");
var search_routs_1 = require("./search.routs");
var search_results_component_1 = require("./search-results.component");
var search_summary_component_1 = require("./search-summary.component");
var itinerary_list_component_1 = require("./itinerary-list.component");
var itinerary_component_1 = require("./itinerary.component");
var flight_search_service_1 = require("./flight-search.service");
var flight_search_resolver_service_1 = require("./flight-search-resolver.service");
var shared_module_1 = require("../shared/shared.module");
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                material_module_1.MaterialModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(search_routs_1.searchRoutes)
            ],
            declarations: [
                search_results_component_1.SearchResultsComponent,
                search_summary_component_1.SearchSummaryComponent,
                itinerary_list_component_1.ItineraryListComponent,
                itinerary_component_1.ItineraryComponent
            ],
            providers: [
                flight_search_service_1.FlightSearchService,
                flight_search_resolver_service_1.FlightSearchResolver
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map