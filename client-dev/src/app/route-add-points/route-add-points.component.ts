import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from '../data/users.service';
import { RoutesService } from '../data/routes.service';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../translate';
import {EventEmitter} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {Router} from '@angular/router';
import {AgmMap} from '@agm/core';


@Component({
    selector: 'app-route-add-points',
    templateUrl: './route-add-points.component.html',
    styleUrls: ['./route-add-points.component.scss'],
    providers: [UsersService, RoutesService]
})
export class RouteAddPointsComponent implements OnInit {

    @ViewChild(AgmMap)
    private map: AgmMap;

    public sub: any;
    public routeId: number;
    public route = {};
    public counter = 0;
    public points = [];
    public modalActions = new EventEmitter<string|MaterializeAction>();
    public newPoint = {
        name: {},
        description: {},
        type: '',
        lat: null,
        lng: null
    };

    constructor(
        private routeUrl: ActivatedRoute,
        private usersSrv: UsersService,
        private routesSrv: RoutesService,
        private translate: TranslateService,
        private router: Router

    ) { }

    ngOnInit() {
        this.sub = this.routeUrl.params.subscribe(
            params => {
                this.routeId = params['routeId'];
                this.routesSrv.getById(this.routeId).subscribe(
                    resp => {
                        this.route = resp;
                    }
                );
            }
        );
    }

    placePoint($event) {
        this.newPoint.lat = $event.coords.lat;
        this.newPoint.lng = $event.coords.lng;
    }

    addPoint() {
        console.log(this.routeId);
        this.newPoint['pt_order'] = this.counter;
        this.newPoint['routeId'] = this.routeId;
        this.points.push(this.newPoint);
        this.newPoint = {
            name: {},
            description: {},
            type: '',
            lat: null,
            lng: null
        };
        this.counter++;
        this.closeModal();
    }

    openModal() {
        this.modalActions.emit({
          action: 'modal',
          params: ['open']
        });
        this.map.triggerResize();
        this.map.longitude = 0;
        this.map.latitude = 45;
    }

    closeModal() {
        this.modalActions.emit({
          action: 'modal',
          params: ['close']
        });
    }

    save() {
        console.log(this.points);
        this.points.forEach((point, index, points) => {
            this.routesSrv.addPoint(point).subscribe(
                resp => {
                    if (index == points.length - 1) {
                        this.router.navigateByUrl('/routes/' + this.routeId);
                    }
                }
            );
        });
    }
}
