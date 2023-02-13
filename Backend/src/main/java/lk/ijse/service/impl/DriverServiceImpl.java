package lk.ijse.service.impl;

import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.Customer;
import lk.ijse.entity.Driver;
import lk.ijse.repo.CustomerRepo;
import lk.ijse.repo.DriverRepo;
import lk.ijse.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if (driverRepo.existsById(driverDTO.getId())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            driverRepo.save(modelMapper.map(driverDTO, Driver.class));
        }
    }

    @Override
    public void deleteDriver(String id) {

    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {

    }

    @Override
    public List<DriverDTO> getAllDriver() {
        return null;
    }
}
