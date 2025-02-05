package com.example.WebCommerce.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping("/getAllProducts")
    public String getData() {
        return "Evo teksta koji predstavlja podatke za sada";
    }
}
