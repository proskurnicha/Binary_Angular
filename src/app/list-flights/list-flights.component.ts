import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Flight } from './../model/flight';
import { FlightService } from './../services/flight.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.scss']
})

export class ListFlightsComponent implements OnInit {

  flight: Flight;

  flights: Array<Flight>;

  constructor(private http: HttpClient,
    private flightService: FlightService) { 
      this.getFlights();
    }

  ngOnInit() {

  }

  
  getFlights() {
    this.flightService.getFlights()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.flights = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  deleteFlight(id: number) {
    this.flightService.deleteFlight(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
        this.getFlights();
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
