import { NgModule } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherComponent } from './weather.component';
import {CommonModule} from '@angular/common';
import {NzButtonModule, NzGridModule, NzInputModule, NzSelectModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [WeatherRoutingModule, CommonModule, NzGridModule, NzButtonModule, NzInputModule, NzSelectModule, FormsModule],
  declarations: [WeatherComponent],
  exports: [WeatherComponent]
})
export class WeatherModule { }
