let baseURL = "http://localhost:8080/Backend_war/customer/";

getAllCustomers();

$("#saveCustomer").on('click', function () {
    saveCustomer();
});


function saveCustomer() {
    let formData = $("#CustomerFormController").serialize();
    $.ajax({
        url: baseURL + "save_customer", method: "post", data: formData, dataType: "json", success: function (res) {
            /*getAllCustomers();*/
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

function getAllCustomers() {
    $("#customerTableBody").empty();
    $.ajax({
        url: baseURL + "customer",
        success: function (res) {
            for (let c of res.data) {

             let id = c.id;
             let firstName = c.firstName;
             let lastName = c.lastName;
             let address = c.address;
             let email = c.email;
             let contactNo= c.contactNo;
             let user_id = c.userId;
             let password = c.password;
             let nic = c.nic;
             let drivingLicenceNo = c.drivingLicenseNo;
             let role = c.role;


                let row = "<tr>" +
                    "<td>" + id + "</td>" +
                    "<td>" + firstName + "</td>" +
                    "<td>" + lastName + "</td>" +
                    "<td>" + address + "</td>" +
                    "<td>" + email + "</td>" +
                    "<td>" + contactNo + "</td>" +
                    "<td>" + user_id + "</td>" +
                    "<td>" + password + "</td>" +
                    "<td>" + nic + "</td>" +
                    "<td>" + drivingLicenceNo + "</td>" +
                    "<td>" + role + "</td>" +
                    "</tr>"
                ;

                $("#customerTableBody").append(row);
            }
            /*bindRowClickEvents();
            clearTextFields();*/
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}
