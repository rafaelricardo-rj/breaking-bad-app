import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { LoadingController } from '@ionic/angular';

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
    loading: any;

    constructor(
        private router: Router, 
        private api: ApiService, 
        public toastController: ToastController,
        public helpService: HelperService,
        public loadingController : LoadingController
        ) { }

    ngOnInit() {
       this.loadCharsLoading();
    }

    async loadCharsLoading(){
        this.loading = await this.loadingController.create({ message: 'Please wait...', duration: 8000 });
        await this.loading.present();

        this.api.getPaginatedCharacters(this.limit, this.index)
            .subscribe(res => {  
                this.chars = this.chars.concat(res);
                this.loading.dismiss();
            }, erro => {
                if(erro.status) {
                  this.helpService.toastHttpCodeError(erro.status);
                }
            })
    }

    // event parameter could be null
    loadChars(event?){
        
        this.api.getPaginatedCharacters(this.limit, this.index)
            .subscribe(res => {  
                this.chars = this.chars.concat(res);
                if(event){
                    /**
                    * Source: https://ionicframework.com/docs/api/infinite-scroll
                    * Call complete() within the ionInfinite output event handler when your async operation has completed. 
                    * For example, the loading state is while the app is performing an asynchronous operation, such as receiving 
                    * more data from an AJAX request to add more items to a data list. Once the data has been received and UI updated, 
                    * you then call this method to signify that the loading has completed. This method will change the infinite scroll's 
                    * state from loading to enabled.
                    */
                    event.target.complete();
                }
            }, erro => {
                if(erro.status) {
                  this.helpService.toastHttpCodeError(erro.status);
                }
            })
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
