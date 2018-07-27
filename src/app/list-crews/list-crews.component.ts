import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Crew } from './../model/Crew';
import { CrewService } from './../services/Crew.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-crews',
  templateUrl: './list-crews.component.html',
  styleUrls: ['./list-crews.component.scss']
})
export class ListCrewsComponent implements OnInit {

  Crew: Crew;

  Crews: Array<Crew>;

  constructor(private http: HttpClient,
    private CrewService: CrewService) { 
      this.getCrews();
    }

  ngOnInit() {

  }

  
  getCrews() {
    this.CrewService.getCrews()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.Crews = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  deleteCrew(id: number) {
    this.CrewService.deleteCrew(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
        this.getCrews();
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
