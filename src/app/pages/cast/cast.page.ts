import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.page.html',
  styleUrls: ['./cast.page.scss'],
})
export class CastPage implements OnInit {

    cast: Observable<any>;
    constructor(private http: HttpClient) { }

    ngOnInit() {
	
        this.cast = this.http.get('https://www.breakingbadapi.com/api/characters');
	
        this.cast.subscribe(data => {
	
            console.log('my data: ', data);
	
        });
    }

}
