package com.facecaller.server.config;

import com.facecaller.server.model.Users;
import com.facecaller.server.repository.UserRepository;

import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        Optional<Users> userOptional = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail);
        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("User not found with username or email: " + usernameOrEmail);
        }

        Users user = userOptional.get();
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPasswordHash(),
                Collections.emptyList()
        );
    }
}
