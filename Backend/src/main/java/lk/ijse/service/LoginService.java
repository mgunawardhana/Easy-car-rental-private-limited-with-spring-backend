package lk.ijse.service;

import lk.ijse.dto.UserDTO;

public interface LoginService {
    UserDTO loginUser(String userName, String password);
}
