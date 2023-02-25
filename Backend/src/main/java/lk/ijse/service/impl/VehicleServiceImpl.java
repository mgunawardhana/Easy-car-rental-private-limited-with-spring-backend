package lk.ijse.service.impl;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.entity.Vehicle;
import lk.ijse.repo.VehicleRepo;
import lk.ijse.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
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
        if (vehicleRepo.existsById(vehicleDTO.getVehicleID())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            vehicleRepo.save(modelMapper.map(vehicleDTO, Vehicle.class));
        }
    }

    @Override
    public void deleteVehicle(String code) {
        if (vehicleRepo.existsById(code)) {
            vehicleRepo.deleteById(code);
        } else {
            throw new RuntimeException("No such a vehicle !");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO vehicleDTO) {
        if (!vehicleRepo.existsById(vehicleDTO.getVehicleID())) {
            throw new RuntimeException("Cannot find these vehicle id !");
        } else {
            vehicleRepo.save(modelMapper.map(vehicleDTO, Vehicle.class));

        }
    }

    @Override
    public List<VehicleDTO> getAllVehicle() {
        return modelMapper.map(vehicleRepo.findAll(), new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public long countVehicle() {
        return vehicleRepo.count();
    }

    @Override
    public String generateVehicleIds() {
        String id = vehicleRepo.generateVehicleId();
        if (id != null) {
            int tempId = Integer.
                    parseInt(id.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                return "V00-00" + tempId;
            } else if (tempId <= 99) {
                return "V00-0" + tempId;
            } else {
                return "V00-" + tempId;
            }
        } else {
            return "V00-001";
        }    }
}
