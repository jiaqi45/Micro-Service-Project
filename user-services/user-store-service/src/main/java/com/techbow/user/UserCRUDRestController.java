package com.techbow.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserCRUDRestController {
    @Autowired
    private UserStoreService userStoreService;

    @GetMapping
    List<User> getAllUsers(){
        return userStoreService.getAllUsers();
    }

    @PostMapping
    User createUser(@Valid @RequestBody User user){
        return userStoreService.saveUser(user);
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
