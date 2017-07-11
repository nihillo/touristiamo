import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate';
import {LocalStorageService} from '../data/local-storage.service';

@Component({
  selector: 'app-navbar-language',
  templateUrl: './navbar-language.component.html',
  styleUrls: ['./navbar-language.component.scss'],
  providers: [LocalStorageService]
})
export class NavbarLanguageComponent implements OnInit {
    public supportedLangs: any[];

    constructor (private _translate: TranslateService, private localst: LocalStorageService) {}

    ngOnInit() {
        this.supportedLangs = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' },
        { display: 'Italiano', value: 'it' },
        ];

        // set current langage
        if (this.localst.isDefinedLanguage()) {
            this.selectLang(this.localst.getLanguage(), false);
        } else {
            this.selectLang(navigator.language, false);
        }
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string, save: Boolean) {
        this._translate.use(lang);
        if (save) {
            this.localst.saveLanguage(lang);
        }
    }
}
