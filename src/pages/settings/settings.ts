import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public user=[];
  constructor(public navCtrl: NavController,
    public menuCtrl:MenuController, public authService:AuthServiceProvider) {

     let val= this.authService.getuserdetails();
      val.then(data=>{
       this.user.push({
         nom:data['nom'],
         prenom:data['prenom'],
         niveau:data['niveau'],
         residence:data['adresse']
       })
      }).catch(error=>{
        console.log(error);
      });

      console.log(this.user);
  }


  onToggleMenu(){
    this.menuCtrl.open();
  }
}
