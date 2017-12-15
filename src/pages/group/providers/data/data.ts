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

  url: string = "http://192.168.1.120:3000/groups";

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getGroups() {
    return this.http.get(this.url)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchError);
  }

  getAsyncData(): Promise<any[]> {
    // async receive mock data
    return new Promise(resolve => {

      // setTimeout(() => {
        // resolve(
          this.getGroups()
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

  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Server Error");
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res.json();
  }

}
