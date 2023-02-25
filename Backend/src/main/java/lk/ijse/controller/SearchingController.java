package lk.ijse.controller;

import lk.ijse.enums.FuelType;
import lk.ijse.service.SearchingService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("searching")
public class SearchingController {
    @Autowired
    SearchingService searchingService;

    @GetMapping(params = {"no_of_passengers"})
    public ResponseUtil sortVehicleNoOfPassenger(@RequestParam int no_of_passengers) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getAllNoOfPassenger(no_of_passengers));
    }

    @GetMapping(params = {"fuel_type"})
    public ResponseUtil sortVehicleFuelType(@RequestParam FuelType fuel_type) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getAllFuelType(fuel_type));
    }

}
