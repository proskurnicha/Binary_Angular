import { Component, OnInit } from '@angular/core';
import { Crew } from './../model/Crew';
import { CrewService } from './../services/Crew.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-detail-Crew',
  templateUrl: './detail-Crew.component.html',
  styleUrls: ['./detail-Crew.component.scss']
})
export class DetailCrewComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private fb: FormBuilder,
              private CrewService: CrewService) { 
    const id = this.route.snapshot.paramMap.get('id');
    if(id != 0) {
      this.getCrewById();
    }
    else {
      this.createCrewForm();
    }
  }
  
  Crew: Crew;
  CrewForm: FormGroup;

  ngOnInit() {
  }

  getCrewById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.CrewService.getCrewsById(id)
      .subscribe(
        (d)=> {
          this.Crew = d;
          this.createCrewForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createCrew(Crew: Crew) {
    debugger
    this.CrewService.createCrew(Crew)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  
  createCrewForm(): void {
    if(this.Crew != null){
      this.CrewForm = this.fb.group({
        pilotId: [ this.Crew.pilotId, []],
        // arrivalTime: [this.Crew.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    } 
    else {
      this.CrewForm = this.fb.group({
        pilotId: [ '', []],
      });
    }
  }

  applyChanges(Crew: Crew): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id != 0) { 
      this.updateCrew(Crew)
    }
    else {
      this.createCrew(Crew);
    }    
  }

  updateCrew(Crew: Crew) {
    Crew.id = this.Crew.id;
      this.CrewService.updateCrew(Crew)
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
