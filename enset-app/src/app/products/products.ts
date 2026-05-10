import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit {
  products! : any;

  constructor(private productService: Product) {}
  
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() : void {
    this.products = this.productService.getProducts().subscribe({
      next: resp => {
        this.products = resp;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  deleteProduct(product : any) {
    this.productService.deleteProduct(product);
    this.getAllProducts();
  }
}
