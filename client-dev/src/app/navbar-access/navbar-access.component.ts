import { Component, OnInit } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {EventEmitter} from '@angular/core';
import {UsersService} from '../data/users.service';


@Component({
  selector: 'app-navbar-access',
  templateUrl: './navbar-access.component.html',
  styleUrls: ['./navbar-access.component.scss'],
  providers: [UsersService]
})
export class NavbarAccessComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();

  email = '';
  password = '';

  constructor(private users: UsersService) { }

  ngOnInit() {
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
      resp => console.log(resp)
    );
    this.closeModal();
  }
}
