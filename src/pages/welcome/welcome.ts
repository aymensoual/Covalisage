import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {loginPage} from "../login/login";

@Component({
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }


  gologinPage(params){
    if (!params) params = {};
    this.navCtrl.push(loginPage);
  }


  slides = [
    {
      title: "Amortissez votre billet d'avion",
      description: " Vous voyagez et vos valises ne sont pas toutes remplies ? Pourquoi ne pas rentabiliser les kilogrammes non utilisés en proposant un service de covalisage ? Faites une annonce, fixez votre prix au kilogramme et amortissez le prix d’achat de votre billet d'avion.",
      image: "assets/imgs/1.png",
    },
    {
      title: "Envoyez vos colis à bon marché",
      description: "Envoyer un colis à l’international n'a jamais été aussi rapide, simple et économique. Fini les dépenses onéreuses pour effectuer un envoi express. Renseignez destination ainsi que la date d'envoi souhaitée. Trouvez un voyageur pour le même trajet qui vous transportera votre colis à bon marché.",
      image: "assets/imgs/2.png",
    },
    {
      title: "De la tunisie vers partout",
      description: "Que vous soyez à la capitale ou en province, en Europe, Amérique, Asie ou en Afrique, plus besoin de vous en faire pour envoyer vos colis ou documents à l’international. Envoyez vos colis depuis la Tunisie vers toute autre destination dans le monde. Renseignez votre ville et trouvez un voyageur dans les environs qui vous transportera votre colis.",
      image: "assets/imgs/3.png",
    }
  ];
}
