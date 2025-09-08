import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ProdutosModule } from './produtos/produtos-module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProdutosModuleModule } from './produtos-module/produtos-module-module';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModuleModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
