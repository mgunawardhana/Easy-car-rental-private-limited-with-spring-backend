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
        url: baseURL + "get_all",
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
           bindRowClickEvents();
            /*clearTextFields();*/
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

function bindRowClickEvents(){
    $("#customerTableBody>tr").on('click', function () {
        let id = $(this).children(":eq(0)").text();
        let firstName = $(this).children(":eq(1)").text();
        let lastName = $(this).children(":eq(2)").text();
        let address = $(this).children(":eq(3)").text();
        let email = $(this).children(":eq(4)").text();
        let contactNo = $(this).children(":eq(5)").text();
        let userId = $(this).children(":eq(6)").text();
        let password = $(this).children(":eq(7)").text();
        let nic = $(this).children(":eq(8)").text();
        let drivingLicenseNo = $(this).children(":eq(9)").text();
        let role = $(this).children(":eq(10)").text();


        $('#id').val(id);
        $('#firstName').val(firstName);
        $('#lastName').val(lastName);
        $('#address').val(address);
        $('#email').val(email);
        $('#contactNo').val(contactNo);
        $('#userId').val(userId);
        $('#password').val(password);
        $('#nic').val(nic);
        $('#drivingLicenseNo').val(drivingLicenseNo);
        $('#role').val(role);

    });
}