import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  role: any[]=['Administrador', 'Usuario'];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      role:['', Validators.required], 
      avatar:['',Validators.required]
    })
  }
  ngOnInit(): void {
    
  }

  agregaruser(){
    const user: Usuario = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role,
      avatar: this.form.value.avatar
    }
    this._usuarioService.agregaruser(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('el usuario fue agregado con éxito', '', {
      duration:1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }

}
