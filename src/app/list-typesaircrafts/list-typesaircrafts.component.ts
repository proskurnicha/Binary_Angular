import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TypeAircraft } from './../model/type-aircraft';
import { TypeAircraftService } from './../services/type-aircraft.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-list-typesaircrafts',
  templateUrl: './list-typesaircrafts.component.html',
  styleUrls: ['./list-typesaircrafts.component.scss']
})
export class ListTypesaircraftsComponent implements OnInit {

  TypeAircraft: TypeAircraft;

  TypesAircraft: Array<TypeAircraft>;

  constructor(private http: HttpClient,
    private TypeAircraftService: TypeAircraftService) { 
      this.getTypesAircraft();
    }

  ngOnInit() {

  }

  
   getTypesAircraft() {
     this.TypeAircraftService.getTypeAircraft()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.TypesAircraft = d;
        },
        err => {
          console.log('err', err);
        }
      )
   }

  deleteTypeAircraft(id: number) {
    this.TypeAircraftService.deleteTypeAircraft(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
        this.getTypesAircraft();
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
