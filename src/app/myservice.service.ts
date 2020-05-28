import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  printToConsole(arg){
    console.log(arg)
  }

  constructor() { }
}
