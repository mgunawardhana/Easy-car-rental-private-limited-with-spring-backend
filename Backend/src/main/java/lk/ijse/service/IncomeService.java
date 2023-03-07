package lk.ijse.service;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.PaymentDTO;

import java.util.List;

public interface IncomeService {

    /**
     * generating daily income
     */
    List<?> getCurrentIncomeByDate();

    /**
     * generating monthly income
     */
    List<?> getCurrentIncomeByMonth();

    /**
     * generating yearly income
     */
    List<?> getCurrentIncomeByYear();

}
