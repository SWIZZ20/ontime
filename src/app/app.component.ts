import { WelcomePage } from './../pages/welcome/welcome';
import { Component, ViewChild } from '@angular/core';
import { Platform, Content, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersInfosPage } from '../pages/users-infos/users-infos';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { EventsPage } from '../pages/events/events';
import { SchoolTimeTablePage } from '../pages/school-time-table/school-time-table';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UsersInfosPage;
  public tabsPage=TabsPage;
  public schoolTimeTablePage=SchoolTimeTablePage;
  public settingsPage=SettingsPage;
  public eventsPage=EventsPage;
  public isAuth:boolean=false;
  public config;
  @ViewChild('content') content:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public menuController:MenuController) {
    platform.ready().then(() => {

      this.config = {
        apiKey: "AIzaSyCRpmA6mipjQ7v_yU2P98zDLdGHchjHSwA",
        authDomain: "timeapp-49d70.firebaseapp.com",
        databaseURL: "https://timeapp-49d70.firebaseio.com",
        projectId: "timeapp-49d70",
        storageBucket: "timeapp-49d70.appspot.com",
        messagingSenderId: "68310043430"
      };
      firebase.initializeApp(this.config);
      
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.isAuth=true;
          this.content.setRoot(TabsPage);
        }else{
          this.isAuth=false;
          this.content.setRoot(WelcomePage);
        }
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onTogglePage(page:any){
    this.content.setRoot(page);
    this.menuController.close();
  }

  deconnexion(){
    firebase.auth().signOut();
    this.menuController.close();
  }
}

