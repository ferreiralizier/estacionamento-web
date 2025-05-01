import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolherLojaComponent } from './pages/escolher-loja/escolher-loja.component';

const routes: Routes = [
  { path: '', component: EscolherLojaComponent }, // rota padrão
  // você pode adicionar outras rotas aqui futuramente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
