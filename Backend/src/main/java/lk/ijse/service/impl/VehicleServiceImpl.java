package lk.ijse.service.impl;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.entity.Customer;
import lk.ijse.entity.Vehicle;
import lk.ijse.repo.CustomerRepo;
import lk.ijse.repo.VehicleRepo;
import lk.ijse.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    VehicleRepo vehicleRepo;
    @Autowired
    ModelMapper modelMapper;
    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {
        if (vehicleRepo.existsById(vehicleDTO.getVehicleId())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            vehicleRepo.save(modelMapper.map(vehicleDTO, Vehicle.class));
        }
    }

    @Override
    public void deleteVehicle(String id) {

    }

    @Override
    public void updateVehicle(VehicleDTO driverDTO) {

    }

    @Override
    public List<VehicleDTO> getAllVehicle() {
        return null;
    }
}
