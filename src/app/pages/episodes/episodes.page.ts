import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MyFilterPipePipe } from '../../pipes/my-filter-pipe.pipe';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    episodes: Observable<any>
  constructor(
      private router: Router, 
      private api: ApiService,
      public helpService: HelperService
    ) { }

  ngOnInit() {
    this.episodes = this.api.getEpisodesAll();
    this.episodes.subscribe(res => { }, erro => {
      if(erro.status) {
        this.helpService.toastHttpCodeError(erro.status);
      }
  })
}

}