import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private newapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.newapi.viewBlood().subscribe(
      (data)=>{
this.donorData=data
      }
    )
  }
  
  donorData:any = [
   
  ]
  ngOnInit(): void {
  }

}
