import { AuthPage } from './../auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }

  goToAuthPage(type:string){
    if(type)
    this.navCtrl.push(AuthPage,{Type:type});
    else
    this.navCtrl.push(AuthPage);

  }


}
