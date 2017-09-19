import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RoutesService} from '../data/routes.service';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../translate';


@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss'],
    providers: [RoutesService]
})
export class RouteComponent implements OnInit, OnDestroy {
    route: any;
    sub: any;

    constructor(
        private actRoute: ActivatedRoute,
        private routeSrv: RoutesService,
        private translate: TranslateService
    ) { }

    ngOnInit() {
        this.sub = this.actRoute.params.subscribe(
            params => {
                this.routeSrv.getById(params['id']).subscribe(
                    resp => {
                        this.route = resp;

                        this.routeSrv.getPoints(params['id']).subscribe(
                            respP => {
                                this.route['points'] = respP;
                                // let latAcc = 0;
                                // let lngAcc = 0;
                                this.route['latlngs'] = [];
                                this.route['points'].forEach(
                                    (point, index) => {

                                //         point.lat = parseFloat(point.lat);
                                //         point.lng = parseFloat(point.lng);

                                        this.route['latlngs'][point.pt_order] = {lat: parseFloat(point.lat), lng: parseFloat(point.lng)};
                                //         latAcc += point.lat;
                                //         lngAcc += point.lng;
                                    }
                                );
                                // const centerLat = latAcc / respP.points.length;
                                // const centerLng = lngAcc / respP.points.length;

                                // this.route['centerLat'] = centerLat;
                                // this.route['centerLng'] = centerLng;
                            }
                        );

                    },
                    err => {
                        err = err.json();
                        console.log(err);
                    }
                );
            }
        );

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
