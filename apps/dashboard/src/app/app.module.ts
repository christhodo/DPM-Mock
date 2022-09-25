import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@starbucks/core-data';
import { RoutingModule } from './routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@starbucks/material';
import { ToolbarComponent, UiToolbarModule } from 'libs/ui-toolbar/src';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreDataModule,
    RoutingModule,
    ReactiveFormsModule,
    UiToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
