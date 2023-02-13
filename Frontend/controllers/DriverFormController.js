let baseURL = "http://localhost:8080/Backend_war/driver/";

$("#saveDriver").on('click', function () {
    saveDriver();
});


function saveDriver() {
    let formData = $("#driverFormController").serialize();
    $.ajax({
        url: baseURL + "save_driver", method: "post", data: formData, dataType: "json", success: function (res) {
/*
            getAllAdmins();
*/
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}
