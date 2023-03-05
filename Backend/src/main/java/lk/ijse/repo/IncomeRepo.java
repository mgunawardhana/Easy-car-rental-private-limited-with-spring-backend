package lk.ijse.repo;

import lk.ijse.entity.Customer;
import lk.ijse.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IncomeRepo extends JpaRepository<Payment, String> {
    @Query(value = "SELECT COUNT(amount) FROM payment GROUP BY date;", nativeQuery = true)
    String getRevenueByDate();
}
