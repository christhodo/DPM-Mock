import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Order } from '@starbucks/api-interfaces';

@Component({
  selector: 'starbucks-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent {
  @Input() orders: Order[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
