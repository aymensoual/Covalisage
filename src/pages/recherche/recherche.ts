import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import firebase from 'firebase';
import {HomePage} from "../home/home";

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html'
})
export class RecherchePage {
  public userList:Array<any>;
  public loadeduserList:Array<any>;
  public userRef:firebase.database.Reference;

  constructor(public navCtrl: NavController) {
    this.userRef = firebase.database().ref('/Liste annonce');

    this.userRef.on('value', userList => {
      let users = [];
      userList.forEach( user => {
        users.push(user.val());
        return false;
      });

      this.userList = users;
      this.loadeduserList = users;
    });
  }


  initializeItems(){
    this.userList = this.loadeduserList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.userList = this.userList.filter((v) => {
      if(v.Pays1 && q) {
        if (v.Pays1.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });



    console.log(q, this.userList.length);

  }
  goHomePage(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
