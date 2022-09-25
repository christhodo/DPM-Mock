import { Component } from '@angular/core';

@Component({
  selector: 'starbucks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';

  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/orders', icon: 'view_list', title: 'Orders' },
  ];
}
