package lk.ijse.service;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;

import java.util.ArrayList;
import java.util.List;

public interface BookingService {
    /*    List<DriverDTO> getAllDriversInToTheCombo();*/

    public ArrayList<CustomerDTO> loadAllCustomersInTheCombo();

    public ArrayList<DriverDTO> loadAllItemsInTheCombo();




}
