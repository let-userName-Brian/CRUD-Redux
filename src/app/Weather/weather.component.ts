import { Component, OnInit } from '@angular/core';
import { Weather, WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class BodyComponent implements OnInit {
  weatherConditions: Weather[] = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherConditions = this.weatherService.getWeather();
  }
}
