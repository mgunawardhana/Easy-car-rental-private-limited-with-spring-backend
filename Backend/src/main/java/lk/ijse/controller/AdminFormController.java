package lk.ijse.controller;

import lk.ijse.dto.AdminDTO;
import lk.ijse.service.AdminService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("admin")
public class AdminFormController {

    @Autowired
    public AdminService adminService;


    @PostMapping(value = "save_admin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@ModelAttribute AdminDTO adminDTO) {
        adminService.saveAdmin(adminDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    @DeleteMapping
    public ResponseUtil deleteCustomer(String code_red) {
        adminService.deleteAdmin(code_red);
        return new ResponseUtil("OK", "Successfully Deleted ! " + code_red, "");
    }
}
