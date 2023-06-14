package com.techbow.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserStoreService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }
    public User getUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public User updateUser(User user) {
        User found = userRepository.findById(user.getId()).orElse(null);
        if (found == null) {
            return null;
        }

        found.setName(user.getName());
        found.setEmail(user.getEmail());
        userRepository.save(found);

        return found;
    }

}
