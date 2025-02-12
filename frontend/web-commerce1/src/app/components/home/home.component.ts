import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";


import { ProductService } from '../../service/product.service';
import { Product, ProductCategory } from '../../model/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { HeaderComponent } from "../header/header.component";
import { MostWantedCategoriesComponent } from "../most-wanted-categories/most-wanted-categories.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, HeaderComponent, MostWantedCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllProductCategories()
  }
  productService=inject(ProductService)
  category:string='';
  onCategorySelected(category: string): void {
    this.category = category;
    this.products=this.products.filter(product => product.productCategory.categoryName === category)
  }
  products:Product[]=[]
  productCategories:ProductCategory[]=[]

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next:(res)=>{
        this.products=res
      },
      error:(err)=>{
        console.log("Greska prilikom dobijanja svih delova")
      }
    })
  }
  getAllProductCategories(){
    this.productService.getAllProductCategories().subscribe({
      next:(res)=>{
        this.productCategories=res
      },
      error:(err)=>{
        console.log("Greska prilikom dobijanja svih kategorija")
      }
    })
  }

  getMostWantedCategories():ProductCategory[]{
    const terms = ["Elektronika", "Racunarska oprema", "Bela tehnika"];
    return this.productCategories.filter(c=>terms.some(term => c.categoryName.includes(term)))
  }



}
