
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from './../../environments/environment';
import { Stewardesses } from 'src/app/model/stewardesses';
@Injectable({
  providedIn: 'root'
})
export class StewardessService {

  api = environment.api + 'Stewardesses';

  constructor(private http: HttpClient) { }

  getStewardesses(): Observable<any> {
    return this.http.get(`${this.api}`);
  }

  getStewardessesById(id): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  createStewardess(Stewardess: Stewardesses): Observable<any> {
    return this.http.post(`${this.api}/`, Stewardess);
  }

  updateStewardess(Stewardess: Stewardesses): Observable<any> {
    return this.http.put(`${this.api}/${Stewardess.id}`, Stewardess);
  }

  deleteStewardess(id): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
