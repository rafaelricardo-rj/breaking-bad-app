import {Injectable} from "@angular/core";
import { ToastController } from '@ionic/angular';
import { LoadingSingletonService } from './loading-singleton.service'

/**
 * This singleton was created to help showing a Toas in any part of the application without having to create an instance everytime it is necessaire.
 * 
 * Author: Rafael Ricardo. Adapted from ionicframework website
 */

@Injectable()
export class HelperService {
    constructor(public toastController: ToastController, public loading: LoadingSingletonService) {}

    public async toastHttpCodeError(httpCode) {
        const toast = await this.toastController.create({
            message: this.httpCodeAnswer(httpCode),
            duration: 2000,
            position: 'top',
        });
        toast.present();
    };

    public async toast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    };

    private httpCodeAnswer(code): string{
        switch(code){
            case 429:
                this.loading.dismiss(); 
                return "Too many requests. Try again later.";
                break;
            case 404: return "Page not found.";
                break;
            default: return "Unknown request.";
        }
    }
}