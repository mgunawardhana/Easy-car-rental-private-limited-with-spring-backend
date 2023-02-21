package lk.ijse.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.enums.RequestType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDTO {

    private String bookingId;
//    @JsonFormat(pattern="yyyy-MM-dd")
//    private LocalDate pickUpDate;
//    @JsonFormat(pattern="HH:mm:ss")
//    private LocalTime pickUpTime;
//    @JsonFormat(pattern="yyyy-MM-dd")
//    private LocalDate returnDate;

    @JsonFormat(pattern="yyyy-MM-dd")
    private String pickUpDate;
    @JsonFormat(pattern="HH:mm:ss")
    private String pickUpTime;
    @JsonFormat(pattern="yyyy-MM-dd")
    private String returnDate;
    private RequestType DriverRequestType;
    private CustomerDTO customer;
    private String pickUpLocation;
    private List<BookingDetailsDTO> bookingDetails;
    private List<DriverScheduleDTO> driverSchedules;
}
