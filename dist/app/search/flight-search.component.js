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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var moment_service_1 = require("../shared/services/moment.service");
var FlightSearchComponent = (function () {
    function FlightSearchComponent(moment) {
        this.moment = moment;
        this.showClose = false;
        this.closeClick = new core_1.EventEmitter();
        this.searchClick = new core_1.EventEmitter();
    }
    FlightSearchComponent.prototype.ngOnInit = function () {
        this.departureAirportCode = new forms_1.FormControl(this.searchFilter ? this.searchFilter.departureAirportCode : '', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(3)]);
        this.returnAirportCode = new forms_1.FormControl(this.searchFilter ? this.searchFilter.returnAirportCode : '', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(3)]);
        this.departureDate = new forms_1.FormControl(this.searchFilter ? new Date(this.searchFilter.departureDate) : '', [forms_1.Validators.required]);
        this.returnDate = new forms_1.FormControl(this.searchFilter ? new Date(this.searchFilter.returnDate) : '', [forms_1.Validators.required]);
        this.defaultMinDate = this.moment().toDate();
        this.searchForm = new forms_1.FormGroup({
            departureAirportCode: this.departureAirportCode,
            returnAirportCode: this.returnAirportCode,
            departureDate: this.departureDate,
            returnDate: this.returnDate
        });
    };
    FlightSearchComponent.prototype.handleClose = function () {
        this.closeClick.emit();
    };
    FlightSearchComponent.prototype.handleSearch = function (formValues) {
        if (this.searchForm.valid) {
            this.searchClick.emit(formValues);
        }
    };
    return FlightSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlightSearchComponent.prototype, "searchFilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FlightSearchComponent.prototype, "showClose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FlightSearchComponent.prototype, "closeClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FlightSearchComponent.prototype, "searchClick", void 0);
FlightSearchComponent = __decorate([
    core_1.Component({
        selector: 'flight-search',
        templateUrl: './flight-search.component.html',
        styleUrls: ['./flight-search.component.css']
    }),
    __param(0, core_1.Inject(moment_service_1.MOMENT_TOKEN)),
    __metadata("design:paramtypes", [Object])
], FlightSearchComponent);
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map