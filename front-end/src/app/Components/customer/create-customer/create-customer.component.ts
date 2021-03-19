import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import {Customer} from "../customer";
import { RoomService } from '../../room/room.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer!: any;
  roomnumbers!: any;
  constructor(
    private roomService: RoomService,
    private customerService: CustomerService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.roomService.getListRoom().subscribe(
      data => {
        this.roomnumbers = data;
        console.log(data)
      }
    )

  }

  addCustomer(){
    console.log(this.customer);
    this.customerService.createCustomer(this.customer).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['customers']);
        this.customer = new Customer();
      },
      error => {
        console.log(error)
      }
    )
  }


}
