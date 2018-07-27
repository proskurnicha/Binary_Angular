import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Stewardesses } from './../model/Stewardesses';
import { StewardessService } from './../services/Stewardess.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-stewardesses',
  templateUrl: './list-stewardesses.component.html',
  styleUrls: ['./list-stewardesses.component.scss']
})

export class ListStewardessesComponent implements OnInit {

  Stewardess: Stewardesses;

  Stewardesses: Array<Stewardesses>;

  constructor(private http: HttpClient,
    private StewardessService: StewardessService) { 
      this.getStewardesses();
    }

  ngOnInit() {

  }

  
  getStewardesses() {
    this.StewardessService.getStewardesses()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.Stewardesses = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  deleteStewardess(id: number) {
    this.StewardessService.deleteStewardess(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
        this.getStewardesses();
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
