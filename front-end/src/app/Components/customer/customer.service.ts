import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  protected baseUrl = "http://127.0.0.1:8000/api/customers";
  constructor(private http: HttpClient) { }

  getListCustomer(){
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

  createCustomer(value: any){
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

  updateCustomer(id: number,value: any){
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

  getCustomer(id: number){
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

  deleteCustomer(id: number){
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
