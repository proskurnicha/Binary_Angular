import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent} from './app.component';
import { MainComponent } from './main/main.component';
import { ListAircraftsComponent} from './list-aircrafts/list-aircrafts.component';
import { DetailAircraftComponent} from './detail-aircraft/detail-aircraft.component';
import { ListFlightsComponent} from './list-flights/list-flights.component';
import { DetailFlightComponent} from './detail-flight/detail-flight.component';
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

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: '/main',
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'flights/:id',
        component: DetailFlightComponent,
      },
      {
        path: 'flights',
        component: ListFlightsComponent,
      },
      {
        path: 'aircrafts/:id',
        component: DetailAircraftComponent,
      },
      {
        path: 'aircrafts',
        component: ListAircraftsComponent,
      },
      {
        path: 'crews/:id',
        component: DetailCrewComponent,
      },
      {
        path: 'crews',
        component: ListCrewsComponent,
      },
      {
        path: 'departures/:id',
        component: DetailDepartureComponent,
      },
      {
        path: 'departures',
        component: ListDeparturesComponent,
      },
      {
        path: 'pilots/:id',
        component: DetailPilotComponent,
      },
      {
        path: 'pilots',
        component: ListPilotsComponent,
      },
      {
        path: 'stewardesses/:id',
        component: DetailStewardessComponent,
      },
      {
        path: 'stewardesses',
        component: ListStewardessesComponent,
      },
      {
        path: 'tickets/:id',
        component: DetailTicketComponent,
      },
      {
        path: 'tickets',
        component: ListTicketsComponent,
      },
      {
        path: 'typesaircraft/:id',
        component: DetailTypeaircraftComponent,
      },
      {
        path: 'typesaircraft',
        component: ListTypesaircraftsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
