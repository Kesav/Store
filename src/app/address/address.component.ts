import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  user: any;

  constructor() { 

    this.user = {
      Name : "Devdutt Jadeja",
      Age : "27",
      Address : "1280 rue saint marc",
      Phone : [ "8446592322" , "438-357-9977","8806325336"]
    };

  }

  ngOnInit() {
  }

}
