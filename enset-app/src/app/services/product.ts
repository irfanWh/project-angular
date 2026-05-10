import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    {id: 1, name: "product 1", price: 100, selected: true},
    {id: 2, name: "product 2", price: 200, selected: false},
    {id: 3, name: "product 3", price: 300, selected: false}
  ];
  getProducts() {
    return this.products;
  }

  deleteProduct(product: any): void {
    let conf = confirm("Are you sure?");
    if (conf){
      this.products = this.products.filter((p: any) => p.id != product.id);
    }
  }
}
