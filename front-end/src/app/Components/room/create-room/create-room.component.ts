import { Component, OnInit } from '@angular/core';
import {RoomService} from "../room.service";
import {Router} from "@angular/router";
import {Room} from "../room";
import {ImageService} from "../image.service";

class ImageSnippet{
  pending: boolean=false;
  status:string= 'init';
  constructor(public src:string, public file:File) {
  }
}
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room!: any
  customers: any;
  selectedFile!: ImageSnippet;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private imageService: ImageService,
  ) {}

  private onSuccess(){
    this.selectedFile.pending=false;
    this.selectedFile.status='ok';
  }

  private onError(){

  }

  ngOnInit(): void {
    this.room = new Room();
  }

  addRoom() {
    console.log(this.room)
    this.roomService.createRoom(this.room).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['rooms']);
        this.room = new Room();
      },
      error => {
        console.log(error)
      }
    )
  }


}


