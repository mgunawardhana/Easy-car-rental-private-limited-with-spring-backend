package lk.ijse.service.impl;

import lk.ijse.repo.IncomeRepo;
import lk.ijse.service.IncomeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class IncomeServiceImpl implements IncomeService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    IncomeRepo incomeRepo;

    @Override
    public String getCurrentIncomeByDate() {
        return incomeRepo.getRevenueByDate();
    }
}
