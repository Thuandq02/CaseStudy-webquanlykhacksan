import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Room} from "../room";
import {RoomService} from "../room.service";
import {Observable} from "rxjs";
import {ImageService} from "../image.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators"; //

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
room!: any;
id!: any;

  selectedFile: null = null; //
  srcImg!: string; //
  fb: string | undefined;  //
  downloadURL: Observable<string> | undefined; //

  constructor(private service:RoomService,
              private router:Router,
              private route:ActivatedRoute,
              private imageService: ImageService,//
              private storage: AngularFireStorage
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

  onFileSelected(event: any) { //
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.srcImg = url;
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {

          // console.log(url);
        }
      });
  } //
}
