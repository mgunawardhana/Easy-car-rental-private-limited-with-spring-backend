package lk.ijse.service;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.embeded.PriceRate;
import lk.ijse.enums.FuelType;

import java.util.List;

public interface SearchingService {
    List<VehicleDTO> getAllNoOfPassenger(int no_of_passengers);

    List<VehicleDTO> getAllFuelType(FuelType fuel_type);

    List<VehicleDTO> getPriceRate(PriceRate price_rate);

    List<VehicleDTO> getVehicleByBrand(String brand);

}
