import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Ticket } from './../model/Ticket';
import { TicketService } from './../services/Ticket.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit {

  Ticket: Ticket;

  Tickets: Array<Ticket>;

  constructor(private http: HttpClient,
    private TicketService: TicketService) { 
      this.getTickets();
    }

  ngOnInit() {

  }

  
  getTickets() {
    this.TicketService.getTickets()
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.Tickets = d;
        },
        err => {
          console.log('err', err);
        }
      )
  }

  deleteTicket(id: number) {
    this.TicketService.deleteTicket(id)
    .subscribe(
      (d)=> {
        console.log('d', d);
        this.getTickets();
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
