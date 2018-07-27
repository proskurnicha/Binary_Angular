import { Component, OnInit } from '@angular/core';
import { Ticket } from './../model/Ticket';
import { TicketService } from './../services/Ticket.service';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-detail-Ticket',
  templateUrl: './detail-Ticket.component.html',
  styleUrls: ['./detail-Ticket.component.scss']
})
export class DetailTicketComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private fb: FormBuilder,
              private TicketService: TicketService) { 
    const id = this.route.snapshot.paramMap.get('id');
    if(id != 0) {
      this.getTicketById();
    }
    else {
      this.createTicketForm();
    }
  }
  
  Ticket: Ticket;
  TicketForm: FormGroup;

  ngOnInit() {
  }

  getTicketById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.TicketService.getTicketsById(id)
      .subscribe(
        (d)=> {
          this.Ticket = d;
          this.createTicketForm();
        },
        err => {
          console.log('err', err);
        }
      );
  }

  createTicket(Ticket: Ticket) {
    this.TicketService.createTicket(Ticket)
    .subscribe(
      (d)=> {
        console.log('d', d);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  
  createTicketForm(): void {
    if(this.Ticket != null){
      this.TicketForm = this.fb.group({
        price: [ this.Ticket.name, []],
        flightId: [ this.Ticket.surname, []],
        // arrivalTime: [this.Ticket.arrivalTime || '', [Validators.required, Validators.minLength(3)]],
      });
    } 
    else {
      this.TicketForm = this.fb.group({
        price: [ '', []],
        flightId: ['', []],
      });
    }
  }

  applyChanges(Ticket: Ticket): void {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if(id != 0) { 
      this.updateTicket(Ticket)
    }
    else {
      this.createTicket(Ticket);
    }    
  }

  updateTicket(Ticket: Ticket) {
    Ticket.id = this.Ticket.id;
      this.TicketService.updateTicket(Ticket)
        .subscribe(
         (d)=> {
          console.log('d', d);
         },
        err => {
          console.log('err', err);
        }
      );
  }
}
