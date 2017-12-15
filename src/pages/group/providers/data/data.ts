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
export class DataProvider {

  urlG: string = "http://192.168.1.119:3000/groups?page=";
  url: string = "http://192.168.1.119:3000/groups";

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getGroups(no:any) {
    return this.http.get(this.urlG + no)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAsyncData(no:any): Promise<any[]> {
    // async receive mock data
    return new Promise(resolve => {

      // setTimeout(() => {
        // resolve(
          return this.getGroups(no);
        // );
      // }, 1000);

    });
  }

  createGroup(data:any) {
    this.http.post(this.url, data)
      .do((res: Response) => console.log(res))
      .map((res: Response) => console.log(res.json()));
      // .catch(this.catchError);
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
    return res.json();
  }

}
