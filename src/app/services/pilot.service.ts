import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Pilot } from './../model/Pilot';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PilotService {

  api = environment.api + 'Pilots';

  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot> {
    return this.http.get(`${this.api}`);
  }

  getPilotsById(id): Observable<Pilot> {
    return this.http.get(`${this.api}/${id}`);
  }

  createPilot(Pilot: Pilot): Observable<Pilot> {
    return this.http.post(`${this.api}/`, Pilot);
  }

  updatePilot(Pilot: Pilot): Observable<Pilot> {
    return this.http.put(`${this.api}/${Pilot.id}`, Pilot);
  }

  deletePilot(id): Observable<Pilot> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
