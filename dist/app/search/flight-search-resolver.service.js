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
var flight_search_service_1 = require("./flight-search.service");
var FlightSearchResolver = (function () {
    function FlightSearchResolver(flightSearchService) {
        this.flightSearchService = flightSearchService;
    }
    FlightSearchResolver.prototype.resolve = function (route) {
        return this.flightSearchService.search(route.queryParams);
    };
    return FlightSearchResolver;
}());
FlightSearchResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [flight_search_service_1.FlightSearchService])
], FlightSearchResolver);
exports.FlightSearchResolver = FlightSearchResolver;
//# sourceMappingURL=flight-search-resolver.service.js.map