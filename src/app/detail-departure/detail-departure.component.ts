import { Component, OnInit } from '@angular/core';
import { Departure } from './../model/Departure';
import { DepartureService } from './../services/Departure.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-detail-Departure',
  templateUrl: './detail-Departure.component.html',
  styleUrls: ['./detail-Departure.component.scss']
})
export class DetailDepartureComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private DepartureService: DepartureService) {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != '0') {
      this.getDepartureById();
    }
    else {
      this.createDepartureForm();
    }
  }

  Departure: Departure;
  DepartureForm: FormGroup;

  ngOnInit() {
  }

  getDepartureById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.DepartureService.getDeparturesById(id)
      .subscribe(
        (d)=> {
          this.Departure = d;
          this.createDepartureForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createDeparture(Departure: Departure) {
    debugger
    this.DepartureService.createDeparture(Departure)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }


  createDepartureForm(): void {
    if(this.Departure != null){
      this.DepartureForm = this.fb.group({
        flightId: [ this.Departure.flightId, []],
        departureTime: [ this.Departure.departureTime, []],
        aircraftId: [this.Departure.aircraftId, []],
        crewId: [this.Departure.crewId, []],
        // arrivalTime: [this.Departure.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    }
    else {
      this.DepartureForm = this.fb.group({
        flightId: [ '', []],
        departureTime: ['', []],
        aircraftId: ['', []],
        crewId: ['', []]
      });
    }
  }

  applyChanges(Departure: Departure): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id != '0') {
      this.updateDeparture(Departure)
    }
    else {
      this.createDeparture(Departure);
    }
  }

  updateDeparture(Departure: Departure) {
    Departure.id = this.Departure.id;
      this.DepartureService.updateDeparture(Departure)
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
