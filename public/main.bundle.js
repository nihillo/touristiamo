webpackJsonp([0],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/activation-pending/activation-pending.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<h4>{{ 'confirm email title' | translate | capitalize}}</h4>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<p>{{ 'confirm email text' | translate | capitalize }}</p>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/activation-pending/activation-pending.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/activation-pending/activation-pending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationPendingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivationPendingComponent = (function () {
    function ActivationPendingComponent() {
    }
    ActivationPendingComponent.prototype.ngOnInit = function () {
    };
    return ActivationPendingComponent;
}());
ActivationPendingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activation-pending',
        template: __webpack_require__("./src/app/activation-pending/activation-pending.component.html"),
        styles: [__webpack_require__("./src/app/activation-pending/activation-pending.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ActivationPendingComponent);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/activation-pending.component.js.map

/***/ }),

/***/ "./src/app/activation/activation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<h4 *ngIf=\"success\">{{ 'account activated' | translate | capitalize}}</h4>\n\t\t<h4 *ngIf=\"success===false\">{{ 'error' | translate | capitalize}}</h4>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<p *ngIf=\"success\">{{ successMsg | translate | capitalize }}</p>\n\t\t<p *ngIf=\"success===false\">{{ errorMsg | translate | capitalize }}</p>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/activation/activation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/activation/activation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_users_service__ = __webpack_require__("./src/app/data/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivationComponent = (function () {
    function ActivationComponent(route, users) {
        this.route = route;
        this.users = users;
        this.success = null;
        this.errorMsg = '';
        this.successMsg = '';
    }
    ActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.token = params['token'];
            _this.users.activateUser(_this.token).subscribe(function (resp) {
                _this.success = true;
                _this.successMsg = resp.msgKey;
            }, function (err) {
                err = err.json();
                _this.success = false;
                _this.errorMsg = err.msgKey;
            });
        });
    };
    ActivationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ActivationComponent;
}());
ActivationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activation',
        template: __webpack_require__("./src/app/activation/activation.component.html"),
        styles: [__webpack_require__("./src/app/activation/activation.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], ActivationComponent);

var _a, _b;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/activation.component.js.map

/***/ }),

/***/ "./src/app/add-route/add-route.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!usersSrv.userHasEditPermission()\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12 l6 offset-l3\">\n\t\t\t<h4>{{'not allowed-title' | translate | capitalize }}</h4>\n\t\t\t<p>{{'not allowed-text' | translate | capitalize }}</p>\n\t\t</div>\n\t</div>\n</div>\n<div *ngIf=\"usersSrv.userHasEditPermission()\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12 l6 offset-l3\">\n\t\t\t<h4>{{'add route' | translate | capitalize }}</h4>\n\t\t\t<p>{{ 'all fields mandatory' | translate | capitalize }}</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<form class=\"col s12 l6 offset-l3\">\n\t\t  <div class=\"row\">\n\t\t  \t<h6>{{ 'route name' | translate | capitalize }}:</h6>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_en\" name=\"name_en\" type=\"text\" class=\"validate\" [(ngModel)]=\"route.name_en\">\n\t          <label for=\"name_en\">{{ 'english' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_es\" name=\"name_es\" type=\"text\" class=\"validate\" [(ngModel)]=\"route.name_es\">\n\t          <label for=\"name_es\">{{ 'spanish' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_it\" name=\"name_it\" type=\"text\" class=\"validate\" [(ngModel)]=\"route.name_it\">\n\t          <label for=\"name_it\">{{ 'italian' | translate | capitalize}}</label>\n\t        </div>\n\t      </div>\n\t      <div class=\"row\">\n\t\t\t<h6>{{ 'route image' | translate | capitalize }}:</h6>\n\t      </div>\n\t\t  <image-upload\n\t\t\t[max]=\"1\"\n\t\t\t[buttonCaption]=\"'select image'\"\n\t\t\t[url]=\"apiImgUploadUrl\"\n\t\t\t(onFileUploadFinish)=\"imageUploaded($event)\"\n\t\t\t[headers]=\"[{header: 'Auth', value: token}]\"\n\t\t  ></image-upload>\n\t      <div class=\"row\">\n\t        <h6>{{ 'route location' | translate | capitalize }}:</h6>\n\t        <div class=\"input-field col s8\">\n\t\t\t    <select name=\"country\" materialize=\"material_select\" [materializeSelectOptions]=\"countries\" [(ngModel)]=\"selectedCountry\" (change)=\"loadCities();\">\n\t\t\t      <option value=\"\" selected>{{ 'select country' | translate | capitalize }}</option>\n\t\t\t      <option *ngFor=\"let country of countries\" [ngValue]=\"country\" [innerHTML]=\"country.name[translate.currentLang]\"></option>\n\t\t\t    </select>\n\t\t\t    <label>{{ 'country' | translate | capitalize }}</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s4\">\n\t\t\t\t<a class=\"waves-effect waves-light btn light-green\" (click)=\"openModalCountry();\">{{ 'add country' | translate | capitalize }}</a>\n\t\t\t</div>\n\t        <div class=\"input-field col s8\" [hidden]=\"!selectedCountry\">\n\t\t\t    <select name=\"city\" materialize=\"material_select\" [materializeSelectOptions]=\"cities\" [(ngModel)]=\"route.cityId\">\n\t\t\t      <option value=\"\" selected>{{ 'select city' | translate | capitalize }}</option>\n\t\t\t      <option *ngFor=\"let city of cities\" value=\"{{city.id}}\" [innerHTML]=\"city.name[translate.currentLang]\"></option>\n\t\t\t    </select>\n\t\t\t    <label>{{ 'city' | translate | capitalize }}</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s4\" [hidden]=\"!selectedCountry\">\n\t\t\t\t<a class=\"waves-effect waves-light btn light-green\" (click)=\"openModalCity();\">{{ 'add city' | translate | capitalize }}</a>\n\t\t\t</div>\n\t      </div>\n\t      <div class=\"row\">\n\t        <h6>{{ 'route tagline' | translate | capitalize }}:</h6>\n\t        <div class=\"input-field col s12\">\n\t        \t<textarea id=\"slogan_en\" name=\"slogan_en\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"route.slogan_en\"></textarea>\n                <label for=\"slogan_en\">{{ 'english' | translate | capitalize}}</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s12\">\n\t        \t<textarea id=\"slogan_es\" name=\"slogan_es\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"route.slogan_es\"></textarea>\n                <label for=\"slogan_es\">{{ 'spanish' | translate | capitalize}}</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s12\">\n\t        \t<textarea id=\"slogan_it\" name=\"slogan_it\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"route.slogan_it\"></textarea>\n                <label for=\"slogan_it\">{{ 'italian' | translate | capitalize}}</label>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"row\">\n\t        <h6>{{ 'route description' | translate | capitalize }}:</h6>\n\t        <div class=\"input-field col s12\">\n\t        \t<textarea id=\"description_en\" name=\"description_en\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"route.description_en\"></textarea>\n                <label for=\"description_en\">{{ 'english' | translate | capitalize}}</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s12\">\n\t        \t<textarea id=\"description_es\" name=\"description_es\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"route.description_es\"></textarea>\n                <label for=\"description_es\">{{ 'spanish' | translate | capitalize}}</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s12\">\n\t        \t<textarea id=\"description_it\" name=\"description_it\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"route.description_it\"></textarea>\n                <label for=\"description_it\">{{ 'italian' | translate | capitalize}}</label>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"row\">\n\t\t  \t<h6>{{ 'access information' | translate | capitalize }}:</h6>\n\t\t  \t<div class=\"input-field col s12\">\n                <input type=\"checkbox\" id=\"accesible\" name=\"accesible\" [(ngModel)]=\"route.accesible\"/>\n                <label for=\"accesible\">{{ 'accesible' | translate | capitalize }}</label>\n            </div>\n            <div class=\"input-field col s12\">\n                <input type=\"checkbox\" id=\"walkable\" name=\"walkable\" [(ngModel)]=\"route.walkable\"/>\n                <label for=\"walkable\">{{ 'walkable' | translate | capitalize }}</label>\n            </div>\n            <div class=\"input-field col s12\">\n                <input type=\"checkbox\" id=\"bikeable\" name=\"bikeable\" [(ngModel)]=\"route.bikeable\"/>\n                <label for=\"bikeable\">{{ 'bikeable' | translate | capitalize }}</label>\n            </div>\n          </div>\n          <div class=\"row center\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<a class=\"waves-effect waves-light btn light-green\" (click)=\"addRoute();\">{{ 'next' | translate | capitalize }} <i class=\"material-icons icon-next\">navigate_next</i></a>\n\t\t\t</div>\n          </div>\n\t    </form>\n\t</div>\n</div>\n\n\n\n<!-- MODAL ADD COUNTRY -->\n<div id=\"login\" class=\"modal \" materialize=\"modal\" [materializeActions]=\"modalCountryActions\">\n  <div class=\"modal-content\">\n\t  <div class=\"row\">\n\t  \t<h4 class=\"center\">{{ 'add country' | translate | capitalize }}</h4>\n\t    <form materialize class=\"col s12\">\n\t      <h6>{{ 'country name' | translate | capitalize }}:</h6>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_en\" name=\"name_en\" type=\"text\" class=\"validate\" [(ngModel)]=\"newCountry.name_en\">\n\t          <label for=\"name_en\">{{ 'english' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_es\" name=\"name_es\" type=\"text\" class=\"validate\" [(ngModel)]=\"newCountry.name_es\">\n\t          <label for=\"name_es\">{{ 'spanish' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_it\" name=\"name_it\" type=\"text\" class=\"validate\" [(ngModel)]=\"newCountry.name_it\">\n\t          <label for=\"name_it\">{{ 'italian' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"modal-form-row center\">\n\t      \t<button class=\"waves-effect waves-light btn-large light-green\" (click)=\"addCountry()\">{{ 'add' | translate | capitalize}}</button>\n\t      </div>\n\t    </form>\n\t  </div>\n  </div>\n</div>\n\n\n<!-- MODAL ADD CITY -->\n<div id=\"login\" class=\"modal \" materialize=\"modal\" [materializeActions]=\"modalCityActions\">\n  <div class=\"modal-content\">\n\t  <div class=\"row\">\n\t  \t<h4 class=\"center\">{{ 'add city' | translate | capitalize }}</h4>\n\t    <form materialize class=\"col s12\">\n\t        <div class=\"input-field col s12\">\n\t\t\t    <select name=\"country\" materialize=\"material_select\" [materializeSelectOptions]=\"countries\" [(ngModel)]=\"selectedCountry\">\n\t\t\t      <option value=\"selectedCountry.id\" selected disabled [innerHTML]=\"selectedCountry.name[translate.currentLang]\"></option>\n\t\t\t    </select>\n\t\t\t    <label>{{ 'country' | translate | capitalize }}</label>\n\t\t\t</div>\n\t\t\t<h6>{{ 'city name' | translate | capitalize }}:</h6>\n\t\t\t<div class=\"input-field col s12\">\n\t          <input id=\"name_en\" name=\"name_en\" type=\"text\" class=\"validate\" [(ngModel)]=\"newCity.name_en\">\n\t          <label for=\"name_en\">{{ 'english' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_es\" name=\"name_es\" type=\"text\" class=\"validate\" [(ngModel)]=\"newCity.name_es\">\n\t          <label for=\"name_es\">{{ 'spanish' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"name_it\" name=\"name_it\" type=\"text\" class=\"validate\" [(ngModel)]=\"newCity.name_it\">\n\t          <label for=\"name_it\">{{ 'italian' | translate | capitalize}}</label>\n\t        </div>\n\t        <div class=\"modal-form-row center\">\n\t      \t<button class=\"waves-effect waves-light btn-large light-green\" (click)=\"addCity()\">{{ 'add' | translate | capitalize}}</button>\n\t      </div>\n\t    </form>\n\t  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/add-route/add-route.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/add-route/add-route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_users_service__ = __webpack_require__("./src/app/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_countries_service__ = __webpack_require__("./src/app/data/countries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_cities_service__ = __webpack_require__("./src/app/data/cities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_routes_service__ = __webpack_require__("./src/app/data/routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__("./src/app/app-config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRouteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddRouteComponent = (function () {
    function AddRouteComponent(usersSrv, countriesSrv, citiesSrv, translate, routeSrv, router) {
        this.usersSrv = usersSrv;
        this.countriesSrv = countriesSrv;
        this.citiesSrv = citiesSrv;
        this.translate = translate;
        this.routeSrv = routeSrv;
        this.router = router;
        this.token = localStorage.getItem('token');
        this.selectedCountry = {
            name: { en: '', es: '', it: '' },
            id: 0
        };
        this.route = {
            accesible: false,
            walkable: false,
            bikeable: false,
            image: ''
        };
        this.modalCountryActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalCityActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newCountry = {
            name: { en: '', es: '', it: '' },
            id: 0
        };
        this.newCity = {};
    }
    AddRouteComponent.prototype.ngOnInit = function () {
        this.loadCountries();
        this.apiImgUploadUrl = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* app_config */].API_URL + '/image';
    };
    AddRouteComponent.prototype.loadCountries = function () {
        var _this = this;
        this.countriesSrv.getCountries().subscribe(function (resp) {
            _this.countries = resp;
        }, function (err) {
            err = err.json();
            console.log(err);
        });
    };
    AddRouteComponent.prototype.loadCities = function () {
        var _this = this;
        this.citiesSrv.getCitiesByCountry(this.selectedCountry.id).subscribe(function (resp) {
            _this.cities = resp;
        }, function (err) {
            err = err.json();
            console.log(err);
        });
    };
    AddRouteComponent.prototype.addRoute = function () {
        var _this = this;
        this.routeSrv.addRoute(this.route).subscribe(function (resp) {
            _this.router.navigateByUrl('/route-add-points/' + resp.route.id);
        });
    };
    AddRouteComponent.prototype.openModalCountry = function () {
        this.modalCountryActions.emit({
            action: 'modal',
            params: ['open']
        });
    };
    AddRouteComponent.prototype.closeModalCountry = function () {
        this.modalCountryActions.emit({
            action: 'modal',
            params: ['close']
        });
    };
    AddRouteComponent.prototype.openModalCity = function () {
        this.modalCityActions.emit({
            action: 'modal',
            params: ['open']
        });
    };
    AddRouteComponent.prototype.closeModalCity = function () {
        this.modalCityActions.emit({
            action: 'modal',
            params: ['close']
        });
    };
    AddRouteComponent.prototype.addCountry = function () {
        // Send request
        var _this = this;
        this.countriesSrv.addCountry(this.newCountry).subscribe(function (resp) {
            // Update country list, and selected country
            _this.loadCountries();
            // this.selectedCountry = this.countries[this.countries.length - 1];
            // Close modal
            _this.closeModalCountry();
        }, function (err) {
            console.log(err);
        });
    };
    AddRouteComponent.prototype.addCity = function () {
        var _this = this;
        this.newCity['countryId'] = this.selectedCountry.id;
        // Send request
        this.citiesSrv.addCity(this.newCity).subscribe(function (resp) {
            // Update city list, and selected city
            _this.loadCities();
            // Close modal
            _this.closeModalCity();
        });
    };
    AddRouteComponent.prototype.imageUploaded = function ($event) {
        var response = JSON.parse($event.serverResponse._body);
        this.route['image'] = response.image;
    };
    return AddRouteComponent;
}());
AddRouteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-route',
        template: __webpack_require__("./src/app/add-route/add-route.component.html"),
        styles: [__webpack_require__("./src/app/add-route/add-route.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__data_countries_service__["a" /* CountriesService */], __WEBPACK_IMPORTED_MODULE_3__data_cities_service__["a" /* CitiesService */], __WEBPACK_IMPORTED_MODULE_5__data_routes_service__["a" /* RoutesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_countries_service__["a" /* CountriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_countries_service__["a" /* CountriesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__data_cities_service__["a" /* CitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_cities_service__["a" /* CitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__translate__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__data_routes_service__["a" /* RoutesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_routes_service__["a" /* RoutesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _f || Object])
], AddRouteComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/add-route.component.js.map

/***/ }),

