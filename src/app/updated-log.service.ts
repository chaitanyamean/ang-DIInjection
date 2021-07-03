import { Injectable } from '@angular/core';

@Injectable()
export class UpdatedLogService {

  private static count = 0;

  constructor() { 
    UpdatedLogService.count = UpdatedLogService.count + 1
    console.log(UpdatedLogService.count);
  }

  sayHello(name) {
    return 'hello updated ' + name;
  }}
