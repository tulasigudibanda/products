import { Injectable } from '@angular/core';
import { Product } from './product';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

  constructor(private http : Http) { }

  getProducts() {
      return this.http.get(this.productUrl)
        .pipe(map(this.extractData));
  }

  getProductDetails(id) {
    return this.http.get('https://ngproductsparam.herokuapp.com/api/getProductDetails?productId='+id)
    .pipe(map(this.extractData));
  }

  private extractData(res : Response) {
   // console.log(res.json());
    return res.json();
  }
}
