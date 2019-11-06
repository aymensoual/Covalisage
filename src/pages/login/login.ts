import {Component, ViewChild, NgZone} from '@angular/core';
import {NavController, NavParams, AlertController, Platform, LoadingController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class loginPage {

  userProfile: any = null;
  zone: NgZone;

  @ViewChild('username') user;
  @ViewChild('password') password;

  loginData = {
    email: '',
    password: ''
  }

  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private facebook: Facebook,private platform: Platform) {
    this.zone = new NgZone({});
    firebase.auth().onAuthStateChanged( user => {
      this.zone.run( () => {
        if (user){
          this.userProfile = user;
        } else {
          this.userProfile = null;
        }
      });
    });
  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'Merci',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
      .then( data => {
        console.log('got some data', this.fire.auth.currentUser);
        //   this.alert('Success! You\'re logged in');
        this.navCtrl.setRoot( LoggedinPage );
        // user is logged in
      })
      .catch( error => {
        console.log('got an error', error);
        this.alert('Le mot de passe est incorrect');
      })
    console.log('Would sign in with ', this.user.value, this.password.value);
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



  goSignupPage(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }

}















