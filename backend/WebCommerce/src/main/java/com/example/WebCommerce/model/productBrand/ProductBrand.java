package com.example.WebCommerce.model.productBrand;

import jakarta.persistence.*;

@Entity
@Table(name = "productBrand")
public class ProductBrand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String brandName;
}
