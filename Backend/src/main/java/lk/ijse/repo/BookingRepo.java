package lk.ijse.repo;

import lk.ijse.dto.BookingDTO;
import lk.ijse.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {

//    List<Booking> find_all_by_return_date_after_and_before_pickup_date(LocalDate pickUpDate, LocalDate returnDate);
    BookingDTO getBookingByBookingID(String id);
}
