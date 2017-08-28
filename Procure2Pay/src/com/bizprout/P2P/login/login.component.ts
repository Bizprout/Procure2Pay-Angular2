import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

    selector: 'login',
    templateUrl: './login.component.html',
})


export class LoginComponent implements OnInit {

    constructor(private router: Router) { }

    loginf = {username: '', password: ''};

    ngOnInit(): void {
        console.log("Inside Login Component...");
    }

     login(user: string, pass: string): void {

        if (user === "admin" && pass === "admin") {
             this.router.navigate(['/landing']);

             console.log("welcome....");
        }
    }



}