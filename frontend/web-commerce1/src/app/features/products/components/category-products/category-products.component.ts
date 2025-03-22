import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductCategory } from '../../../../shared/model/product';
import { ActivatedRoute, Router } from '@angular/router';
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


  productService=inject(ProductService)
  category: ProductCategory | null = null;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('id');
      if (categoryId) {
        // First try to get the category from navigation state
        const navigation = this.router.getCurrentNavigation();
        const stateCategory = navigation?.extras?.state?.['category'];
        // Add logic to handle stateCategory if needed
        if (stateCategory && stateCategory.id === Number(categoryId)) {
          // Use the category from state if it matches the ID
          this.category = stateCategory;
          this.loadProducts();
        }
      }
    });
  }
  loadProducts(): void {
    const categoryId = this.category?.id;
    if (categoryId !== undefined) {
      this.productService.getProductsByCategory(categoryId).subscribe({
        next: (data) => {this.products = data},
        error: (err) => console.error('Error loading products:', err)
      });
    } else {
      console.error('Category ID is undefined. Cannot load products.');
    }
  }
  getRoute():string{
    return this.productService.showRoute(this.category);
  }
}
