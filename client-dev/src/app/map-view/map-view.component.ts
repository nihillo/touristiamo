import { Component, OnInit } from '@angular/core';
import {RoutesService} from '../data/routes.service';
import {CitiesService} from '../data/cities.service';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../translate';
import { MapsAPILoader } from '@agm/core';
import {Observable, Subject} from 'rxjs/Rx';

declare var google;

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
    providers: [RoutesService, CitiesService]
})
export class MapViewComponent implements OnInit {
    public routes = null;

    constructor(
        private routesSrv: RoutesService,
        private citiesSrv: CitiesService,
        private translate: TranslateService,
        private apiLoader: MapsAPILoader
    ) { }

    ngOnInit() {
        this.getAllRoutes();
    }

    getAllRoutes() {
        this.routes = null;

        this.routesSrv.getAll().subscribe(
            resp => {
                this.routes = resp;
                this.routes.forEach(route => {
                    const point = new Subject<any>();
                    this.citiesSrv.getById(route.cityId).subscribe(
                        respC => {

                            this.geocode(respC.city.name_en).subscribe(respG => {
                                // locate by city
                                point.next(respG);

                                // override with first route point if exists
                                this.routesSrv.getPoints(route.id).subscribe(
                                respP => {
                                    point.next({lat: respP[0].lat, lng: respP[0].lng});

                                },
                                err => {
                                    err = err.json();
                                    console.log(err);
                                }
                            );
                            });

                        }
                    );

                    point.asObservable().subscribe(respP => {
                        // console.log(respP);
                        route['point'] = respP;
                    });
                });
            },
            err => {
                err = err.json();
                this.routes = null;
                console.log(err);
            }
        );
    }

    geocode(address) {
        const coords = new Subject<any>();
        this.apiLoader.load().then(() => {
            const geocoder = new google.maps.Geocoder();

            geocoder.geocode({'address': address}, function(results, status) {
              if (status === 'OK') {
                // console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                coords.next({
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                });
              } else {
                console.log('Geocode was not successful for the following reason: ' + status);
              }
            });
        });

        return coords.asObservable();
    }
}
