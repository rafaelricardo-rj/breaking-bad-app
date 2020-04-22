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
    getPaginatedCharacters(limit: number, index: number) {
        return this.http.get(`${this.urlApi}/characters?limit=${limit}&offset=${index}`);
    }

    getCharacter(id){
        return this.http.get(`${this.urlApi}/characters/${id}`);
    }

    getCharacterAll(){
        return this.http.get(`${this.urlApi}/characters`);
    }

    getEpisodesAll() {
        return this.http.get(`${this.urlApi}/episodes`);
    }

    getEpisode(id){
        return this.http.get(`${this.urlApi}/episodes/${id}`);
    }

    getQuotesAll() {
        return this.http.get(`${this.urlApi}/quotes`);
    }

    getQuotesByAuthor(author: string) {
        return this.http.get(`${this.urlApi}/quote?author=${author}`);
    }
}
