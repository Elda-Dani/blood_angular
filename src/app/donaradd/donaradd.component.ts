import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donaradd',
  templateUrl: './donaradd.component.html',
  styleUrls: ['./donaradd.component.css']
})
export class DonaraddComponent implements OnInit {

  constructor() { }

  name=""
bloodGroup=""
dob=""
lastDonation=""
previousDiseases=""
lastVaccination=""
address=""
pincode=""
mobile=""
emailid=""


readValue=()=>{
  let data={
  "name":this.name,
"bloodGroup":this.bloodGroup,
"dob":this.dob,
"lastDonation":this.lastDonation,
"previousDiseases":this.previousDiseases,
"lastVaccination":this.lastVaccination,
"address":this.address,
"pincode":this.pincode,
"mobile":this.mobile,
"emailid":this.emailid
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
