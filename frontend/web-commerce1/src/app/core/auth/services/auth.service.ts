import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from '../../../shared/model/auth-response';
import { User } from '../../../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http=inject(HttpClient)
  router=inject(Router)

  login(email:string,password:string){
    return this.http.post<AuthResponse>('http://localhost:9090/api/auth/login',{email,password}).subscribe({
      next:(response)=>{
        console.log("Uspešan login")
        localStorage.setItem("token", response.token)
        localStorage.setItem("user", JSON.stringify(response.user))
        this.router.navigateByUrl("")
      },
      error:(err)=>{
        console.log("Greška prilikom logina",err);
      }
    })
  }

  isAuthenticated():boolean{
     const token:string | null=localStorage.getItem("token")
     return token!==null
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }

  constructor() { }
}
