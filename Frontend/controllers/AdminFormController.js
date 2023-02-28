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

$("#deleteAdmin").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#adminId").val(), method: "delete", dataType: "json", success: function (resp) {
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
                let role = c.user.role;
                let userId = c.user.userId;

                let row = "<tr>" + "<td>" + firstName + "</td>" + "<td>" + lastName + "</td>" + "<td>" + address + "</td>" + "<td>" + contact + "</td>" + "<td>" + email + "</td>" + "<td>" + username + "</td>" + "<td>" + password + "</td>" + "<td>" + nic + "</td>" + "<td>" + id + "</td>" + "<td>" + role + "</td>" + "<td>" + userId + "</td>" + "</tr>";
                $("#adminTableBody").append(row);
            }
            bindRowClickEventsForAdminTable();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
    genarateAdminID();
}

function genarateAdminID() {
    $.ajax({
        url: baseURL + "?test=", success: function (res) {
            $('#adminId').val(res.data);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$("#updateAdmin").on('click', function () {

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let address = $("#adminAddress").val();
    let contact = $("#adminContact").val();
    let email = $("#adminEmail").val();
    let username = $("#userName").val();
    let password = $("#password").val();
    let nic = $("#adminNic").val();
    let id = $("#adminId").val();
    let role = $("#role").val();
    let userId = $("#userId").val();

    var adminObj = {
        adminName: {firstName: firstName, lastName: lastName},
        adminAddress: address,
        adminContact: contact,
        adminEmail: email,
        user: {username: username, password: password, role: role, userId: userId},
        adminNic: nic,
        adminId: id
    }

    $.ajax({
        url: baseURL + "update",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(adminObj),
        dataType: "json",
        success: function (res) {
            getAllAdmins();
            alert(res.message);
            clearTextFields();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

});


function bindRowClickEventsForAdminTable() {
    $("#adminTableBody>tr").on('click', function () {
        $("#firstName").val($(this).children(":eq(0)").text());
        $("#lastName").val($(this).children(":eq(1)").text());
        $("#adminAddress").val($(this).children(":eq(2)").text());
        $("#adminContact").val($(this).children(":eq(3)").text());
        $("#adminEmail").val($(this).children(":eq(4)").text());
        $("#userName").val($(this).children(":eq(5)").text());
        $("#password").val($(this).children(":eq(6)").text());
        $("#adminNic").val($(this).children(":eq(7)").text());
        $("#adminId").val($(this).children(":eq(8)").text());
        $("#role").val($(this).children(":eq(9)").text());
        $("#userId").val($(this).children(":eq(10)").text());
    });
}


$('#firstName,#lastName,#adminAddress,#adminContact,#adminEmail,#userName,#password,#adminNic,#adminId,#userId').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

validator('#firstName', /^[A-z]{3,30}$/, "Your input can't be validated", '#reg_id', '#lastName');
validator('#lastName', /^[A-z]{3,30}$/, "Your input can't be validated", '#f_name', '#adminAddress');
validator('#adminAddress', /^[A-z]{3,30}$/, "Your input can't be validated", '#l_name', '#adminContact');
validator('#adminContact', /^(07([1245678])|091)(-)[0-9]{7}$/, "Your input can't be validated", '#address_lbl', '#adminEmail');
validator('#adminEmail', /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Your input can't be validated", '#email_lbl', '#userName');
validator('#userName', /^[A-z]{3,30}$/, "Your input can't be validated", '#contact_lbl', '#password');
validator('#password', /^[0-9]{3,30}$/, "Your input can't be validated", '#userName_lbl', '#adminNic');
validator('#adminNic', /^[0-9]{12}$/, "Your input can't be validated", '#userId_lbl', '#adminId');
validator('#adminId', /^A00-00[0-9]{1,5}$/, "Your input can't be validated", '#password_lbl', '#userId');
validator('#userId', /^[0-9]{1,5}$/, "Your input can't be validated", '#nic_lbl', '#');