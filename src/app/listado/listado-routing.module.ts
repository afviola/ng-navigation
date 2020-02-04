import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './listado.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'comp1', loadChildren: () => import('./comp1/comp1.module').then(m => m.Comp1Module) },
  { path: 'comp1/comp2', loadChildren: () => import('./comp2/comp2.module').then(m => m.Comp2Module) },
  { path: 'comp1/comp2/comp3', loadChildren: () => import('./comp3/comp3.module').then(m => m.Comp3Module) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule { }
