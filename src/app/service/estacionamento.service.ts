import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {
  private baseUrl = 'https://localhost:7255'; 

  constructor(private http: HttpClient) {}

  listarLojas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lojas`);
  }

  listarVagas(): Observable<any[]> {
    return this.http.get<any[]>('$this.baseUrl}/vagas');
  }

  buscarRota(lojaNome: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/vagas/melhorvaga?loja=${lojaNome}`);
  }
}
