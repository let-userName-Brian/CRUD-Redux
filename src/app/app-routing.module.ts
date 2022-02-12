import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Weather/weather.component';
import { TripsComponent } from './trips/trips.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { HomeFormComponent } from './home-form/home-form.component';

const routes: Routes = [
  { path: '', component: HomeFormComponent},
  { path: 'weather', component: BodyComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'hotels', component: HotelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
