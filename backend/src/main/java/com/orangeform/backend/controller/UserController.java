package com.orangeform.backend.controller;

import com.orangeform.backend.model.User;
import com.orangeform.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder; // Import PasswordEncoder
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
// Removed @CrossOrigin from here as it's handled globally by CorsConfig.java
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired // Inject the PasswordEncoder bean
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody User user) {
        if (userService.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already registered");
        }
        userService.saveUser(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User loginRequest) {
        User user = userService.findByEmail(loginRequest.getEmail());

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect password");
        }

        // Frontend expects JSON for login success. Change this to return JSON.
        return ResponseEntity.ok().body("{\"message\": \"Login successful!\"}");
    }
}