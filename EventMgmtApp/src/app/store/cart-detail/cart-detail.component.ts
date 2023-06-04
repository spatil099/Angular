import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { ConnectionService } from 'src/app/model/connection.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent {

  public connected: boolean = true;
  constructor(public cart: Cart, private connection: ConnectionService) {
  this.connected = this.connection.connected;
  connection.Changes.subscribe((state) => this.connected = state);
  }

}
