import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  email?: string ='';
  password?: string = '';
  token='';
  

  private apiurl?: 'https://api.escuelajs.co/api/v1/users';

  constructor(private http:HttpClient) { }



  isAuth(): boolean{
    if (this.email==='ksabando@sasf.net' && this.password==='sasfdominio123'){
      this.token = (parseInt(this.token) + 1).toString();
      
    } return this.token.length>0;
  }

  

  register(user:any){
    return this.http.post<any>(this.apiurl! ,user)
  }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.apiurl!);
  }

  transformUsers(users: any[]): any[]{
    return users.map(user => {
      return {
        email:user.email,
        password:user.password,
        role: user.role
      };
    });
  }
  
}
