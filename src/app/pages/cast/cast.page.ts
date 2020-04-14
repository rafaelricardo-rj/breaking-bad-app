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
    chars: any;

    constructor(private router: Router, private http: HttpClient) {}

    ngOnInit() {
        this.characters = this.http.get('https://www.breakingbadapi.com/api/characters');
    }

}