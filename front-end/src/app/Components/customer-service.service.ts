// @ts-ignore
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
private baseUrl="http:127.0.0.1:8000/api/customers";
  constructor(private http: HttpClient) { }

  getCustommerList(){
    return this.http.get(`${this.baseUrl}`);
  }

  createCustomer(value:any){
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
