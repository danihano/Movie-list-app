import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //variables
  user: any;
  movieName: any;
  hiddenBtn: boolean = true;


  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }
  //navigation buttons
  goToLogin(){
    console.log("Login page nav from home");
    this.navCtrl.push('LoginPage');
  }

  goToBrowse(){
    console.log("Browser page nav from home");
    this.navCtrl.push('BrowserPage');
  }

  goToWatchList(){
    this.navCtrl.push('WatchListPage');
  }

  goToAboutUs(){
    this.navCtrl.push('AboutUsPage');
  }

  //function to have the watchlist button apper uppon login
  ionViewDidLoad(){
    this.hiddenBtn = JSON.parse(localStorage.getItem('loginStatus'));
    console.log("hidden status =" + this.hiddenBtn);
  }
}