/***/ "./src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_config; });
var app_config = {
    API_URL: '/api',
    // API_URL: 'http://api.touristiamo.nihillo.es',
    APP_TOKEN: '815c7f63628608a65582e6aead6fcb9eb178b3ef24bf4677fb185ddb187c6da2' // Touristiamo_2016 - sha256
};
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/app-config.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main\">\n\t<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__ = __webpack_require__("./node_modules/angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_access_navbar_access_component__ = __webpack_require__("./src/app/navbar-access/navbar-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_menu_navbar_menu_component__ = __webpack_require__("./src/app/navbar-menu/navbar-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_language_navbar_language_component__ = __webpack_require__("./src/app/navbar-language/navbar-language.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__map_view_map_view_component__ = __webpack_require__("./src/app/map-view/map-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__catalog_view_catalog_view_component__ = __webpack_require__("./src/app/catalog-view/catalog-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__capitalize_pipe__ = __webpack_require__("./src/app/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__data_ajax_service__ = __webpack_require__("./src/app/data/ajax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__activation_pending_activation_pending_component__ = __webpack_require__("./src/app/activation-pending/activation-pending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__activation_activation_component__ = __webpack_require__("./src/app/activation/activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__route_route_component__ = __webpack_require__("./src/app/route/route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__data_local_storage_service__ = __webpack_require__("./src/app/data/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__google_maps_directions_directive__ = __webpack_require__("./src/app/google-maps-directions.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__add_route_add_route_component__ = __webpack_require__("./src/app/add-route/add-route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__route_add_points_route_add_points_component__ = __webpack_require__("./src/app/route-add-points/route-add-points.component.ts");
/* unused harmony export routing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__map_view_map_view_component__["a" /* MapViewComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_15__map_view_map_view_component__["a" /* MapViewComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_16__catalog_view_catalog_view_component__["a" /* CatalogViewComponent */] },
    { path: 'routes/:id', component: __WEBPACK_IMPORTED_MODULE_23__route_route_component__["a" /* RouteComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_19__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signup/activation-pending', component: __WEBPACK_IMPORTED_MODULE_21__activation_pending_activation_pending_component__["a" /* ActivationPendingComponent */] },
    { path: 'signup/activate/:token', component: __WEBPACK_IMPORTED_MODULE_22__activation_activation_component__["a" /* ActivationComponent */] },
    { path: 'add-route', component: __WEBPACK_IMPORTED_MODULE_28__add_route_add_route_component__["a" /* AddRouteComponent */] },
    { path: 'route-add-points/:routeId', component: __WEBPACK_IMPORTED_MODULE_29__route_add_points_route_add_points_component__["a" /* RouteAddPointsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(routes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navbar_access_navbar_access_component__["a" /* NavbarAccessComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navbar_menu_navbar_menu_component__["a" /* NavbarMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__navbar_language_navbar_language_component__["a" /* NavbarLanguageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__map_view_map_view_component__["a" /* MapViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__catalog_view_catalog_view_component__["a" /* CatalogViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__translate__["a" /* TranslatePipe */],
            __WEBPACK_IMPORTED_MODULE_18__capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_19__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_21__activation_pending_activation_pending_component__["a" /* ActivationPendingComponent */],
            __WEBPACK_IMPORTED_MODULE_22__activation_activation_component__["a" /* ActivationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__route_route_component__["a" /* RouteComponent */],
            __WEBPACK_IMPORTED_MODULE_27__google_maps_directions_directive__["a" /* GoogleMapsDirectionsDirective */],
            __WEBPACK_IMPORTED_MODULE_28__add_route_add_route_component__["a" /* AddRouteComponent */],
            __WEBPACK_IMPORTED_MODULE_29__route_add_points_route_add_points_component__["a" /* RouteAddPointsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            routing,
            __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_26__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBlvH9gIvn1ELDGlF0-70H02254p7ibjYU'
            }),
            __WEBPACK_IMPORTED_MODULE_6_angular2_image_upload__["ImageUploadModule"].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__translate__["b" /* TRANSLATION_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_17__translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_20__data_ajax_service__["a" /* AjaxService */],
            __WEBPACK_IMPORTED_MODULE_24__data_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_25_angular2_jwt__["JwtHelper"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/app.module.js.map

/***/ }),

/***/ "./src/app/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/capitalize.pipe.js.map

/***/ }),

/***/ "./src/app/catalog-view/catalog-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<h4>{{ 'catalog' | translate | capitalize}}</h4>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col s12 l1 offset-l3\" materialize=\"dropdown\">\n\t\t<!-- Dropdown Trigger -->\n\t\t<a class='dropdown-button' href=\"#\" data-activates='country-dropdown'>\n\t\t<span *ngIf=\"selectedCountry != null\" [innerHtml]=\"selectedCountry.name[translate.currentLang]\"></span>\n\t\t<span *ngIf=\"selectedCountry == null\">{{ 'select country' | translate | capitalize }}</span>\n\t\t <i class=\"material-icons\">arrow_drop_down</i></a>\n\t\t<!-- Dropdown Structure -->\n\t\t<ul id='country-dropdown' class='dropdown-content'>\n\t\t\t<li *ngFor=\"let country of countries\"><a (click)=\"selectCountry(country);\" [innerHtml]=\"country.name[translate.currentLang]\"></a></li>\n\t\t</ul>\n\t</div>\n\t<div class=\"col s12 l1\" [hidden]=\"selectedCountry == null\" materialize=\"dropdown\">\n\t\t<!-- Dropdown Trigger -->\n\t\t<a class='dropdown-button' href=\"#\" data-activates='city-dropdown'>\n\t\t<span *ngIf=\"selectedCity != null\" [innerHtml]=\"selectedCity.name[translate.currentLang]\"></span>\n\t\t<span *ngIf=\"selectedCity == null\">{{ 'select city' | translate | capitalize }}</span>\n\t\t <i class=\"material-icons\">arrow_drop_down</i></a>\n\t\t<!-- Dropdown Structure -->\n\t\t<ul id='city-dropdown' class='dropdown-content'>\n\t\t\t<li *ngFor=\"let city of cities\"><a [innerHtml]=\"city.name[translate.currentLang]\" (click)=\"selectCity(city);\"></a></li>\n\t\t</ul>\n\t</div>\n</div>\n<div class=\"row\" *ngIf=\"routes != null\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<h6>{{ 'routes' | translate | capitalize }}</h6>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12 l4\" *ngFor=\"let route of routes\">\n\t\t\t\t<div class=\"card\">\n\t\t            <div class=\"card-image\" *ngIf=\"route.images\">\n\t\t              <img src=\"{{route.images[0].path}}\">\n\t\t            </div>\n\t\t            <div class=\"card-content\">\n\t\t            \t<h6 class=\"card-title\" [innerHTML]=\"route.name[translate.currentLang]\"></h6>\n\t\t              \t<p [innerHTML]=\"route.slogan[translate.currentLang]\"></p>\n\t\t            </div>\n\t\t            <div class=\"card-action\">\n\t\t                <a [routerLink]=\"'/routes/' + route.id\">{{ 'open route' | translate | capitalize }}</a>\n\t\t            </div>\n\t\t        </div>\n\t\t    </div>\n\t\t</div>\n\t\t<!-- <div class=\"collection\">\n\t      <a *ngFor=\"let route of routes\" class=\"collection-item\" [innerHtml]=\"route.name[translate.currentLang]\" [routerLink]=\"'/routes/' + route.id\"></a>\n\t    </div> -->\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/catalog-view/catalog-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/catalog-view/catalog-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_countries_service__ = __webpack_require__("./src/app/data/countries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_cities_service__ = __webpack_require__("./src/app/data/cities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_routes_service__ = __webpack_require__("./src/app/data/routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_local_storage_service__ = __webpack_require__("./src/app/data/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CatalogViewComponent = (function () {
    function CatalogViewComponent(countriesSrv, citiesSrv, routesSrv, translate, localst) {
        this.countriesSrv = countriesSrv;
        this.citiesSrv = citiesSrv;
        this.routesSrv = routesSrv;
        this.translate = translate;
        this.localst = localst;
        this.selectedCountry = null;
        this.selectedCity = null;
        this.routes = null;
    }
    CatalogViewComponent.prototype.ngOnInit = function () {
        this.loadCountries();
        if (this.localst.getCatalogFilters()) {
            var filters = this.localst.getCatalogFilters();
            if (filters.city) {
                this.selectCountry(filters.country);
                this.selectCity(filters.city);
            }
            else if (filters.country) {
                this.selectCountry(filters.country);
            }
        }
        else {
            this.getAllRoutes();
        }
        $('.dropdown-button').dropdown();
    };
    CatalogViewComponent.prototype.loadCountries = function () {
        var _this = this;
        this.countriesSrv.getCountries().subscribe(function (resp) {
            _this.countries = resp;
        }, function (err) {
            err = err.json();
            console.log(err);
        });
    };
    CatalogViewComponent.prototype.selectCountry = function (country) {
        var _this = this;
        this.selectedCountry = country;
        this.selectedCity = null;
        this.localst.removeCatalogFilters('city');
        this.citiesSrv.getCitiesByCountry(this.selectedCountry.id).subscribe(function (resp) {
            _this.cities = resp;
        }, function (err) {
            err = err.json();
            console.log(err);
        });
        this.getRoutesByCountry(this.selectedCountry.id);
        this.localst.saveCatalogFilters({ country: country });
    };
    CatalogViewComponent.prototype.selectCity = function (city) {
        this.selectedCity = city;
        this.getRoutesByCity(this.selectedCity.id);
        this.localst.saveCatalogFilters({ city: city });
    };
    CatalogViewComponent.prototype.getRoutesByCountry = function (countryId) {
        var _this = this;
        this.routes = null;
        this.routesSrv.getByCountry(this.selectedCountry.id).subscribe(function (resp) {
            // if (resp.routes) {
            _this.routes = resp;
            // } else {
            //     this.routes = null;
            // }
            console.log(_this.routes);
        }, function (err) {
            err = err.json();
            _this.routes = null;
            console.log(err);
        });
    };
    CatalogViewComponent.prototype.getRoutesByCity = function (cityId) {
        var _this = this;
        this.routes = null;
        this.routesSrv.getByCity(this.selectedCity.id).subscribe(function (resp) {
            // if (resp.routes) {
            _this.routes = resp;
            // } else {
            //     this.routes = null;
            // }
        }, function (err) {
            err = err.json();
            _this.routes = null;
            console.log(err);
        });
    };
    CatalogViewComponent.prototype.getAllRoutes = function () {
        var _this = this;
        this.routes = null;
        this.routesSrv.getAll().subscribe(function (resp) {
            // if (resp.routes) {
            _this.routes = resp;
            // } else {
            //     this.routes = null;
            // }
        }, function (err) {
            err = err.json();
            _this.routes = null;
            console.log(err);
        });
    };
    return CatalogViewComponent;
}());
CatalogViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-catalog-view',
        template: __webpack_require__("./src/app/catalog-view/catalog-view.component.html"),
        styles: [__webpack_require__("./src/app/catalog-view/catalog-view.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_countries_service__["a" /* CountriesService */], __WEBPACK_IMPORTED_MODULE_2__data_cities_service__["a" /* CitiesService */], __WEBPACK_IMPORTED_MODULE_3__data_routes_service__["a" /* RoutesService */], __WEBPACK_IMPORTED_MODULE_5__data_local_storage_service__["a" /* LocalStorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_countries_service__["a" /* CountriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_countries_service__["a" /* CountriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_cities_service__["a" /* CitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_cities_service__["a" /* CitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__data_routes_service__["a" /* RoutesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_routes_service__["a" /* RoutesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__translate__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__data_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_local_storage_service__["a" /* LocalStorageService */]) === "function" && _e || Object])
], CatalogViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/catalog-view.component.js.map

/***/ }),

/***/ "./src/app/data/ajax.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("./src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AjaxService = (function () {
    function AjaxService(ajax) {
        this.ajax = ajax;
        this.API_URL = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* app_config */].API_URL;
    }
    AjaxService.prototype.getData = function (resource, params) {
        if (resource[0] !== '/') {
            resource = '/' + resource;
        }
        var url = this.API_URL + resource;
        var raw_headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        };
        if (params.auth) {
            var token = localStorage.getItem('token');
            raw_headers['Auth'] = token;
            delete params.auth;
        }
        if (params.auth === false) {
            delete params.auth;
        }
        if (params.appToken) {
            params.appToken = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* app_config */].APP_TOKEN;
        }
        if (params.appToken === false) {
            delete params.appToken;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](raw_headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: headers,
            params: params
        });
        var req = this.ajax.get(url, options);
        var resp = req.map(function (response) { return response.json(); });
        // const resp = req.map(response => response);
        return resp;
    };
    AjaxService.prototype.postData = function (resource, params) {
        if (resource[0] !== '/') {
            resource = '/' + resource;
        }
        var url = this.API_URL + resource;
        // const body = {};
        var raw_headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        };
        if (params.auth) {
            var token = localStorage.getItem('token');
            raw_headers['Auth'] = token;
            delete params.auth;
        }
        if (params.auth === false) {
            delete params.auth;
        }
        if (params.appToken) {
            params.appToken = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* app_config */].APP_TOKEN;
        }
        if (params.appToken === false) {
            delete params.appToken;
        }
        var body = {};
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](raw_headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: headers,
            params: params
        });
        var req = this.ajax.post(url, body, options);
        var resp = req.map(function (response) { return response.json(); });
        // const resp = req.map(response => response);
        return resp;
    };
    AjaxService.prototype.putData = function (resource, params) {
    };
    AjaxService.prototype.deleteData = function (resource, params) {
    };
    return AjaxService;
}());
AjaxService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], AjaxService);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/ajax.service.js.map

