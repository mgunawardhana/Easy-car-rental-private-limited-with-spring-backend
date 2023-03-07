let baseURL = "http://localhost:8080/Backend_war/driver/";

getAllDrivers();
function getAllDrivers() {
    $("#driverTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstname = c.name.firstName;
                let lastname = c.name.lastName;
                let drivingLicenseNo = c.drivingLicenseNo;
                let contactNo = c.contactNo;
                let nic = c.nic;


                let row = "<tr>" +
                    "<td>" + id + "</td>"
                    + "<td>" + firstname + "</td>"
                    + "<td>" + lastname + "</td>"
                    + "<td>" + drivingLicenseNo + "</td>"
                    + "<td>" + contactNo + "</td>"
                    + "<td>" + nic + "</td>"
                    + "</tr>";

                $("#driverTableBody").append(row);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}
