package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.service.CustomerService;
import lk.ijse.service.VehicleService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("vehicle")
public class VehicleController {
    @Autowired
    public VehicleService vehicleService;


    @PostMapping(value = "save_vehicle",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@ModelAttribute VehicleDTO vehicleDTO) {
        vehicleService.saveVehicle(vehicleDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    @GetMapping(value = "get_all",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil("OK","Successful",vehicleService.getAllVehicle());
    }

}
