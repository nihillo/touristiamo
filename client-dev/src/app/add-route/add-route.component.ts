import { Component, OnInit } from '@angular/core';
import { UsersService } from '../data/users.service';
import {CountriesService} from '../data/countries.service';
import {CitiesService} from '../data/cities.service';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../translate';
import {RoutesService} from '../data/routes.service';
import {EventEmitter} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {Router} from '@angular/router';

declare var $;

@Component({
    selector: 'app-add-route',
    templateUrl: './add-route.component.html',
    styleUrls: ['./add-route.component.scss'],
    providers: [UsersService, CountriesService, CitiesService, RoutesService]
})
export class AddRouteComponent implements OnInit {

    public countries;
    public cities;
    public selectedCountry = {
        name: {en: '', es: '', it: ''},
        id: 0
    };
    public route = {
        accesible: false,
        walkable: false,
        bikeable: false
    };
    public modalCountryActions = new EventEmitter<string|MaterializeAction>();
    public modalCityActions = new EventEmitter<string|MaterializeAction>();
    public newCountry = {
        name: {en: '', es: '', it: ''},
        id: 0
    };
    public newCity = {};

    constructor(
        private usersSrv: UsersService,
        private countriesSrv: CountriesService,
        private citiesSrv: CitiesService,
        private translate: TranslateService,
        private routeSrv: RoutesService,
        private router: Router
        ) { }

    ngOnInit() {
        this.loadCountries();
    }


    loadCountries() {
        this.countriesSrv.getCountries().subscribe(
            resp => {
                this.countries = resp;
            },
            err => {
              err = err.json();
              console.log(err);
            }
        );
    }

    loadCities() {
        this.citiesSrv.getCitiesByCountry(this.selectedCountry.id).subscribe(
            resp => {
                this.cities = resp;

            },
            err => {
                err = err.json();
                console.log(err);
            }
        );
    }

    addRoute() {

        this.routeSrv.addRoute(this.route).subscribe(
            resp => {
                this.router.navigateByUrl('/route-add-points/' + resp.route.id);
            }
        );
    }


    openModalCountry() {
        this.modalCountryActions.emit({
          action: 'modal',
          params: ['open']
        });
    }

    closeModalCountry() {
        this.modalCountryActions.emit({
          action: 'modal',
          params: ['close']});
    }

    openModalCity() {
        this.modalCityActions.emit({
          action: 'modal',
          params: ['open']
        });
    }

    closeModalCity() {
        this.modalCityActions.emit({
          action: 'modal',
          params: ['close']});
    }


    addCountry() {
        // Send request

        this.countriesSrv.addCountry(this.newCountry).subscribe(
            resp => {
                // Update country list, and selected country
                this.loadCountries();
                // this.selectedCountry = this.countries[this.countries.length - 1];
                // Close modal
                this.closeModalCountry();
            },
            err => {
                console.log(err);
            }
        );
    }

    addCity() {
        this.newCity['countryId'] = this.selectedCountry.id;
        // Send request
        this.citiesSrv.addCity(this.newCity).subscribe(
            resp => {
                // Update city list, and selected city
                this.loadCities();
                // Close modal
                this.closeModalCity();
            }
        );

    }
}
