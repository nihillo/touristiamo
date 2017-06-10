import { Injectable } from '@angular/core';
import { app_config } from '../app-config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';


@Injectable()
export class AjaxService {
  API_URL = app_config.API_URL;

  constructor(private ajax: Http) { }

  public getData(resource: String, params: any): Observable<any> {
    // if (resource[0] !== '/') {
    //     resource = '/' + resource;
    // }

    // const url = this.API_URL + resource;

    // return this.ajax.
    // get(url)
    // .map( response => response.json());
    return;
  }

  public postData(resource: String, params: any) {
    if (resource[0] !== '/') {
        resource = '/' + resource;
    }
    const url = this.API_URL + resource;
    const body = {};

    const raw_headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    if (params.auth) {
      const token = localStorage.getItem('token');
      raw_headers['Auth'] = token;
    }

    const headers = new Headers(raw_headers);
    const options = new RequestOptions({ headers: headers });
    const req = this.ajax.post(url, body, options);
    // const resp = req.map(response => response.json());
    const resp = req.map(response => response);

    return resp;
  }

  public putData(resource: String, params: any) {

  }

  public deleteData(resource: String, params: any) {

  }

}
