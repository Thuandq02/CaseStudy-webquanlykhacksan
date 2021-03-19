import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../room/room.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  roomnumbers!: any;
  customer!: any;
  id!: any;

  constructor(
    private roomService: RoomService,
    private service: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customer = new Customer();

    this.service.getCustomer(this.id).subscribe(
      data => {
        this.customer = data;
      },error => console.log(error)

    )
    this.roomService.getListRoom().subscribe(
      data => {
        this.roomnumbers = data;
      }
    )
  }

  editCustomer(){
    this.service.updateCustomer(this.id,this.customer).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['customers']);
      },error => console.log(error)
    )
  }
}
