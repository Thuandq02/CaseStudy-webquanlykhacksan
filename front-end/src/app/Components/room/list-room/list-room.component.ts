import { Component, OnInit } from '@angular/core';
import {RoomService} from "../room.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
rooms: any;
cutomers!: any;
  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.roomService.getListRoom().subscribe(
      data =>{
        this.rooms=data;
        console.log(data);
      }
    )
  }

  deleteRoom(id:number){
    this.roomService.deleteRoom(id).subscribe(
      data=>{
        this.loadData();
      },
      error => console.log(error)
    )
  }
}
