import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Flight } from '../model/flight';
import { FlightService } from '../../services/flight.service';
@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.scss']
})

export class ListFlightsComponent implements OnInit {

  flight: Flight;

  flights: Array<Flight>;

  constructor(private http: HttpClient,
    private flightService: FlightService) { }

  ngOnInit() {
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
    debugger
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

  deleteFlight(id: number) {
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
