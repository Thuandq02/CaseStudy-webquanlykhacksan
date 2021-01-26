import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../customer";

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  id: any;
  customer!: any;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customer = new Customer();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        console.log(data)
        this.customer = data;
      }, error => console.log(error));
  }
  list(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['customers']);
  }

}
