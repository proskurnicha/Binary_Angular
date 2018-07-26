import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Departure } from './../model/Departure';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  api = environment.api + 'Departures';

  constructor(private http: HttpClient) { }

  getDepartures(): Observable<Departure> {
    return this.http.get(`${this.api}`);
  }

  getDeparturesById(id): Observable<Departure> {
    return this.http.get(`${this.api}/${id}`);
  }

  createDeparture(Departure: Departure): Observable<Departure> {
    return this.http.post(`${this.api}/`, Departure);
  }

  updateDeparture(Departure: Departure): Observable<Departure> {
    return this.http.put(`${this.api}/${Departure.id}`, Departure);
  }

  deleteDeparture(id): Observable<Departure> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
