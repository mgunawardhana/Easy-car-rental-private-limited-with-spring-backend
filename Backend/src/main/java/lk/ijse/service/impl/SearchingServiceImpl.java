package lk.ijse.service.impl;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.enums.FuelType;
import lk.ijse.repo.VehicleRepo;
import lk.ijse.service.SearchingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.jws.WebParam;
import java.util.List;
@Service
@Transactional
public class SearchingServiceImpl implements SearchingService {
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    VehicleRepo vehicleRepo;



    @Override
    public List<VehicleDTO> getAllNoOfPassenger(int no_of_passengers) {
        if (!vehicleRepo.findAllByNumberOfPassenger(no_of_passengers).isEmpty()) {
            return modelMapper.map(vehicleRepo.findAllByNumberOfPassenger(no_of_passengers), new TypeToken<List<VehicleDTO>>() {
            }.getType());
        }
        throw new RuntimeException("No Search a Result");
    }

    @Override
    public List<VehicleDTO> getAllFuelType(FuelType fuel_type) {
        if (!vehicleRepo.findAllByFuelType(fuel_type).isEmpty()) {
            return modelMapper.map(vehicleRepo.findAllByFuelType(fuel_type), new TypeToken<List<VehicleDTO>>() {
            }.getType());
        }
        throw new RuntimeException("No Search a Result");
    }
}
