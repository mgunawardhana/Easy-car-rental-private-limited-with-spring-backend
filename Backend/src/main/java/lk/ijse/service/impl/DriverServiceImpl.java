package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.DriverScheduleDTO;
import lk.ijse.entity.Booking;
import lk.ijse.entity.Driver;
import lk.ijse.enums.AvailabilityType;
import lk.ijse.repo.BookingRepo;
import lk.ijse.repo.DriverRepo;
import lk.ijse.repo.DriverSheduleRepo;
import lk.ijse.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;
    @Autowired
    DriverSheduleRepo driverSheduleRepo;
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    BookingRepo bookingRepo;

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
        if (!driverRepo.existsById(id)) {
            throw new RuntimeException("No such a admin !");
        } else {
            driverRepo.deleteById(id);
        }
    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {
        if (!driverRepo.existsById(driverDTO.getId())) {
            throw new RuntimeException("Cannot find these customer id !");
        } else {
            driverRepo.save(modelMapper.map(driverDTO, Driver.class));
        }
    }

    @Override
    public List<DriverDTO> getAllDriver() {
        return modelMapper.map(driverRepo.findAll(), new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }

    @Override
    public long countDrivers() {
        return driverRepo.count();
    }

    @Override
    public String generateDriverIds() {
        String id = driverRepo.generateDriverId();
        if (id != null) {
            int tempId = Integer.
                    parseInt(id.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                return "D00-00" + tempId;
            } else if (tempId <= 99) {
                return "D00-0" + tempId;
            } else {
                return "D00-" + tempId;
            }
        } else {
            return "D00-001";
        }
    }

//    @Override
//    public List<DriverScheduleDTO> getDriverShedule() {
////        return modelMapper.map(driverSheduleRepo.findAll(), new TypeToken<ArrayList<DriverScheduleDTO>>() {
////        }.getType());
//        ArrayList<DriverScheduleDTO> allIds= new ArrayList<>();
//        List<Driver> all = driver.findAll();
//        for (Driver b : all) {
//            DriverDTO dto=  modelMapper.map(b.get,DriverDTO.class);
//            DriverScheduleDTO b1=new DriverScheduleDTO(
//                    b.getBookingID(),
//                    b.getPickUpDate(),
//                    b.getPickUpTime(),
//                    b.getReturnDate(),
//                    b.getDriverRequestType(),
//                    dto,b.getPickUpLocation()
//            );
//            allIds.add(b1);
//        }
//



    }


