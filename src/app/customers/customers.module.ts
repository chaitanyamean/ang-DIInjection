import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { API_KEY } from 'src/value';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [{provide: API_KEY, useValue: {apiKey: 123456, amodule: 'CUSTOMERS'}}]
})
export class CustomersModule { }
