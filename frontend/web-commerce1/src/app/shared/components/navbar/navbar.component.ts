import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCategory } from '../../model/product';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, MainMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavbarOpen = false;
  isMobileMenuOpen = false;
  hoveredCategory: ProductCategory | null = null;
  @Input() categories: ProductCategory[] = [];

  constructor() {}

  ngOnInit(): void {
    // ... (vaš postojeći kod)
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onCategoryHover(category: ProductCategory | null) {
    this.hoveredCategory = category;
  }

  hasSubcategories(category: { subcategories: string | any[] }) {
    return category.subcategories && category.subcategories.length > 0;
  }

  getSubcategories(category: { subcategories: any }) {
    return category.subcategories;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Proveri da li je kliknut element unutar navigacije
    const clickedInsideNavbar = target.closest('.navbar') !== null;

    if (!clickedInsideNavbar) {
      this.isNavbarOpen = false;
      this.isMobileMenuOpen = false;
    }
  }
}
