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
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var config_service_1 = require("../shared/services/config.service");
//import { IItinerary } from './itinerary.model';
var FlightSearchService = (function () {
    function FlightSearchService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    FlightSearchService.prototype.search = function (filter) {
        return this.http.get(this.configService.ApiBaseUrl + '/flights', {
            params: filter
        }).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    // search(filter: ISearchFilter): Observable<IItinerary[]> {
    //     return this.http.get(this.configService.ApiBaseUrl + '/flight', {
    //         params: filter
    //     }).map((response: Response) => {
    //         return <IItinerary[]>response.json();
    //     }).catch(this.handleError);
    // }
    FlightSearchService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.statusText);
    };
    return FlightSearchService;
}());
FlightSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, config_service_1.ConfigService])
], FlightSearchService);
exports.FlightSearchService = FlightSearchService;
//# sourceMappingURL=flight-search.service.js.map