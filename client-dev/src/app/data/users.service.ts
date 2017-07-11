import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';
import { AjaxService } from './ajax.service';
import { LocalStorageService } from '../data/local-storage.service';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class UsersService {

  constructor(
    private ajax: AjaxService,
    private localst: LocalStorageService,
    private jwt: JwtHelper) {
  }

  public registerUser(email: string, password: string, userName: string): Observable<any> {
    const resource = '/users/register';
    const params = {
      email: email,
      pass: password,
      userName: userName,
      auth: false,
      appToken: true
    };

    return this.ajax.postData(resource, params);
  }

  public activateUser(privateToken: string) {
    const resource = '/users/register/activate/' + privateToken;
    const params = {
      auth: false
    };

    return this.ajax.getData(resource, params);
  }

  public loginUser(email: string, password: string): Observable<any> {
    const resource = '/users/auth';
    const params = {
      email: email,
      password: password,
      auth: false
    };

    return this.ajax.postData(resource, params);
  }


  public generateToken(token: string) {

  }

  public modifyUser(token: string, userId: any, name: string, password: string) {

  }

  public deleteUser(token: string, userId: any) {

  }

  public getUserComments(token: string, userId: any) {

  }

  public userHasEditPermission() {
      const token = this.localst.getToken();
      if (token) {
          return this.jwt.decodeToken(token).accessLevel < 3;
      }

      return false;
  }

  public userHasAdminPermission() {
      const token = this.localst.getToken();
      if (token) {
          return this.jwt.decodeToken(token).accessLevel === 1;
      }

      return false;
  }

}
