import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonor',
  templateUrl: './searchdonor.component.html',
  styleUrls: ['./searchdonor.component.css']
})
export class SearchdonorComponent implements OnInit {

  constructor() { }

  bloodGroup=""
readValues=()=>{
 let data ={
  "bloodGroup":this.bloodGroup
 }
 console.log(data)
}

  ngOnInit(): void {
  }

}
