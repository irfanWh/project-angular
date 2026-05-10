import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit {
  products! : any;

  constructor() { }
  
  ngOnInit(): void {
    this.products = [
    {id: 1, name: "product 1", price: 100, selected: true},
    {id: 2, name: "product 2", price: 200, selected: false},
    {id: 3, name: "product 3", price: 300, selected: false}
  ];
  }
  deleteProduct(product: any): void {
    let conf = confirm("Are you sure?");
    if (conf){
      this.products = this.products.filter((p: any) => p.id != product.id);
    }
  }
}
