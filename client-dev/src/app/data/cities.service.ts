import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';
import { AjaxService } from './ajax.service';

@Injectable()
export class CitiesService {

    constructor(private ajax: AjaxService) { }

    public getById(id) {
        const resource = '/cities/' + id;
        const params = {
            auth: false
        };
        const city = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                city.next(resp);
            }
        );


        return city.asObservable();
    }

    public getCities() {
        const resource = '/cities';
        const params = {
            auth: false
        };
        const cities = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                cities.next(resp.cities.map(
                    (city, index) => {
                        return {
                            id: city.id,
                            name: {
                                en: city.name_en,
                                es: city.name_es,
                                it: city.name_it
                            }
                        };
                }));
            }
        );


        return cities.asObservable();
    }

    public getCitiesByCountry(countryId) {
        const resource = '/cities/country/' + countryId;
        const params = {
            auth: false
        };
        const cities = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                cities.next(resp.cities.map(
                    (city, index) => {
                        return {
                            id: city.id,
                            name: {
                                en: city.name_en,
                                es: city.name_es,
                                it: city.name_it
                            }
                        };
                }));
            }
        );


        return cities.asObservable();
    }

    public addCity(city) {
        const resource = '/cities';
        const params = {
            auth: true,
            name_en: city.name_en,
            name_es: city.name_es,
            name_it: city.name_it,
            countryId: city.countryId
        };

        return this.ajax.postData(resource, params);
    }

    public modifyCity() {}

    public deleteCity() {}
}



// public addCountry(country) {
//         const resource = '/countries';
//         const params = {
//             auth: true,
//             name_en: country.name_en,
//             name_es: country.name_es,
//             name_it: country.name_it
//         };

//         return this.ajax.postData(resource, params);
//     }
