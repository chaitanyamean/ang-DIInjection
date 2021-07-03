import { Injectable, Inject } from '@angular/core';
import { API_KEY } from 'src/value';

@Injectable({
  providedIn: 'any'
})
/*
 only one object is created
 this service is tree shakable service
 tree shakable service - if this service is used some 
 where in any component then it is added to the final 
 bundle else not added
 * -> If this service is declaared in app.module.ts then it won't be a tree shakable
*/
export class LogService {

  private static count = 0;

  constructor(@Inject(API_KEY) private apiKey) { 
    LogService.count = LogService.count + 1
    console.log(LogService.count);
  }

  sayHello(name) {
    return 'hello ' + name;
  }

  getApiKey() {
    return this.apiKey;
  }


}
