import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {name: 'juan', email: 'juan@sasf.net', password: 'perrito123', role: 'contador', avatar:"imagen"},
    
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);

  }
  agregaruser(user: Usuario){
    this.listUsuarios.unshift(user);
  }
}
