import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
})


export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.navigate(['/login']);
        console.log("Inside App Component...");
    }
}