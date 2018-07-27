import { Component, OnInit } from '@angular/core';
import { Pilot } from './../model/Pilot';
import { PilotService } from './../services/Pilot.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-detail-Pilot',
  templateUrl: './detail-Pilot.component.html',
  styleUrls: ['./detail-Pilot.component.scss']
})
export class DetailPilotComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private fb: FormBuilder,
              private PilotService: PilotService) { 
    const id = this.route.snapshot.paramMap.get('id');
    if(id != 0) {
      this.getPilotById();
    }
    else {
      this.createPilotForm();
    }
  }
  
  Pilot: Pilot;
  PilotForm: FormGroup;

  ngOnInit() {
  }

  getPilotById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.PilotService.getPilotsById(id)
      .subscribe(
        (d)=> {
          this.Pilot = d;
          this.createPilotForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createPilot(Pilot: Pilot) {
    debugger
    this.PilotService.createPilot(Pilot)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  
  createPilotForm(): void {
    if(this.Pilot != null){
      this.PilotForm = this.fb.group({
        name: [ this.Pilot.name, []],
        surname: [ this.Pilot.surname, []],
        dateBirth: [this.Pilot.dateBirth, []],
        experience: [this.Pilot.experience, []],
        crewId: [this.Pilot.crewId, []]
        // arrivalTime: [this.Pilot.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    } 
    else {
      this.PilotForm = this.fb.group({
        name: [ '', []],
        surname: ['', []],
        dateBirth: ['', []],
        experience: ['', []],
        crewId: ['', []]
      });
    }
  }

  applyChanges(Pilot: Pilot): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id != 0) { 
      this.updatePilot(Pilot)
    }
    else {
      this.createPilot(Pilot);
    }    
  }

  updatePilot(Pilot: Pilot) {
    Pilot.id = this.Pilot.id;
      this.PilotService.updatePilot(Pilot)
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
