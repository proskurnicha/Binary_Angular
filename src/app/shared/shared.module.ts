import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from  '@angular/common/http';

import { ListFlightsComponent } from '../Shared/list-flights/list-flights.component';
import { AppModule } from '../app.module';
import { DetailFlightComponent } from './detail-flight/detail-flight.component';

@NgModule({
  imports: [
    CommonModule,
    AppModule,
    HttpClientModule
  ],
  declarations: [ListFlightsComponent, DetailFlightComponent]
})
export class SharedModule { }
