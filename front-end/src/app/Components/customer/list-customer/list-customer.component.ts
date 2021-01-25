import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: any;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.customerService.getListCustomer().subscribe(
      data => {
        this.customers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(
      data => {
        this.loadData();
      },error => console.log(error)
    )
  }

}
