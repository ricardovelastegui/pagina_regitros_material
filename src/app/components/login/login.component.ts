import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsersService } from 'src/app/services/users.service';

  @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: FormGroup;
  loading= false;
  listaMadre: any[] = []; 
  email?: string;
  password?: string;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private usersService: UsersService){
    this.form = this.fb.group({
      email: ['',Validators.required ],
      password: ['', Validators.required]
    })

  }

  ingresar(){
    console.log(this.form);
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(email);
    console.log(password);
    const user = this.listaMadre.find(user => user.email===this.email && user.password===this.password);
    if(user){
      //redireccionamos al dashboard
      this.fakeloading();
    } else{
      //mostramos mensaje de error
      this.error();
      this.form.reset();
    }
  }

  
  error(){
    this._snackBar.open('usuario o contraseña no valido', '', {
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

    })
  }
  fakeloading(){

    this.loading=true;
    setTimeout( () => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe( users => {
      this.listaMadre = this.usersService.transformUsers(users);
      console.log(this.listaMadre)
    });
  }

}
