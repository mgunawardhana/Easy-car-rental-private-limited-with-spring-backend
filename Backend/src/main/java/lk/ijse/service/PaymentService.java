package lk.ijse.service;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.PaymentDTO;

import java.util.ArrayList;
import java.util.List;

public interface PaymentService {

    List<?> gettingAllPaymentDetails();

    void savePayment(PaymentDTO paymentDTO);

    void deletePayment(String id);

    void updatePayment(PaymentDTO paymentDTO);

    PaymentDTO searchPayment(String id);

    List<PaymentDTO> getAllPayment();

    ArrayList<BookingDTO> loadAllBookingDetails();
}
