import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {PublierPage} from "../publier/publier";
import {RecherchePage} from "../recherche/recherche";
import {HomePage} from "../home/home";



@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  constructor(public fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams)
  {}

  goPublierPage(params) {
    if (!params) params = {};
    this.navCtrl.push(PublierPage);
  }

  goHomePage(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

  goRecherchePage(params) {
    if (!params) params = {};
    this.navCtrl.push(RecherchePage);
  }

}



