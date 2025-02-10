package com.example.WebCommerce.model.productCategory;

import jakarta.persistence.*;

@Entity
@Table(name = "productCategory")
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String categoryName;
    private String categoryDescription;
    @ManyToOne
    @JoinColumn(name = "superiorCategory")
    private ProductCategory superiorCategory;

}
