import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from  '@angular/common/http';

// import { ListFlightsComponent } from '../Shared/list-flights/list-flights.component';
// import { DetailFlightComponent } from './detail-flight/detail-flight.component';
// import { ListAircraftsComponent } from './list-aircrafts/list-aircrafts.component';
// import { DetailAircraftComponent } from './detail-aircraft/detail-aircraft.component';
import { SortFlightsByDeparturePointsPipe } from './pipes/sort-flights-by-departure-points.pipe';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    // ListFlightsComponent, 
    // DetailFlightComponent, 
    // ListAircraftsComponent,
    // DetailAircraftComponent,
    SortFlightsByDeparturePointsPipe
  ],
  exports: [
    // ListFlightsComponent, 
    // ListAircraftsComponent
  ] 
})
export class SharedModule { }
