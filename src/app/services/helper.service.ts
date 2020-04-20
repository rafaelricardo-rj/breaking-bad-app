import {Injectable} from "@angular/core";
import { ToastController } from '@ionic/angular';

@Injectable()
export class HelperService {
    constructor(public toastController: ToastController) {}

    public async toastHttpCodeError(httpCode) {
        const toast = await this.toastController.create({
            message: this.httpCodeAnswer(httpCode),
            duration: 2000
        });
        toast.present();
    };

    public async toast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };

    private httpCodeAnswer(code): string{
        switch(code){
            case 429: return "Too many requests. Try again later.";
                break;
            case 404: return "Page not found.";
                break;
            default: return "Unknown request.";
        }
    }
}