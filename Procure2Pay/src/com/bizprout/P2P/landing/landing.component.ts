import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

    selector: 'landing',
    templateUrl: './landing.component.html',
})


export class LandingComponent implements OnInit {

    constructor(private router: Router) { }


    ngOnInit(): void {
        console.log("Inside Landing Component...");

        this.router.navigate(['landing/dashboard']);
    }

}