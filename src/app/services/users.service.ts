import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiurl?: 'https://api.escuelajs.co/api/v1/users';

  constructor(private http:HttpClient) { }

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