/***/ }),

/***/ "./src/app/data/cities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajax_service__ = __webpack_require__("./src/app/data/ajax.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CitiesService = (function () {
    function CitiesService(ajax) {
        this.ajax = ajax;
    }
    CitiesService.prototype.getById = function (id) {
        var resource = '/cities/' + id;
        var params = {
            auth: false
        };
        var city = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            city.next(resp);
        });
        return city.asObservable();
    };
    CitiesService.prototype.getCities = function () {
        var resource = '/cities';
        var params = {
            auth: false
        };
        var cities = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            cities.next(resp.cities.map(function (city, index) {
                return {
                    id: city.id,
                    name: {
                        en: city.name_en,
                        es: city.name_es,
                        it: city.name_it
                    }
                };
            }));
        });
        return cities.asObservable();
    };
    CitiesService.prototype.getCitiesByCountry = function (countryId) {
        var resource = '/cities/country/' + countryId;
        var params = {
            auth: false
        };
        var cities = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            cities.next(resp.cities.map(function (city, index) {
                return {
                    id: city.id,
                    name: {
                        en: city.name_en,
                        es: city.name_es,
                        it: city.name_it
                    }
                };
            }));
        });
        return cities.asObservable();
    };
    CitiesService.prototype.addCity = function (city) {
        var resource = '/cities';
        var params = {
            auth: true,
            name_en: city.name_en,
            name_es: city.name_es,
            name_it: city.name_it,
            countryId: city.countryId
        };
        return this.ajax.postData(resource, params);
    };
    CitiesService.prototype.modifyCity = function () { };
    CitiesService.prototype.deleteCity = function () { };
    return CitiesService;
}());
CitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ajax_service__["a" /* AjaxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ajax_service__["a" /* AjaxService */]) === "function" && _a || Object])
], CitiesService);

