import { Component,HostListener,inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  imports: [CommonModule,RouterLink],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent implements OnInit {
  userService=inject(UserService)
  currentUser:User | null=null
  showMenu:boolean=false

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }

  toggleMenu(event:MouseEvent):void{
    this.showMenu=!this.showMenu
  }

  logoutUser():void{
    this.currentUser=null
    this.userService.logoutUser()
    this.showMenu=false
  }
  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('.menu') !== null;

    if (!clickedInsideMenu) {
      this.showMenu = false;
    }
  }

}
