"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var config_service_1 = require("../shared/services/config.service");
var flight_search_service_1 = require("./flight-search.service");
var SearchResultsComponent = (function () {
    function SearchResultsComponent(router, route, flightSearchService, configService) {
        this.router = router;
        this.route = route;
        this.flightSearchService = flightSearchService;
        this.configService = configService;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this.route.queryParams.subscribe(function (params) {
            _this.searchFilter = {
                departureAirportCode: params['departureAirportCode'],
                returnAirportCode: params['returnAirportCode'],
                departureDate: new Date(params['departureDate']),
                returnDate: new Date(params['returnDate']),
                pageIndex: +params['pageIndex'] || 0,
                pageSize: +params['pageSize'] || _this.configService.DefaultPageSize,
                sortBy: params['sortBy'],
                sortOrder: +params['sortOrder'] || 1
            };
            // Search for flights
            _this.flightSearchService.search(_this.searchFilter).subscribe(function (result) {
                _this.searchResult = result;
            });
        });
    };
    SearchResultsComponent.prototype.handleEditClick = function () {
        this.editMode = true;
    };
    SearchResultsComponent.prototype.handleCloseClick = function () {
        this.editMode = false;
    };
    SearchResultsComponent.prototype.handleSearchClick = function (filter) {
        this.searchFilter.departureAirportCode = filter.departureAirportCode;
        this.searchFilter.returnAirportCode = filter.returnAirportCode;
        this.searchFilter.departureDate = filter.departureDate;
        this.searchFilter.returnDate = filter.returnDate;
        this.router.navigate(['/search'], {
            queryParams: this.searchFilter
        });
        this.editMode = false;
    };
    SearchResultsComponent.prototype.handlePageChange = function (event) {
        this.searchFilter.pageIndex = event.pageIndex;
        this.searchFilter.pageSize = event.pageSize;
        this.router.navigate(['/search'], {
            queryParams: this.searchFilter
        });
    };
    SearchResultsComponent.prototype.handleSortChange = function (event) {
        this.searchFilter.sortBy = event.SortBy;
        this.searchFilter.sortOrder = event.SortDirection;
        this.router.navigate(['/search'], {
            queryParams: this.searchFilter
        });
    };
    SearchResultsComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    return SearchResultsComponent;
}());
SearchResultsComponent = __decorate([
    core_1.Component({
        templateUrl: './search-results.component.html',
        styleUrls: ['./search-results.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        flight_search_service_1.FlightSearchService, config_service_1.ConfigService])
], SearchResultsComponent);
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map