package com.example.WebCommerce.model.user;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    private int id;

    private String firstName;
    private String lastName;
    private String address;
    private String phoneNumber;

    @Column(unique = true)
    private String email;
    private String password;
    


}
