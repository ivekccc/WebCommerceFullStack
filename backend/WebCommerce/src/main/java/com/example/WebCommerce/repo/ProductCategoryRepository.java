package com.example.WebCommerce.repo;

import com.example.WebCommerce.model.productCategory.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Integer> {
    List<ProductCategory> findBySuperiorCategory(ProductCategory superiorCategory);
}
