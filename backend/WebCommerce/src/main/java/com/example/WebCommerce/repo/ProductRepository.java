package com.example.WebCommerce.repo;

import com.example.WebCommerce.model.product.Product;
import com.example.WebCommerce.model.productCategory.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByProductCategory(ProductCategory productCategory);
}
