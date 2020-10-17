import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent {

  includeShipped = false;
  constructor(private repository: OrderRepository) { }

  getOrders(): Order[] {
    return this.repository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  delete(id: number) {
    this.repository.deleteOrder(id);
    }
}
