import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name?: string;
  email?: string;
  password?: string;
  role?: string;
  avatar?: string;

  form: FormGroup;
  loading=false;

  constructor(private usersService: UsersService, private router: Router, private fb: FormBuilder, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      avatar: ['', Validators.required]
      

      
    })
  }  

  registrar(){
    if (this.form.valid) {
      console.log(this.form);
      const email = this.form.value.email;
      const password= this.form.value.password;
      const name = this.form.value.name;
      const role = this.form.value.role;
      const avatar = this.form.value.avatar;
      // Ahora puedes ejecutar lo que necesites hacer con los datos
      this.fakeloading();
    } else {
      // Aquí puedes mostrar un mensaje de error o realizar alguna acción si el formulario no es válido
      this._snackBar.open('Por favor, complete todos los campos', 'Cerrar', {
        duration: 3000
      });
    }

  }

  fakeloading(){
    this.loading=true;
    setTimeout( () => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
