import { Component, OnInit } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {EventEmitter} from '@angular/core';
import {UsersService} from '../data/users.service';
import {LocalStorageService} from '../data/local-storage.service';
import {JwtHelper} from 'angular2-jwt';

declare var $;

@Component({
  selector: 'app-navbar-access',
  templateUrl: './navbar-access.component.html',
  styleUrls: ['./navbar-access.component.scss'],
  providers: [UsersService, LocalStorageService, JwtHelper]
})
export class NavbarAccessComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();

  email = '';
  password = '';
  logged= false;
  user = {};
  errorMsg = '';

  constructor(private users: UsersService, private localst: LocalStorageService, private jwt: JwtHelper) { }

  ngOnInit() {
    if (this.localst.tokenExists()) {
      this.logged = true;
      this.user = this.user = this.jwt.decodeToken(this.localst.getToken());
    }
  }

  openModal() {
    this.modalActions.emit({
      action: 'modal',
      params: ['open']
    });
  }

  closeModal() {
    this.modalActions.emit({
      action: 'modal',
      params: ['close']});
  }

  login() {
    this.users.loginUser(this.email, this.password).subscribe(
      (resp) => {
        if (resp.token) {
          // Save token
          this.localst.saveToken(resp.token);
          // Decode token, get user name and set logged
          this.logged = true;
          this.user = this.jwt.decodeToken(resp.token);
          // Dismiss modal
          this.closeModal();
          this.email = '';
          this.password = '';
        }
      },
      (err) => {
        err = err.json();
        this.errorMsg = err.msgKey;
      }
    );
  }

  logout() {
    // Remove token;
    this.localst.removeToken();
    // Set unlogged and empty user
    this.logged = false;
    this.user = {};
  }
}
