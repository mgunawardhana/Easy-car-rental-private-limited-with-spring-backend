package lk.ijse.service.impl;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.service.VehicleService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Override
    public void saveVehicle(VehicleDTO driverDTO) {

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
