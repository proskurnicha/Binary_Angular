import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Flight } from './../model/flight';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  api = environment.api + 'Flights';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight> {
    return this.http.get(`${this.api}`);
  }

  getFlightsById(id): Observable<Flight> {
    return this.http.get(`${this.api}/${id}`);
  }

  createFlight(flight: Flight): Observable<Flight> {
    return this.http.post(`${this.api}/`, flight);
  }

  updateFlight(flight: Flight): Observable<Flight> {
    return this.http.put(`${this.api}/${flight.id}`, flight);
  }

  deleteFlight(id): Observable<Flight> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
