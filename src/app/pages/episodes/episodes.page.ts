import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MyFilterPipePipe } from '../../pipes/my-filter-pipe.pipe';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { LoadingController } from '@ionic/angular';

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
      public loadingController: LoadingController
    ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({ message: 'Please wait...', duration: 5000 });
    await loading.present();
    this.episodes = this.api.getEpisodesAll();
    this.episodes.subscribe(res => {
      this.eps = this.eps.concat(res); 
      loading.dismiss(); 
    }, erro => {
      if(erro.status) {
        this.helpService.toastHttpCodeError(erro.status);
      }
    })
  }

  /**
   * https://ionicframework.com/docs/api/loading
   */
  /*async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000
    });
    return loading;
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  } */ 

}