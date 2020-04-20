import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';

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
        private http: HttpClient, 
        private api: ApiService, 
        public toastController: ToastController
        ) {  }

    ngOnInit() {
       this.loadChars();
    }

    loadChars(event?){
        this.api.getPaginatedCharacters(this.limit, this.index, this.chars)
            .subscribe(res => {  this.chars = this.chars.concat(res); }, erro => {
                if(erro.status == 429) {
                  console.log('Too many requests. Try again later.');
                  this.presentToast('Too many requests. Try again later.');
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

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

}
