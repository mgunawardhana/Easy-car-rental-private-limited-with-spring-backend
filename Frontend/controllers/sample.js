$("#placeBookingBtn").on('click', function () {



    $.ajax({
        url: baseURL + "/bookings/place_bookings",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(bk_details),
        dataType: "json",
        success: function (res) {
            clearTextFields();
            getAllCustomers();
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
var bk_details = {
    bookingId: bookingId,
    pickUpDate: pickUpDate,
    pickUpTime: pickUpTime,
    returnDate: returnDate,
    DriverRequestType: DriverRequestType
}
//     customer: {id:,
//         nic:,
//         name:{firstName:,lastName:},
//         address:,
//         drivingLicenseNo:,
//         email:,
//         contactNo:,
//         user:{userId:,userName:,password:,role:},
//     },
//     pickUpLocation: "Galle",
//     bookingDetails:{vehicleId: bookingId:},
//     driverSchedules:{driverId:bookingId:}
//         }
//     // bookingDetails:, driverSchedules:,
// }
//=====================================================
// let formData = $("#placeBooking").serialize();
// formData.append({bookingDetails:{vehicleId:vehicle_id,bookingId:booking_id}});
// alert(formData.toString())
// return;

// let booking_id = $("").val();
// let pickup_date = $("").val();
// let pickup_time = $("").val();
// let return_date = $("").val();
// let driver_request = $("#").val();
//
//
//
//
// let booking = {
//     bookingId:,
//     pickUpDate:,
//     pickUpTime:,
//     returnDate:,
//     DriverRequestType:,
//     customer:,
//     pickUpLocation:,
//     bookingDetails:{},
//     driverSchedules:{},
// }
//