import { Component, OnInit } from '@angular/core';
import { Stewardesses } from './../model/Stewardesses';
import { StewardessService } from './../services/Stewardess.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-detail-stewardess',
  templateUrl: './detail-stewardess.component.html',
  styleUrls: ['./detail-stewardess.component.scss']
})
export class DetailStewardessComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private StewardessService: StewardessService) {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != '0') {
      this.getStewardessById();
    }
    else {
      this.createStewardessForm();
    }
  }

  Stewardess: Stewardesses;
  StewardessForm: FormGroup;

  ngOnInit() {
  }

  getStewardessById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.StewardessService.getStewardessesById(id)
      .subscribe(
        (d)=> {
          this.Stewardess = d;
          this.createStewardessForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createStewardess(Stewardess: Stewardesses) {
    debugger
    this.StewardessService.createStewardess(Stewardess)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }


  createStewardessForm(): void {
    if(this.Stewardess != null){
      this.StewardessForm = this.fb.group({
        name: [ this.Stewardess.name, []],
        surname: [ this.Stewardess.surname, []],
        dateBirth: [this.Stewardess.dateBirth, []],
        crewId: [this.Stewardess.crewId, []]
        // arrivalTime: [this.Stewardess.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    }
    else {
      this.StewardessForm = this.fb.group({
        name: [ '', []],
        surname: ['', []],
        dateBirth: ['', []],
        crewId: ['', []]
      });
    }
  }

  applyChanges(Stewardess: Stewardesses): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id != '0') {
      this.updateStewardess(Stewardess)
    }
    else {
      this.createStewardess(Stewardess);
    }
  }

  updateStewardess(Stewardess: Stewardesses) {
    Stewardess.id = this.Stewardess.id;
      this.StewardessService.updateStewardess(Stewardess)
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
