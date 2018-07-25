import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../../services/flight.service';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-detail-flight',
  templateUrl: './detail-flight.component.html',
  styleUrls: ['./detail-flight.component.scss']
})
export class DetailFlightComponent implements OnInit {

  constructor(private route: ActivatedRoute, private flightService: FlightService) { }

  flight: Flight;

  ngOnInit() {
    this.getFlightById();
  }

  getFlightById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.flightService.getFlightsById(id)
      .subscribe(
        (d)=> {
          console.log('d', d);
          this.flight = d;
        },
        err => {
          console.log('err', err);
        }
      );
  }

}
