import { Component, OnInit } from '@angular/core';
import { Order } from '@starbucks/api-interfaces';
import { OrdersService } from '@starbucks/core-data';
import { Observable } from 'rxjs';

const emptyOrder: Order = {
  id: null,
  title: '',
  description: '',
  complete: false,
};

@Component({
  selector: 'starbucks-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  selectedOrder: Order;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadOrders();
    this.selectOrder(null);
  }

  resetForm() {
    this.selectedOrder = emptyOrder;
  }

  selectOrder(order: Order) {
    this.selectedOrder = order;
  }

  loadOrders() {
    this.orders$ = this.ordersService.all();
  }

  saveOrder(order: Order) {
    if (order.id) {
      this.updateOrder(order);
    } else {
      this.createOrder(order);
    }
  }

  createOrder(order: Order) {
    this.ordersService.create(order).subscribe((result) => this.reset());
  }

  updateOrder(order: Order) {
    this.ordersService.update(order).subscribe((result) => this.reset());
  }

  deleteOrder(id: number) {
    this.ordersService.delete(id).subscribe((result) => this.reset());
  }
}
