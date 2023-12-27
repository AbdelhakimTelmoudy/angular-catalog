import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host : string ="https://dummyjson.com/";
  constructor(private http: HttpClient) { }
  public searchProducts(keyword :string="phone",page : number=1, size:number=8){
    return this.http.get(`${this.host}products?skip=${page}&limit=${size}&select=id,title,price,stock,category`,{observe:'response'});
  }

  getProductById(productId: number) : Observable<Product> {
    return this.http.get<Product>(`${this.host}/products/${productId}`);
  }

  updateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>(`${this.host}/products/${product.id}`,product);
  }
}
