import { Component, Input } from '@angular/core';
import { ProductCategory } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  @Input() categories:ProductCategory[]=[]

  getSuperCategories():ProductCategory[]{
    return this.categories.filter(c=>c.superiorCategory==null)
  }
  hoveredCategory:ProductCategory|null=null
  onCategoryHover(category:ProductCategory|null){
    this.hoveredCategory=category;
  }
  hasSubcategories(category:ProductCategory):boolean{
    return this.categories.some(c=>c.superiorCategory?.id===category.id)
  }
  getSubcategories(category:ProductCategory):ProductCategory[]{
    return this.categories.filter(c=>c.superiorCategory?.id===category.id)
  }
}
