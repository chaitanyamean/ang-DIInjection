import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  message: string;
  apiKey: string;
  constructor(private logService: LogService) {
   }
    ngOnInit(): void {
      this.message = this.logService.sayHello('Customers')
      this.apiKey = this.logService.getApiKey();
      console.log(this.apiKey)
    }

}
