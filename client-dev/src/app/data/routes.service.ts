import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';
import { AjaxService } from './ajax.service';

@Injectable()
export class RoutesService {

    constructor(private ajax: AjaxService) { }


    jsonForm(resp) {
        return resp.routes.map(
            route => {
                return {
                    id: route.id,
                    name: {
                        en: route.name_en,
                        es: route.name_es,
                        it: route.name_it
                    },
                    slogan: {
                        en: route.slogan_en,
                        es: route.slogan_es,
                        it: route.slogan_it
                    },
                    description: {
                        en: route.description_en,
                        es: route.description_es,
                        it: route.description_it
                    },
                    accesible: route.accesible,
                    walkable: route.walkable,
                    bikeable: route.bikeable,
                    cityId: route.cityId,
                    userId: route.userId
                };
            }
            );
    }

    jsonFormPoint(resp) {
        return resp.points.map(
            point => {
                return {
                    id: point.id,
                    lat: parseFloat(point.lat),
                    lng: parseFloat(point.lng),
                    name: {
                        en: point.name_en,
                        es: point.name_es,
                        it: point.name_it
                    },
                    description: {
                        en: point.description_en,
                        es: point.description_es,
                        it: point.description_it
                    },
                    pt_order: point.pt_order,
                    type: point.type
                };
            }
            );
    }


    getAll() {
        const resource = '/routes';
        const params = {
            auth: false
        };

        const routes = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                const data = this.jsonForm(resp);

                data.forEach(route => {
                    this.getImages(route.id).subscribe(
                        respI => {
                            route['images'] = respI.images;
                        }
                        );
                });
                routes.next(data);
            }
            );

        return routes.asObservable();
    }

    getByCountry(countryId) {
        const resource = '/routes/country/' + countryId;
        const params = {
            auth: false
        };
        const routes = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                const data = this.jsonForm(resp);

                data.forEach(route => {
                    this.getImages(route.id).subscribe(
                        respI => {
                            route['images'] = respI.images;
                        }
                        );
                });
                routes.next(data);
            }
            );

        return routes.asObservable();
    }

    getByCity(cityId) {
        const resource = '/routes/city/' + cityId;
        const params = {
            auth: false
        };

        const routes = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                const data = this.jsonForm(resp);

                data.forEach(route => {
                    this.getImages(route.id).subscribe(
                        respI => {
                            route['images'] = respI.images;
                        }
                        );
                });
                routes.next(data);
            }
            );

        return routes.asObservable();
    }

    getById(id) {
        const resource = '/routes/' + id;
        const params = {
            auth: false
        };

        const routes = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                let data = this.jsonForm(resp);
                data = data[0];

                this.getImages(id).subscribe(
                    respI => {
                        data['images'] = respI.images;
                    }
                    );

                routes.next(data);
            }
            );

        return routes.asObservable();
    }

    getComments() {}

    getScore() {}

    getPoints(id) {
        const resource = '/routes/' + id + '/points';
        const params = {
            auth: false
        };

        const points = new Subject<any>();

        this.ajax.getData(resource, params).subscribe(
            resp => {
                const data = this.jsonFormPoint(resp);
                points.next(data);
            }
            );

        return points.asObservable();
    }

    addPoint(point) {
        const resource = '/routes/' + point.routeId + '/points';
        const params = {
            auth: true,
            pt_order: point.pt_order,
            name_en: point.name.en,
            name_es: point.name.es,
            name_it: point.name.it,
            description_en: point.description.en,
            description_es: point.description.es,
            description_it: point.description.it,
            type: point.type,
            lat: point.lat,
            lng: point.lng
        };

        return this.ajax.postData(resource, params);
    }

    addRoute(route) {
        const resource = '/routes';
        const params = {
            auth: true,
            accesible: route.accesible,
            bikeable: route.bikeable,
            cityId: route.cityId,
            description_en: route.description_en,
            description_es: route.description_es,
            description_it: route.description_it,
            name_en: route.name_en,
            name_es: route.name_es,
            name_it: route.name_it,
            slogan_en: route.slogan_en,
            slogan_es: route.slogan_es,
            slogan_it: route.slogan_it,
            walkable: route.walkable
        };

        return this.ajax.postData(resource, params);
    }

    modifyRoute() {}

    deleteRoute() {}

    publishComment() {}

    modifyComment() {}

    deleteComment() {}

    getImages(routeId) {
        const resource = '/routes/' + routeId + '/images';
        const params = {
            auth: false
        };

        return this.ajax.getData(resource, params);
    }

    insertImage() {}

    deleteImage() {}
}
