import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { BodyComponent } from './Weather/weather.component';
import { MatCardModule } from '@angular/material/card';
import { TripsComponent } from './trips/trips.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { RouterModule } from '@angular/router';
import { HotelService } from './Services/hotels.service';
import { ItineraryService } from './Services/itinerary.service';
import { TripsService } from './Services/trips.service';
import { WeatherService } from './Services/weather.service';
import { ApiService } from './Services/API.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    TripsComponent,
    HotelsComponent,
    ItineraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [
    HotelService, 
    ItineraryService, 
    TripsService,
    WeatherService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
