import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  user: any;
  @Input('designation') designation: string;

  constructor() { 
  }

  ngOnInit() {

    this.user = {  
      Name : "Devdutt Jadeja",
      Designation : this.designation,
      Age : "27",
      Address : "1280 rue saint marc",
      Phone : [ "438-357-9977" , "8446592322"]
    }
    
  }

}
