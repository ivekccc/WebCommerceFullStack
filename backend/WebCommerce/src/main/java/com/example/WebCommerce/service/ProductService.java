package com.example.WebCommerce.service;

import com.example.WebCommerce.model.product.Product;
import com.example.WebCommerce.model.productCategory.ProductCategory;
import com.example.WebCommerce.repo.ProductCategoryRepository;
import com.example.WebCommerce.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;
    @Autowired
    ProductCategoryRepository productCategoryRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<ProductCategory> getAllCategoryProducts() {
        return productCategoryRepository.findAll();
    }

    public List<Product> getProductsByCategory(int categoryId) {
        // Find the requested category or throw exception if not found
        ProductCategory category = productCategoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Initialize result list with products directly in this category
        List<Product> result = new ArrayList<>(productRepository.findByProductCategory(category));

        // Recursively get all products from subcategories
        findProductsInSubcategories(category, result);

        return result;
    }

    private void findProductsInSubcategories(ProductCategory parentCategory, List<Product> resultList) {
        // Find all direct subcategories
        List<ProductCategory> subcategories = productCategoryRepository.findBySuperiorCategory(parentCategory);

        // For each subcategory
        for (ProductCategory subcategory : subcategories) {
            // Add all products from this subcategory
            resultList.addAll(productRepository.findByProductCategory(subcategory));

            // Recursively process this subcategory's subcategories
            findProductsInSubcategories(subcategory, resultList);
        }
    }




}
