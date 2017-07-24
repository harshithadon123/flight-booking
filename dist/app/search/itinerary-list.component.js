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
var material_1 = require("@angular/material");
var config_service_1 = require("../shared/services/config.service");
var ItineraryListComponent = (function () {
    function ItineraryListComponent(configService) {
        this.configService = configService;
        this.pageChange = new core_1.EventEmitter();
        this.sortChange = new core_1.EventEmitter();
        this.pageSize = configService.DefaultPageSize;
        this.pageSizeOptions = configService.PageSizeOptions;
    }
    ItineraryListComponent.prototype.handlePage = function (event) {
        this.pageChange.emit(event);
    };
    ;
    ItineraryListComponent.prototype.handleSortByChange = function (event) {
        this.sortChange.emit({
            SortBy: event.value,
            SortDirection: this.sortOrder
        });
    };
    ItineraryListComponent.prototype.handleSortDirectionChange = function (event) {
        this.sortChange.emit({
            SortBy: this.sortBy,
            SortDirection: event.value
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ItineraryListComponent.prototype, "itineraryListResult", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ItineraryListComponent.prototype, "pageChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ItineraryListComponent.prototype, "sortChange", void 0);
    __decorate([
        core_1.ViewChild('itineraryListPager'),
        __metadata("design:type", material_1.MdPaginator)
    ], ItineraryListComponent.prototype, "itineraryListPager", void 0);
    ItineraryListComponent = __decorate([
        core_1.Component({
            selector: 'itinerary-list',
            templateUrl: './itinerary-list.component.html',
            styleUrls: ['./itinerary-list.component.css']
        }),
        __metadata("design:paramtypes", [config_service_1.ConfigService])
    ], ItineraryListComponent);
    return ItineraryListComponent;
}());
exports.ItineraryListComponent = ItineraryListComponent;
//# sourceMappingURL=itinerary-list.component.js.map