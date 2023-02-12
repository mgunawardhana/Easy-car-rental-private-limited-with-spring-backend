let baseURL = "http://localhost:8080/Backend_war/admin/";

getAllAdmins();

$("#saveAdmin").on('click', function () {
    saveAdmin();
});

function saveAdmin() {
    let formData = $("#adminFormController").serialize();
    $.ajax({
        url: baseURL + "save_admin", method: "post", data: formData, dataType: "json", success: function (res) {
            getAllAdmins();
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

$("#deleteCustomer").on('click', function () {
    $.ajax({
        url: baseURL + $("#adminId").val(),
        method: "delete",
        dataType: "json",
        success: function (resp) {
            getAllAdmins();
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

function getAllAdmins() {
    $("#adminTableBody").empty();
    $.ajax({
        url: baseURL + "get_all_admin", success: function (res) {
            for (let c of res.data) {

                let firstName = c.adminName.firstName;
                let lastName = c.adminName.lastName;
                let address = c.adminAddress;
                let contact = c.adminContact;
                let email = c.adminEmail;
                let username = c.user.userName;
                let password = c.user.password;
                let nic = c.adminNic;
                let id = c.adminId;

                let row = "<tr>"
                    + "<td>" + firstName + "</td>"
                    + "<td>" + lastName + "</td>"
                    + "<td>" + address + "</td>"
                    + "<td>" + contact + "</td>"
                    + "<td>" + email + "</td>"
                    + "<td>" + username + "</td>"
                    + "<td>" + password + "</td>"
                    + "<td>" + password + "</td>"
                    + "<td>" + nic + "</td>"
                    + "<td>" + id + "</td>"
                    + "</tr>";
                $("#adminTableBody").append(row);
            }
           /* bindRowClickEvents();
            clearTextFields();*/
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}