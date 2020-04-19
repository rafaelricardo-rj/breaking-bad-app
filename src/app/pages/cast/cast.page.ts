import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.page.html',
  styleUrls: ['./cast.page.scss'],
})
export class CastPage implements OnInit {

    chars = [];
    /**
     * This request would give you an array of 15 characters, starting at index 0 (the 1 first id).
     */
    limit = 15;
    index = 0;

    constructor(private router: Router, private http: HttpClient) {  }

    ngOnInit() {
       this.loadChars();
    }

    loadChars(event?){
        this.http.get(`https://www.breakingbadapi.com/api/characters?limit=${this.limit}&offset=${this.index}`)
            .subscribe(res => {  this.chars = this.chars.concat(res) }, erro => {
                if(erro.status == 429) {
                  console.log('Too many requests. Try again later.');
                }
            })
        if(event){
            event.target.complete();
        }
    }

    loadData(event?){
        this.index += 15;
        this.loadChars(event);
        if(this.index > 62){
            event.target.disable = true;
        }
    }

}
