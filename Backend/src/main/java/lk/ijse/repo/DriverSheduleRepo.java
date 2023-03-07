package lk.ijse.repo;

import lk.ijse.entity.DriverSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverSheduleRepo extends JpaRepository<DriverSchedule, String> {
    @Query(value = "select * from driverschedule", nativeQuery = true)
    String gettingDriverSchedule();
}
