import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from '../data/users.service';

@Component({
    selector: 'app-activation',
    templateUrl: './activation.component.html',
    styleUrls: ['./activation.component.scss'],
    providers: [UsersService]
})
export class ActivationComponent implements OnInit, OnDestroy {

    token: any;
    sub: any;
    success = null;
    errorMsg = '';
    successMsg = '';

    constructor(private route: ActivatedRoute, private users: UsersService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                this.token = params['token'];

                this.users.activateUser(this.token).subscribe(
                    resp => {
                        this.success = true;
                        this.successMsg = resp.msgKey;
                    },
                    err => {
                        err = err.json();
                        this.success = false;
                        this.errorMsg = err.msgKey;
                    }
                );
            }
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
