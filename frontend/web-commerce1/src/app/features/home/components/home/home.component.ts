import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";


import { ProductService } from '../../../../shared/services/product/product.service';
import { Product, ProductCategory } from '../../../../shared/model/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ProductListComponent } from "../../../products/components/product-list/product-list.component";
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { MostWantedCategoriesComponent } from "../../../products/components/most-wanted-categories/most-wanted-categories.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, HeaderComponent, MostWantedCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  category: string = '';
  products: Product[] = [];
  productCategories: ProductCategory[] = [];

  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
    this.productService.productCategories$.subscribe((categories) => {
      this.productCategories = categories;
    });
  }
  onCategorySelected(category: string): void {
    this.category = category;
    this.products = this.products.filter(product => product.productCategory.categoryName === category);
  }
  getMostWantedCategories(): ProductCategory[] {
    const terms = ["Elektronika", "Racunarska oprema", "Bela tehnika"];
    return this.productCategories.filter(c => terms.some(term => c.categoryName.includes(term)));
  }





}
