import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/do"
import "rxjs/add/operator/catch"
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {

  url: string = "http://192.168.1.119:3000/users?page=";
  // http://192.168.1.119:3000/groups?page=1

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getUsers(a:any) {
    return this.http.get(this.url + a)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg)  || "Server Error";
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    console.log(res.json().data);
    return res.json();
  }

}
