import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Departure } from './../model/Departure';
import { DepartureService } from './../services/Departure.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-departures',
  templateUrl: './list-departures.component.html',
  styleUrls: ['./list-departures.component.scss']
})
export class ListDeparturesComponent implements OnInit {

  Departure: Departure;

  Departures: Array<Departure>;

  constructor(private http: HttpClient,
    private DepartureService: DepartureService) { 
      this.getDepartures();
    }

  ngOnInit() {

  }

  
  getDepartures() {
    this.DepartureService.getDepartures()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.Departures = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  deleteDeparture(id: number) {
    debugger
    this.DepartureService.deleteDeparture(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
        this.getDepartures();
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
