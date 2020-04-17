import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.page.html',
  styleUrls: ['./cast.page.scss'],
})
export class CastPage implements OnInit {

    characters: Observable<any>;
    charactersMore: Observable<any>;

    constructor(private router: Router, private http: HttpClient) {}

    ngOnInit() {
        this.characters = this.http.get('https://www.breakingbadapi.com/api/characters?limit=15&offset=0')
        this.characters.subscribe(result => {}, erro => {
                if(erro.status == 429) {
                  console.log('Too many requests. Try again later.');
                }
              })
        //this.characters = this.http.get('../servicos/characters.json');
        this.characters.subscribe(data => console.log(data.length));
    }

    loadData(event){
        
        this.charactersMore = this.http.get('https://www.breakingbadapi.com/api/characters?limit=15&offset=15');

        this.characters = combineLatest(this.characters, this.charactersMore).pipe(
                map(([data, changes]) => {
                    const newData = [...data];
                    // here change newData based on the changes
                    return newData;
                })
);
        
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
