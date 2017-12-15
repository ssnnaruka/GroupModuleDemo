import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UserObjToArrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'userObjToArray',
  pure: false
})
export class UserObjToArrayPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, args: string[]): any {
    let keys: any[] = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
  // transform(value: string, ...args) {
  //   return value.toLowerCase();
  // }
}
