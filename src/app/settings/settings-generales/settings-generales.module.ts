import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsGeneralesRoutingModule } from './settings-generales-routing.module';
import { SettingsGeneralesComponent } from './settings-generales.component';


@NgModule({
  declarations: [SettingsGeneralesComponent],
  imports: [
    CommonModule,
    SettingsGeneralesRoutingModule
  ]
})
export class SettingsGeneralesModule { }
