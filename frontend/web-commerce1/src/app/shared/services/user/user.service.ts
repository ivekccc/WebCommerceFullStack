import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logoutUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
  }

  constructor() { }
  getCurrentUser(): User | null {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
    }
}
