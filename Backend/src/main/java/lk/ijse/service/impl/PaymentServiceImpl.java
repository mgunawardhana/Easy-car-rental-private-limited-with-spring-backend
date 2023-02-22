package lk.ijse.service.impl;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.PaymentDTO;
import lk.ijse.entity.Payment;
import lk.ijse.repo.PaymentRepo;
import lk.ijse.service.PaymentService;
import net.bytebuddy.matcher.StringMatcher;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Access;
import java.util.ArrayList;
import java.util.List;
@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    PaymentRepo paymentRepo;




    @Override
    public void savePayment(PaymentDTO paymentDTO) {
        if (!paymentRepo.existsById(paymentDTO.getPaymentId())){
            paymentRepo.save(modelMapper.map(paymentDTO, Payment.class));
        }else {
            throw new RuntimeException("Already Done");
        }
    }

    @Override
    public void deletePayment(String id) {

    }

    @Override
    public void updatePayment(PaymentDTO paymentDTO) {

    }

    @Override
    public PaymentDTO searchPayment(String id) {
        return null;
    }

    @Override
    public List<PaymentDTO> getAllPayment() {
        return modelMapper.map(paymentRepo.findAll(), new TypeToken<ArrayList<PaymentDTO>>() {
        }.getType());
    }
}
