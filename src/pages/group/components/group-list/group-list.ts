import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the GroupListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'group-list',
  templateUrl: 'group-list.html'
})
export class GroupListComponent {

  @Input()
  groupSData: any = {};

  text: string;

  data:any[] = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ];

  constructor() {
    console.log('Hello GroupListComponent Component');
    this.text = 'Hello World';
    console.log(this.groupSData);
  }

  showGroup(d:any){
    console.log(d);
  }

  @Output()
  onSuggest: EventEmitter<any> = new EventEmitter();
  
  doInfiniteScroll(ev:any) {
          this.onSuggest.emit(ev);
  }

}
