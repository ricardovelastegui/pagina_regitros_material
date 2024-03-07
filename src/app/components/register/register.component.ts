import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  loading=false;

  constructor(private usersService: UsersService, private router: Router){
  }  

  register(){
    const user ={ name:this.name, email:this.email, password:this.password, role:this.role, avatar:this.avatar };
    this.usersService.register(user).subscribe(response => {
      console.log('Usuario registrado');
      this.fakeloading();
    })
    
  }

  fakeloading(){
    this.loading=true;
    setTimeout( () => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
