import { Component, OnInit } from '@angular/core';
import { EstacionamentoService } from 'src/app/service/estacionamento.service';

@Component({
  selector: 'app-listar-vagas',
  templateUrl: './listar-vagas.component.html',
  styleUrls: ['./listar-vagas.component.scss']
})
export class ListarVagasComponent implements OnInit {
  vagas: any[] = [];

  constructor(private estacionamentoService: EstacionamentoService) { }

  ngOnInit(): void {
    this.estacionamentoService.listarVagas().subscribe((data: any []) => {
      this.vagas = data;
   });
 }
}
