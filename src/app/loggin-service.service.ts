import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LogginServiceService {

  constructor(private http: HttpClient) {
   }

   guardarUsuario(usr: Usuario) {
    let url: string = "http://localhost:8080/usuarios";
    return this.http.post<Usuario>(url,usr);
   }
}
