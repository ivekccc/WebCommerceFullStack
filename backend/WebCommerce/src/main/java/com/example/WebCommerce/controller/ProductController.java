package com.example.WebCommerce.controller;

import com.example.WebCommerce.model.product.Product;
import com.example.WebCommerce.model.productCategory.ProductCategory;
import com.example.WebCommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductService productService;



    //PRODUCT CLASS CONTROLLER

    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable int categoryId) {
        List<Product> lista=productService.getProductsByCategory(categoryId);
        System.out.println(lista);
        return lista;
    }
    //PRODUCT CATEGORY CLASS CONTROLLER

    @GetMapping("/getAllCategories")
    public List<ProductCategory> getAllProductCategories(){
        return productService.getAllCategoryProducts();
    }


}
