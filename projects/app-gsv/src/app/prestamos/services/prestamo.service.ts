import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../clientes/models/clientes.model';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  url = '';
  constructor(private http: HttpClient) {}

  cargarPrestamos(): Observable<any> {
    return this.http.get(this.url);
  }

  cargarPretamo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  registrarPrestamo(cliente: Cliente): Observable<any> {
    return this.http.post(this.url, cliente);
  }

  actualizarPrestamo(id: string, cliente: Cliente): Observable<any> {
    return this.http.put(this.url + id, cliente);
  }

  eliminarPrestamo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
