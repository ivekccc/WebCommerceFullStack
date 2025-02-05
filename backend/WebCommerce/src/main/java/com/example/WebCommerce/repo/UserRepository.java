package com.example.WebCommerce.repo;

import com.example.WebCommerce.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Integer> {
    User findByEmail(String email);
}
