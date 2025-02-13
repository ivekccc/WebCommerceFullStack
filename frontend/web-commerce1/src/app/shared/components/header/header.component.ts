import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  userService=inject(UserService)
  currentUser:User | null=null
  showMenu:boolean = false;
  ngOnInit(): void {
    this.currentUser=this.userService.getCurrentUser()
  }
  toggleMenu(event:MouseEvent): void {
    this.showMenu = !this.showMenu;
  }
  logoutUser(): void {
    this.currentUser = null;
    this.userService.logoutUser();
    this.showMenu = false;
  }




}
