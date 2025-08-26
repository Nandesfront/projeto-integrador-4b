import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing-module';
import { soma } from './soma/soma';


@NgModule({
  declarations: [
    soma
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule
  ]
})
export class ContadorModule { }
