import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Flight } from './shared/model/flight';
import { FlightService } from './services/flight.service';


   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit { 
 
  flight: Flight;

  flights: Array<Flight>;

  constructor(private http: HttpClient,
              private flightService: FlightService){}
    
  ngOnInit(){
     let test =  this.http.get('http://localhost:54956/api/Flights/1');
     test.subscribe((data:Flight) => this.flight=data);
  }

  getFlights() {
    this.flightService.getFlights()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.flights = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  getFlightById(id) {
    this.flightService.getFlightsById(id);
  }

  createFlight() {
    const data = {
        // todo set data
    };
    this.flightService.createFlight(data)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    )
  }

  updateFlight(flight: Flight) {
    this.flightService.updateFlight(flight)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  deleteFlight(id) {
    this.flightService.deleteFlight(id)
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