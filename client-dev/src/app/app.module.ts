import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

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

const routes: Routes = [
  {path: '', component: MapViewComponent},
  {path: 'map', component: MapViewComponent},
  {path: 'catalog', component: CatalogViewComponent},
  {path: 'signup', component: SignupComponent},
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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterializeModule
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
    AjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
