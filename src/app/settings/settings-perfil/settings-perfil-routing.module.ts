import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPerfilComponent } from './settings-perfil.component';

const routes: Routes = [
  { path: '', component: SettingsPerfilComponent },
  { path: 'syncro', loadChildren: () => import('./syncro/syncro.module').then(m => m.SyncroModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsPerfilRoutingModule { }
