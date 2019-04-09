import { WelcomePage } from './../pages/welcome/welcome';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      let config = {
        apiKey: "AIzaSyCRpmA6mipjQ7v_yU2P98zDLdGHchjHSwA",
        authDomain: "timeapp-49d70.firebaseapp.com",
        databaseURL: "https://timeapp-49d70.firebaseio.com",
        projectId: "timeapp-49d70",
        storageBucket: "timeapp-49d70.appspot.com",
        messagingSenderId: "68310043430"
      };
      firebase.initializeApp(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

