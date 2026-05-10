import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get("http://localhost:8083/products");
  }

  deleteProduct(product: any): void {
    let conf = confirm("Are you sure?");
    if (conf){
      this.http.delete(`http://localhost:8083/products/${product.id}`).subscribe({
        next: resp => {
          console.log(resp);
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}
