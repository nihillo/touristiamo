import { Component, OnInit } from '@angular/core';
import {UsersService} from '../data/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [UsersService]
})
export class SignupComponent implements OnInit {
    username = '';
    email = '';
    password = '';
    errorMsg = '';

    constructor(private users: UsersService, private router: Router) { }

    ngOnInit() {
    }

    signup() {
        this.users.registerUser(this.email, this.password, this.username).subscribe(
            (resp) => {
                if (resp.msgKey == 'access-mailSuccess') {
                    this.router.navigateByUrl('/signup/activation-pending');
                } else {
                    this.errorMsg = 'unknown-error';
                }
            },
            (err) => {
                err = err.json();
                this.errorMsg = err.msgKey;
            }
        );
    }
}
