import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyFilterPipePipe } from '../../pipes/my-filter-pipe.pipe';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { LoadingSingletonService } from '../../services/loading-singleton.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    episodes: Observable<any>
    eps = [];
  constructor(
      private router: Router, 
      private api: ApiService,
      public helpService: HelperService,
      public loading : LoadingSingletonService,
    ) { }

  async ngOnInit() {
    this.loading.show();
    this.episodes = this.api.getEpisodesAll();
    this.episodes.subscribe(res => {
      this.eps = this.eps.concat(res); 
      this.loading.dismiss(); 
    }, erro => {
      if(erro.status) {
        this.helpService.toastHttpCodeError(erro.status);
      }
    })
  }

}