import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import {Customer} from "../customer";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer!: any;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  addCustomer(){
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
