import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";


import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.getAllProducts()
  }
  productService=inject(ProductService)

  data:Product[]=[]

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next:(res)=>{
        this.data=res
      },
      error:(err)=>{
        console.log("Greska prilikom dobijanja svih delova")
      }
    })
  }

}
