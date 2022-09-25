import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '@starbucks/api-interfaces';

@Component({
  selector: 'starbucks-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  currentOrder: Order;
  originalTitle = '';
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set order(value: Order) {
    if (value) this.originalTitle = value.title;
    this.currentOrder = { ...value };
  }
}
