import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    /*Inyectar dependencia tipo HttpClient */
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products');
  }

  getProduct(id: string) {
    return this.http.get(`http://platzi-store.herokuapp.com/products/${id}`);
  }
}
