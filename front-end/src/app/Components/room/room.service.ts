import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
protected baseUrl="http://127.0.0.1:8001/api/rooms"
  constructor(private http: HttpClient) { }

  getListRoom(){
  return this.http.get(`${this.baseUrl}`);
  }

  createRoom(value:any){
  return this.http.post(`${this.baseUrl}`,value);
  }

  updateRoom(id:number,value:any){
  return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  getRoom(id:number){
  return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteRoom(id:number){
  return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
