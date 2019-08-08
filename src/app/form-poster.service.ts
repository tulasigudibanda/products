import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {map} from 'rxjs/operators';
import { Employee } from './models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormPosterService {

  constructor(private _http : Http) { }

  postEmployee(employee : Employee) : Observable<any> {
  const body = JSON.stringify(employee);
  const headers = new Headers({'Content-type' : 'application/json'});
  const options = new RequestOptions({headers: headers});

  return this._http.post('http://localhost:3100/postEmployee', body,options)
    .pipe(map(this.extractData));
  }

  extractData(res : Response) {
    const body = res.json();
    return body.fields || { };
  }
}
