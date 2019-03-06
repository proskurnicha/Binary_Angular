import { Component, OnInit } from '@angular/core';
import { TypeAircraft } from './../model/type-aircraft';
import { TypeAircraftService } from './../services/type-aircraft.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

  @Component({
    selector: 'app-detail-typeaircraft',
    templateUrl: './detail-typeaircraft.component.html',
    styleUrls: ['./detail-typeaircraft.component.scss']
  })

export class DetailTypeaircraftComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private TypeAircraftService: TypeAircraftService) {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != '0') {
      this.getTypeAircraftById();
    }
    else {
      this.createTypeAircraftForm();
    }
  }

  TypeAircraft: TypeAircraft;
  TypeAircraftForm: FormGroup;

  ngOnInit() {
  }

  getTypeAircraftById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.TypeAircraftService.getTypeAircraftsById(id)
      .subscribe(
        (d)=> {
          this.TypeAircraft = d;
          this.createTypeAircraftForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createTypeAircraft(TypeAircraft: TypeAircraft) {
    this.TypeAircraftService.createTypeAircraft(TypeAircraft)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }


  createTypeAircraftForm(): void {
    if(this.TypeAircraft != null){
      this.TypeAircraftForm = this.fb.group({
        aircraftModel: [ this.TypeAircraft.aircraftModel, []],
        numberPlaces: [ this.TypeAircraft.numberPlaces, []],
        carryingCapacity: [this.TypeAircraft.carryingCapacity, []],
        // arrivalTime: [this.TypeAircraft.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    }
    else {
      this.TypeAircraftForm = this.fb.group({
        aircraftModel: [ '', []],
        numberPlaces: ['', []],
        carryingCapacity: ['', []]
      });
    }
  }

  applyChanges(TypeAircraft: TypeAircraft): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != '0') {
      this.updateTypeAircraft(TypeAircraft)
    }
    else {
      this.createTypeAircraft(TypeAircraft);
    }
  }

  updateTypeAircraft(TypeAircraft: TypeAircraft) {
    TypeAircraft.id = this.TypeAircraft.id;
      this.TypeAircraftService.updateTypeAircraft(TypeAircraft)
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
