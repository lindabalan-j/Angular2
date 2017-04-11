import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SerLogin {
    constructor(private http: Http) { }
debugger
    login(username: string, password: string) {
        let data1 : any;
          let data2 : any;
        data1=username;
          data2=password;
          
  return this.http.post('https://www.uhid.com/uhid/api/index.php/v1/post/user/login?mobile_number='+data1+'&password='+data2, '').map(
      
      res => res.json()
      );

     

          
    }

}