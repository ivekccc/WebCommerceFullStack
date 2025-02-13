package com.example.WebCommerce.controller;


import com.example.WebCommerce.model.authResponse.AuthResponseDTO;
import com.example.WebCommerce.model.user.User;
import com.example.WebCommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public AuthResponseDTO login(@RequestBody User user){
        return userService.verify(user);
    }
}
