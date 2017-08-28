"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import {ToasterModule, ToasterService} from 'angular2-toaster';
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var landing_component_1 = require("./landing/landing.component");
var company_component_1 = require("./company/company.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var dashboard_directive_1 = require("./dashboard/dashboard.directive");
var company_service_1 = require("./company/company.service");
//import { InMemoryDataService }  from './in-memory-data.service';
//********module import order matters**********
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            //InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot(),
        ],
        declarations: [
            app_component_1.AppComponent, login_component_1.LoginComponent, dashboard_component_1.DashboardComponent, landing_component_1.LandingComponent, company_component_1.CompanyComponent, dashboard_directive_1.SidebarToggleDirective,
        ],
        providers: [company_service_1.CompanyService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map