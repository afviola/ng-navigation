import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyncroRoutingModule } from './syncro-routing.module';
import { SyncroComponent } from './syncro.component';


@NgModule({
  declarations: [SyncroComponent],
  imports: [
    CommonModule,
    SyncroRoutingModule
  ]
})
export class SyncroModule { }
