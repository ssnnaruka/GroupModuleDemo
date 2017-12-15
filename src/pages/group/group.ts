import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './providers/data/data';

// import { CreateGroupPage } from "./page/create-group/create-group";

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  groupList:any = [];
  pageNo:number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.getGroups();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

  getGroups(){
    this.dataProvider.getGroups(this.pageNo++).subscribe(data => this.groupList = data.data);
  }

  createNewGroup(){
    this.navCtrl.push("CreateGroupPage");
  }


  doInfinite(infiniteScroll:any) {
    this.dataProvider.getGroups(this.pageNo++).subscribe(data => {
      this.groupList = this.groupList.concat(data.data)
      infiniteScroll.complete();
      // if (this.groupList.length > 90) {
      //   infiniteScroll.enable(false);
      // }
    });
  }

}
