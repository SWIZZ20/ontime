import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the SchoolTimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-school-time-table',
  templateUrl: 'school-time-table.html',
})
export class SchoolTimeTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolTimeTablePage');
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
