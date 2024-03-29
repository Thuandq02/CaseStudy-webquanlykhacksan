import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
protected baseUrl="http://127.0.0.1:8000/api/rooms"
  constructor(private http: HttpClient) { }

  getListRoom(){
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
  return this.http.get(`${this.baseUrl}`, {headers:reqHeader });
  }

  createRoom(value:any){
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
  return this.http.post(`${this.baseUrl}`,value, {headers:reqHeader });
  }

  updateRoom(id:number,value:any){
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
  return this.http.put(`${this.baseUrl}/${id}`,value, {headers:reqHeader });
  }

  getRoom(id:number){
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
  return this.http.get(`${this.baseUrl}/${id}`, {headers:reqHeader });
  }

  deleteRoom(id:number){
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
  return this.http.delete(`${this.baseUrl}/${id}`,{headers:reqHeader });
  }
}
