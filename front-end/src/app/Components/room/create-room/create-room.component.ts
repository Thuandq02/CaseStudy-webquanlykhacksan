import { Component, OnInit } from '@angular/core';
import {RoomService} from "../room.service";
import {Router} from "@angular/router";
import {Room} from "../room";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
room!: any
  customers: any;
  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.room=new Room();
  }

  addRoom(){
  console.log(this.room)
  this.roomService.createRoom(this.room).subscribe(
    data=> {
      console.log(data);
      this.router.navigate(['rooms']);
      this.room=new Room();
    },
    error => {
      console.log(error)
    }
  )
  }

}
