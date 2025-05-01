import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {
  private baseUrl = 'https://localhost:7255'; // ou a URL que estiver usando

  constructor(private http: HttpClient) {}

  listarLojas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lojas`);
  }

  buscarRota(lojaNome: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/vagas/melhorvaga?loja=${lojaNome}`);
  }
}
