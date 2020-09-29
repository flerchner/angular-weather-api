import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

class Weather {
}

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private weatherApi: string;

  constructor(private http: HttpClient) { }

  getData(location, lang) {
    if (/^\d+$/.test(location)) {
      this.weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + location + ',' +  lang + '&units=metric&appid=3770eec4f553ea1432f25fc0f993be1d';
    } else {
      this.weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&lang=' + lang + '&units=metric&appid=3770eec4f553ea1432f25fc0f993be1d';
    }
    return this.http.get(this.weatherApi);
  }
}
