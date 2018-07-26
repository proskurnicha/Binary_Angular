import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Aircraft } from './../model/Aircraft';
import { AircraftService } from './../services/Aircraft.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-aircrafts',
  templateUrl: './list-aircrafts.component.html',
  styleUrls: ['./list-aircrafts.component.scss']
})
export class ListAircraftsComponent implements OnInit {

  Aircraft: Aircraft;

  Aircrafts: Array<Aircraft>;

  constructor(private http: HttpClient,
    private AircraftService: AircraftService) { 
      this.getAircrafts();
    }

  ngOnInit() {

  }

  
  getAircrafts() {
    this.AircraftService.getAircrafts()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.Aircrafts = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  deleteAircraft(id: number) {
    this.AircraftService.deleteAircraft(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
