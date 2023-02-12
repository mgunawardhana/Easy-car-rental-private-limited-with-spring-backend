package lk.ijse.service;

import lk.ijse.dto.AdminDTO;
import lk.ijse.dto.CustomerDTO;

import java.util.List;

public interface AdminImpl {
    void saveAdmin(AdminDTO adminDTO);

    void updateAdmin(AdminDTO adminDTO);

    void deleteAdmin(String id);

    List<AdminDTO> getAllAdmin();
}
