import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { TypeAircraft } from './../model/TypeAircraft';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TypeAircraftService {

  api = environment.api + 'TypesAircraft';

  constructor(private http: HttpClient) { }

  getTypeAircrafts(): Observable<TypeAircraft> {
    return this.http.get(`${this.api}`);
  }

  getTypeAircraftsById(id): Observable<TypeAircraft> {
    return this.http.get(`${this.api}/${id}`);
  }

  createTypeAircraft(TypeAircraft: TypeAircraft): Observable<TypeAircraft> {
    return this.http.post(`${this.api}/`, TypeAircraft);
  }

  updateTypeAircraft(TypeAircraft: TypeAircraft): Observable<TypeAircraft> {
    return this.http.put(`${this.api}/${TypeAircraft.id}`, TypeAircraft);
  }

  deleteTypeAircraft(id): Observable<TypeAircraft> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
