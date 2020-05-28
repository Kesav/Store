import { Component } from '@angular/core';
import { User } from './address/user.model';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User;
  inputText: string = "Initial Value";

  // this will create myService like class variable 
  constructor(private myService: MyserviceService){
    this.user = new User();
    this.user.name = "Devdutt Jadeja";
    this.user.designation = "Software Developer";
    this.user.address = "1280 Rue Saint marc";
    this.user.phone = [ "439-357-9977" , "8446592322" ]

    this.myService.printToConsole("this is going to be printed in console")

  }

}
