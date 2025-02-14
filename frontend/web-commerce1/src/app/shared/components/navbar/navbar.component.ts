import { Component, HostListener, inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCategory } from '../../model/product';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { ProductService } from '../../services/product/product.service';

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
  categories: ProductCategory[] = [];
  productService=inject(ProductService)

  constructor() {}

  ngOnInit(): void {
    this.productService.productCategories$.subscribe((categories) => {
      this.categories = categories;
    });
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
    const clickedInsideNavbar = target.closest('.navbar') !== null;

    if (!clickedInsideNavbar) {
      this.isNavbarOpen = false;
      this.isMobileMenuOpen = false;
    }
  }
}