var _a;
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
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/cities.service.js.map

/***/ }),

/***/ "./src/app/data/countries.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajax_service__ = __webpack_require__("./src/app/data/ajax.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountriesService = (function () {
    function CountriesService(ajax) {
        this.ajax = ajax;
    }
    CountriesService.prototype.getCountries = function () {
        var resource = '/countries';
        var params = {
            auth: false
        };
        var countries = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            countries.next(resp.countries.map(function (country, index) {
                return {
                    id: country.id,
                    name: {
                        en: country.name_en,
                        es: country.name_es,
                        it: country.name_it
                    }
                };
            }));
        });
        return countries.asObservable();
    };
    CountriesService.prototype.addCountry = function (country) {
        var resource = '/countries';
        var params = {
            auth: true,
            name_en: country.name_en,
            name_es: country.name_es,
            name_it: country.name_it
        };
        return this.ajax.postData(resource, params);
    };
    CountriesService.prototype.modifyCountry = function () { };
    CountriesService.prototype.deleteCountry = function () { };
    return CountriesService;
}());
CountriesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ajax_service__["a" /* AjaxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ajax_service__["a" /* AjaxService */]) === "function" && _a || Object])
], CountriesService);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/countries.service.js.map

/***/ }),

/***/ "./src/app/data/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype._save = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype._get = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype._remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.prototype._saveSession = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    LocalStorageService.prototype._getSession = function (key) {
        return sessionStorage.getItem(key);
    };
    LocalStorageService.prototype._removeSession = function (key) {
        sessionStorage.removeItem(key);
    };
    LocalStorageService.prototype.tokenExists = function () {
        if (this._get('token') !== undefined && this._get('token') !== null) {
            return true;
        }
        return false;
    };
    LocalStorageService.prototype.saveToken = function (token) {
        this._save('token', token);
    };
    LocalStorageService.prototype.getToken = function () {
        return this._get('token');
    };
    LocalStorageService.prototype.removeToken = function () {
        this._remove('token');
    };
    LocalStorageService.prototype.isDefinedLanguage = function () {
        if (this._get('lg') !== undefined && this._get('lg') !== null) {
            return true;
        }
        return false;
    };
    LocalStorageService.prototype.saveLanguage = function (language) {
        this._save('lg', language);
    };
    LocalStorageService.prototype.getLanguage = function () {
        return this._get('lg');
    };
    LocalStorageService.prototype.removeLanguage = function () {
        this._remove('lg');
    };
    LocalStorageService.prototype.saveCatalogFilters = function (args) {
        if (args.country) {
            this._saveSession('cat_fltr_country', JSON.stringify(args.country));
        }
        if (args.city) {
            this._saveSession('cat_fltr_city', JSON.stringify(args.city));
        }
    };
    LocalStorageService.prototype.getCatalogFilters = function () {
        var response = null;
        if (this._getSession('cat_fltr_country')) {
            if (response === null) {
                response = {};
            }
            ;
            response.country = JSON.parse(this._getSession('cat_fltr_country'));
        }
        if (this._getSession('cat_fltr_city')) {
            if (response === null) {
                response = {};
            }
            ;
            response.city = JSON.parse(this._getSession('cat_fltr_city'));
        }
        return response;
    };
    LocalStorageService.prototype.removeCatalogFilters = function (filter) {
        switch (filter) {
            case 'city':
                this._removeSession('cat_fltr_city');
                break;
            case 'country':
                this._removeSession('cat_fltr_country');
                break;
            case 'all':
                this._removeSession('cat_fltr_city');
                this._removeSession('cat_fltr_country');
                break;
            default:
                this._removeSession('cat_fltr_city');
                this._removeSession('cat_fltr_country');
        }
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/local-storage.service.js.map

/***/ }),

/***/ "./src/app/data/routes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajax_service__ = __webpack_require__("./src/app/data/ajax.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoutesService = (function () {
    function RoutesService(ajax) {
        this.ajax = ajax;
    }
    RoutesService.prototype.jsonForm = function (resp) {
        return resp.routes.map(function (route) {
            return {
                id: route.id,
                name: {
                    en: route.name_en,
                    es: route.name_es,
                    it: route.name_it
                },
                image: route.image,
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
        });
    };
    RoutesService.prototype.jsonFormPoint = function (resp) {
        return resp.points.map(function (point) {
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
        });
    };
    RoutesService.prototype.getAll = function () {
        var _this = this;
        var resource = '/routes';
        var params = {
            auth: false
        };
        var routes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            var data = _this.jsonForm(resp);
            // data.forEach(route => {
            //     this.getImages(route.id).subscribe(
            //         respI => {
            //             route['images'] = respI.images;
            //         }
            //         );
            // });
            routes.next(data);
        });
        return routes.asObservable();
    };
    RoutesService.prototype.getByCountry = function (countryId) {
        var _this = this;
        var resource = '/routes/country/' + countryId;
        var params = {
            auth: false
        };
        var routes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            var data = _this.jsonForm(resp);
            // data.forEach(route => {
            //     this.getImages(route.id).subscribe(
            //         respI => {
            //             route['images'] = respI.images;
            //         }
            //         );
            // });
            routes.next(data);
        });
        return routes.asObservable();
    };
    RoutesService.prototype.getByCity = function (cityId) {
        var _this = this;
        var resource = '/routes/city/' + cityId;
        var params = {
            auth: false
        };
        var routes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            var data = _this.jsonForm(resp);
            // data.forEach(route => {
            //     this.getImages(route.id).subscribe(
            //         respI => {
            //             route['images'] = respI.images;
            //         }
            //         );
            // });
            routes.next(data);
        });
        return routes.asObservable();
    };
    RoutesService.prototype.getById = function (id) {
        var _this = this;
        var resource = '/routes/' + id;
        var params = {
            auth: false
        };
        var routes = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            var data = _this.jsonForm(resp);
            data = data[0];
            // this.getImages(id).subscribe(
            //     respI => {
            //         data['images'] = respI.images;
            //     }
            // );
            routes.next(data);
        });
        return routes.asObservable();
    };
    // getComments() {}
    // getScore() {}
    RoutesService.prototype.getPoints = function (id) {
        var _this = this;
        var resource = '/routes/' + id + '/points';
        var params = {
            auth: false
        };
        var points = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ajax.getData(resource, params).subscribe(function (resp) {
            var data = _this.jsonFormPoint(resp);
            points.next(data);
        });
        return points.asObservable();
    };
    RoutesService.prototype.addPoint = function (point) {
        var resource = '/routes/' + point.routeId + '/points';
        var params = {
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
        console.log(params);
        return this.ajax.postData(resource, params);
    };
    RoutesService.prototype.addRoute = function (route) {
        var resource = '/routes';
        var params = {
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
            walkable: route.walkable,
            image: route.image
        };
        return this.ajax.postData(resource, params);
    };
    return RoutesService;
}());
RoutesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ajax_service__["a" /* AjaxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ajax_service__["a" /* AjaxService */]) === "function" && _a || Object])
], RoutesService);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/routes.service.js.map

/***/ }),

/***/ "./src/app/data/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajax_service__ = __webpack_require__("./src/app/data/ajax.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_local_storage_service__ = __webpack_require__("./src/app/data/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = (function () {
    function UsersService(ajax, localst, jwt) {
        this.ajax = ajax;
        this.localst = localst;
        this.jwt = jwt;
    }
    UsersService.prototype.registerUser = function (email, password, userName) {
        var resource = '/users/register';
        var params = {
            email: email,
            pass: password,
            userName: userName,
            auth: false,
            appToken: true
        };
        return this.ajax.postData(resource, params);
    };
    UsersService.prototype.activateUser = function (privateToken) {
        var resource = '/users/register/activate/' + privateToken;
        var params = {
            auth: false
        };
        return this.ajax.getData(resource, params);
    };
    UsersService.prototype.loginUser = function (email, password) {
        var resource = '/users/auth';
        var params = {
            email: email,
            password: password,
            auth: false
        };
        return this.ajax.postData(resource, params);
    };
    UsersService.prototype.generateToken = function (token) {
    };
    UsersService.prototype.modifyUser = function (token, userId, name, password) {
    };
    UsersService.prototype.deleteUser = function (token, userId) {
    };
    UsersService.prototype.getUserComments = function (token, userId) {
    };
    UsersService.prototype.userHasEditPermission = function () {
        var token = this.localst.getToken();
        if (token) {
            return this.jwt.decodeToken(token).accessLevel < 3;
        }
        return false;
    };
    UsersService.prototype.userHasAdminPermission = function () {
        var token = this.localst.getToken();
        if (token) {
            return this.jwt.decodeToken(token).accessLevel === 1;
        }
        return false;
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ajax_service__["a" /* AjaxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ajax_service__["a" /* AjaxService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]) === "function" && _c || Object])
], UsersService);

var _a, _b, _c;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/users.service.js.map

/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer light-green\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l3 s12 center\">\n        <a class=\"footer-link\" href=\"http://touristiamo.tn.it\">\n          <img class=\"footer-logo\" src=\"assets/logo-touristiamo.png\" alt=\"Touristiamo Laboratorio di Impresa\">\n        </a>\n      </div>\n      <div class=\"col l3 s12 center\">\n        <a class=\"footer-link\" href=\"https://www.halesowen.ac.uk\">\n          <img class=\"footer-logo\" src=\"assets/logo-halesowen.png\" alt=\"Halesowen College\">\n        </a>\n      </div>\n      <div class=\"col l3 s12 center\">\n        <a class=\"footer-link\" href=\"http://www.iesayala.com\">\n          <img class=\"footer-logo\" src=\"assets/logo-ayala.png\" alt=\"IES Francisco Ayala\">\n        </a>\n      </div>\n      <div class=\"col l3 s12 center\">\n        <a class=\"footer-link\" href=\"http://www.tambosibattisti.tn.it\">\n          <img class=\"footer-logo\" src=\"assets/logo-tambosi.png\" alt=\"ITE Tambosi Battisti\">\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright light-green darken-1\">\n    <div class=\"container center\">\n      &copy; 2017\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/footer.component.js.map

/***/ }),

/***/ "./src/app/google-maps-directions.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core_services_google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsDirectionsDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapsDirectionsDirective = (function () {
    function GoogleMapsDirectionsDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
    }
    GoogleMapsDirectionsDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            var origin = new google.maps.LatLng(_this.points[0].lat, _this.points[0].lng);
            var destination = new google.maps.LatLng(_this.points[_this.points.length - 1].lat, _this.points[_this.points.length - 1].lng);
            var waypoints = _this.points.map(function (point) {
                return {
                    location: new google.maps.LatLng(point.lat, point.lng),
                    stopover: true
                };
            });
            waypoints.shift();
            waypoints.pop();
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            directionsDisplay.setOptions({
                markerOptions: { visible: false }
            });
            directionsService.route({
                origin: origin,
                destination: destination,
                waypoints: waypoints,
                optimizeWaypoints: false,
                travelMode: 'WALKING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    console.log('Directions request failed due to ' + status);
                }
            });
        });
    };
    return GoogleMapsDirectionsDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GoogleMapsDirectionsDirective.prototype, "points", void 0);
GoogleMapsDirectionsDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'agm-directions'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__agm_core_services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__agm_core_services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */]) === "function" && _a || Object])
], GoogleMapsDirectionsDirective);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/google-maps-directions.directive.js.map

/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n    height: 64px;\n    line-height: 64px;\n}\n\nnav .brand-logo, nav .brand-logo.left, nav .brand-logo.right {\n\tpadding-top: 10px;\n\tpadding-bottom: 5px;\n}\n\n.brand-logo img{\n\tmax-height: 45px;\n\twidth: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"light-green\">\n<!-- \t<div class=\"container\"> -->\n\t\t<div class=\"nav-wrapper\">\n\t\t\t<a [routerLink]=\"'/'\" class=\"brand-logo left\">\n\t\t\t\t<img src=\"assets/logo-touristiamo-db.png\" alt=\"Touristiamo\">\n\t\t\t</a>\n\t\t\t<app-navbar-language></app-navbar-language>\n\t\t\t<app-navbar-access></app-navbar-access>\n\t\t\t<app-navbar-menu></app-navbar-menu>\n\t\t</div>\n<!-- \t</div> -->\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/header.component.js.map

/***/ }),

/***/ "./src/app/map-view/map-view.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map class=\"map map-view\" [latitude]=\"47\" [longitude]=\"6\" [zoom]=\"5\">\n\t<span *ngFor=\"let route of routes\">\n\t\t<agm-marker *ngIf=\"route.point != undefined\" [latitude]=\"route.point.lat\" [longitude]=\"route.point.lng\">\n\t\t  <agm-info-window>\n\t\t    <h6 [innerHTML]=\"route.name[translate.currentLang]\"></h6>\n\t\t    <p [innerHTML]=\"route.slogan[translate.currentLang]\"></p>\n\t\t    <a [routerLink]=\"'/routes/' + route.id\">{{ 'open route' | translate | capitalize }}</a>\n\t\t  </agm-info-window>\n\t\t</agm-marker>\n\t</span>\n</agm-map>"

/***/ }),

/***/ "./src/app/map-view/map-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/map-view/map-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_routes_service__ = __webpack_require__("./src/app/data/routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_cities_service__ = __webpack_require__("./src/app/data/cities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapViewComponent = (function () {
    function MapViewComponent(routesSrv, citiesSrv, translate, apiLoader) {
        this.routesSrv = routesSrv;
        this.citiesSrv = citiesSrv;
        this.translate = translate;
        this.apiLoader = apiLoader;
        this.routes = null;
    }
    MapViewComponent.prototype.ngOnInit = function () {
        this.getAllRoutes();
    };
    MapViewComponent.prototype.getAllRoutes = function () {
        var _this = this;
        this.routes = null;
        this.routesSrv.getAll().subscribe(function (resp) {
            _this.routes = resp;
            _this.routes.forEach(function (route) {
                var point = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Subject"]();
                _this.citiesSrv.getById(route.cityId).subscribe(function (respC) {
                    _this.geocode(respC.city.name_en).subscribe(function (respG) {
                        // locate by city
                        point.next(respG);
                        // override with first route point if exists
                        _this.routesSrv.getPoints(route.id).subscribe(function (respP) {
                            point.next({ lat: respP[0].lat, lng: respP[0].lng });
                        }, function (err) {
                            err = err.json();
                            console.log(err);
                        });
                    });
                });
                point.asObservable().subscribe(function (respP) {
                    // console.log(respP);
                    route['point'] = respP;
                });
            });
        }, function (err) {
            err = err.json();
            _this.routes = null;
            console.log(err);
        });
    };
    MapViewComponent.prototype.geocode = function (address) {
        var coords = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Subject"]();
        this.apiLoader.load().then(function () {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === 'OK') {
                    // console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                    coords.next({
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    });
                }
                else {
                    console.log('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
        return coords.asObservable();
    };
    return MapViewComponent;
}());
MapViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-view',
        template: __webpack_require__("./src/app/map-view/map-view.component.html"),
        styles: [__webpack_require__("./src/app/map-view/map-view.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_routes_service__["a" /* RoutesService */], __WEBPACK_IMPORTED_MODULE_2__data_cities_service__["a" /* CitiesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_routes_service__["a" /* RoutesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_routes_service__["a" /* RoutesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_cities_service__["a" /* CitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_cities_service__["a" /* CitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__translate__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["c" /* MapsAPILoader */]) === "function" && _d || Object])
], MapViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/map-view.component.js.map

/***/ }),

/***/ "./src/app/navbar-access/navbar-access.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav-mobile\" class=\"right\">\n\t<!-- <li><a href=\"sass.html\">Sass</a></li>\n\t<li><a href=\"badges.html\">Components</a></li> -->\n\t<li *ngIf=\"!logged\"><a (click)=\"openModal();\"><i class=\"material-icons\">person</i> <span class=\" hide-on-med-and-down\">{{ 'login' | translate | capitalize}}</span></a></li>\n\t<li [hidden]=\"!logged\">\n\t\t<a class='dropdown-button' id=\"user-dropdown-trigger\" data-activates='user-dropdown'><i class=\"material-icons\">person</i> <span class=\" hide-on-med-and-down\">{{user.name}}</span> <i class=\"material-icons\">arrow_drop_down</i></a>\n\t\t<ul id='user-dropdown' class='dropdown-content'>\n\t\t\t<li><a class=\"dropdown-header\">{{user.name}}</a></li>\n\t\t\t<li class=\"divider\"></li>\n\t\t\t<li><a (click)=\"logout()\">{{ 'logout' | translate | capitalize }}</a></li>\n\t\t</ul>\n\t</li>\n</ul>\n\n<div id=\"login\" class=\"modal \" materialize=\"modal\" [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\t  <div class=\"row\">\n\t  \t<h4 class=\"center\">{{ 'login' | translate | capitalize}}</h4>\n\t    <form materialize class=\"col s12\">\n\t      <div class=\"modal-form-row\">\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"email\" name=\"email\" type=\"text\" class=\"validate\" [(ngModel)]=\"email\">\n\t          <label for=\"email\">{{ 'email' | translate | capitalize}}</label>\n\t        </div>\n\t      </div>\n\t      <div class=\"modal-form-row\">\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">\n\t          <label for=\"password\">{{ 'password' | translate | capitalize}}</label>\n\t        </div>\n\t      </div>\n\t      <div class=\"modal-form-row\">\n\t        <div *ngIf=\"errorMsg!=''\"id=\"error-message\" class=\"error-message red-text\">Error: {{errorMsg | translate | capitalize}}</div>\n\t      </div>\n\t\t  <div class=\"modal-form-row center\">\n\t      \t<button class=\"waves-effect waves-light btn-large light-green\" (click)=\"login()\">{{ 'login' | translate | capitalize}}</button>\n\t      </div>\n\t    </form>\n\t  </div>\n  </div>\n\t<div class=\"row\">\n\t\t<div class=\"col s12\">\n\t\t\t<h5 class=\"center\">{{ 'no account?' | translate | capitalize}}</h5>\n\t\t\t<div class=\"center\">\n\t\t\t\t<a class=\"waves-effect waves-light btn-large light-green\" [routerLink]=\"'/signup'\" (click)=\"closeModal();\">{{ 'signup' | translate | capitalize}}</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/navbar-access/navbar-access.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-header {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/navbar-access/navbar-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_users_service__ = __webpack_require__("./src/app/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__ = __webpack_require__("./src/app/data/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarAccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarAccessComponent = (function () {
    function NavbarAccessComponent(users, localst, jwt) {
        this.users = users;
        this.localst = localst;
        this.jwt = jwt;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.email = '';
        this.password = '';
        this.logged = false;
        this.user = {};
        this.errorMsg = '';
    }
    NavbarAccessComponent.prototype.ngOnInit = function () {
        if (this.localst.tokenExists()) {
            this.logged = true;
            this.user = this.user = this.jwt.decodeToken(this.localst.getToken());
        }
    };
    NavbarAccessComponent.prototype.openModal = function () {
        this.modalActions.emit({
            action: 'modal',
            params: ['open']
        });
    };
    NavbarAccessComponent.prototype.closeModal = function () {
        this.modalActions.emit({
            action: 'modal',
            params: ['close']
        });
    };
    NavbarAccessComponent.prototype.login = function () {
        var _this = this;
        this.users.loginUser(this.email, this.password).subscribe(function (resp) {
            if (resp.token) {
                // Save token
                _this.localst.saveToken(resp.token);
                // Decode token, get user name and set logged
                _this.logged = true;
                _this.user = _this.jwt.decodeToken(resp.token);
                // Dismiss modal
                _this.closeModal();
                _this.email = '';
                _this.password = '';
            }
        }, function (err) {
            err = err.json();
            _this.errorMsg = err.msgKey;
        });
    };
    NavbarAccessComponent.prototype.logout = function () {
        // Remove token;
        this.localst.removeToken();
        // Set unlogged and empty user
        this.logged = false;
        this.user = {};
    };
    return NavbarAccessComponent;
}());
NavbarAccessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-access',
        template: __webpack_require__("./src/app/navbar-access/navbar-access.component.html"),
        styles: [__webpack_require__("./src/app/navbar-access/navbar-access.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]) === "function" && _c || Object])
], NavbarAccessComponent);

