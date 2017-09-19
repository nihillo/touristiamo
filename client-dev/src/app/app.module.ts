import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarAccessComponent } from './navbar-access/navbar-access.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarLanguageComponent } from './navbar-language/navbar-language.component';
import { MapViewComponent } from './map-view/map-view.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';
import { CapitalizePipe } from './capitalize.pipe';
import { SignupComponent } from './signup/signup.component';
import { AjaxService } from './data/ajax.service';
import { ActivationPendingComponent } from './activation-pending/activation-pending.component';
import { ActivationComponent } from './activation/activation.component';
import { RouteComponent } from './route/route.component';
import { LocalStorageService } from './data/local-storage.service';
import {JwtHelper} from 'angular2-jwt';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsDirectionsDirective } from './google-maps-directions.directive';
import { AddRouteComponent } from './add-route/add-route.component';
import { RouteAddPointsComponent } from './route-add-points/route-add-points.component';

const routes: Routes = [
  {path: '', component: MapViewComponent},
  {path: 'map', component: MapViewComponent},
  {path: 'catalog', component: CatalogViewComponent},
  {path: 'routes/:id', component: RouteComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup/activation-pending', component: ActivationPendingComponent},
  {path: 'signup/activate/:token', component: ActivationComponent},
  {path: 'add-route', component: AddRouteComponent},
  {path: 'route-add-points/:routeId', component: RouteAddPointsComponent},
  {path: '**', component: NotFoundComponent}

];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NavbarAccessComponent,
    NavbarMenuComponent,
    NavbarLanguageComponent,
    MapViewComponent,
    CatalogViewComponent,
    TranslatePipe,
    CapitalizePipe,
    SignupComponent,
    ActivationPendingComponent,
    ActivationComponent,
    RouteComponent,
    GoogleMapsDirectionsDirective,
    AddRouteComponent,
    RouteAddPointsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    MaterializeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlvH9gIvn1ELDGlF0-70H02254p7ibjYU'
    }),
    ImageUploadModule.forRoot(),
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
    AjaxService,
    LocalStorageService,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
