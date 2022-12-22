import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Mensagem } from '../mensagem';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  loading = false;
  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Cliente[]>{
    this.loading = true;
    return this.http.get<Cliente[]>(`http://localhost:8080/clientes`)
    .pipe(finalize(()=>this.loading = false))
  }

  salvar(cliente: Cliente){
    return this.http.post<Cliente>(`http://localhost:8080/clientes`, cliente);
  }

  deletar(id: number): Observable<Mensagem>{
    return this.http.delete<Mensagem>(`http://localhost:8080/clientes` + `/${id}`);
  }
}
