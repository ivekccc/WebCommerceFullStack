import { Component, Input } from '@angular/core';
import { ProductCategory } from '../../model/product';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @Input() categories: ProductCategory[] = [];

  // Add a property to track main menu visibility
isMainMenuOpen: boolean = true;

  // Niz koji čuva trenutno aktivnu kategoriju za svaki nivo menija.
  activeMenuPath: ProductCategory[] = [];

  getSuperCategories(): ProductCategory[] {
    return this.categories.filter(c => c.superiorCategory == null);
  }

  hasSubcategories(category: ProductCategory): boolean {
    return this.categories.some(c => c.superiorCategory?.id === category.id);
  }

  getSubcategories(category: ProductCategory): ProductCategory[] {
    return this.categories.filter(c => c.superiorCategory?.id === category.id);
  }

  constructor(private router: Router) {}


goToCategory(category: ProductCategory): void {
  console.log("Navigating to category:", category.id);
  // First, reset the active menu path to close all submenus
  this.activeMenuPath = [];
  // Close the main menu
  this.isMainMenuOpen = false;
  // Use setTimeout to ensure DOM updates before navigation
  setTimeout(() => {
    this.router.navigate([`/category/${category.id}`], { state: { category } });
    // You might want to reopen the menu after navigation completes
    // depending on your UX requirements
    // this.isMainMenuOpen = true;
  }, 10);
}
  onMenuEnter(category: ProductCategory, level: number): void {
    // Postavljamo kategoriju kao aktivnu za dati nivo, a zatim brišemo sve dublje nivoe.
    this.activeMenuPath[level] = category;
    this.activeMenuPath.splice(level + 1);
  }

  onMenuLeave(category: ProductCategory, level: number): void {
    // Ako se korisnik pomeri sa elementa za koji je postavljen aktivni nivo,
    // brišemo sve nivoe počevši od tog nivoa.
    if (this.activeMenuPath[level] === category) {
      this.activeMenuPath.splice(level);
    }
  }


}