var _a, _b, _c;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/navbar-access.component.js.map

/***/ }),

/***/ "./src/app/navbar-language/navbar-language.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav-mobile\" class=\"right\">\n\t<li>\n\t\t<!-- Dropdown Trigger -->\n\t\t<a class='dropdown-button' href='#' data-activates='language-dropdown'>{{_translate._currentLang}} <i class=\"material-icons\">arrow_drop_down</i></a>\n\t</li>\n\t<li>\n\t\t<!-- Dropdown Structure -->\n\t\t<ul id='language-dropdown' class='dropdown-content'>\n\t\t\t<li *ngFor=\"let lang of supportedLangs\"><a (click)=\"selectLang(lang.value, true)\">{{lang.display}}</a></li>\n\t\t</ul>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/navbar-language/navbar-language.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/navbar-language/navbar-language.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__ = __webpack_require__("./src/app/data/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarLanguageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarLanguageComponent = (function () {
    function NavbarLanguageComponent(_translate, localst) {
        this._translate = _translate;
        this.localst = localst;
    }
    NavbarLanguageComponent.prototype.ngOnInit = function () {
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
            { display: 'Italiano', value: 'it' },
        ];
        // set current langage
        if (this.localst.isDefinedLanguage()) {
            this.selectLang(this.localst.getLanguage(), false);
        }
        else {
            this.selectLang(navigator.language, false);
        }
    };
    NavbarLanguageComponent.prototype.isCurrentLang = function (lang) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    };
    NavbarLanguageComponent.prototype.selectLang = function (lang, save) {
        this._translate.use(lang);
        if (save) {
            this.localst.saveLanguage(lang);
        }
    };
    return NavbarLanguageComponent;
}());
NavbarLanguageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-language',
        template: __webpack_require__("./src/app/navbar-language/navbar-language.component.html"),
        styles: [__webpack_require__("./src/app/navbar-language/navbar-language.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__["a" /* LocalStorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
], NavbarLanguageComponent);

var _a, _b;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/navbar-language.component.js.map

/***/ }),

/***/ "./src/app/navbar-menu/navbar-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav-menu\" class=\"right\">\n\t<li *ngIf=\"usersSrv.userHasEditPermission();\"><a [routerLink]=\"'/add-route'\"><i class=\"material-icons\">add</i> <span class=\" hide-on-med-and-down\">{{ 'add route' | translate | capitalize}}</span></a></li>\n\t<li><a [routerLink]=\"'/map'\"><i class=\"material-icons\">map</i> <span class=\" hide-on-med-and-down\">{{ 'map' | translate | capitalize}}</span></a></li>\n\t<li><a [routerLink]=\"'/catalog'\"><i class=\"material-icons\">view_list</i> <span class=\" hide-on-med-and-down\">{{ 'catalog' | translate | capitalize}}</span></a></li>\n</ul>"

/***/ }),

/***/ "./src/app/navbar-menu/navbar-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/navbar-menu/navbar-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_users_service__ = __webpack_require__("./src/app/data/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarMenuComponent = (function () {
    function NavbarMenuComponent(usersSrv) {
        this.usersSrv = usersSrv;
    }
    NavbarMenuComponent.prototype.ngOnInit = function () {
    };
    return NavbarMenuComponent;
}());
NavbarMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-menu',
        template: __webpack_require__("./src/app/navbar-menu/navbar-menu.component.html"),
        styles: [__webpack_require__("./src/app/navbar-menu/navbar-menu.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], NavbarMenuComponent);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/navbar-menu.component.js.map

/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/not-found.component.js.map

/***/ }),

/***/ "./src/app/route-add-points/route-add-points.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!usersSrv.userHasEditPermission()\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12 l6 offset-l3\">\n\t\t\t<h4>{{'not allowed-title' | translate | capitalize }}</h4>\n\t\t\t<p>{{'not allowed-text' | translate | capitalize }}</p>\n\t\t</div>\n\t</div>\n</div>\n<div *ngIf=\"usersSrv.userHasEditPermission()\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12 l6 offset-l3\">\n\t\t\t<h4>{{'add route points' | translate | capitalize }}</h4>\n\t\t\t<h5 *ngIf=\"route && route.name\">\n\t\t\t\t<span [innerHTML]=\"route.name[translate.currentLang]\"></span>\n\n\t\t\t</h5>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col s12 l6 offset-l3\">\n\t\t\t<ul class=\"collection\" *ngIf=\"points && points[0]\">\n\t\t\t\t<li class=\"collection-item\" *ngFor=\"let point of points\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{point.name[translate.currentLang]}}\n\t\t\t\t\t\t<span class=\"secondary-content\">{{point.pt_order + 1}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"collection\">\n\t\t\t\t<li class=\"collection-item active\" (click)=\"openModal();\">\n\t\t\t\t\t<div>{{'add point' | translate | capitalize }}<span class=\"secondary-content\"><i class=\"material-icons\">add</i></span></div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"row center\">\n\t\t<div class=\"input-field col s12\">\n\t\t\t<a class=\"waves-effect waves-light btn light-green\" (click)=\"save();\">{{ 'save' | translate | capitalize }}</a>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n<!-- MODAL ADD POINT -->\n<div id=\"login\" class=\"modal \" materialize=\"modal\" [materializeActions]=\"modalActions\">\n\t<div class=\"modal-content\">\n\t\t<div class=\"row\">\n\t\t\t<h4 class=\"center\">{{ 'add point' | translate | capitalize }}</h4>\n\t\t\t<form materialize class=\"col s12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<h6>{{ 'point name' | translate | capitalize }}:</h6>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<input id=\"name_en\" name=\"name_en\" type=\"text\" class=\"validate\" [(ngModel)]=\"newPoint.name.en\">\n\t\t\t\t\t\t<label for=\"name_en\">{{ 'english' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<input id=\"name_es\" name=\"name_es\" type=\"text\" class=\"validate\" [(ngModel)]=\"newPoint.name.es\">\n\t\t\t\t\t\t<label for=\"name_es\">{{ 'spanish' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<input id=\"name_it\" name=\"name_it\" type=\"text\" class=\"validate\" [(ngModel)]=\"newPoint.name.it\">\n\t\t\t\t\t\t<label for=\"name_it\">{{ 'italian' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<h6>{{ 'point description' | translate | capitalize }}:</h6>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea id=\"description_en\" name=\"description_en\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"newPoint.description.en\"></textarea>\n\t\t\t\t\t\t<label for=\"description_en\">{{ 'english' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea id=\"description_es\" name=\"description_es\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"newPoint.description.es\"></textarea>\n\t\t\t\t\t\t<label for=\"description_es\">{{ 'spanish' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea id=\"description_it\" name=\"description_it\" class=\"materialize-textarea\" materialize=\"characterCounter\" [(ngModel)]=\"newPoint.description.it\"></textarea>\n\t\t\t\t\t\t<label for=\"description_it\">{{ 'italian' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<h6>{{ 'point type' | translate | capitalize }}:</h6>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<select name=\"country\" materialize=\"material_select\" [materializeSelectOptions]=\"countries\" [(ngModel)]=\"newPoint.type\">\n\t\t\t\t\t\t\t<option value=\"\" selected>{{ 'type' | translate | capitalize }}</option>\n\t\t\t\t\t\t\t<option value=\"historic\" selected>{{ 'historic' | translate | capitalize }}</option>\n\t\t\t\t\t\t\t<option value=\"monument\" selected>{{ 'monument' | translate | capitalize }}</option>\n\t\t\t\t\t\t\t<option value=\"natural\" selected>{{ 'natural' | translate | capitalize }}</option>\n\t\t\t\t\t\t\t<option value=\"cultural\" selected>{{ 'cultural' | translate | capitalize }}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<label>{{ 'type' | translate | capitalize }}</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<h6>{{ 'point location' | translate | capitalize }}:</h6>\n\t\t\t\t\t<div class=\"input-field col s3\">\n\t\t\t\t\t\t<input id=\"lat\" name=\"lat\" type=\"text\" class=\"validate\" [(ngModel)]=\"newPoint.lat\">\n\t\t\t\t\t\t<label for=\"lat\">{{ 'latitude' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col s3\">\n\t\t\t\t\t\t<input id=\"lng\" name=\"lng\" type=\"text\" class=\"validate\" [(ngModel)]=\"newPoint.lng\">\n\t\t\t\t\t\t<label for=\"lng\">{{ 'longitude' | translate | capitalize}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<agm-map class=\"map map-view\" [latitude]=\"58\" [longitude]=\"-15\" [zoom]=\"4\" (mapClick)=\"placePoint($event);\">\n\t\t\t\t\t\t<agm-marker *ngIf=\"newPoint.lat != undefined\" [latitude]=\"newPoint.lat\" [longitude]=\"newPoint.lng\">\n\t\t\t\t\t\t</agm-marker>\n\t\t\t\t\t</agm-map>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-form-row center\">\n\t\t\t\t\t<button class=\"waves-effect waves-light btn-large light-green\" (click)=\"addPoint()\">{{ 'add' | translate | capitalize}}</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/route-add-points/route-add-points.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/route-add-points/route-add-points.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_users_service__ = __webpack_require__("./src/app/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_routes_service__ = __webpack_require__("./src/app/data/routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteAddPointsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RouteAddPointsComponent = (function () {
    function RouteAddPointsComponent(routeUrl, usersSrv, routesSrv, translate, router) {
        this.routeUrl = routeUrl;
        this.usersSrv = usersSrv;
        this.routesSrv = routesSrv;
        this.translate = translate;
        this.router = router;
        this.route = {};
        this.counter = 0;
        this.points = [];
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newPoint = {
            name: {},
            description: {},
            type: '',
            lat: null,
            lng: null
        };
    }
    RouteAddPointsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routeUrl.params.subscribe(function (params) {
            _this.routeId = params['routeId'];
            _this.routesSrv.getById(_this.routeId).subscribe(function (resp) {
                _this.route = resp;
            });
        });
    };
    RouteAddPointsComponent.prototype.placePoint = function ($event) {
        this.newPoint.lat = $event.coords.lat;
        this.newPoint.lng = $event.coords.lng;
    };
    RouteAddPointsComponent.prototype.addPoint = function () {
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
    };
    RouteAddPointsComponent.prototype.openModal = function () {
        this.modalActions.emit({
            action: 'modal',
            params: ['open']
        });
        this.map.triggerResize();
        this.map.longitude = 0;
        this.map.latitude = 45;
    };
    RouteAddPointsComponent.prototype.closeModal = function () {
        this.modalActions.emit({
            action: 'modal',
            params: ['close']
        });
    };
    RouteAddPointsComponent.prototype.save = function () {
        var _this = this;
        console.log(this.points);
        this.points.forEach(function (point, index, points) {
            _this.routesSrv.addPoint(point).subscribe(function (resp) {
                if (index == points.length - 1) {
                    _this.router.navigateByUrl('/routes/' + _this.routeId);
                }
            });
        });
    };
    return RouteAddPointsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* AgmMap */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* AgmMap */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* AgmMap */]) === "function" && _a || Object)
], RouteAddPointsComponent.prototype, "map", void 0);
RouteAddPointsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-route-add-points',
        template: __webpack_require__("./src/app/route-add-points/route-add-points.component.html"),
        styles: [__webpack_require__("./src/app/route-add-points/route-add-points.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_3__data_routes_service__["a" /* RoutesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__data_routes_service__["a" /* RoutesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_routes_service__["a" /* RoutesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__translate__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object])
], RouteAddPointsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/route-add-points.component.js.map

/***/ }),

