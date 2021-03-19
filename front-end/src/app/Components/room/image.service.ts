import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  protected baseUrl = "http://127.0.0.1:8001/api/customers";
  constructor(private http:HttpClient) { }

  public uploadImage(image:File):Observable<any>{
    const formData=new FormData();
    formData.append('image',image);
    return this.http.post('/api/vi/image-upload',formData);
  }
}
