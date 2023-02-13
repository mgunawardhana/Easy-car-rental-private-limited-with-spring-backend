let baseURL = "http://localhost:8080/Backend_war/driver/";

getAllDrivers();

$("#saveDriver").on('click', function () {
    saveDriver();
});

function saveDriver() {
    let formData = $("#driverFormController").serialize();
    $.ajax({
        url: baseURL + "save_driver", method: "post", data: formData, dataType: "json", success: function (res) {
            getAllDrivers();
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

function getAllDrivers() {
    $("#adminTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstname = c.name.firstName;
                let lastname = c.name.lastName;
                let address = c.address;
                let drivingLicenseNo = c.drivingLicenseNo;
                let email = c.email;
                let contactNo = c.contactNo;
                let password = c.user.password;
                let driverAvailability = c.driverAvailability;
                let userName = c.user.username;
                let user_id = c.user.userId;


                let row = "<tr>" + "<td>" + id + "</td>" + "<td>" + firstname + "</td>" + "<td>" + lastname + "</td>" + "<td>" + address + "</td>" + "<td>" + drivingLicenseNo + "</td>" + "<td>" + email + "</td>" + "<td>" + contactNo + "</td>" + "<td>" + password + "</td>" + "<td>" + driverAvailability + "</td>" + "<td>" + userName + "</td>" + "<td>" + user_id + "</td>" + "</tr>";

                $("#adminTableBody").append(row);
            }
            // bindRowClickEvents();
            // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$("#deleteDriver").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#id").val(), method: "delete", dataType: "json", success: function (resp) {
            getAllDrivers();
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});