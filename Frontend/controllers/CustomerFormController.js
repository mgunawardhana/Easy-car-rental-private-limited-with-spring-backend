let baseURL = "http://localhost:8080/Backend_war";

getAllCustomers();
genarateID();
$("#saveCustomer").on('click', function () {
    saveCustomer();
});

function saveCustomer() {
    let formData = $("#CustomerFormController").serialize();
    $.ajax({
        url: baseURL + "/customer/save_customer",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
            getAllCustomers();
            alert(res.message);
        },
        error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

$("#updateCustomer").on('click', function () {

    let id = $('#id').val();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let address = $('#address').val();
    let email = $('#email').val();
    let contactNo = $('#contactNo').val();
    let user_id = $('#userId').val();
    let password = $('#password').val();
    let nic = $('#nic').val();
    let drivingLicenceNo = $('#drivingLicenseNo').val();
    let role = $('#role').val();
    let userName = $('#userName').val();

    var customerObj = {
        id: id,
        name: {firstName: firstName, lastName: lastName},
        address: address,
        email: email,
        contactNo: contactNo,
        user: {userName: userName, userId: user_id, password: password, role: role},
        nic: nic,
        drivingLicenseNo: drivingLicenceNo,
    }

    $.ajax({
        url: baseURL + "/customer/update_customer",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(customerObj),
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

$("#deleteCustomer").on('click', function () {
    $.ajax({
        url: baseURL + "/customer/?code=" + $("#id").val(),
        method: "delete",
        dataType: "json",
        success: function (resp) {
            clearTextFields();
            getAllCustomers();
            alert(resp.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

function getAllCustomers() {
    $("#customerTableBody").empty();
    $.ajax({
        url: baseURL + "/customer/get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstName = c.name.firstName;
                let lastName = c.name.lastName;
                let address = c.address;
                let email = c.email;
                let contactNo = c.contactNo;
                let user_name = c.user.userName;
                let nic = c.nic;
                let drivingLicenceNo = c.drivingLicenseNo;
                let role = c.user.role;
                let user_id = c.user.userId;
                let password = c.user.password;


                let row = "<tr>" + "<td>" + id + "</td>" + "<td>" + firstName + "</td>" + "<td>" + lastName + "</td>" + "<td>" + address + "</td>" + "<td>" + email + "</td>" + "<td>" + contactNo + "</td>" + "<td>" + user_name + "</td>" + "<td>" + password + "</td>" + "<td>" + nic + "</td>" + "<td>" + drivingLicenceNo + "</td>" + "<td>" + role + "</td>" + "<td>" + user_id + "</td>" + "</tr>";
                $("#customerTableBody").append(row);
            }
            bindRowClickEvents();
            clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

function genarateID() {
    $("#customerTableBody").empty();
    $.ajax({
        url: baseURL + "/customer/?test=", success: function (res) {
            $('#id').val(res.data.id);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

function bindRowClickEvents() {
    $("#customerTableBody>tr").on('click', function () {
        let id = $(this).children(":eq(0)").text();
        let firstName = $(this).children(":eq(1)").text();
        let lastName = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(3)").text();
        let email = $(this).children(":eq(4)").text();
        let contactNo = $(this).children(":eq(5)").text();
        let userName = $(this).children(":eq(6)").text();
        let password = $(this).children(":eq(7)").text();
        let nic = $(this).children(":eq(8)").text();
        let drivingLicenseNo = $(this).children(":eq(9)").text();
        let role = $(this).children(":eq(10)").text();
        let userId = $(this).children(":eq(11)").text();


        $('#id').val(id);
        $('#firstName').val(firstName);
        $('#lastName').val(lastName);
        $('#address').val(address);
        $('#email').val(email);
        $('#contactNo').val(contactNo);
        $('#userName').val(userName);
        $('#password').val(password);
        $('#nic').val(nic);
        $('#drivingLicenseNo').val(drivingLicenseNo);
        $('#role').val(role);
        $('#userId').val(userId);

    });
}

function clearTextFields() {
    $('#id').val();
    $('#firstName').val();
    $('#lastName').val();
    $('#address').val();
    $('#email').val();
    $('#contactNo').val();
    $('#userName').val();
    $('#password').val();
    $('#nic').val();
    $('#drivingLicenseNo').val();
    $('#role').val();
    $('#userId').val();
}

loadAllDriversToCombo();
loadAllCustomersToCombo();
loadAllVehiclesToCombo();

function loadAllCustomersToCombo() {
    $('#customer').empty();
    $.ajax({
        url: baseURL + "/bookings/get_all_customers", method: "GET", dataType: "json", success: function (res) {
            for (let customer of res.data) {
                $("#customer").append(`<option>${customer.id}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$('#customer').on('click', function () {
    $.ajax({
        url: baseURL + "/bookings/get_all_customers", method: "GET", dataType: "json", success: function (res) {
            for (let customer of res.data) {
                if (customer.id === $('#customer').val()) {
                    $("#customerName").val(customer.name.firstName);
                }
            }
        }
    });
});

function loadAllDriversToCombo() {
    $('#driverId').empty();

    $.ajax({
        url: baseURL + "/bookings/get_all_drivers", method: "GET", dataType: "json", success: function (res) {
            for (let driver of res.data) {
                $("#driverId").append(`<option>${driver.id}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$('#driverId').on('click', function () {
    $.ajax({
        url: baseURL + "/bookings/get_all_drivers", method: "GET", dataType: "json", success: function (res) {
            for (let driver of res.data) {
                if (driver.id === $('#driverId').val()) {
                    $("#driverName").val(driver.name.firstName);
                }
            }
        }
    });
});

function loadAllVehiclesToCombo() {
    $('#vehicleId').empty();
    $.ajax({
        url: baseURL + "/bookings/get_all_vehicles", method: "GET", dataType: "json", success: function (res) {
            for (let vehicle of res.data) {
                $("#vehicleId").append(`<option>${vehicle.vehicleId}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$("#placeBookingBtn").on('click', function () {
    let formData = $("#placeBooking").serialize();
    console.log(formData)
    $.ajax({
        url: baseURL + "/bookings/place_bookings",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
            getAllCustomers();
            alert(res.message);
        },
        error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
});

// bookingId: R00-007
// driverSchedules.driverId: D00-001
// customer.id: R00-001
// bookingDetails.vehicleId: V00-001
// contactNo: 12000.00
// pickUpDate: 2023-02-22
// DriverRequestType: YES
// pickUpLocation: Hapugala
// returnDate: 2023-02-22
// pickUpTime: 12:55
//
// $("#placeBookingBtn").on('click', function () {
//
//     let reg_id = $("#bookingId").val();
//     let driver_id = $("#driverId").val();
//     let customer_id = $("#customer").val();
//     let customer_name = $("#customerName").val();
//     let vehicle_id = $("#vehicleId").val();
//     let pickup_date = $("#pickUpDate").val();
//     let request_type = $("#DriverRequestType").val();
//     let pickup_location = $("#pickUpLocation").val();
//     let return_date = $("#returnDate").val();
//     let pickup_time = $("#pickUpTime").val();
//
//
//     var place_booking = {
//         bookingId: reg_id,
//         pickUpDate: pickup_date,
//         pickUpTime: pickup_time,
//         returnDate: return_date,
//         DriverRequestType: request_type,
//         customer: {
//             id: customer_id, name: {
//                 firstName: customer_name, lastName: customer_name
//             }
//         },
//         pickUpLocation: pickup_location,
//         driverSchedules: {driverId: driver_id, bookingId: reg_id},
//         bookingDetails: {vehicleId: vehicle_id, bookingId: reg_id},
//     }
//
//     $.ajax({
//         url: baseURL + "/bookings/place_bookings",
//         method: "post",
//         contentType: "application/json",
//         data: JSON.stringify(place_booking),
//         dataType: "json",
//         success: function (res) {
//             alert(res.message);
//         },
//         error: function (error) {
//             alert(JSON.parse(error.responseText).message);
//         }
//     });
// });
