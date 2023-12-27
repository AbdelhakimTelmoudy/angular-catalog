import { Component, OnInit } from '@angular/core';
import { Product } from "../../../model/product.model";
import { ProductService } from "../../../services/products.service";
import {ProductsApiResponse} from "../../../model/ProductsApiResponse";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'] // Fix: Use styleUrls instead of styleUrl
})
export class ProductsListComponent implements OnInit {
  products?: Product[];
  totalPages?: number;
  currentPage: number=1;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.searchProducts();

  }

  searchProducts(){
    this.productService.searchProducts(
      "",
      this.currentPage)
    .subscribe({
      next: (resp: any) => {
      //  console.log('Response:', resp);
        this.totalPages=parseInt( String((resp.body.total / 8)));
   //     console.log(this.totalPages)
        this.products=resp.body.products as Product[];
        // Your code here
      },
      error: (err: any) => {
        console.error('Error:', err);
      }
    });
  }


  handleGotoPage(page: number) {
    this.currentPage=page;
    this.searchProducts();

  }
}
