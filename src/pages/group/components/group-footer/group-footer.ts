import { Component } from '@angular/core';

/**
 * Generated class for the GroupFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'group-footer',
  templateUrl: 'group-footer.html'
})
export class GroupFooterComponent {

  text: string;

  constructor() {
    console.log('Hello GroupFooterComponent Component');
    this.text = 'Hello World';
  }

  chat(num){
    console.log(num);
  }
}
