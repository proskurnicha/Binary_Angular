import { Component, OnInit } from '@angular/core';
import { Flight } from './../model/Flight';
import { FlightService } from './../services/Flight.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-detail-Flight',
  templateUrl: './detail-Flight.component.html',
  styleUrls: ['./detail-Flight.component.scss']
})
export class DetailFlightComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private fb: FormBuilder,
              private FlightService: FlightService) { 
    const id = this.route.snapshot.paramMap.get('id');
    debugger
    if(id != 0) {
      this.getFlightById();
    }
    else {
      this.createFlightForm();
    }
  }
  
  Flight: Flight;
  FlightForm: FormGroup;

  ngOnInit() {
  }

  getFlightById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.FlightService.getFlightsById(id)
      .subscribe(
        (d)=> {
          this.Flight = d;
          this.createFlightForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createFlight(Flight: Flight) {
    debugger
    this.FlightService.createFlight(Flight)
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
    if(this.Flight != null){
      this.FlightForm = this.fb.group({
        departurePoint: [ this.Flight.departurePoint || '', []],
      arrivalPoint: [ this.Flight.arrivalPoint || '', []],
      departureTime: [ this.Flight.departureTime || '', []],
      arrivalTime: [this.Flight.arrivalTime || '', []],
        // arrivalTime: [this.Flight.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    } 
    else {
      this.FlightForm = this.fb.group({
        departurePoint: [ '', []],
        arrivalPoint: ['', []],
        departureTime: ['', []],
        arrivalTime: ['', []]
      });
    }
  }

  applyChanges(Flight: Flight): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id != 0) { 
      this.updateFlight(Flight)
    }
    else {
      this.createFlight(Flight);
    }    
  }

  updateFlight(Flight: Flight) {
    Flight.id = this.Flight.id;
      this.FlightService.updateFlight(Flight)
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

