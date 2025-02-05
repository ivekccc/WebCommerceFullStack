package com.example.WebCommerce.model.productBrand;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "productBrand")
public class ProductBrand {
    @Id
    private int id;
    private String brandName;
}
