import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { API_KEY } from 'src/value';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [{provide: API_KEY, useValue: {apiKey: 2909099, amodule: 'ORDERS'}}]

})
export class OrdersModule { }
