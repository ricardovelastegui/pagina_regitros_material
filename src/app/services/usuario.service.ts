import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'jpperez', nombre: 'Juan', apellido: 'perez', sexo: 'Masculino'},
    {usuario: 'mgomez', nombre: 'mario', apellido: 'gomez', sexo: 'Masculino'},
    {usuario: 'ricanvel', nombre: 'ricardo', apellido: 'velastegui', sexo: 'Masculino'},
    {usuario: 'pvelaste', nombre: 'paulette', apellido: 'velastegui', sexo: 'Femenino'},
    {usuario: 'anamel', nombre: 'Juan', apellido: 'perez', sexo: 'Femenino'},
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
