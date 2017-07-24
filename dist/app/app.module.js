"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var moment_service_1 = require("./shared/services/moment.service");
var config_service_1 = require("./shared/services/config.service");
var material_module_1 = require("./material.module");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./shared/nav/navbar.component");
var home_component_1 = require("./home/home.component");
var shared_module_1 = require("./shared/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            material_module_1.MaterialModule,
            flex_layout_1.FlexLayoutModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            router_1.RouterModule.forRoot(app_routes_1.appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavBarComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            config_service_1.ConfigService,
            { provide: moment_service_1.MOMENT_TOKEN, useValue: moment }
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map