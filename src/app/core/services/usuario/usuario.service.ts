import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../interfaces/usuario/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`https://mocki.io/v1/b50b089e-ca40-450f-bd5a-c2045d6d58a1`);
  }
}
