import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  api = 'http://localhost:54956/api/';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any> {
    return this.http.get(`${this.api}Flights`);
  }

  getFlightsById(id): Observable<any> {
    return this.http.get(`${this.api}Flights/${id}`);
  }

  createFlight(flight): Observable<any> {
    return this.http.post(`${this.api}Flights/`, flight);
  }

  updateFlight(flight): Observable<any> {
    return this.http.put(`${this.api}Flights/${flight.id}`, flight);
  }

  deleteFlight(id): Observable<any> {
    return this.http.delete(`${this.api}Flights/${id}`);
  }
}
