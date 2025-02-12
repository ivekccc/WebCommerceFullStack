package com.example.WebCommerce.model.productCategory;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Entity
@Table(name = "productCategory")
@Data
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String categoryName;
    private String categoryDescription;
    private String categoryImgSrc;
    @ManyToOne
    @JoinColumn(name = "superiorCategory")
    private ProductCategory superiorCategory;

    @Override
    public String toString() {
        return "ProductCategory{" +
                "id=" + id +
                ", categoryName='" + categoryName + '\'' +
                ", categoryDescription='" + categoryDescription + '\'' +
                ", categoryImgSrc='" + categoryImgSrc + '\'' +
                ", superiorCategory=" + superiorCategory +
                '}';
    }
}
