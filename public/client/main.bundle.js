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

/***/ "./src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_config; });
var app_config = {
    API_URL: 'http://api.touristiamo'
};
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/app-config.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_access_navbar_access_component__ = __webpack_require__("./src/app/navbar-access/navbar-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_menu_navbar_menu_component__ = __webpack_require__("./src/app/navbar-menu/navbar-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_language_navbar_language_component__ = __webpack_require__("./src/app/navbar-language/navbar-language.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_view_map_view_component__ = __webpack_require__("./src/app/map-view/map-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__catalog_view_catalog_view_component__ = __webpack_require__("./src/app/catalog-view/catalog-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__translate__ = __webpack_require__("./src/app/translate/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__capitalize_pipe__ = __webpack_require__("./src/app/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_ajax_service__ = __webpack_require__("./src/app/data/ajax.service.ts");
/* unused harmony export routing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__map_view_map_view_component__["a" /* MapViewComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_13__map_view_map_view_component__["a" /* MapViewComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_14__catalog_view_catalog_view_component__["a" /* CatalogViewComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__["a" /* SignupComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(routes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_access_navbar_access_component__["a" /* NavbarAccessComponent */],
            __WEBPACK_IMPORTED_MODULE_11__navbar_menu_navbar_menu_component__["a" /* NavbarMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navbar_language_navbar_language_component__["a" /* NavbarLanguageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__map_view_map_view_component__["a" /* MapViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__catalog_view_catalog_view_component__["a" /* CatalogViewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__translate__["a" /* TranslatePipe */],
            __WEBPACK_IMPORTED_MODULE_16__capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__["a" /* SignupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            routing,
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__translate__["b" /* TRANSLATION_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_15__translate__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_18__data_ajax_service__["a" /* AjaxService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/app.module.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/capitalize.pipe.js.map

/***/ }),

/***/ "./src/app/catalog-view/catalog-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  catalog-view works!\n</p>\n"

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
    function CatalogViewComponent() {
    }
    CatalogViewComponent.prototype.ngOnInit = function () {
    };
    return CatalogViewComponent;
}());
CatalogViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-catalog-view',
        template: __webpack_require__("./src/app/catalog-view/catalog-view.component.html"),
        styles: [__webpack_require__("./src/app/catalog-view/catalog-view.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CatalogViewComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/catalog-view.component.js.map

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
        // if (resource[0] !== '/') {
        //     resource = '/' + resource;
        // }
        // const url = this.API_URL + resource;
        // return this.ajax.
        // get(url)
        // .map( response => response.json());
        return;
    };
    AjaxService.prototype.postData = function (resource, params) {
        if (resource[0] !== '/') {
            resource = '/' + resource;
        }
        var url = this.API_URL + resource;
        var body = {};
        var raw_headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        };
        if (params.auth) {
            var token = localStorage.getItem('token');
            raw_headers['Auth'] = token;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */](raw_headers);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var req = this.ajax.post(url, body, options);
        // const resp = req.map(response => response.json());
        var resp = req.map(function (response) { return response; });
        return resp;
    };
    AjaxService.prototype.putData = function (resource, params) {
    };
    AjaxService.prototype.deleteData = function (resource, params) {
    };
    return AjaxService;
}());
AjaxService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AjaxService);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/ajax.service.js.map

/***/ }),

/***/ "./src/app/data/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajax_service__ = __webpack_require__("./src/app/data/ajax.service.ts");
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
    function UsersService(ajax) {
        this.ajax = ajax;
    }
    UsersService.prototype.registerUser = function (email, password, userName, appToken) {
    };
    UsersService.prototype.activateUser = function (privateToken) {
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
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ajax_service__["a" /* AjaxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ajax_service__["a" /* AjaxService */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/users.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/footer.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/header.component.js.map

/***/ }),

/***/ "./src/app/map-view/map-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  map-view works!\n</p>\n"

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
    function MapViewComponent() {
    }
    MapViewComponent.prototype.ngOnInit = function () {
    };
    return MapViewComponent;
}());
MapViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-map-view',
        template: __webpack_require__("./src/app/map-view/map-view.component.html"),
        styles: [__webpack_require__("./src/app/map-view/map-view.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MapViewComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/map-view.component.js.map

/***/ }),

