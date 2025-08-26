import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { soma } from './soma/soma';

const routes: Routes = [
  
      {path: 'soma', component: soma}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
