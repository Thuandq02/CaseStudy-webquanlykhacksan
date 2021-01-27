import {Component, OnInit} from '@angular/core';
import {RoomService} from "../room.service";
import {Router} from "@angular/router";
import {Room} from "../room";
import {ImageService} from "../image.service";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {
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
  selectedFile: null = null;
  srcImg!: string;
  fb: string | undefined;
  downloadURL: Observable<string> | undefined;
  uploadPercent: any;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private imageService: ImageService,
    private storage: AngularFireStorage
  ) {
  }

  private onSuccess() {
    // this.selectedFile.pending=false;
    // this.selectedFile.status='ok';
  }

  private onError() {

  }

  ngOnInit(): void {
    this.room = new Room();
  }

  addRoom() {
    this.room.image = this.srcImg;
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


  onFileSelected(event: any) {
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
  }
}


