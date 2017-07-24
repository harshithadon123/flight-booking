"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
exports.appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'search', loadChildren: '/app/search/search.module#SearchModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map