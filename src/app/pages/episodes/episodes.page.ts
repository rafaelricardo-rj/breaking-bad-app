import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    episodes: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
      let i = 0;
      this.episodes = this.http.get('https://www.breakingbadapi.com/api/episodes')
      
  }

}
