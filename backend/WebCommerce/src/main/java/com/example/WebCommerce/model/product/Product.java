package com.example.WebCommerce.model.product;

import com.example.WebCommerce.model.productBrand.ProductBrand;
import com.example.WebCommerce.model.productCategory.ProductCategory;
import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String productName;
    private String productDescription;
    private double productPrice;
    private int productAvailableQuantity;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id", nullable = false)
    private ProductCategory productCategory;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", nullable = false)
    private ProductBrand productBrand;
    private String productImageUrl;

}
