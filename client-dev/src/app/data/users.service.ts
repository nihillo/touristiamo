import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';
import { AjaxService } from './ajax.service';

@Injectable()
export class UsersService {

  constructor(private ajax: AjaxService) {
  }

  public registerUser(email: string, password: string, userName: string, appToken: string) {

  }

  public activateUser(privateToken: string) {

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

  // public getData(resource: String): Observable<any> {

  //   if (resource[0] !== '/') {
  //     resource = '/' + resource;
  //   }

  //   const url = this.API_URL + resource;

  //   return this.ajax.
  //     get(url)
  //     .map( response => response.json());
  // }

}
