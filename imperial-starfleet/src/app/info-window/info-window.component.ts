import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

  dataBanks;
  
  constructor(
    private http: Http
  ) { }

  findTurret(turretNumber){
    console.log('hi there');
    this.http.get(`http://localhost:3000/api/turret/${turretNumber}`)
    .toPromise()
    // .then(response => console.log(response.json().turretNumber));
    .then(response => this.dataBanks = response.json().turretNumber);

  }

    ngOnInit() {
    this.findTurret(5);
    this.findTurret(8);
    }

}
