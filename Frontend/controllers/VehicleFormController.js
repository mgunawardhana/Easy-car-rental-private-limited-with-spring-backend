let baseURL = "http://localhost:8080/Backend_war/vehicle/";




getAllVehicle();

$("#saveVehicle").on('click', function () {
    saveVehicle();
});

function saveVehicle() {
    let formData = $("#vehicleFormController").serialize();
    $.ajax({
        url: baseURL + "save_vehicle", method: "post", data: formData, dataType: "json", success: function (res) {
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}
function getAllVehicle() {

}