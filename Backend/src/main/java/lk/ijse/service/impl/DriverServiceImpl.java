package lk.ijse.service.impl;

import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.Customer;
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
       /* if (customerRepo.existsById(customerDTO.getId())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            customerRepo.save(modelMapper.map(customerDTO, Customer.class));
        }*/
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
