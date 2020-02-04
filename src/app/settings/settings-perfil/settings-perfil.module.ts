import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPerfilRoutingModule } from './settings-perfil-routing.module';
import { SettingsPerfilComponent } from './settings-perfil.component';


@NgModule({
  declarations: [SettingsPerfilComponent],
  imports: [
    CommonModule,
    SettingsPerfilRoutingModule
  ]
})
export class SettingsPerfilModule { }
