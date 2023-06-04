import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent {

  constructor(public cart : Cart) { }
}
