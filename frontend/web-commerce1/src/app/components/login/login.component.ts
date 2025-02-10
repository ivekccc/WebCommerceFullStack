import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  authService=inject(AuthService)
  onLogin(){
    this.authService.login(this.loginForm.value.email!,this.loginForm.value.password!);
  }


}
