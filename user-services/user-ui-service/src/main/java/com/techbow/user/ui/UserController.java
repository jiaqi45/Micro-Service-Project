package com.techbow.user.ui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserStoreService userStoreService;

    @GetMapping
    List<User> getAllUsers(){
        return userStoreService.getAllUsers();
    }

    @PostMapping
    User createUser(@RequestBody User user){
        return userStoreService.createUser(user);
    }

    @GetMapping("/{id}")
    User getUserById(@PathVariable Long id){
        return userStoreService.getUser(id);
    }

    @PutMapping
    User updateUser(@RequestBody User user){
        return userStoreService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    void deleteUser(@PathVariable Long id){
        userStoreService.deleteUser(id);
    }


}
