import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Aircraft } from './../model/Aircraft';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  api = environment.api + 'Aircrafts';

  constructor(private http: HttpClient) { }

  getAircrafts(): Observable<Aircraft> {
    return this.http.get(`${this.api}`);
  }

  getAircraftsById(id): Observable<Aircraft> {
    return this.http.get(`${this.api}/${id}`);
  }

  createAircraft(Aircraft: Aircraft): Observable<Aircraft> {
    return this.http.post(`${this.api}/`, Aircraft);
  }

  updateAircraft(Aircraft: Aircraft): Observable<Aircraft> {
    return this.http.put(`${this.api}/${Aircraft.id}`, Aircraft);
  }

  deleteAircraft(id): Observable<Aircraft> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
