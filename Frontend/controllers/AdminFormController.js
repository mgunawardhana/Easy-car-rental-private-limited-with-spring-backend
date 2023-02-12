let baseURL = "http://localhost:8080/Backend_war/admin/";


$("#saveAdmin").on('click', function () {
    saveAdmin();
});


function saveAdmin() {
    let formData = $("#adminFormController").serialize();
    $.ajax({
        url: baseURL + "save_admin", method: "post", data: formData, dataType: "json", success: function (res) {
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
            getAllCustomers();
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
