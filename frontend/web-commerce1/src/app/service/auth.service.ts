import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http=inject(HttpClient)
  router=inject(Router)

  login(email:string,password:string){
    return this.http.post<string>('http://localhost:9090/api/auth/login',{email,password},{responseType: 'text' as 'json'}).subscribe({
      next:(token)=>{
        console.log("Uspesan login")
        localStorage.setItem("token",token)
        this.router.navigateByUrl("")
      },
      error:(err)=>{
        console.log("Greska prilikom logina",err);
      }
    })
  }

  isAuthenticated():boolean{
     const token:string | null=localStorage.getItem("token")
     return token!==null
  }

  constructor() { }
}
