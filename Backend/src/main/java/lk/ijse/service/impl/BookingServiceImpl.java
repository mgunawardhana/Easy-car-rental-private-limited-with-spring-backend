package lk.ijse.service.impl;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.repo.AdminRepo;
import lk.ijse.repo.CustomerRepo;
import lk.ijse.repo.DriverRepo;
import lk.ijse.service.BookingService;
import lk.ijse.util.ResponseUtil;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {
    @Autowired
    AdminRepo adminRepo;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    CustomerRepo customerRepo;
    @Autowired
    DriverRepo driverRepo;

    @Override
    public ArrayList<CustomerDTO> loadAllCustomersInTheCombo() {
        System.out.println(customerRepo.findAll());
        return modelMapper.map(customerRepo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public ArrayList<DriverDTO> loadAllItemsInTheCombo() {
        System.out.println(driverRepo.findAll());
        return modelMapper.map(driverRepo.findAll(), new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }

}
