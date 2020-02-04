import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsGeneralesComponent } from './settings-generales.component';

const routes: Routes = [
  { path: '', component: SettingsGeneralesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsGeneralesRoutingModule { }
