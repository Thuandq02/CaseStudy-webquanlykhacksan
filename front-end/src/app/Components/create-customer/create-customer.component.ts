// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from "../customer-service.service";
import {Customer} from "../../customer";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
customer!:any;
  constructor(
    private customerService: CustomerServiceService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.customer=new Customer();
  }

  addCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['customers']);
        this.customer=new Customer();
      },
      error => {
        console.log(error)
      }
    )
  }

}
