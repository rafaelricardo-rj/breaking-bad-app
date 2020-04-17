import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyFilterPipePipe } from '../../pipes/my-filter-pipe.pipe';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    
  episodes: Observable<any>;    

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
      this.episodes = this.http.get('https://www.breakingbadapi.com/api/episodes');      
  }
}