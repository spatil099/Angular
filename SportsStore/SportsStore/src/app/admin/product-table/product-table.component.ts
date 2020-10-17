import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  constructor(public repository : ProductRepository) { }

  get products(){
    return this.repository.getProducts();
  }

  deleteProduct(product : Product){
    this.repository.deleteProduct(product.id);
  }
}
