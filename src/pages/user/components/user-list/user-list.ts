import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html'
})
export class UserListComponent {

  @Input()
  items: Array<any> = [];

  items2: Array<any> = [{
    id : 1, name : "Ria"
  },{id : 2, name : "Sim"}];
  
  @Input()
  userSData:any = {};
  
  text: string;
  
  checkList: any = {};
  

  constructor() {
    console.log('Hello UserListComponent Component');
  }

  @Output()
  onSuggest: EventEmitter<any> = new EventEmitter();
  
  doInfiniteScroll(ev:any) {
          this.onSuggest.emit(ev);
  }

  ngOnInit() {
    console.log(this.items);
  }

  itemClick(item) {
    alert(item);
  }

  toggleCheck(ev:any, item:any) {
    console.log(this.userSData);
    console.log(ev.checked);
    if(!ev.checked){
      this.checkList[item._id] = false;
      delete this.userSData[item._id];
    } else {
      this.checkList[item._id] = true;
      this.userSData[item._id] = item;
    }
  }

  filterItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.firstName.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

}
