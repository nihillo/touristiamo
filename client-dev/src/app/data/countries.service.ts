import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';
import { AjaxService } from './ajax.service';

@Injectable()
export class CountriesService {

    constructor(private ajax: AjaxService) { }

    public getCountries() {
        const resource = '/countries';
        const params = {
            auth: false
        };
        const countries = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                countries.next(resp.countries.map(
                    (country, index) => {
                        return {
                            id: country.id,
                            name: {
                                en: country.name_en,
                                es: country.name_es,
                                it: country.name_it
                            }
                        };
                }));
            }
        );


        return countries.asObservable();
    }

    public addCountry(country) {
        const resource = '/countries';
        const params = {
            auth: true,
            name_en: country.name_en,
            name_es: country.name_es,
            name_it: country.name_it
        };

        return this.ajax.postData(resource, params);
    }

    public modifyCountry() {}

    public deleteCountry() {}
}
