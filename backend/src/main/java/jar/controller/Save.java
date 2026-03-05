package jar.controller;
import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jar.dto.AuthReq;
import jar.model.User;
import jar.repo.UserRepo;
@CrossOrigin (origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class Save {

    @Autowired
    UserRepo db;

    @PostMapping("/register")
    public String gaveData(@RequestBody AuthReq d) {
        User user = new User();
        user.setName(d.getName());
        user.setEmail(d.getEmail());
        user.setPassword(d.getPassword());

        db.save(user);
        return "User saved successfully";
    }
       @PostMapping("/login")
    public String login(@RequestBody User user) {

        Optional<User> existingUser = db.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            if (existingUser.get().getPassword().equals(user.getPassword())) {
                return "Login Success!";
            } else {
                return "Invalid Password!";
            }
        } else {
            return "User Not Found!";
        }
    }
}
