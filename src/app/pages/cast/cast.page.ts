import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.page.html',
  styleUrls: ['./cast.page.scss'],
})
export class CastPage implements OnInit {

    characters: Observable<any>;

    constructor(private router: Router, private http: HttpClient) {}

    ngOnInit() {
        this.characters = this.http.get('https://www.breakingbadapi.com/api/characters?limit=15&offset=0');
        //this.characters = this.http.get('../servicos/characters.json');
        this.characters.subscribe(data => console.log(data.length));
    }

    loadData(event){
        
        this.characters = this.http.get('https://www.breakingbadapi.com/api/characters?limit=15&offset=15');
        
        event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            /*if (this.loadedData.length > 30) {
                this.util.presentToast('No more data available', true, 'bottom', 1500);
                event.target.disabled = true;
            }*/
        this.characters.subscribe(data => console.log('repopulado '+data.length));
    }

}
