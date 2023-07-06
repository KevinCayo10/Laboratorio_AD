import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../clientes/models/clientes.model';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  url = '';
  constructor(private http: HttpClient) {}

  cargarEquipos(): Observable<any> {
    return this.http.get(this.url);
  }

  cargarEquipo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  registrarEquipo(cliente: Cliente): Observable<any> {
    return this.http.post(this.url, cliente);
  }

  actualizarEquipo(id: string, cliente: Cliente): Observable<any> {
    return this.http.put(this.url + id, cliente);
  }

  eliminarEquipo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
