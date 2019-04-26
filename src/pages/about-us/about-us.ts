import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/Geolocation/ngx';//geolocation import
import { HomePage } from '../home/home';//imported for back button

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  //lognitude and latitude variables
  lati:any;
  longi:any;

  //geolocation called
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  //ionviewdidload function used to update location on the page loading
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
    //geolocation position
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    //setting the longitude and latitude to varables
    this.lati=data.coords.latitude
    this.longi=data.coords.longitude
    });
  }

  //back button variables
  backBtn(){
    this.navCtrl.push(HomePage);
  }

}
