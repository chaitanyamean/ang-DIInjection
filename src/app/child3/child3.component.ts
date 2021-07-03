import { Component, OnInit } from '@angular/core';
import { UpdatedLogService } from '../updated-log.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  message: string;
  constructor(private logService: UpdatedLogService) { }

  ngOnInit(): void {
    this.message = this.logService.sayHello('child 3')
  }

}
