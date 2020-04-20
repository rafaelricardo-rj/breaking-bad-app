import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    readonly urlApi = "https://www.breakingbadapi.com/api";

    constructor(private http: HttpClient, public toastController: ToastController) { }

    /**
     * This request would give you an array of 15 characters, starting at index 0 (the 1 first id).
     */
    getPaginatedCharacters(limit, index) {
        return this.http.get(`${this.urlApi}/characters?limit=${limit}&offset=${index}`);
    }

    getEpisodesAll() {
        return this.http.get(`${this.urlApi}/episodes`);
    }
}
