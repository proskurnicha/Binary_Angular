import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFlightsComponent } from './Shared/list-flights/list-flights.component';
import { DetailFlightComponent } from './Shared/detail-flight/detail-flight.component';
const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: '/flights',
  },
  {
    path: 'flights',
    component: ListFlightsComponent
    // children: [
    //   {
    //     path: ':id',
    //     component: DetailFlightComponent 
    //   }
    //]
  },
  {
    path: 'flights/:id',
    component: DetailFlightComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
