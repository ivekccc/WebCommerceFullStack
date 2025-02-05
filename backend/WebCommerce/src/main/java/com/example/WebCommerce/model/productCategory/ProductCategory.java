package com.example.WebCommerce.model.productCategory;

import jakarta.persistence.*;

@Entity
@Table(name = "productCategory")
public class ProductCategory {
    @Id
    private int id;

    private String categoryName;
    private String categoryDescription;
    @OneToOne
    @JoinColumn(name = "superiorCategory")
    private ProductCategory superiorCategory;

}
