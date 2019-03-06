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

  getPilots(): Observable<any> {
    return this.http.get(`${this.api}`);
  }

  getPilotsById(id): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  createPilot(Pilot: Pilot): Observable<any> {
    return this.http.post(`${this.api}/`, Pilot);
  }

  updatePilot(Pilot: Pilot): Observable<any> {
    return this.http.put(`${this.api}/${Pilot.id}`, Pilot);
  }

  deletePilot(id): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
