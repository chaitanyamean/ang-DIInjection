import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nggeek';
url: undefined

constructor(private router: Router){}
  sendData() {
    this.router.navigateByUrl('')

  }

  clickOnCustomer() {
    console.log('sasas')
    this.router.navigateByUrl('/customers')
  }

  clickOnOrder() {
    this.router.navigateByUrl('/orders')

  }

}
