package com.example.WebCommerce.service;

import com.example.WebCommerce.model.user.User;
import com.example.WebCommerce.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private AuthenticationManager authMenager;

    @Autowired
    private JWTService jwtService;


    private BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder(10);

    public User register(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }


    public String verify(User user) {
        Authentication authentication=authMenager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword()));

        if(authentication.isAuthenticated()){

           return jwtService.generateToken(user.getEmail());

        }
        else{
            return "fail";
        }
    }
}