/***/ "./src/app/navbar-access/navbar-access.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav-mobile\" class=\"right\">\n\t<!-- <li><a href=\"sass.html\">Sass</a></li>\n\t<li><a href=\"badges.html\">Components</a></li> -->\n\t<li><a (click)=\"openModal();\"><i class=\"material-icons\">person</i> <span class=\" hide-on-med-and-down\">{{ 'login' | translate | capitalize}}</span></a></li>\n</ul>\n\n<div id=\"login\" class=\"modal \" materialize=\"modal\" [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n\t  <div class=\"row\">\n\t  \t<h4 class=\"center\">{{ 'login' | translate | capitalize}}</h4>\n\t    <form materialize class=\"col s12\">\n\t      <div class=\"modal-form-row\">\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"email\" name=\"email\" type=\"text\" class=\"validate\" [(ngModel)]=\"email\">\n\t          <label for=\"email\">{{ 'email' | translate | capitalize}}</label>\n\t        </div>\n\t      </div>\n\t      <div class=\"modal-form-row\">\n\t        <div class=\"input-field col s12\">\n\t          <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">\n\t          <label for=\"password\">{{ 'password' | translate | capitalize}}</label>\n\t        </div>\n\t      </div>\n\t\t\t\t<div class=\"modal-form-row center\">\n\t      \t<button class=\"waves-effect waves-light btn-large\" (click)=\"login()\">{{ 'login' | translate | capitalize}}</button>\n\t      </div>\n\t    </form>\n\t  </div>\n  </div>\n\t<div class=\"row\">\n\t\t<div class=\"col s12\">\n\t\t\t<h5 class=\"center\">{{ 'no account?' | translate | capitalize}}</h5>\n\t\t\t<div class=\"center\">\n\t\t\t\t<a class=\"waves-effect waves-light btn-large\" [routerLink]=\"'/signup'\" (click)=\"closeModal();\">{{ 'signup' | translate | capitalize}}</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/navbar-access/navbar-access.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/navbar-access/navbar-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_users_service__ = __webpack_require__("./src/app/data/users.service.ts");
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
    function NavbarAccessComponent(users) {
        this.users = users;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.email = '';
        this.password = '';
    }
    NavbarAccessComponent.prototype.ngOnInit = function () {
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
        this.users.loginUser(this.email, this.password).subscribe(function (resp) { return console.log(resp); });
        this.closeModal();
    };
    return NavbarAccessComponent;
}());
NavbarAccessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-navbar-access',
        template: __webpack_require__("./src/app/navbar-access/navbar-access.component.html"),
        styles: [__webpack_require__("./src/app/navbar-access/navbar-access.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], NavbarAccessComponent);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/navbar-access.component.js.map

/***/ }),

/***/ "./src/app/navbar-language/navbar-language.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav-mobile\" class=\"right\">\n\t<li>\n\t\t<!-- Dropdown Trigger -->\n\t\t<a class='dropdown-button' href='#' data-activates='dropdown1'>{{_translate._currentLang}} <i class=\"material-icons\">arrow_drop_down</i></a>\n\t</li>\n\t<li>\n\t\t<!-- Dropdown Structure -->\n\t\t<ul id='dropdown1' class='dropdown-content'>\n\t\t\t<li *ngFor=\"let lang of supportedLangs\"><a (click)=\"selectLang(lang.value)\">{{lang.display}}</a></li>\n\t\t</ul>\n\t</li>\n</ul>"

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
    function NavbarLanguageComponent(_translate) {
        this._translate = _translate;
    }
    NavbarLanguageComponent.prototype.ngOnInit = function () {
        this.supportedLangs = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'es' },
            { display: 'Italiano', value: 'it' },
        ];
        // set current langage
        this.selectLang(navigator.language);
    };
    NavbarLanguageComponent.prototype.isCurrentLang = function (lang) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    };
    NavbarLanguageComponent.prototype.selectLang = function (lang) {
        // set current lang;
        this._translate.use(lang);
        // this.refreshText();
    };
    return NavbarLanguageComponent;
}());
NavbarLanguageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-navbar-language',
        template: __webpack_require__("./src/app/navbar-language/navbar-language.component.html"),
        styles: [__webpack_require__("./src/app/navbar-language/navbar-language.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object])
], NavbarLanguageComponent);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/navbar-language.component.js.map

