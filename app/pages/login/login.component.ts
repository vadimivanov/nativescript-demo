import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'


@Component({
    moduleId: module.id,
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef;

    private isLoading = true;

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() {this.isLoading = false; }

    go() {
        this.router.navigate(["/home"]);
    }

}
