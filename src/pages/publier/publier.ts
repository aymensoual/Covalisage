import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'page-publier',
  templateUrl: 'publier.html',
})
export class PublierPage {



  PaysAlertOpts: { title: string, subTitle: string };
  PaysAlertOpts1: { title: string, subTitle: string };

 userlist : AngularFireList<any>;




  constructor(public loadingCtrl: LoadingController,public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {
    this.userlist = this.fdb.list('/Liste annonce');

    this.PaysAlertOpts = {
      title: 'Pays',
      subTitle: 'Sélectionner le pays'
    };

    this.PaysAlertOpts1 = {
      title: 'Pays',
      subTitle: 'Sélectionner le pays'
    };

  }


  public event = {
    month: '2000-01-01',
    timeStarts: '07:43',
  }


  btnAddClicked(Nom,Prenom,Telephone,Pays,Pays1,myDate,Prixkg,Poids){
    this.userlist.push({
      Nom:Nom,
      Prenom: Prenom,
      Telephone : Telephone,
      Pays : Pays,
      Pays1: Pays1,
      myDate : myDate,
      Prixkg : Prixkg,
      Poids : Poids,
    })

  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
  }


  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Done!',
      message: 'Votre annonce a été publiée',
      buttons: ['Ok']
    });
    alert.present()
  }



}



