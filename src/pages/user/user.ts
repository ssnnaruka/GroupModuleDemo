import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from './providers/data/data';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userSData: Array<any> = [];
  usersObj:any = {};
  gCallback:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userDataProvider: UserDataProvider) {
    this.getUsers();
    this.gCallback = this.navParams.get("gCallback");
    console.log(this.gCallback);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  getUsers(){
    this.userDataProvider.getUsers().subscribe(data => {
      console.log(data);
      this.userSData = data.data;
    });
  }

  confirmUserList() {
    this.navCtrl.push("UserListConfirmPage", {
      usersObj : this.usersObj,
      gCallback : this.gCallback
    });
    console.log("User Confrim Page");
  }
}
