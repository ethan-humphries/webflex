import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//const myURL : "";
export class JsonDataService {
  
  constructor(private http: HttpClient) {

   }
}
