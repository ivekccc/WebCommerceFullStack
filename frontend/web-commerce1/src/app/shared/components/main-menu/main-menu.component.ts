import { Component, Input } from '@angular/core';
import { ProductCategory } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  @Input() categories: ProductCategory[] = [];

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

  showRoute(category: ProductCategory | null): void {
    let route: string[] = [];
    while (category != null) {
      route.unshift(category.categoryName);
      category = category?.superiorCategory || null;
    }
    const fullRoute = route.join(' > ');
    console.log(fullRoute);
  }
}
