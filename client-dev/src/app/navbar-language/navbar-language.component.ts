import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate';

@Component({
  selector: 'app-navbar-language',
  templateUrl: './navbar-language.component.html',
  styleUrls: ['./navbar-language.component.scss']
})
export class NavbarLanguageComponent implements OnInit {
    public supportedLangs: any[];

    constructor (private _translate: TranslateService) {}

    ngOnInit() {
        this.supportedLangs = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' },
        { display: 'Italiano', value: 'it' },
        ];

        // set current langage
        this.selectLang(navigator.language);
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this._translate.use(lang);
        // this.refreshText();
    }
}
