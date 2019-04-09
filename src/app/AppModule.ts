import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { SchoolTimeTablePage } from '../pages/school-time-table/school-time-table';
import { SubjectsPage } from '../pages/subjects/subjects';
import { SingleSubjectsPage } from '../pages/single-subjects/single-subjects';
import { SingleTaskPage } from '../pages/single-task/single-task';
import { SettingsPage } from '../pages/settings/settings';
import { UsersInfosPage } from '../pages/users-infos/users-infos';
import { WelcomePage } from '../pages/welcome/welcome';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
    SchoolTimeTablePage,
    SubjectsPage,
    SingleSubjectsPage,
    SingleTaskPage,
    SettingsPage,
    UsersInfosPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    SchoolTimeTablePage,
    SubjectsPage,
    SingleSubjectsPage,
    SingleTaskPage,
    SettingsPage,
    UsersInfosPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}
