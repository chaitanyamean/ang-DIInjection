import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { API_KEY } from 'src/value';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnInit {

  message: string;
  apiKey: string;
  constructor(private logService: LogService, @Inject(API_KEY) a) {
    console.log(a)
   }

  ngOnInit(): void {
    this.message = this.logService.sayHello('child 1')
    this.apiKey = this.logService.getApiKey();
    console.log(this.apiKey)
  }

}
