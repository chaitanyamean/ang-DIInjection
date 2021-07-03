import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedLogService } from './updated-log.service';
import { Child3Component } from './child3/child3.component';
import { GlobalerrorhandlerService } from './globalerrorhandler.service';
import { API_KEY } from 'src/value';
import { FeatureModule } from './feature/feature.module';
import { AppRoutingModule } from './app-routing.module';

// var configValue = 10

// function getObject() {
//   if(configValue === 10) {
//     return new LogService()
//   }
//   return new UpdatedLogService()
// }

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    AppRoutingModule
  ],
  providers: [
              { provide: UpdatedLogService, useClass: UpdatedLogService },
              {provide: ErrorHandler, useClass: GlobalerrorhandlerService},
              {provide: API_KEY, useValue: {apiKey: 123456, amodule: 'APP'}}],
  bootstrap: [AppComponent],
})
export class AppModule { }


// use Existing uses already existing toke
// use Factory uses a method of bussiness logic based on that 
// it will create an object of service1(LogService) or service2(UpdatedLogService)
// useValue is used for to pass data to different components in modules
// { provide: LogService, useFactory: getObject }

/*
Eagerly loaded modules uses same object as app module uses
*/