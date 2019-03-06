
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Ticket } from './../model/Ticket';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  api = environment.api + 'Tickets';

  constructor(private http: HttpClient) { }

  getTickets(): Observable<any> {
    return this.http.get(`${this.api}`);
  }

  getTicketsById(id): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  createTicket(Ticket: Ticket): Observable<any> {
    return this.http.post(`${this.api}/`, Ticket);
  }

  updateTicket(Ticket: Ticket): Observable<any> {
    return this.http.put(`${this.api}/${Ticket.id}`, Ticket);
  }

  deleteTicket(id): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