/***/ "./src/app/route/route.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"route != undefined\" style=\"margin-bottom: 0\">\n  <div class=\"col s12 l3 card side-panel\">\n    <div class=\"card-image\">\n      <img *ngIf=\"route.image != undefined\" src=\"{{route.image}}\">\n    </div>\n  \t<div class=\"card-content\">\n      <h4 class=\"card-title\">{{route.name[translate.currentLang]}}</h4>\n      <p class=\"slogan\">{{route.slogan[translate.currentLang]}}</p>\n      <div class=\"icons\">\n        <div *ngIf=\"route.accesible==true\"><i class=\"material-icons\">accessible</i>{{'accesible' | translate | capitalize}}</div>\n        <div *ngIf=\"route.walkable==true\"><i class=\"material-icons\">directions_walk</i>{{'walkable' | translate | capitalize}}</div>\n        <div  *ngIf=\"route.bikeable==true\"><i class=\"material-icons\">directions_bike</i>{{'bikeable' | translate | capitalize}}</div>\n      </div>\n\t    <p>{{route.description[translate.currentLang]}}</p>\n    </div>\n  </div>\n  <agm-map *ngIf=\"route.latlngs != undefined\" class=\"map\" [latitude]=\"route.centerLat\" [longitude]=\"route.centerLng\" [zoom]=\"16\">\n    <agm-marker *ngFor=\"let point of route.points\" [latitude]=\"point.lat\" [longitude]=\"point.lng\">\n      <agm-info-window>\n        <h6>{{point.name[translate.currentLang]}}</h6>\n        <p>{{point.description[translate.currentLang]}}</p>\n      </agm-info-window>\n    </agm-marker>\n    <agm-directions [points]=\"route.latlngs\"></agm-directions>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/route/route.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icons {\n  border-top: 1px solid #aaa;\n  border-bottom: 1px solid #aaa;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #888; }\n  .icons i {\n    margin-right: 10px;\n    vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_routes_service__ = __webpack_require__("./src/app/data/routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouteComponent = (function () {
    function RouteComponent(actRoute, routeSrv, translate) {
        this.actRoute = actRoute;
        this.routeSrv = routeSrv;
        this.translate = translate;
    }
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.actRoute.params.subscribe(function (params) {
            _this.routeSrv.getById(params['id']).subscribe(function (resp) {
                _this.route = resp;
                _this.routeSrv.getPoints(params['id']).subscribe(function (respP) {
                    _this.route['points'] = respP;
                    // let latAcc = 0;
                    // let lngAcc = 0;
                    _this.route['latlngs'] = [];
                    _this.route['points'].forEach(function (point, index) {
                        //         point.lat = parseFloat(point.lat);
                        //         point.lng = parseFloat(point.lng);
                        _this.route['latlngs'][point.pt_order] = { lat: parseFloat(point.lat), lng: parseFloat(point.lng) };
                        //         latAcc += point.lat;
                        //         lngAcc += point.lng;
                    });
                    // const centerLat = latAcc / respP.points.length;
                    // const centerLng = lngAcc / respP.points.length;
                    // this.route['centerLat'] = centerLat;
                    // this.route['centerLng'] = centerLng;
                });
            }, function (err) {
                err = err.json();
                console.log(err);
            });
        });
    };
    RouteComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return RouteComponent;
}());
RouteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-route',
        template: __webpack_require__("./src/app/route/route.component.html"),
        styles: [__webpack_require__("./src/app/route/route.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_routes_service__["a" /* RoutesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_routes_service__["a" /* RoutesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_routes_service__["a" /* RoutesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__translate__["c" /* TranslateService */]) === "function" && _c || Object])
], RouteComponent);

var _a, _b, _c;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/route.component.js.map

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<h4>{{ 'signup' | translate | capitalize}}</h4>\n\t</div>\n</div>\n<div class=\"row\">\n\t<form materialize class=\"col s12 l6 offset-l3\">\n\t  <div class=\"row\">\n\t    <div class=\"input-field col s12\">\n\t      <input id=\"username\" name=\"username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\">\n\t      <label for=\"username\">{{ 'username' | translate | capitalize}}</label>\n\t    </div>\n\t  </div>\n\t  <div class=\"row\">\n\t    <div class=\"input-field col s12\">\n\t      <input id=\"email\" name=\"email\" type=\"email\" class=\"validate\" [(ngModel)]=\"email\">\n\t      <label for=\"email\">{{ 'email' | translate | capitalize}}</label>\n\t    </div>\n\t  </div>\n\t  <div class=\"row\">\n\t    <div class=\"input-field col s12\">\n\t      <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">\n\t      <label for=\"password\">{{ 'password' | translate | capitalize}}</label>\n\t    </div>\n\t  </div>\n\t  <div class=\"modal-form-row\">\n        <div *ngIf=\"errorMsg!=''\"id=\"error-message\" class=\"error-message red-text\">Error: {{errorMsg | translate | capitalize}}</div>\n      </div>\n\t  <div class=\"ow center\">\n      \t  <button class=\"waves-effect waves-light btn-large light-green\" (click)=\"signup()\">{{ 'signup' | translate | capitalize}}</button>\n      </div>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_users_service__ = __webpack_require__("./src/app/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(users, router) {
        this.users = users;
        this.router = router;
        this.username = '';
        this.email = '';
        this.password = '';
        this.errorMsg = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.users.registerUser(this.email, this.password, this.username).subscribe(function (resp) {
            if (resp.msgKey == 'access-mailSuccess') {
                _this.router.navigateByUrl('/signup/activation-pending');
            }
            else {
                _this.errorMsg = 'unknown-error';
            }
        }, function (err) {
            err = err.json();
            _this.errorMsg = err.msgKey;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("./src/app/signup/signup.component.html"),
        styles: [__webpack_require__("./src/app/signup/signup.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/signup.component.js.map

/***/ }),

/***/ "./src/app/translate/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate_service__ = __webpack_require__("./src/app/translate/translate.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__translate_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation__ = __webpack_require__("./src/app/translate/translation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__translation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_pipe__ = __webpack_require__("./src/app/translate/translate.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__translate_pipe__["a"]; });



//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/index.js.map

/***/ }),

/***/ "./src/app/translate/lang-en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_EN_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_EN_TRANS; });
// 'lang-en':.ts
// 'lang-en':.ts
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    'catalog': 'catalog',
    'email': 'email',
    'login': 'login',
    'map': 'map',
    'no account?': 'don\'t you have an account?',
    'password': 'password',
    'signup': 'signup',
    'username': 'username',
    'db-error': 'database error',
    'city-missingInfo': 'you must fill the name and countryId',
    'user-notAllowed': 'user not allowed to perform this action',
    'city-saveSuccess': 'the city was saved successfully',
    'city-modifySuccess': 'the city was modified successfully',
    'city-deleteSuccess': 'the city was deleted successfully',
    'image-deleteError': 'there was an error deleting the image',
    'image-deleteSuccess': 'the image was deleted successfully',
    'country-missingInfo': 'missing information',
    'country-saveSuccess': 'the country was saved successfully',
    'route-missingInfo': 'missing information',
    'route-idError': 'the route was not found',
    'route-saveSuccess': 'the route was saved successfully',
    'route-modifySuccess': 'the route was modified successfully',
    'route-deleteSuccess': 'the route was deleted successfully',
    'comment-missingInfo': 'missing information',
    'comment-saveSuccess': 'the comment was saved successfully',
    'comment-modifySuccess': 'the comment was modified successfully',
    'comment-deleteSuccess': 'the comment was deleted successfully',
    'country-noRoutesFound': 'no routes found in that country',
    'city-noRoutesFound': 'no routes found in that city',
    'route-noCommentsFound': 'no comments found for that route',
    'route-noImagesFound': 'no images found for that route',
    'images-nameError': 'name error',
    'images-uploadSuccess': 'images uploaded successfully',
    'images-deleteSuccess': 'images deleted successfully',
    'access-appTokenError': 'app token error',
    'access-missingInfo': 'missing information',
    'access-notValidEmail': 'not valid email',
    'access-notValidToken': 'not valid token',
    'access-mailSuccess': 'an email was sent successfully',
    'access-activateSuccess': 'user activated successfully',
    'login-missingInfo': 'missing email or password',
    'login-userNotFound': 'user not found',
    'login-userNotActive': 'user not active',
    'login-wrongInfo': 'wrong email or password',
    'user-noCommentsFound': 'no comments found for that user',
    'user-modifySuccess': 'user modified successfully',
    'user-disableSuccess': 'user disabled successfully',
    'accesible': 'accessible',
    'access information': 'access information',
    'account activated': 'account activated',
    'add': 'add',
    'add city': 'add city',
    'add country': 'add country',
    'add route': 'add route',
    'all fields mandatory': 'all fields are mandatory',
    'bikeable': 'cyclable',
    'city name': 'city name',
    'confirm email text': 'please, confirm your email using the link that has been sent to your inbox',
    'confirm email title': 'confirm your email',
    'country': 'country',
    'country name': 'country name',
    'english': 'english',
    'error': 'error',
    'italian': 'italian',
    'logout': 'logout',
    'not allowed-text': 'you don\'t have permission to fulfill this action',
    'not allowed-title': 'access not allowed',
    'open route': 'open route',
    'route description': 'route description',
    'route location': 'route location',
    'route name': 'route name',
    'route tagline': 'route tagline',
    'routes': 'routes',
    'select city': 'select city',
    'select country': 'select country',
    'spanish': 'spanish',
    'walkable': 'walkable',
    'add route points': 'add route points',
    'add point': 'add new point',
    'point name': 'point name',
    'save': 'save',
    'point type': 'point type',
    'type': 'type',
    'historic': 'historical',
    'monument': 'monument',
    'natural': 'natural',
    'cultural': 'cultural',
    'point location': 'point location',
    'latitude': 'latitude',
    'longitude': 'longitude',
    'route image': 'route image'
};
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/lang-en.js.map

