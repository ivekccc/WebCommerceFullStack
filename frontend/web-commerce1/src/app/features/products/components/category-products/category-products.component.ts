import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../shared/model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../shared/services/product/product.service';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-category-products',
  imports: [ProductListComponent],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit {
  products:Product[]=[]
  categoryId!:number

  route=inject(ActivatedRoute)
  productService=inject(ProductService)

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));
      console.log(this.categoryId)
      this.loadProducts();
    });
  }
  loadProducts(): void {
    this.productService.getProductsByCategory(this.categoryId).subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error loading products:', err)
    });
  }
}
