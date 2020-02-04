import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyncroComponent } from './syncro.component';

const routes: Routes = [{ path: '', component: SyncroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncroRoutingModule { }
