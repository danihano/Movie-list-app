import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { stringify } from '@angular/core/src/util';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public enteredName:any;
  public enteredPassword:any;


  public newUsername: any;
  public newPassword: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    //checks if there was an input
    if(this.enteredName.length==0 || this.enteredPassword.length==0){
      alert("Please fill all fields!");
    }
    //if inputs present the info if saved to local storage
    else{
      localStorage.newUsername = JSON.stringify(this.enteredName);
      localStorage.newPassword = JSON.stringify(this.enteredPassword);
      alert("Thank you for registering! Please log in now.");
      this.navCtrl.push('LoginPage');//brings u back to the login page to login instantly
    }
  }

  //back button function
  backBtn(){
    this.navCtrl.pop();
  }
}