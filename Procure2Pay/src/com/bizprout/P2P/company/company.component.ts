import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompanyService } from './company.service';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormControl } from "@angular/forms";

@Component({

    selector: 'company',
    templateUrl: './company.component.html',
    providers: [CompanyService],
})


export class CompanyComponent implements OnInit {
    @Input() message: any;

    companydata: any;

    companyNameandId: any;

    editCompany: any;

    public addcompanyForm: FormGroup;

    constructor(private router: Router, private route: ActivatedRoute, private compservice: CompanyService, private formBuilder: FormBuilder) { }

    company = { "companyName": '', "companyGUID": '', "clientId": 0, "contactPerson": '', "companyBooksFrom": '', "syncFromDate": '', "status": '' }

    editdto=  { "ecompanyName": '', "ecompanyGUID": '', "eclientId": 0, "econtactPerson": '--Select--', "ecompanyBooksFrom": '', "esyncFromDate": '', "estatus": '--Select--' }

    ngOnInit(): void {
        console.log("Inside Company Component...");

        this.addcompanyForm = this.formBuilder.group({

            companyname: ['', Validators.required],

            companyguid: ['', Validators.required],

            clientname: ['', Validators.required],

            booksdate: ['', Validators.required],

            syncdate: ['', Validators.required],

            status: ['', Validators.required],

        });
    }

    addCompany(company: any) {
        /* 
               return this.compservice.addCompany(company).subscribe(
                    res => { return message => this.message = res.response.message; },
                    err => { console.log(err) }
                ); */

        return this.route.paramMap
            .switchMap((params: ParamMap) => this.compservice.addCompany(company))
            .subscribe(message => { return this.message = message.response.message });

        //this.toasterService.pop('success', 'Company Creation', this.message.response.message);

    }

    getAllCompanyData() {

        console.log("inside Report");

        return this.route.paramMap
            .switchMap((params: ParamMap) => this.compservice.getAllCompanyData())
            .subscribe(companydata => { return this.companydata = companydata.response.data })
    }

    getAllCompanyNames() {

        console.log("inside Edit getting company names");

        return this.route.paramMap
            .switchMap((params: ParamMap) => this.compservice.getAllCompanyNames())
            .subscribe(companyNameandId => { return this.companyNameandId = companyNameandId.response.data })
    }

    getCompany(id: number) {

        return this.route.paramMap
            .switchMap((params: ParamMap) => this.compservice.getCompany(id))
            .subscribe(editCompany => { 
                this.editCompany = editCompany.response.data; 

                

                this.editdto.ecompanyName=this.editCompany.companyName;
                this.editdto.eclientId=this.editCompany.clientId;
                this.editdto.econtactPerson=this.editCompany.contactPerson;
                this.editdto.ecompanyBooksFrom=this.editCompany.companyBooksFrom;
                this.editdto.esyncFromDate=this.editCompany.syncFromDate; 
                this.editdto.estatus=this.editCompany.status; 

                console.log(this.editdto);
            });
    }

}