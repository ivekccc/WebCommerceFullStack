package com.example.WebCommerce.model.authResponse;

import com.example.WebCommerce.model.user.User;
import lombok.Data;

@Data
public class AuthResponseDTO {
    private String token;
    private User user;

    public AuthResponseDTO(String token, User user) {
        this.token = token;
        this.user = user;
    }

    public AuthResponseDTO() {
    }
}
