import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { SignupPage } from '../pages/signup/signup';
import {WelcomePage} from "../pages/welcome/welcome";
import {HomePage} from "../pages/home/home";
import {LoggedinPage} from "../pages/loggedin/loggedin";
import {RecherchePage} from "../pages/recherche/recherche";
import {PublierPage} from "../pages/publier/publier";
import {loginPage} from '../pages/login/login';

import {AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database' ;

import { Facebook } from '@ionic-native/facebook';



const firebaseAuth

  = {
  apiKey: "AIzaSyDrNnvTtd9Vq0FW97EkhSudNhCEmPlsb0Y",
  authDomain: "beledia-8fb4b.firebaseapp.com",
  databaseURL: "https://beledia-8fb4b.firebaseio.com",
  projectId: "beledia-8fb4b",
  storageBucket: "beledia-8fb4b.appspot.com",
  messagingSenderId: "748863269930"
};

@NgModule({
  declarations: [
    MyApp,
    loginPage,
    SignupPage,
    WelcomePage,
    HomePage,
    LoggedinPage,
    RecherchePage,
    PublierPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    loginPage,
    SignupPage,
    WelcomePage,
    HomePage,
    LoggedinPage,
    RecherchePage,
    PublierPage,
    PublierPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
