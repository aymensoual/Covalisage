import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, AlertController,Platform } from 'ionic-angular';
import {loginPage} from "../login/login";

import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,private facebook: Facebook,private platform: Platform) {

  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'Merci !',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  loginFacebook() {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.fire.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }

  registerUser(params) {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value , this.password.value)
      .then(data => {
        console.log('got data ', data);
        this.alert('Le compte est bien créé');
        if (!params) params = {};
        this.navCtrl.push(loginPage);
      })
      .catch(error => {
        console.log('got an error ', error);
        this.alert(error.message);
      });
    console.log('Would register user with ', this.user.value, this.password.value);
  }

  gologinPage(params){
    if (!params) params = {};
    this.navCtrl.push(loginPage);
  }

}
