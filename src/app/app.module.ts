import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolherLojaComponent } from './pages/escolher-loja/escolher-loja.component';
import { ListarVagasComponent } from './pages/listar-vagas/listar-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolherLojaComponent,
    ListarVagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