/***/ }),

/***/ "./src/app/navbar-menu/navbar-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav-menu\" class=\"right\">\n\t<li><a [routerLink]=\"'/map'\"><i class=\"material-icons\">map</i> <span class=\" hide-on-med-and-down\">{{ 'map' | translate | capitalize}}</span></a></li>\n\t<li><a [routerLink]=\"'/catalog'\"><i class=\"material-icons\">view_list</i> <span class=\" hide-on-med-and-down\">{{ 'catalog' | translate | capitalize}}</span></a></li>\n</ul>"

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

// import { CapitalizePipe } from '../capitalize.pipe';
var NavbarMenuComponent = (function () {
    function NavbarMenuComponent() {
    }
    NavbarMenuComponent.prototype.ngOnInit = function () {
    };
    return NavbarMenuComponent;
}());
NavbarMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-navbar-menu',
        template: __webpack_require__("./src/app/navbar-menu/navbar-menu.component.html"),
        styles: [__webpack_require__("./src/app/navbar-menu/navbar-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarMenuComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/navbar-menu.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/not-found.component.js.map

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s12 l6 offset-l3\">\n\t\t<h4>{{ 'signup' | translate | capitalize}}</h4>\n\t</div>\n</div>\n<div class=\"row\">\n\t<form materialize class=\"col s12 l6 offset-l3\">\n\t  <div class=\"row\">\n\t    <div class=\"input-field col s12\">\n\t      <input id=\"username\" type=\"text\" class=\"validate\">\n\t      <label for=\"username\">{{ 'username' | translate | capitalize}}</label>\n\t    </div>\n\t  </div>\n\t  <div class=\"row\">\n\t    <div class=\"input-field col s12\">\n\t      <input id=\"email\" type=\"email\" class=\"validate\">\n\t      <label for=\"email\">{{ 'email' | translate | capitalize}}</label>\n\t    </div>\n\t  </div>\n\t  <div class=\"row\">\n\t    <div class=\"input-field col s12\">\n\t      <input id=\"password\" type=\"password\" class=\"validate\">\n\t      <label for=\"password\">{{ 'password' | translate | capitalize}}</label>\n\t    </div>\n\t  </div>\n\t</form>\n</div>\n"

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
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("./src/app/signup/signup.component.html"),
        styles: [__webpack_require__("./src/app/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/signup.component.js.map

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



//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/index.js.map

/***/ }),

/***/ "./src/app/translate/lang-en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANG_EN_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_EN_TRANS; });
// lang-en.ts
// lang-en.ts
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    'catalog': 'catalog',
    'email': 'email',
    'login': 'login',
    'map': 'map',
    'no account?': 'don\'t you have an account?',
    'password': 'password',
    'signup': 'signup',
    'username': 'username'
};
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/lang-en.js.map

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
    'login': 'login',
    'map': 'mapa',
    'no account?': '¿No tienes cuenta?',
    'password': 'password',
    'signup': 'registro',
    'username': 'usuario'
};
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/lang-es.js.map

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
    'catalog': 'catalogo',
    'email': 'email',
    'login': 'login',
    'map': 'mappa',
    'no account?': 'non hai un account?',
    'password': 'password',
    'signup': 'registrazione',
    'username': 'utente'
};
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/lang-it.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'translate',
        pure: false
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__translate__["c" /* TranslateService */]) === "function" && _a || Object])
], TranslatePipe);

var _a;
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/translate.pipe.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__translation__["b" /* TRANSLATIONS */])),
    __metadata("design:paramtypes", [Object])
], TranslateService);

//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/translate.service.js.map

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
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* OpaqueToken */]('translations');
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
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/translation.js.map

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
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/environment.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/main.js.map

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
















//# sourceMappingURL=/var/www/html/touristiamo/client-dev/src/polyfills.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map