import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from './../../environments/environment';
import { TypeAircraft } from '../model/type-aircraft';
@Injectable({
  providedIn: 'root'
})
export class TypeAircraftService {

  api = environment.api + 'TypesAircraft';

  constructor(private http: HttpClient) { }

  getTypeAircraft(): Observable<any> {
    return this.http.get(`${this.api}`);
  }

  getTypeAircraftsById(id): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  createTypeAircraft(TypeAircraft: TypeAircraft): Observable<any> {
    return this.http.post(`${this.api}/`, TypeAircraft);
  }

  updateTypeAircraft(TypeAircraft: TypeAircraft): Observable<any> {
    return this.http.put(`${this.api}/${TypeAircraft.id}`, TypeAircraft);
  }

  deleteTypeAircraft(id): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
