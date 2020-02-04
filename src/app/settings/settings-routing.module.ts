import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { 
    path: '', 
    component: SettingsComponent,
    children: [
      { path: 'generales', loadChildren: () => import('./settings-generales/settings-generales.module').then(m => m.SettingsGeneralesModule) },
      { path: 'perfil', loadChildren: () => import('./settings-perfil/settings-perfil.module').then(m => m.SettingsPerfilModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
