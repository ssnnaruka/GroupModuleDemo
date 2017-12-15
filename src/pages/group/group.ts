import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './providers/data/data';
import { InfiniteScroll } from 'ionic-angular/components/infinite-scroll/infinite-scroll';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.getGroups();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

  getGroups(){
    this.dataProvider.getGroups().subscribe(data => this.groupList = data.data);
  }

  createNewGroup(){
    this.navCtrl.push("CreateGroupPage");
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    console.log("Scrolling down");
    // this.mockProvider.getAsyncData().then((newData) => {
    //   for (var i = 0; i < newData.length; i++) {
    //     this.items.push( newData[i] );
    //   }

    //   infiniteScroll.complete();

    //   if (this.items.length > 90) {
    //     infiniteScroll.enable(false);
    //   }
    // });

  }

}
