import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { LoadingSingletonService } from 'src/app/services/loading-singleton.service';
import { CharactersImagesSingletonService } from 'src/app/services/characters-images-singleton.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-death',
  templateUrl: './death.page.html',
  styleUrls: ['./death.page.scss'],
})
export class DeathPage implements OnInit {

  deaths: Observable<any>;
  deathsArray = [];
  charsImages = this.charsImg.getImageUrl();
  noPicUrl    = "assets/img/no-pic.png";

  constructor(
    private api: ApiService,
    public helpService: HelperService,
    public loading: LoadingSingletonService,
    public charsImg: CharactersImagesSingletonService
  ) { }

  ngOnInit() {
    this.loadDeaths();
  }

  loadDeaths() {
    this.loading.show();
    this.deaths = this.api.getDeaths();
    this.deaths.subscribe(
      (res) => {
        this.deathsArray = res;
        this.loading.dismiss();
      },
      (erro) => {
        if (erro.status) {
          this.helpService.toastHttpCodeError(erro.status);
        }
      }
    );
  }

  /**
   * Adapted from Simon Grimm code watched on Youtube - Link https://www.youtube.com/watch?v=Nc1RqvDY-B8
   * @param ev 
   */
  filterDeaths(ev){
    const val = ev.target.value;
    if(val && val.trim() != '' && val.length > 2){
      //console.log(val);
	    this.deaths.subscribe(
          res => this.deathsArray = res.filter( res => res.death.toLowerCase().indexOf(val.toLowerCase()) > -1 )
      )
    } else {
      this.deaths.subscribe( res => this.deathsArray = res );
    }
  }
}
