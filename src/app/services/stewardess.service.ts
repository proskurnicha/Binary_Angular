
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Stewardess } from './../model/Stewardess';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StewardessService {

  api = environment.api + 'Stewardesses';

  constructor(private http: HttpClient) { }

  getStewardesses(): Observable<Stewardess> {
    return this.http.get(`${this.api}`);
  }

  getStewardessesById(id): Observable<Stewardess> {
    return this.http.get(`${this.api}/${id}`);
  }

  createStewardess(Stewardess: Stewardess): Observable<Stewardess> {
    return this.http.post(`${this.api}/`, Stewardess);
  }

  updateStewardess(Stewardess: Stewardess): Observable<Stewardess> {
    return this.http.put(`${this.api}/${Stewardess.id}`, Stewardess);
  }

  deleteStewardess(id): Observable<Stewardess> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
