import { NgModule } from '@angular/core';
//import {ToasterModule, ToasterService} from 'angular2-toaster';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { HttpModule }    from '@angular/http';
import { AppComponent }    from './app.component';
import { LoginComponent }    from './login/login.component';
import { DashboardComponent }    from './dashboard/dashboard.component';
import { LandingComponent }    from './landing/landing.component';
import { CompanyComponent }    from './company/company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarToggleDirective } from './dashboard/dashboard.directive';
import { CompanyService } from './company/company.service';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

//********module import order matters**********

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ReactiveFormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, LandingComponent, CompanyComponent, SidebarToggleDirective,
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }