import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from  '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { ListAircraftsComponent} from './list-aircrafts/list-aircrafts.component';
import { DetailAircraftComponent} from './detail-aircraft/detail-aircraft.component';
import { ListFlightsComponent} from './list-flights/list-flights.component';
import { DetailFlightComponent} from './detail-flight/detail-flight.component';
import { SortFlightsByDeparturePointsPipe } from './pipes/sort-flights-by-departure-points.pipe';
import { MainComponent } from './main/main.component';
import { ListCrewsComponent } from './list-crews/list-crews.component';
import { DetailCrewComponent } from './detail-crew/detail-crew.component';
import { ListDeparturesComponent } from './list-departures/list-departures.component';
import { DetailDepartureComponent } from './detail-departure/detail-departure.component';
import { ListPilotsComponent } from './list-pilots/list-pilots.component';
import { DetailPilotComponent } from './detail-pilot/detail-pilot.component';
import { ListStewardessesComponent } from './list-stewardesses/list-stewardesses.component';
import { DetailStewardessComponent } from './detail-stewardess/detail-stewardess.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';
import { ListTypesaircraftsComponent } from './list-typesaircrafts/list-typesaircrafts.component';
import { DetailTypeaircraftComponent } from './detail-typeaircraft/detail-typeaircraft.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListFlightsComponent,
    DetailFlightComponent,
    ListAircraftsComponent,
    DetailAircraftComponent,
    SortFlightsByDeparturePointsPipe,
    MainComponent,
    ListCrewsComponent,
    DetailCrewComponent,
    ListDeparturesComponent,
    DetailDepartureComponent,
    ListPilotsComponent,
    DetailPilotComponent,
    ListStewardessesComponent,
    DetailStewardessComponent,
    ListTicketsComponent,
    DetailTicketComponent,
    ListTypesaircraftsComponent,
    DetailTypeaircraftComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
