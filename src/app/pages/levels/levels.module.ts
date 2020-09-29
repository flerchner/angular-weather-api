import { NgModule } from '@angular/core';

import { LevelsRoutingModule } from './levels-routing.module';

import { LevelsComponent } from './levels.component';
import {NzButtonModule, NzGridModule, NzInputModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [LevelsRoutingModule, NzGridModule, CommonModule, NzInputModule, NzButtonModule, ReactiveFormsModule],
  declarations: [LevelsComponent],
  exports: [LevelsComponent]
})
export class LevelsModule { }
