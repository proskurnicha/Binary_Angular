import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FlightService } from './services/flight.service';


   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit { 

  constructor(){}
    
  ngOnInit(){
   
  }
}