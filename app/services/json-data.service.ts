import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JsonDataService {
  dataURL : string = "http://webflex-website-demo.s3-website-ap-southeast-2.amazonaws.com/data.json";
  data : Observable<any>;

  constructor(private http: HttpClient) {

   }

  getData() : Observable<any[]> {
    this.data = this.http.get<any[]>(this.dataURL);
    return this.data;
  }

  updateData(data : any): Observable<any> {
    this.data =  data;
    return this.http.post<any>(this.dataURL, this.data);
  }

}
