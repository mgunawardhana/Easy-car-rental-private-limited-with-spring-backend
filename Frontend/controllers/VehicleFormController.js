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
            getAllVehicle();
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}
function getAllVehicle() {
    $("#vehicleTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let vehicleId = c.vehicleId;
                let noOfPassengers = c.numberOfPassenger;
                let extraKmPrice = c.extraKmPer;
                let registrationNo = c.registrationNo;
                let Colour = c.vehicleColour;
                let daily_amount = c.vehiclePriceRate.dailyRate;
                let monthly_amount = c.vehiclePriceRate.monthlyRate;
                let Availability = c.vehicleAvailability;
                let brand = c.vehicleBrand;
                let transmission = c.transmissionType;
                let daily_km = c.freeMileage.dailyMileage;
                let monthly_km = c.freeMileage.monthlyMileage;
                let fuelType = c.fuelType;

                let damageFee = c.refundableDamagedFee;

                let vehicleType = c.vehicleType;

                let service_milage = null;

                let last_service = c.lastServiceMileage;



                let row = "<tr>"
                    + "<td>" + vehicleId + "</td>"
                    + "<td>" + noOfPassengers + "</td>"
                    + "<td>" + extraKmPrice + "</td>"
                    + "<td>" + registrationNo + "</td>"
                    + "<td>" + Colour + "</td>"
                    + "<td>" + daily_amount + "</td>"
                    + "<td>" + monthly_amount + "</td>"
                    + "<td>" + Availability + "</td>"
                    + "<td>" + brand + "</td>"
                    + "<td>" + transmission + "</td>"
                    + "<td>" + daily_km + "</td>"
                    + "<td>" + monthly_km + "</td>"
                    + "<td>" + fuelType + "</td>"
                    + "<td>" + damageFee + "</td>"
                    + "<td>" + vehicleType + "</td>"
                    + "<td>" + service_milage + "</td>"
                    + "<td>" + last_service + "</td>"
                    + "</tr>";

                $("#vehicleTableBody").append(row);
            }
            //
            // bindRowClickEventsForDriver();            // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}