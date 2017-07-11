import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../data/countries.service';
import {CitiesService} from '../data/cities.service';
import {RoutesService} from '../data/routes.service';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from '../translate';
import {LocalStorageService} from '../data/local-storage.service';

declare var $;

@Component({
    selector: 'app-catalog-view',
    templateUrl: './catalog-view.component.html',
    styleUrls: ['./catalog-view.component.scss'],
    providers: [CountriesService, CitiesService, RoutesService, LocalStorageService]
})
export class CatalogViewComponent implements OnInit {
    public countries;
    public selectedCountry = null;
    public cities;
    public selectedCity = null;
    public routes = null;

    constructor(
        private countriesSrv: CountriesService,
        private citiesSrv: CitiesService,
        private routesSrv: RoutesService,
        private translate: TranslateService,
        private localst: LocalStorageService
    ) { }

    ngOnInit() {
        this.loadCountries();

        if (this.localst.getCatalogFilters()) {
            const filters = this.localst.getCatalogFilters();

            if (filters.city) {
                this.selectCountry(filters.country);
                this.selectCity(filters.city);

            } else if (filters.country) {
                this.selectCountry(filters.country);
            }
        } else {
            this.getAllRoutes();
        }

        $('.dropdown-button').dropdown();
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


    selectCountry (country) {
        this.selectedCountry = country;
        this.selectedCity = null;
        this.localst.removeCatalogFilters('city');
        this.citiesSrv.getCitiesByCountry(this.selectedCountry.id).subscribe(
            resp => {
                this.cities = resp;

            },
            err => {
                err = err.json();
                console.log(err);
            }
        );
        this.getRoutesByCountry(this.selectedCountry.id);
        this.localst.saveCatalogFilters({country: country});
    }

    selectCity(city) {
        this.selectedCity = city;
        this.getRoutesByCity(this.selectedCity.id);
        this.localst.saveCatalogFilters({city: city});
    }


    getRoutesByCountry(countryId) {
        this.routes = null;
        this.routesSrv.getByCountry(this.selectedCountry.id).subscribe(
            resp => {
                // if (resp.routes) {
                    this.routes = resp;
                // } else {
                //     this.routes = null;
                // }
                console.log(this.routes);
            },
            err => {
                err = err.json();
                this.routes = null;
                console.log(err);
            }
        );


    }


    getRoutesByCity(cityId) {
        this.routes = null;
        this.routesSrv.getByCity(this.selectedCity.id).subscribe(
           resp => {
                // if (resp.routes) {
                    this.routes = resp;
                // } else {
                //     this.routes = null;
                // }
            },
            err => {
                err = err.json();
                this.routes = null;
                console.log(err);
            }
        );


    }

    getAllRoutes() {
        this.routes = null;
        this.routesSrv.getAll().subscribe(
           resp => {
                // if (resp.routes) {
                    this.routes = resp;
                // } else {
                //     this.routes = null;
                // }
            },
            err => {
                err = err.json();
                this.routes = null;
                console.log(err);
            }
        );
    }
}
