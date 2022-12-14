import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '@starbucks/api-interfaces';
import { environment } from 'apps/dashboard/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  model = 'orders';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Order[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Order>(this.getUrlWithId(id));
  }

  create(order: Order) {
    return this.http.post(this.getUrl(), order);
  }

  update(order: Order) {
    return this.http.put(this.getUrlWithId(order.id), order);
  }

  delete(id: number) {
    return this.http.delete(this.getUrlWithId(id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}/${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
