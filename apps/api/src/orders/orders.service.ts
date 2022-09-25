import { Injectable } from '@nestjs/common';
import { Order } from '@starbucks/api-interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrdersService {
  mockOrders: Order[] = [
    {
      id: '1',
      title: 'Nest Widget FTW1',
      description: 'Pending...',
      complete: false,
    },
    {
      id: '2',
      title: 'Nest Widget FTW2',
      description: 'Pending...',
      complete: false,
    },
    {
      id: '3',
      title: 'Nest Widget FTW3',
      description: 'Pending...',
      complete: false,
    },
    {
      id: '4',
      title: 'Nest Widget FTW4',
      description: 'Pending...',
      complete: false,
    },
  ];

  findAll() {
    return this.mockOrders;
  }

  findOne(id: string) {
    return this.mockOrders.find((order) => order.id === id);
  }

  create(order: Order) {
    this.mockOrders = [
      ...this.mockOrders,
      Object.assign({}, order, { id: uuidv4() }),
    ];
    return this.mockOrders;
  }

  update(id: string, order: Order) {
    this.mockOrders = this.mockOrders.map((o) => (o.id === id ? order : o));
    return this.mockOrders;
  }

  remove(id: string) {
    this.mockOrders = this.mockOrders.filter((order) => order.id !== id);
    return this.mockOrders;
  }
}
