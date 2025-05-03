import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolherLojaComponent } from './pages/escolher-loja/escolher-loja.component';
import { ListarVagasComponent } from './pages/listar-vagas/listar-vagas.component';

const routes: Routes = [
  { path: '', component: EscolherLojaComponent },
  { path: 'vagas', component: ListarVagasComponent} // rota padrão
  // você pode adicionar outras rotas aqui futuramente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
