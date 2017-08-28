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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var Rx_1 = require("rxjs/Rx");
require("rxjs/Rx"); //get everything from Rx  
var app_config_1 = require("../config/app.config");
var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        //private headers = new Headers({'Content-Type': 'application/json'});
        this.custgetUrl = app_config_1.GlobalVariable.BASE_API_URL + 'company'; // URL to web api
    }
    /*     getCustomers(id: number): Promise<Customer> {
            return this.http.get(`${this.custgetUrl}${id}`)
                .toPromise()
                .then(response => {
                    return response.json().response.data as Customer;
                }).catch(this.handleError);
        } */
    CompanyService.prototype.addCompany = function (company) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.custgetUrl + "/add";
        /*  return this.http
             .put(url, JSON.stringify(company), { headers: headers })
             .map(res => { res.json().response.message }) //console.log(res.json().response.message)
             .toPromise(); */
        return this.http.put(url, JSON.stringify(company), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CompanyService.prototype.getAllCompanyData = function () {
        var url = this.custgetUrl + "/getallcompanydata";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.getAllCompanyNames = function () {
        var url = this.custgetUrl + "/getallcompanynames";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompany = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.custgetUrl + "/getcompany";
        return this.http.put(url, JSON.stringify({ "companyId": id }), { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    CompanyService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CompanyService;
}());
CompanyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map