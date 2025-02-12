import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductCategory } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http=inject(HttpClient)

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/api/products/getAllProducts");
  }

  getAllProductCategories():Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>("http://localhost:9090/api/products/getAllCategories")
  }

  constructor() { }
}
