import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {MovieProvider} from '../../providers/movies/movies';//import for movie data
import { HomePage } from '../home/home';//import for back button

@IonicPage()
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {

  //variables for movies
  //user: any;
  movieName: any;
  movies: any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public sendName: MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowserPage');
  }

  //popup search button
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'search',
          placeholder: 'Enter Movie Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Search',
          handler: data => {
            this.movieName = data.search;
            this.sendName.GetFilmInfo(this.movieName).subscribe((data)=>{
              this.movies=data.Search;//getting the filmnames from api
              });
            console.log("Movie name ="+ this.movieName);
          }
        }
      ]
    });
    alert.present();
  }

  //back button function
  backBtn(){
    this.navCtrl.push(HomePage);
  }

}
