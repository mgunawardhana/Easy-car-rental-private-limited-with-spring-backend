package lk.ijse.service.impl;

import lk.ijse.dto.AdminDTO;
import lk.ijse.entity.Admin;
import lk.ijse.repo.AdminRepo;
import lk.ijse.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveAdmin(AdminDTO adminDTO) {
        if (adminRepo.existsById(adminDTO.getAdminId())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            adminRepo.save(modelMapper.map(adminDTO, Admin.class));
        }
    }

    @Override
    public void updateAdmin(AdminDTO adminDTO) {

    }

    @Override
    public void deleteAdmin(String id) {
        if (adminRepo.existsById(id)) {
            adminRepo.deleteById(id);
        } else {
            throw new RuntimeException("No such a admin like this !");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmin() {
        return null;
    }
}
