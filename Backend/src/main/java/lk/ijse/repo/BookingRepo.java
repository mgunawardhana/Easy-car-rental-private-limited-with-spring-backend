package lk.ijse.repo;

import lk.ijse.entity.Booking;
import lk.ijse.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking,String> {
}
