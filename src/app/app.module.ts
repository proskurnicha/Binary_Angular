import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFlightsComponent } from './Shared/list-flights/list-flights.component';
import { DetailFlightComponent } from './Shared/detail-flight/detail-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFlightsComponent, 
    DetailFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
