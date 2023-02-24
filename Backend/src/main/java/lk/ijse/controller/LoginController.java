package lk.ijse.controller;

import lk.ijse.dto.UserDTO;
import lk.ijse.service.LoginService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("login_form")
@CrossOrigin
public class LoginController {


    @Autowired
    LoginService loginService;

    @GetMapping(params = {"userName","password"})
    public ResponseUtil getUser(@RequestParam String userName, @RequestParam String password){
        UserDTO dto = loginService.loginUser(userName,password);
        return new ResponseUtil("Ok","Saved",dto);
    }
}
