import { Component, OnInit } from '@angular/core';
import { Aircraft } from './../model/Aircraft';
import { AircraftService } from './../services/Aircraft.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-detail-aircraft',
  templateUrl: './detail-aircraft.component.html',
  styleUrls: ['./detail-aircraft.component.scss']
})
export class DetailAircraftComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private AircraftService: AircraftService) {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != '0') {
      this.getAircraftById();
    }
    else {
      this.createAircraftForm();
    }
  }

  Aircraft: Aircraft;
  AircraftForm: FormGroup;

  ngOnInit() {
  }

  getAircraftById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.AircraftService.getAircraftsById(id)
      .subscribe(
        (d)=> {
          this.Aircraft = d;
          this.createAircraftForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createAircraft(Aircraft: Aircraft) {
    debugger
    this.AircraftService.createAircraft(Aircraft)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }


  createAircraftForm(): void {
    if(this.Aircraft != null){
      this.AircraftForm = this.fb.group({
        id: [this.Aircraft.id, []],
        aircraftName: [ this.Aircraft.aircraftName, []],
        typeAircraftId: [ this.Aircraft.typeAircraftId, []],
        dateRelease: [this.Aircraft.dateRelease, []],
        lifetime: [this.Aircraft.lifetime, []],
        // arrivalTime: [this.Aircraft.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    }
    else {
      this.AircraftForm = this.fb.group({
        aircraftName: [ '', []],
        typeAircraftId: ['', []],
        dateRelease: ['', []],
        lifetime: ['', []],
        crewId:['', []],
      });
    }
  }

  applyChanges(Aircraft: Aircraft): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id !='0') {
      this.updateAircraft(Aircraft)
    }
    else {
      this.createAircraft(Aircraft);
    }
  }

  updateAircraft(Aircraft: Aircraft) {
    Aircraft.id = this.Aircraft.id;
      this.AircraftService.updateAircraft(Aircraft)
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
