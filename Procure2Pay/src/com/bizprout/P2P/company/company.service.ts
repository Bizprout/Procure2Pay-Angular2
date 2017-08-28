import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx  
import { GlobalVariable } from '../config/app.config';


@Injectable()
export class CompanyService {

    //private headers = new Headers({'Content-Type': 'application/json'});
    private custgetUrl = GlobalVariable.BASE_API_URL + 'company';  // URL to web api

    constructor(private http: Http) { }

    /*     getCustomers(id: number): Promise<Customer> {
            return this.http.get(`${this.custgetUrl}${id}`)
                .toPromise()
                .then(response => {
                    return response.json().response.data as Customer;
                }).catch(this.handleError);
        } */

    addCompany(company: any): Observable<any> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.custgetUrl}/add`;

        /*  return this.http
             .put(url, JSON.stringify(company), { headers: headers })
             .map(res => { res.json().response.message }) //console.log(res.json().response.message)
             .toPromise(); */

        return this.http.put(url, JSON.stringify(company), { headers: headers })
            .map(response => { return response.json() })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAllCompanyData(): Promise<any> {

        let url = `${this.custgetUrl}/getallcompanydata`;

        return this.http.get(url)
            .toPromise()
            .then(response => { return response.json() })
            .catch(this.handleError)
    }

    getAllCompanyNames(): Promise<any> {

        let url = `${this.custgetUrl}/getallcompanynames`;

        return this.http.get(url)
            .toPromise()
            .then(response => { return response.json() })
            .catch(this.handleError)
    }

    getCompany(id: number): Observable<any> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.custgetUrl}/getcompany`;

        return this.http.put(url, JSON.stringify({"companyId": id}), { headers: headers })
            .map(response => { return response.json() })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}