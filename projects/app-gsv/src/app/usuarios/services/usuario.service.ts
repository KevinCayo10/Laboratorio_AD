import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../clientes/models/clientes.model';
import { Usuario } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = '';
  constructor(private http: HttpClient) {}

  cargarUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }

  cargarUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  registrarUsuario(cliente: Usuario): Observable<any> {
    return this.http.post(this.url, cliente);
  }

  actualizarUsuario(id: string, cliente: Usuario): Observable<any> {
    return this.http.put(this.url + id, cliente);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
