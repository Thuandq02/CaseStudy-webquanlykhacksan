import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  protected baseUrl = "http://127.0.0.1:8000/api/customers";
  constructor(private http: HttpClient) { }

  getListCustomer(){
    return this.http.get(`${this.baseUrl}`);
  }

  createCustomer(value: any){
    return this.http.post(`${this.baseUrl}`,value);
  }

  updateCustomer(id: number,value: any){
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  getCustomer(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteCustomer(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
