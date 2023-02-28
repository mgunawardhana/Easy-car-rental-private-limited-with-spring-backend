package lk.ijse.repo;

import lk.ijse.entity.Booking;
import lk.ijse.entity.DriverSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverSheduleRepo extends JpaRepository<DriverSchedule,String> {
}
