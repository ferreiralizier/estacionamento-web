import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ✅ IMPORTANTE

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolherLojaComponent } from './pages/escolher-loja/escolher-loja.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolherLojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // ✅ ADICIONAR AQUI
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
