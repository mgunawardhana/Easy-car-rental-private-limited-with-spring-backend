package lk.ijse.service;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;

import java.util.ArrayList;
import java.util.List;

public interface BookingService {

    void placeBooking(BookingDTO bookingDTO);

    ArrayList<CustomerDTO> loadAllCustomersInTheCombo();

    ArrayList<DriverDTO> loadAllItemsInTheCombo();

    ArrayList<VehicleDTO> loadAllVehiclesInToTheCombo();

    long countBooking();

    List<BookingDTO> getAllBookings();

    BookingDTO getBookingById(String id);

    List<BookingDTO> getBookingDetails();
}
