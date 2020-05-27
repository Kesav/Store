import { Component } from '@angular/core';
import { User } from './address/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User;
  inputText: string = "Initial Value";

  constructor(){
    this.user = new User();
    this.user.name = "Devdutt Jadeja";
    this.user.designation = "Software Developer";
    this.user.address = "1280 Rue Saint marc";
    this.user.phone = [ "439-357-9977" , "8446592322" ]
  }

}
