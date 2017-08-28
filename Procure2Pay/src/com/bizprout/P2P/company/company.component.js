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
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
var router_1 = require("@angular/router");
var company_service_1 = require("./company.service");
var forms_1 = require("@angular/forms");
var CompanyComponent = (function () {
    function CompanyComponent(router, route, compservice, formBuilder) {
        this.router = router;
        this.route = route;
        this.compservice = compservice;
        this.formBuilder = formBuilder;
        this.company = { "companyName": '', "companyGUID": '', "clientId": 0, "contactPerson": '', "companyBooksFrom": '', "syncFromDate": '', "status": '' };
        this.editdto = { "ecompanyName": '', "ecompanyGUID": '', "eclientId": 0, "econtactPerson": '--Select--', "ecompanyBooksFrom": '', "esyncFromDate": '', "estatus": '--Select--' };
    }
    CompanyComponent.prototype.ngOnInit = function () {
        console.log("Inside Company Component...");
        this.addcompanyForm = this.formBuilder.group({
            companyname: ['', forms_1.Validators.required],
            companyguid: ['', forms_1.Validators.required],
            clientname: ['', forms_1.Validators.required],
            booksdate: ['', forms_1.Validators.required],
            syncdate: ['', forms_1.Validators.required],
            status: ['', forms_1.Validators.required],
        });
    };
    CompanyComponent.prototype.addCompany = function (company) {
        /*
               return this.compservice.addCompany(company).subscribe(
                    res => { return message => this.message = res.response.message; },
                    err => { console.log(err) }
                ); */
        var _this = this;
        return this.route.paramMap
            .switchMap(function (params) { return _this.compservice.addCompany(company); })
            .subscribe(function (message) { return _this.message = message.response.message; });
        //this.toasterService.pop('success', 'Company Creation', this.message.response.message);
    };
    CompanyComponent.prototype.getAllCompanyData = function () {
        var _this = this;
        console.log("inside Report");
        return this.route.paramMap
            .switchMap(function (params) { return _this.compservice.getAllCompanyData(); })
            .subscribe(function (companydata) { return _this.companydata = companydata.response.data; });
    };
    CompanyComponent.prototype.getAllCompanyNames = function () {
        var _this = this;
        console.log("inside Edit getting company names");
        return this.route.paramMap
            .switchMap(function (params) { return _this.compservice.getAllCompanyNames(); })
            .subscribe(function (companyNameandId) { return _this.companyNameandId = companyNameandId.response.data; });
    };
    CompanyComponent.prototype.getCompany = function (id) {
        var _this = this;
        return this.route.paramMap
            .switchMap(function (params) { return _this.compservice.getCompany(id); })
            .subscribe(function (editCompany) {
            _this.editCompany = editCompany.response.data;
            _this.editdto.ecompanyName = _this.editCompany.companyName;
            _this.editdto.eclientId = _this.editCompany.clientId;
            _this.editdto.econtactPerson = _this.editCompany.contactPerson;
            _this.editdto.ecompanyBooksFrom = _this.editCompany.companyBooksFrom;
            _this.editdto.esyncFromDate = _this.editCompany.syncFromDate;
            _this.editdto.estatus = _this.editCompany.status;
            console.log(_this.editdto);
        });
    };
    return CompanyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CompanyComponent.prototype, "message", void 0);
CompanyComponent = __decorate([
    core_1.Component({
        selector: 'company',
        templateUrl: './company.component.html',
        providers: [company_service_1.CompanyService],
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, company_service_1.CompanyService, forms_1.FormBuilder])
], CompanyComponent);
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map