import { Component, OnInit } from '@angular/core';
import { UsersService } from '../data/users.service';


@Component({
    selector: 'app-navbar-menu',
    templateUrl: './navbar-menu.component.html',
    styleUrls: ['./navbar-menu.component.scss'],
    providers: [UsersService]
})
export class NavbarMenuComponent implements OnInit {

    constructor(
        private usersSrv: UsersService
    ) { }

    ngOnInit() {
    }
}
