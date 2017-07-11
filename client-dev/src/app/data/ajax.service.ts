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
    if (resource[0] !== '/') {
        resource = '/' + resource;
    }

    const url = this.API_URL + resource;

    const raw_headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    if (params.auth) {
      const token = localStorage.getItem('token');
      raw_headers['Auth'] = token;
      delete params.auth;
    }

    if (params.auth === false) {
      delete params.auth;
    }

    if (params.appToken) {
      params.appToken = app_config.APP_TOKEN;
    }

    if (params.appToken === false) {
      delete params.appToken;
    }

    const headers = new Headers(raw_headers);
    const options = new RequestOptions({
       headers: headers,
       params: params
    });
    const req = this.ajax.get(url, options);
    const resp = req.map(response => response.json());
    // const resp = req.map(response => response);

    return resp;
  }

  public postData(resource: String, params: any) {
    if (resource[0] !== '/') {
        resource = '/' + resource;
    }

    const url = this.API_URL + resource;
    // const body = {};

    const raw_headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    if (params.auth) {
      const token = localStorage.getItem('token');
      raw_headers['Auth'] = token;
      delete params.auth;
    }

    if (params.auth === false) {
      delete params.auth;
    }

    if (params.appToken) {
      params.appToken = app_config.APP_TOKEN;
    }

    if (params.appToken === false) {
      delete params.appToken;
    }

    const body = {};
    const headers = new Headers(raw_headers);
    const options = new RequestOptions({
       headers: headers,
       params: params
    });
    const req = this.ajax.post(url, body, options);
    const resp = req.map(response => response.json());
    // const resp = req.map(response => response);

    return resp;
  }

  public putData(resource: String, params: any) {

  }

  public deleteData(resource: String, params: any) {

  }

}
