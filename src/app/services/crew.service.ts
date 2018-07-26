import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Crew } from './../model/Crew';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CrewService {

  api = environment.api + 'Crews';

  constructor(private http: HttpClient) { }

  getCrews(): Observable<Crew> {
    return this.http.get(`${this.api}`);
  }

  getCrewsById(id): Observable<Crew> {
    return this.http.get(`${this.api}/${id}`);
  }

  createCrew(Crew: Crew): Observable<Crew> {
    return this.http.post(`${this.api}/`, Crew);
  }

  updateCrew(Crew: Crew): Observable<Crew> {
    return this.http.put(`${this.api}/${Crew.id}`, Crew);
  }

  deleteCrew(id): Observable<Crew> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
