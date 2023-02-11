package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.service.CustomerService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("customer")
public class CustomerFormController {

    @Autowired
    public CustomerService customerService;


    @PostMapping("save_customer")
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO customerDTO) {
        customerService.saveCustomer(customerDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }


}
