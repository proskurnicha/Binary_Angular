import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pilot } from './../model/Pilot';
import { PilotService } from './../services/Pilot.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-pilots',
  templateUrl: './list-pilots.component.html',
  styleUrls: ['./list-pilots.component.scss']
})
export class ListPilotsComponent implements OnInit {

  Pilot: Pilot;

  Pilots: Array<Pilot>;

  constructor(private http: HttpClient,
    private PilotService: PilotService) { 
      this.getPilots();
    }

  ngOnInit() {

  }

  
  getPilots() {
    this.PilotService.getPilots()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.Pilots = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  deletePilot(id: number) {
    this.PilotService.deletePilot(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
        this.getPilots();
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
