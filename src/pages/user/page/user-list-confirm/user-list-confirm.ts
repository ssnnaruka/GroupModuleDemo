import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserListConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list-confirm',
  templateUrl: 'user-list-confirm.html',
})
export class UserListConfirmPage {

  @Output() 
  counterChange = new EventEmitter();
  gCallback:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usersObj = this.navParams.get("usersObj");
    console.log(this.usersObj);
    this.gCallback = this.navParams.get("gCallback");
  }

  usersObj: any = {};

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListConfirmPage');
  }

  removeClickedItem(index:any, item:any){
    console.log(index);
    console.log(item);
    delete this.usersObj[item._id];
  }

  confirmUsers(){
    console.log(this.usersObj);
    this.gCallback.callFunc(this.gCallback.passArgs, this.usersObj);
  }

}
