import { HttpClient } from '@angular/common/http';
import { Injectable ,OnInit,inject} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, ProductCategory } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  private productsSubject = new BehaviorSubject<Product[]>([]);
  private productCategoriesSubject = new BehaviorSubject<ProductCategory[]>([]);

  products$ = this.productsSubject.asObservable();
  productCategories$ = this.productCategoriesSubject.asObservable();

  constructor() {
    this.loadProducts();
    this.loadProductCategories();
  }
  private loadProducts(): void {
    this.http.get<Product[]>("http://localhost:9090/api/products/getAllProducts").subscribe({
      next: (res) => {
        this.productsSubject.next(res);
      },
      error: () => {
        console.error("Greška pri učitavanju podataka o proizvodima");
      }
    });
  }

  private loadProductCategories(): void {
    this.http.get<ProductCategory[]>("http://localhost:9090/api/products/getAllCategories").subscribe({
      next: (res) => {
        this.productCategoriesSubject.next(res);
      },
      error: () => {
        console.error("Greška pri učitavanju podataka o kategorijama");
      }
    });
  }

}
