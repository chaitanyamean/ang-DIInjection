import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

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
