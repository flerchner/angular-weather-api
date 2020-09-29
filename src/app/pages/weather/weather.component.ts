import { Component, OnInit } from '@angular/core';

import { levels } from './levels';
import { countries } from './countries';

import { WeatherApiService } from '../../weather-api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  constructor(private weatherApi: WeatherApiService) { }
  levels = levels;
  currentLevel;
  countries = countries;
  private temperature: number;
  public dataLevel: number;
  langId;
  public currentTemp;
  public currentCity;
  public currentWeatherinfo;

  ngOnInit() {}

  ApiCall(locationId) {
    this.weatherApi.getData(locationId, this.langId).subscribe((data) => {
      // @ts-ignore
      this.temperature = Math.round(data.main.temp);
      // @ts-ignore
      this.currentTemp = Math.round(data.main.temp);
      // @ts-ignore
      this.currentCity = data.name;
      // @ts-ignore
      this.currentWeatherinfo = data.weather[0].main;
      this.Recommendation(this.temperature);
    });
  }

  Recommendation(temp) {
    if (temp >= 26) {
      this.dataLevel = 1;
    } else if (21 <= temp && temp < 26) {
      this.dataLevel = 2;
    } else if (15 <= temp && temp < 21) {
      this.dataLevel = 3;
    } else if (5 <= temp && temp < 15) {
      this.dataLevel = 4;
    } else if (temp < 5) {
      this.dataLevel = 5;
    }
    this.currentLevel = this.getLevelById(this.dataLevel);
  }
  getLevelById(level) {
    return levels.find(x => x.level === level);
  }
}
