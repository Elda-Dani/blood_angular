import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private https:HttpClient) { }

  viewBlood=()=>{
    return this.https.get("https://jsonplaceholder.typicode.com/users")
  }
}
