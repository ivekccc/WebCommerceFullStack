package com.example.WebCommerce.repo;

import com.example.WebCommerce.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Integer> {
}
