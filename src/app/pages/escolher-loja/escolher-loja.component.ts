import { Component, OnInit } from '@angular/core';
import { EstacionamentoService } from '../../service/estacionamento.service';

@Component({
  selector: 'app-escolher-loja',
  templateUrl: './escolher-loja.component.html',
  styleUrls: ['./escolher-loja.component.scss']
})
export class EscolherLojaComponent implements OnInit {
  lojas: any[] = [];
  rota: any = null;

  constructor(private estacionamentoService: EstacionamentoService) {}

  ngOnInit(): void {
    this.estacionamentoService.listarLojas().subscribe((data: any[]) => {
      this.lojas = data;
    });
  }

  escolherLoja(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const lojaNome = selectElement.value;

    this.estacionamentoService.buscarRota(lojaNome).subscribe((data: any) => {
      this.rota = data;
    });
  }
}
