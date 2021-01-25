import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Room} from "../room";
import {RoomService} from "../room.service";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
room!: any;
id!: any;
  constructor(private service:RoomService,
              private router:Router,
              private route:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.room=new Room();

    this.service.getRoom(this.id).subscribe(
      data=>{
        this.room=data;
      },error => console.log(error)
    )
  }

  editRoom(){
    this.service.updateRoom(this.id,this.room).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['rooms']);
      },error => console.log(error)
    )
  }
}
