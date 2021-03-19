import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../customer";
import {Observable} from "rxjs";
import {Room} from "../../room/room";
import {RoomService} from "../../room/room.service";

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  id: any;
  customer!: Customer;
  room!: Room;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.room= new Room();

    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.customerService.getCustomer(this.id)
      .subscribe((data: any) => {
        // console.log(data.id)
        this.customer = data;
        this.roomService.getRoom(this.customer.roomnumber).subscribe(
          (value:any)=>{
            this.room=value;
            console.log(value)
          }
        )
      }, error => console.log(error));
  }
  list(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['customers']);
  }

}
