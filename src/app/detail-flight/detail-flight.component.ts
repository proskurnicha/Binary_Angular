import { Component, OnInit } from '@angular/core';
import { Flight } from './../model/flight';
import { FlightService } from './../services/flight.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-flight',
  templateUrl: './detail-flight.component.html',
  styleUrls: ['./detail-flight.component.scss']
})
export class DetailFlightComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private fb: FormBuilder,
              private flightService: FlightService) { 
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.getFlightById();
    }
  }
  
  flight: Flight;
  flightForm: FormGroup;

  ngOnInit() {
  }

  getFlightById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.flightService.getFlightsById(id)
      .subscribe(
        (d)=> {
          this.flight = d;
          this.createFlightForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createFlight(flight: Flight) {
    this.flightService.createFlight(flight)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  createFlightForm(): void {
    this.flightForm = this.fb.group({
      departurePoint: [ this.flight.departurePoint || '', []],
      arrivalPoint: [ this.flight.arrivalPoint || '', []],
      departureTime: [ this.flight.departureTime || '', []],
      arrivalTime: [this.flight.arrivalTime || '', []],
      id: [this.flight.arrivalTime || '', []]
      // arrivalTime: [this.flight.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
    });
  }

  applyChanges(flight: Flight): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id) { 
      this.updateFlight(flight)
    }
    else {
      this.createFlight(flight);
    }    
  }

  updateFlight(flight: Flight) {
    flight.id = this.flight.id;
      this.flightService.updateFlight(flight)
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
