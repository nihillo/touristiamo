import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    private _save(key, value) {
        localStorage.setItem(key, value);
    }

    private _get(key) {
        return localStorage.getItem(key);
    }

    private _remove(key) {
        localStorage.removeItem(key);
    }

    private _saveSession(key, value) {
        sessionStorage.setItem(key, value);
    }

    private _getSession(key) {
        return sessionStorage.getItem(key);
    }

    private _removeSession(key) {
        sessionStorage.removeItem(key);
    }

    public tokenExists() {
        if (this._get('token') !== undefined && this._get('token') !== null) {
            return true;
        }
        return false;
    }

    public saveToken(token) {
        this._save('token', token);
    }

    public getToken() {
        return this._get('token');
    }

    public removeToken() {
        this._remove('token');
    }

    public isDefinedLanguage() {
        if (this._get('lg') !== undefined && this._get('lg') !== null) {
            return true;
        }
        return false;
    }

    public saveLanguage(language) {
        this._save('lg', language);
    }

    public getLanguage() {
        return this._get('lg');
    }

    public removeLanguage() {
        this._remove('lg');
    }

    public saveCatalogFilters(args) {
        if (args.country) {
            this._saveSession('cat_fltr_country', JSON.stringify(args.country));
        }
        if (args.city) {
            this._saveSession('cat_fltr_city', JSON.stringify(args.city));
        }
    }

    public getCatalogFilters() {
        let response = null;

        if (this._getSession('cat_fltr_country')) {
            if (response === null) {response = {}; };
            response.country = JSON.parse(this._getSession('cat_fltr_country'));
        }

        if (this._getSession('cat_fltr_city')) {
            if (response === null) {response = {}; };
            response.city = JSON.parse(this._getSession('cat_fltr_city'));
        }

        return response;
    }

    public removeCatalogFilters(filter) {
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
    }
}
