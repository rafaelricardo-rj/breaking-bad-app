import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

/**
 * It is an adaptation of two research sources. I wanted to make a singleton that would hold 
 * a "Loading" component and thus be able to call any part of the application. I adapted the 
 * example shown in the ionic documentation with the example of a blog post.
 * Links:
 * http://singletonsinlonic.blogspot.com/2017/05/singletons-in-ionic-3-angular-4.html
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

@Injectable({
  providedIn: 'root'
})
export class LoadingSingletonService {

  loading: any;

  constructor(public loadingController: LoadingController) { }

  async show(){
    this.loading = await this.loadingController.create({ message: 'Please wait...', duration: 10000 }); //10s
    this.loading.present();
  }

  dismiss(){
    this.loading.dismiss();
  }
}
