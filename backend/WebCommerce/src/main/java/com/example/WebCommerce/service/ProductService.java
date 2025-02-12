package com.example.WebCommerce.service;

import com.example.WebCommerce.model.product.Product;
import com.example.WebCommerce.model.productCategory.ProductCategory;
import com.example.WebCommerce.repo.ProductCategoryRepository;
import com.example.WebCommerce.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
