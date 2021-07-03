import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { API_KEY } from 'src/value';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  message: string;
  constructor(private logService: LogService, @Inject(API_KEY) a) {
    console.log('AAA', a)
   }

  ngOnInit(): void {
    this.message = this.logService.sayHello('child 2')
  }

}
