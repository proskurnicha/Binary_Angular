import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../../services/flight.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-detail-flight',
  templateUrl: './detail-flight.component.html',
  styleUrls: ['./detail-flight.component.scss']
})
export class DetailFlightComponent implements OnInit {

  constructor(private route: ActivatedRoute, private flightService: FlightService) { }

  flight: Flight;

  ngOnInit() {
    this.getFlightById();
  }

  getFlightById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.flightService.getFlightsById(id)
      .subscribe(
        (d)=> {
          this.flight = d;
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createFlight() {
    const data = {
        // todo set data
    };
    this.flightService.createFlight(data)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    )
  }

  updateFlight(f: NgForm) {
    debugger
    this.flight = f.value;
    this.flightService.updateFlight(this.flight)
    .subscribe(
      (d)=> {
        debugger
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
