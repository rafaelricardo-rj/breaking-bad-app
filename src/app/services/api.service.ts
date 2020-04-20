import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    readonly urlApi = "https://www.breakingbadapi.com/api";

    constructor(private http: HttpClient, public toastController: ToastController) { }

    getPaginatedCharacters(limit, index, chars) {
        /*return this.http.get(`${this.urlApi}/characters?limit=${limit}&offset=${index}`)
            .subscribe(res => {  chars = chars.concat(res); }, erro => {
                if(erro.status == 429) {
                  console.log('Too many requests. Try again later.');
                  this.presentToast('Too many requests. Try again later.');
                }
            })*/
        return this.http.get(`${this.urlApi}/characters?limit=${limit}&offset=${index}`);
            
    }

    getFilm(id) {
        return this.http.get(`https://swapi.co/api/films/${id}`);
    }

    getPeople() {
        return this.http.get('https://swapi.co/api/people');
    }

    getPerson(id) {
        return this.http.get(`https://swapi.co/api/people/${id}`);
    }

    getPlanets() {
        return this.http.get('https://swapi.co/api/planets');
    }

    getPlanet(id) {
        return this.http.get(`https://swapi.co/api/planets/${id}`);
    }
}
