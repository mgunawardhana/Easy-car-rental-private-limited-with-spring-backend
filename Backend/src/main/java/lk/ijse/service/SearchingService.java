package lk.ijse.service;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.enums.FuelType;

import java.util.List;

public interface SearchingService {
    List<VehicleDTO> getAllNoOfPassenger(int no_of_passengers);

    List<VehicleDTO> getAllFuelType(FuelType fuel_type);
}