/***/ }),

/***/ "./src/app/translate/lang-es.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_ES_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_ES_TRANS; });
// lang-es.ts
// lang-es.ts
var LANG_ES_NAME = 'es';
var LANG_ES_TRANS = {
    'catalog': 'catálogo',
    'email': 'email',
    'password': 'password',
    'db-error': 'database error',
    'city-missingInfo': 'you must fill the name and countryId',
    'user-notAllowed': 'user not allowed to perform this action',
    'city-saveSuccess': 'the city was saved successfully',
    'city-modifySuccess': 'the city was modified successfully',
    'city-deleteSuccess': 'the city was deleted successfully',
    'image-deleteError': 'there was an error deleting the image',
    'image-deleteSuccess': 'the image was deleted successfully',
    'country-missingInfo': 'missing information',
    'country-saveSuccess': 'the country was saved successfully',
    'route-missingInfo': 'missing information',
    'route-idError': 'the route was not found',
    'route-saveSuccess': 'the route was saved successfully',
    'route-modifySuccess': 'the route was modified successfully',
    'route-deleteSuccess': 'the route was deleted successfully',
    'comment-missingInfo': 'missing information',
    'comment-saveSuccess': 'the comment was saved successfully',
    'comment-modifySuccess': 'the comment was modified successfully',
    'comment-deleteSuccess': 'the comment was deleted successfully',
    'country-noRoutesFound': 'no routes found in that country',
    'city-noRoutesFound': 'no routes found in that city',
    'route-noCommentsFound': 'no comments found for that route',
    'route-noImagesFound': 'no images found for that route',
    'images-nameError': 'name error',
    'images-uploadSuccess': 'images uploaded successfully',
    'images-deleteSuccess': 'images deleted successfully',
    'access-appTokenError': 'app token error',
    'access-missingInfo': 'missing information',
    'access-notValidEmail': 'not valid email',
    'access-notValidToken': 'not valid token',
    'access-mailSuccess': 'an email was sent successfully',
    'access-activateSuccess': 'user activated successfully',
    'login-missingInfo': 'missing email or password',
    'login-userNotFound': 'user not found',
    'login-userNotActive': 'user not active',
    'login-wrongInfo': 'wrong email or password',
    'user-noCommentsFound': 'no comments found for that user',
    'user-modifySuccess': 'user modified successfully',
    'user-disableSuccess': 'user disabled successfully',
    'unknown-error': 'something went wrong',
    'confirm email title': 'confirm your email',
    'confirm email text': 'please confirm your email account by clicking the link we have sent to your inbox',
    'accessible': 'accesible',
    'access information': 'información de acceso',
    'account activated': 'cuenta activada',
    'add': 'añadir',
    'add city': 'añadir ciudad',
    'add country': 'añadir país',
    'add route': 'añadir ruta',
    'all fields mandatory': 'todos los campos son obligatorios',
    'bikeable': 'ciclable',
    'city name': 'nombre de la ciudad',
    'country': 'país',
    'country name': 'nombre del país',
    'english': 'inglés',
    'error': 'error',
    'italian': 'italiano',
    'login': 'login',
    'logout': 'salir',
    'map': 'mapa',
    'no account?': '¿no tienes cuenta?',
    'not allowed-text': 'no tiene permisos suficientes para realizar esta acción',
    'not allowed-title ': 'acceso no permitido',
    'open route': 'abrir ruta',
    'route description': 'descripción de la ruta',
    'route location': 'ubicación de la ruta',
    'route name': 'nombre de la ruta',
    'route tagline': 'eslogan de la ruta',
    'routes': 'rutas',
    'select city': 'seleccionar ciudad',
    'select country': 'seleccionar país',
    'signup': 'registro',
    'spanish': 'español',
    'username': 'usuario',
    'walkable': 'caminable',
    'add route points': 'añadir puntos de la ruta',
    'add point': 'añadir nuevo punto',
    'point name': 'nombre del punto',
    'save': 'guardar',
    'point type': 'tipo de punto',
    'type': 'tipo',
    'historic': 'histórico',
    'monument': 'monumento',
    'natural': 'natural',
    'cultural': 'cultural',
    'point location': 'ubicación del punto',
    'latitude': 'latitud',
    'longitude': 'longitud',
    'route image': 'imagen de la ruta'
};
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/lang-es.js.map

/***/ }),

/***/ "./src/app/translate/lang-it.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_IT_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_IT_TRANS; });
// lang-it.ts
// lang-it.ts
var LANG_IT_NAME = 'it';
var LANG_IT_TRANS = {
    'accesible': 'accessibile',
    'access information': 'informazioni di accesso',
    'account activated': 'conto attivato',
    'add': 'aggiungere',
    'add city': 'aggiungi città',
    'add country': 'aggiungi paese',
    'add route': 'aggiungi percorso',
    'all fields mandatory': 'tutti i campi sono obbligatori',
    'bikeable': 'ciclabile',
    'catalog': 'catalogo',
    'city name': 'nome della città',
    'confirm email text': 'si prega di confermare la tua email utilizzando il link inviato alla tua casella di posta',
    'confirm email title': 'confermare la tua email',
    'country': 'paese',
    'country name': 'nome del paese',
    'email': 'email',
    'english': 'inglese',
    'error': 'errore',
    'italian': 'italiano',
    'login': 'login',
    'logout': 'uscita',
    'map': 'mappa',
    'no account?': 'non hai un account?',
    'not allowed-text': 'non si dispone di autorizzazioni sufficienti per eseguire questa azione',
    'not allowed-title': 'accesso non autorizzato',
    'open route': 'aprire percorso',
    'password': 'password',
    'route description': 'descrizione del percorso',
    'route location': 'posizione di percorso',
    'route name': 'nome del percorso',
    'route tagline': 'slogan del percorso',
    'routes': 'percorsi',
    'select city': 'seleziona città',
    'select country': 'seleziona paese',
    'signup': 'registrazione',
    'spanish': 'spagnolo',
    'username': 'utente',
    'walkable': 'caminabile',
    'add route points': 'aggiungere punti al percorso',
    'add point': 'aggiungere un nuovo punto',
    'point name': 'nome del punto',
    'save': 'salva',
    'point type': 'tipo di punto',
    'type': 'tipo di punto',
    'historic': 'storico',
    'monument': 'monumento',
    'natural': 'naturale',
    'cultural': 'culturale',
    'point location': 'posizione del punto',
    'latitude': 'latitudine',
    'longitude': 'longitudine',
    'route image': 'immagine del percorso'
};
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/lang-it.js.map

/***/ }),

/***/ "./src/app/translate/translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // our translate service
var TranslatePipe = (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value) {
            return;
        }
        return this._translate.instant(value);
    };
    return TranslatePipe;
}());
TranslatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'translate',
        pure: false
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object])
], TranslatePipe);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/translate.pipe.js.map

/***/ }),

/***/ "./src/app/translate/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation__ = __webpack_require__("./src/app/translate/translation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
// app/translate/translate.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

 // import our opaque token
var TranslateService = (function () {
    // inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        // set current language
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        // private perform translation
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        // call translation
        return this.translate(key);
    };
    return TranslateService;
}());
TranslateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__translation__["b" /* TRANSLATIONS */])),
    __metadata("design:paramtypes", [Object])
], TranslateService);

//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/translate.service.js.map

/***/ }),

/***/ "./src/app/translate/translation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_en__ = __webpack_require__("./src/app/translate/lang-en.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_es__ = __webpack_require__("./src/app/translate/lang-es.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang_it__ = __webpack_require__("./src/app/translate/lang-it.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATIONS; });
/* unused harmony export dictionary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATION_PROVIDERS; });
// app/translate/translation.ts

// import translations



// translation token
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('translations');
// all translations
var dictionary = {
    en: __WEBPACK_IMPORTED_MODULE_1__lang_en__["a" /* LANG_EN_TRANS */],
    es: __WEBPACK_IMPORTED_MODULE_2__lang_es__["a" /* LANG_ES_TRANS */],
    it: __WEBPACK_IMPORTED_MODULE_3__lang_it__["a" /* LANG_IT_TRANS */],
};
// providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/translation.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("./node_modules/core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("./node_modules/core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("./node_modules/core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("./node_modules/core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("./node_modules/core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("./node_modules/core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("./node_modules/core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("./node_modules/core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("./node_modules/core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("./node_modules/core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("./node_modules/core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/var/www/html/touristiamo2/client-dev/src/polyfills.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map