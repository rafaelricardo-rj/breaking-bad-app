import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

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
    maxCharacters = 63;

    constructor(
        private router: Router, 
        private api: ApiService, 
        public toastController: ToastController,
        public helpService: HelperService
        ) {  }

    ngOnInit() {
       this.loadChars();
    }

    loadChars(event?){
        this.api.getPaginatedCharacters(this.limit, this.index)
            .subscribe(res => {  this.chars = this.chars.concat(res); }, erro => {
                if(erro.status) {
                  this.helpService.toastHttpCodeError(erro.status);
                }
            })
        if(event){
            event.target.complete();
        }
    }

    loadData(event?){
        this.index += 15;
        this.loadChars(event);
        if(this.index > this.maxCharacters-1){
            event.target.disable = true;
        }
    }

    openDetails(character) {
	
        //let split = character.url.split('/');
        //let characterId = split[split.length-2];
        this.router.navigateByUrl(`/tabs/cast/${character.char_id}`);
        
    }

}
