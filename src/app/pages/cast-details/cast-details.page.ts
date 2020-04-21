import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { LoadingSingletonService } from '../../services/loading-singleton.service'

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.page.html',
  styleUrls: ['./cast-details.page.scss'],
})
export class CastDetailsPage implements OnInit {

  character: any;
	
  constructor(
    private activatedRoute: ActivatedRoute, 
    private api: ApiService, 
    public helpService: HelperService,
    public loading: LoadingSingletonService
  ) { }
	
  ngOnInit() {
	
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.loading.show();

    this.api.getCharacter(id).subscribe(res => {
      this.character = res[0];
      this.loading.dismiss();
    }, erro => {
      if(erro.status) {
        this.helpService.toastHttpCodeError(erro.status);
      }
    });
  }

}
