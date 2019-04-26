import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { stringify } from '@angular/core/src/util';
import { HomePage } from '../home/home';
//import {RegisterPage} from '../../pages/register/register'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //variables
  username:any;
  password:any;

  tryUsername:any;
  tryPassword:any;

  loginTrue:boolean = true;
  loginStatus:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    localStorage.loginStatus = JSON.stringify(this.loginTrue);//makes sure the variable is set to true befor login
  }

  login(){
      // localStorage.username = JSON.stringify('username');
      // localStorage.username = JSON.stringify('password');

      //calls and sets saved username and password from localstorage
      this.username = JSON.parse(localStorage.getItem('newUsername'));
      this.password = JSON.parse(localStorage.getItem('newPassword'));

      console.log("Username = "+ this.username);
      console.log("Password = "+ this.password);

      //if input usernameand pass is the same as the saved username and pass then login is sucessful
      if(this.tryUsername == this.username && this.password == this.password)
      {
        alert("Login Successful!!");
        this.loginTrue = false;//sets login to flase so watchlist button apperas on the home page (only seems to work upon restart of app else watch list is there always)
        console.log("Login ="+this.loginTrue)
        localStorage.loginStatus = JSON.stringify(this.loginTrue);//saves login status to local storage
      }
      else
      {
        alert("Wrong username or password - Please try again!");
      }
  }

  //navigation button
  goToRegister(){
    this.navCtrl.push('RegisterPage');
  }
  // back button
  backBtn(){
    this.navCtrl.push(HomePage);
  }

}
