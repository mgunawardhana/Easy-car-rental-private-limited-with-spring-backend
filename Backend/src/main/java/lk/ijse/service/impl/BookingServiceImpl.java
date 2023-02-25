package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.entity.Booking;
import lk.ijse.repo.*;
import lk.ijse.service.BookingService;
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
    @Autowired
    private VehicleRepo vehicleRepo;
    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private BookingDetailsRepo bookingDetailsRepo;


    @Override
    public void placeBooking(BookingDTO bookingDTO) {
        if (bookingRepo.existsById(bookingDTO.getBookingID())) {
            throw new RuntimeException("already booked try another !");
        } else {
            System.out.println(bookingDTO.toString());
            Booking bb=modelMapper.map(bookingDTO, Booking.class);
            System.out.println("+++++++++++++++++++++");
            System.out.println(bb.toString());
            System.out.println("+++++++++++++++++++++");
            bookingRepo.save(bb);
        }
    }

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

    @Override
    public ArrayList<VehicleDTO> loadAllVehiclesInToTheCombo() {
        System.out.println(vehicleRepo.findAll());
        return modelMapper.map(vehicleRepo.findAll(), new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public long countBooking() {
        return bookingRepo.count();
    }

    @Override
    public List<Booking> getAllBookings() {
        System.out.println("^^^^^^^^^^^^^^");
        System.out.println(bookingDetailsRepo.findAll());
        System.out.println("^^^^^^^^^^^^^^");
        return modelMapper.map(bookingDetailsRepo.findAll(), new TypeToken<ArrayList<BookingDTO>>() {
        }.getType());
    }

    @Override
    public BookingDTO getBookingById(String id) {
        return modelMapper.map(bookingRepo.getBookingByBookingID(id),BookingDTO.class);
    }
}


