import { Component, OnInit } from '@angular/core';
import { Order } from '@starbucks/api-interfaces';
import { OrdersService } from '@starbucks/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'starbucks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.orders$ = this.ordersService.all();
  }
}
